"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AlertCircle, Calendar, CheckCircle2, Clock, Mail, Phone, User } from "lucide-react";
import { MENU } from "@/lib/menu";
import { trackEvent, type TrackSource } from "@/lib/analytics";
import { readAttribution } from "@/lib/attribution";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm({
  defaultService,
  source = "book_page",
}: {
  defaultService?: string;
  source?: TrackSource;
}) {
  const formStartedAtRef = useRef(Date.now());
  const formStartTrackedRef = useRef(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Track the first interaction with the form (top-of-funnel signal).
  function markFormStarted() {
    if (formStartTrackedRef.current) return;
    formStartTrackedRef.current = true;
    trackEvent("quote_form_started", { source, service: defaultService });
  }

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [services, setServices] = useState<string[]>(defaultService ? [defaultService] : []);
  const [activeCat, setActiveCat] = useState(MENU[0].section);

  // Reset start timer on mount
  useEffect(() => {
    formStartedAtRef.current = Date.now();
  }, []);

  const dates = useMemo(() => {
    const out: { value: string; label: string }[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let d = new Date(today);
    while (out.length < 14) {
      if (d.getDay() !== 0) {
        const value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
        const diff = Math.round((d.getTime() - today.getTime()) / 86_400_000);
        const label =
          diff === 0
            ? `Today · ${d.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
            : diff === 1
              ? `Tomorrow · ${d.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
              : d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
        out.push({ value, label });
      }
      d = new Date(d.getTime() + 86_400_000);
    }
    return out;
  }, []);

  const times = useMemo(() => {
    const out: string[] = [];
    for (let h = 9; h < 19; h++) {
      for (const m of [0, 30]) {
        const hr12 = ((h + 11) % 12) + 1;
        const ampm = h < 12 ? "AM" : "PM";
        out.push(`${hr12}:${String(m).padStart(2, "0")} ${ampm}`);
      }
    }
    return out;
  }, []);

  function toggleService(name: string) {
    markFormStarted();
    setServices((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]));
    setFieldErrors((e) => ({ ...e, services: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    setFieldErrors({});

    // Pull silent attribution captured at first landing + the page they
    // submitted from. Survives full-page navigation via sessionStorage.
    const attribution = readAttribution() ?? {};
    const submittedFromPath =
      typeof window !== "undefined"
        ? window.location.pathname + (window.location.search || "")
        : undefined;
    const attributionPayload = {
      ...attribution,
      ...(submittedFromPath ? { submittedFromPath } : {}),
    };

    // Top-of-submit funnel event — include attribution so dashboards can
    // segment by source/medium/channel without a join.
    trackEvent("quote_form_submitted", {
      services_count: services.length,
      service_categories: services.slice(0, 5).join(", ").slice(0, 90) || "none",
    });

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          preferredDate: date,
          preferredTime: time,
          services,
          notes,
          website,
          formStartedAt: formStartedAtRef.current,
          attribution: attributionPayload,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        setErrorMsg(data.error ?? "Something went wrong. Please try again or call us at (281) 391-1411.");
        setStatus("error");
        trackEvent("quote_form_failed", {
          reason: data.error ? String(data.error).slice(0, 90) : `http_${res.status}`,
        });
        return;
      }

      setStatus("success");
      trackEvent("quote_form_succeeded", { services_count: services.length });
    } catch (err) {
      setErrorMsg("We couldn't reach the server. Please call (281) 391-1411 — we'll book you over the phone.");
      setStatus("error");
      trackEvent("quote_form_failed", {
        reason: err instanceof Error ? err.message.slice(0, 90) : "network_error",
      });
    }
  }

  if (status === "success") {
    return (
      <div className="px-4 py-12 text-center">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-sage-700">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="font-display text-3xl leading-tight text-charcoal">Request received.</h3>
        <p className="mx-auto mt-3 max-w-md text-stone-warm leading-7">
          Jenny or Tony will call you within <strong className="text-charcoal">5 minutes</strong> during open hours
          (9 AM – 7 PM, Mon–Sat). Keep your phone close.
        </p>
        <p className="mt-4 text-xs text-stone-warm">
          Need us sooner? Call <a className="text-gold-700 underline underline-offset-4" href="tel:+12813911411">(281) 391-1411</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={markFormStarted}
      className="space-y-6"
      noValidate
    >
      {errorMsg && (
        <div className="flex items-start gap-2 rounded-[4px] border border-red-300 bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p>{errorMsg}</p>
        </div>
      )}

      <Field label="Full Name" error={fieldErrors.fullName} required icon={<User size={14} />}>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          autoComplete="name"
          maxLength={100}
          placeholder="Jane Doe"
          className="field-control pl-10"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone" error={fieldErrors.phone} required icon={<Phone size={14} />}>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            maxLength={20}
            placeholder="(281) 555-0123"
            className="field-control pl-10"
          />
        </Field>
        <Field label="Email" error={fieldErrors.email} required icon={<Mail size={14} />}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            maxLength={254}
            placeholder="jane@example.com"
            className="field-control pl-10"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Preferred Date" error={fieldErrors.preferredDate} required icon={<Calendar size={14} />}>
          <select
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="field-control appearance-none pl-10"
          >
            <option value="">Select date…</option>
            {dates.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Time" error={fieldErrors.preferredTime} required icon={<Clock size={14} />}>
          <select
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            disabled={!date}
            className="field-control appearance-none pl-10"
          >
            <option value="">{date ? "Select time…" : "Pick a date first"}</option>
            {times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div>
        <label className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-warm">
          Services <span className="text-red-500">*</span>{" "}
          <span className="font-normal normal-case tracking-normal text-stone-warm/80">(select all that apply)</span>
        </label>

        <div className="mb-3 flex flex-wrap gap-2">
          {MENU.map((s) => (
            <button
              key={s.section}
              type="button"
              onClick={() => setActiveCat(s.section)}
              className={`rounded-[3px] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors ${
                activeCat === s.section
                  ? "bg-charcoal text-ivory"
                  : "border border-charcoal/15 bg-white/50 text-stone-warm hover:border-clay-500 hover:text-charcoal"
              }`}
            >
              {s.section}
            </button>
          ))}
        </div>

        <div className="max-h-64 overflow-y-auto rounded-[4px] border border-charcoal/10 bg-white/65 p-1.5">
          {MENU.filter((s) => s.section === activeCat).map((s) =>
            s.items.map((item) => {
              const checked = services.includes(item.name);
              return (
                <label
                  key={item.name}
                  className="flex cursor-pointer items-center gap-3 rounded-[3px] px-3 py-2.5 hover:bg-sage-50"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleService(item.name)}
                    className="h-4 w-4 accent-clay-700"
                  />
                  <span className="text-sm text-charcoal">{item.name}</span>
                </label>
              );
            })
          )}
        </div>

        {fieldErrors.services && (
          <p className="mt-2 text-xs text-red-700 flex items-center gap-1">
            <AlertCircle size={12} />
            {fieldErrors.services}
          </p>
        )}
        {services.length > 0 && (
          <p className="mt-2 text-xs text-stone-warm">
            {services.length} service{services.length > 1 ? "s" : ""} selected
          </p>
        )}
      </div>

      <Field label="Notes (optional)" error={fieldErrors.notes}>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          maxLength={1000}
          rows={3}
          placeholder="Inspiration photo? Special request? Tell us anything that will help."
          className="field-control"
        />
      </Field>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] opacity-0 pointer-events-none">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Request appointment"}
        </button>
        <p className="mt-3 text-[11px] text-stone-warm text-center">
          No payment required. We'll call you within 5 minutes during open hours to confirm.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  icon,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-warm">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && <span className="absolute left-3.5 top-3.5 text-stone-warm">{icon}</span>}
        {children}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-700 flex items-center gap-1">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { QuoteRequestSchema, formatPhone } from "@/lib/validation";
import { BUSINESS } from "@/lib/business";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_NOTES_LENGTH = 800;

// --------------------------------------------------------------------------
// Naive in-memory rate limit per Vercel instance.
// Good enough for a small business; upgrade to KV/Upstash if traffic grows.
// --------------------------------------------------------------------------
const HITS = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function ipFrom(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const list = (HITS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  list.push(now);
  HITS.set(ip, list);
  return list.length > MAX_PER_WINDOW;
}

// --------------------------------------------------------------------------
// Body parsing — accept JSON OR multipart/url-encoded form posts.
// --------------------------------------------------------------------------
async function parseBody(req: Request): Promise<Record<string, unknown>> {
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const json = await req.json();
    if (json && typeof json === "object") return json as Record<string, unknown>;
    return {};
  }
  const form = await req.formData();
  const data: Record<string, unknown> = {};
  for (const [key, value] of form.entries()) {
    if (typeof value === "string") {
      // Honor repeated keys (e.g. services[]) by collecting into an array
      if (key in data) {
        const prev = data[key];
        data[key] = Array.isArray(prev) ? [...prev, value] : [prev, value];
      } else {
        data[key] = value;
      }
    }
  }
  return data;
}

const pick = (obj: Record<string, unknown>, key: string) => {
  const v = obj[key];
  return typeof v === "string" ? v.trim() : "";
};

// --------------------------------------------------------------------------
// Spam keyword list — pitch spam, crypto/casino, link-bait, etc.
// Hits here cause silent 200 so bots don't learn the filter shape.
// --------------------------------------------------------------------------
const SPAM_KEYWORDS = [
  "crypto", "bitcoin", "ethereum", "nft",
  "casino", "poker", "gambling", "bet ",
  "viagra", "cialis", "pharmacy",
  "backlinks", "web traffic",
  "nigerian prince", "lottery winner", "congratulations you won",
  "click here now", "act now", "limited time",
  "work from home", "make money fast", "earn $$",
  // SEO / marketing pitch spam
  "seo strategies", "seo –", "seo -", "improve rankings",
  "boost your", "boost their", "online visibility",
  "digital marketing", "performance marketing", "social media marketing",
  "page of google", "first page of google",
  "send you a proposal", "send you a package", "package/proposal",
  "ppc/sem", "/sem", "/smo",
  "marketing work",
  "attract more visitors", "website traffic",
  "free of charge", "completely free",
  "looking forward to hearing",
];

const SELF_DOMAIN_PATTERNS = ["tjnailskaty", "tj nails", "tjnails.com"];

export async function POST(req: Request) {
  try {
    const ip = ipFrom(req);
    if (rateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: `Too many requests. Please call us at ${BUSINESS.phone}.` },
        { status: 429 }
      );
    }

    let raw: Record<string, unknown>;
    try {
      raw = await parseBody(req);
    } catch {
      return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
    }

    // ----------------------------------------------------------------------
    // 1. Honeypot checks — multiple trap fields bots commonly fill.
    //    Silent 200 so we don't tip off bot operators.
    // ----------------------------------------------------------------------
    const honeypotFields = ["website", "company_url", "fax", "address2"];
    for (const f of honeypotFields) {
      if (pick(raw, f)) return NextResponse.json({ ok: true });
    }

    // ----------------------------------------------------------------------
    // 2. Time-based validation handled inside zod (formStartedAt) below,
    //    but also accept `_ts` from generic forms for parity with other clients.
    // ----------------------------------------------------------------------
    const altTs = pick(raw, "_ts");
    if (altTs && !raw["formStartedAt"]) {
      const parsed = parseInt(altTs, 10);
      if (!Number.isNaN(parsed)) raw["formStartedAt"] = parsed;
    }

    // ----------------------------------------------------------------------
    // 3. Schema validation
    // ----------------------------------------------------------------------
    const parsed = QuoteRequestSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0] ?? "form");
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      return NextResponse.json(
        { ok: false, error: "Please fix the highlighted fields.", fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Bot timing — under 3 seconds is suspicious; reject quietly
    if (Date.now() - data.formStartedAt < 3000) {
      return NextResponse.json({ ok: true });
    }

    // ----------------------------------------------------------------------
    // 4. Content filtering — applied to notes (the only free-text field).
    // ----------------------------------------------------------------------
    const notes = (data.notes ?? "").trim();
    const lowerNotes = notes.toLowerCase();

    // 4a. URLs in notes — real customers don't paste links
    if (/(https?:\/\/|www\.)/i.test(notes)) {
      return NextResponse.json({ ok: true });
    }

    // 4b. Spam keyword hit
    if (SPAM_KEYWORDS.some((kw) => lowerNotes.includes(kw))) {
      return NextResponse.json({ ok: true });
    }

    // 4c. Self-domain mention (common in pitch spam)
    if (SELF_DOMAIN_PATTERNS.some((d) => lowerNotes.includes(d))) {
      return NextResponse.json({ ok: true });
    }

    // 4d. All-caps long message
    if (notes.length > 20) {
      const upper = (notes.match(/[A-Z]/g) || []).length;
      const letters = (notes.match(/[a-zA-Z]/g) || []).length;
      if (letters > 0 && upper / letters > 0.7) {
        return NextResponse.json({ ok: true });
      }
    }

    // 4e. Suspiciously long notes — real appointment notes are brief
    if (notes.length > MAX_NOTES_LENGTH) {
      return NextResponse.json({ ok: true });
    }

    // 4f. Non-ASCII heavy payload (foreign spam) — only check notes so
    //     accented customer names (José, Nguyễn, etc.) aren't blocked.
    if (notes.length > 0) {
      const nonAscii = (notes.match(/[^\x00-\x7F]/g) || []).length;
      if (nonAscii / notes.length > 0.3) {
        return NextResponse.json({ ok: true });
      }
    }

    // ----------------------------------------------------------------------
    // 5. Send via Resend (or dry-run)
    // ----------------------------------------------------------------------
    const apiKey = process.env.RESEND_API_KEY;
    const from =
      process.env.LEAD_FROM_EMAIL ??
      process.env.RESEND_FROM ??
      `${BUSINESS.name} <bookings@tjnailskaty.com>`;
    const to = process.env.LEAD_TO_EMAIL ?? process.env.RESEND_TO;
    const bccRaw = process.env.LEADS_BCC_EMAIL ?? process.env.RESEND_BCC;
    const bcc = bccRaw
      ? bccRaw.split(",").map((s) => s.trim()).filter(Boolean)
      : undefined;
    const replyToOverride = process.env.RESEND_REPLY_TO || undefined;
    const isProduction = process.env.NODE_ENV === "production";
    const isDryRun = process.env.LEAD_DRY_RUN === "true";

    const dateObj = new Date(`${data.preferredDate}T00:00:00`);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (!apiKey || !to) {
      const missing = [
        !apiKey ? "RESEND_API_KEY" : "",
        !to ? "LEAD_TO_EMAIL" : "",
      ].filter(Boolean);
      if (isProduction && !isDryRun && missing.length > 0) {
        console.error("Resend env not configured:", missing.join(", "));
        return NextResponse.json(
          {
            ok: false,
            error: `We're temporarily unable to email — please call ${BUSINESS.phone} and Jenny will book you in person.`,
          },
          { status: 500 }
        );
      }
      return NextResponse.json({
        ok: true,
        mode: "dry-run",
        message:
          missing.length > 0
            ? `Dry run only. Missing ${missing.join(" and ")}.`
            : "Dry run enabled. Email not sent.",
      });
    }

    const resend = new Resend(apiKey);

    const html = renderEmail({
      fullName: data.fullName,
      phone: formatPhone(data.phone),
      email: data.email,
      preferredDate: formattedDate,
      preferredTime: data.preferredTime,
      services: data.services,
      notes,
      ip,
    });

    const text = renderText({
      fullName: data.fullName,
      phone: formatPhone(data.phone),
      email: data.email,
      preferredDate: formattedDate,
      preferredTime: data.preferredTime,
      services: data.services,
      notes,
    });

    const { error } = await resend.emails.send({
      from,
      to,
      bcc,
      replyTo: replyToOverride ?? data.email,
      subject: `New appointment request — ${data.fullName} · ${formattedDate} ${data.preferredTime}`,
      html,
      text,
      headers: { "X-Entity-Ref-ID": `tjnails-${Date.now()}` },
    });

    if (error) {
      console.error("Resend error:", error);
      const msg =
        process.env.NODE_ENV === "development"
          ? `Resend error: ${error.message || "Unknown Resend error"}`
          : `Email failed to send. Please call ${BUSINESS.phone} — we'll book you in 30 seconds.`;
      return NextResponse.json({ ok: false, error: msg }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unhandled /api/quote error:", err);
    return NextResponse.json(
      { ok: false, error: `Unexpected error. Please call ${BUSINESS.phone}.` },
      { status: 500 }
    );
  }
}

function renderText(d: {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  services: string[];
  notes: string;
}) {
  return [
    `New appointment request from the website — call back within 5 minutes.`,
    ``,
    `Name:    ${d.fullName}`,
    `Phone:   ${d.phone}`,
    `Email:   ${d.email}`,
    ``,
    `When:    ${d.preferredDate} at ${d.preferredTime}`,
    ``,
    `Services:`,
    ...d.services.map((s) => `  • ${s}`),
    ``,
    d.notes ? `Notes: ${d.notes}` : `Notes: (none)`,
    ``,
    `— ${BUSINESS.name} site`,
  ].join("\n");
}

function renderEmail(d: {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  services: string[];
  notes: string;
  ip: string;
}) {
  const safe = (s: string) =>
    s.replace(
      /[<>&"']/g,
      (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }[c]!)
    );
  const phoneTel = d.phone.replace(/\D/g, "");
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" />
<title>New appointment request</title></head>
<body style="margin:0;background:#FAF8F3;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;color:#1A1A1A;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <div style="text-align:center;margin-bottom:24px;">
      <p style="font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:#A88A3F;margin:0 0 8px;">T&amp;J Nails · Katy, TX</p>
      <h1 style="font-family:Georgia,serif;font-size:28px;line-height:1.15;margin:0;color:#1A1A1A;">New appointment request</h1>
      <p style="margin:12px 0 0;color:#6B6258;font-size:14px;">Call this customer within 5 minutes during open hours.</p>
    </div>

    <div style="background:#fff;border:1px solid #E8DCC4;padding:24px;">
      <table cellpadding="0" cellspacing="0" style="width:100%;font-size:15px;">
        <tr><td style="padding:6px 0;color:#6B6258;width:90px;">Name</td><td style="padding:6px 0;font-weight:600;">${safe(d.fullName)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B6258;">Phone</td><td style="padding:6px 0;"><a href="tel:${phoneTel}" style="color:#A88A3F;text-decoration:none;font-weight:600;">${safe(d.phone)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#6B6258;">Email</td><td style="padding:6px 0;"><a href="mailto:${safe(d.email)}" style="color:#A88A3F;text-decoration:none;">${safe(d.email)}</a></td></tr>
      </table>

      <hr style="border:none;border-top:1px solid #E8DCC4;margin:18px 0;" />

      <p style="margin:0 0 4px;color:#6B6258;font-size:11px;letter-spacing:.2em;text-transform:uppercase;">Requested time</p>
      <p style="margin:0;font-size:18px;font-weight:600;">${safe(d.preferredDate)}</p>
      <p style="margin:0;font-size:18px;color:#A88A3F;">${safe(d.preferredTime)}</p>

      <hr style="border:none;border-top:1px solid #E8DCC4;margin:18px 0;" />

      <p style="margin:0 0 8px;color:#6B6258;font-size:11px;letter-spacing:.2em;text-transform:uppercase;">Services requested</p>
      <ul style="margin:0;padding-left:18px;font-size:15px;line-height:1.6;">
        ${d.services.map((s) => `<li>${safe(s)}</li>`).join("")}
      </ul>

      ${
        d.notes
          ? `<hr style="border:none;border-top:1px solid #E8DCC4;margin:18px 0;" />
      <p style="margin:0 0 6px;color:#6B6258;font-size:11px;letter-spacing:.2em;text-transform:uppercase;">Customer notes</p>
      <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${safe(d.notes)}</p>`
          : ""
      }
    </div>

    <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;">
      <a href="tel:${phoneTel}" style="background:#1A1A1A;color:#FAF8F3;padding:14px 22px;text-decoration:none;font-size:12px;letter-spacing:.25em;text-transform:uppercase;font-weight:600;display:inline-block;">Call ${safe(d.phone)}</a>
    </div>

    <p style="margin:24px 0 0;color:#A8A09A;font-size:11px;text-align:center;">Submitted from tjnailskaty.com · IP ${safe(d.ip)}</p>
  </div>
</body></html>`;
}

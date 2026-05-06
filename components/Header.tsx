"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarDays, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Menu & Pricing", href: "/menu" },
  { label: "Guides", href: "/articles" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

const NAV_DESKTOP = [
  { label: "Services", href: "/services" },
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + escape-key close while drawer is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl">
        <div className="container-x flex h-[64px] items-center justify-between gap-3 lg:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2 -ml-1 px-1" aria-label="T&J Nails — Home">
            <span className="font-display text-[26px] leading-none text-charcoal lg:text-[30px]">
              T<span className="text-clay-700">&amp;</span>J
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-warm sm:inline">
              Nails Katy
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-warm lg:flex">
            {NAV_DESKTOP.map((n) => {
              const active = pathname === n.href || (n.href !== "/" && pathname.startsWith(n.href));
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`transition-colors hover:text-charcoal ${active ? "text-charcoal" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="hidden min-h-11 items-center gap-2 rounded-[3px] border border-charcoal/15 bg-white/40 px-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal transition-all hover:border-clay-500 hover:bg-white hover:text-clay-700 sm:inline-flex"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone size={13} className="text-clay-700" />
              <span className="hidden md:inline">{BUSINESS.phone}</span>
              <span className="md:hidden">Call</span>
            </a>
            <Link
              href="/book"
              className="inline-flex min-h-11 items-center gap-2 rounded-[3px] bg-charcoal px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-clay-700"
            >
              <CalendarDays size={13} />
              Book
            </Link>
            {/* Mobile hamburger — 44x44 tap target */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-charcoal/15 bg-white/40 text-charcoal transition-colors hover:border-clay-500 hover:text-clay-700 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer + backdrop (rendered outside header so it's not clipped) */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}

function MobileDrawer({ open, onClose, pathname }: { open: boolean; onClose: () => void; pathname: string }) {
  return (
    <div
      id="mobile-drawer"
      className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close navigation"
        tabIndex={open ? 0 : -1}
        className={`absolute inset-0 bg-charcoal/55 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute right-0 top-0 flex h-[100dvh] w-[88vw] max-w-[380px] flex-col bg-ivory shadow-[0_30px_80px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <Link href="/" onClick={onClose} className="font-display text-2xl leading-none text-charcoal">
            T<span className="text-clay-700">&amp;</span>J Nails
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-charcoal/15 text-charcoal transition-colors hover:border-clay-500 hover:text-clay-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4">
          <ul className="grid">
            {NAV.map((n) => {
              const active = pathname === n.href || (n.href !== "/" && pathname.startsWith(n.href));
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-[4px] px-3 py-4 font-display text-xl tracking-tight transition-colors ${
                      active ? "bg-cream text-clay-700" : "text-charcoal hover:bg-cream/70 active:bg-cream"
                    }`}
                  >
                    <span>{n.label}</span>
                    <span aria-hidden className="text-clay-500">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer info + CTA */}
        <div className="border-t border-charcoal/10 bg-cream/40 px-5 py-5">
          <div className="grid gap-3 text-sm text-stone-warm">
            <div className="flex gap-3">
              <Clock size={14} className="mt-1 shrink-0 text-clay-700" />
              <span>Mon–Sat · 9 AM – 7 PM</span>
            </div>
            <div className="flex gap-3">
              <MapPin size={14} className="mt-1 shrink-0 text-clay-700" />
              <span>{BUSINESS.address.street}, Katy, TX 77493</span>
            </div>
          </div>

          <div className="mt-5 grid gap-2.5">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              onClick={onClose}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] border border-charcoal/20 bg-white px-4 text-sm font-semibold tracking-[0.1em] text-charcoal transition-colors hover:border-clay-500 hover:text-clay-700"
            >
              <Phone size={15} className="text-clay-700" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/book"
              onClick={onClose}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] bg-charcoal px-4 text-sm font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-clay-700"
            >
              <CalendarDays size={15} />
              Request appointment
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}

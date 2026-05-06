import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory sm:tracking-[0.2em] sm:text-[11px]">
      <div className="container-x flex items-center justify-center gap-2 py-2.5 text-center sm:gap-3">
        <span className="hidden xs:inline">25+ years in Katy</span>
        <span className="xs:hidden">25+ yrs in Katy</span>
        <span aria-hidden className="text-gold-300/70">·</span>
        <Link href="/book" className="underline decoration-gold-400/60 underline-offset-4 hover:text-gold-200">
          Request appointment
        </Link>
        <span aria-hidden className="hidden text-gold-300/70 sm:inline">·</span>
        <a href={`tel:${BUSINESS.phoneTel}`} className="hidden hover:text-gold-200 sm:inline">
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}

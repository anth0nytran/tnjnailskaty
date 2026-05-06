import { Clock, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function NapBlock({ tone = "light" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  const text = isDark ? "text-ivory" : "text-charcoal";
  const muted = isDark ? "text-stone-quiet" : "text-stone-warm";
  const accent = isDark ? "text-gold-300" : "text-clay-700";
  const link = isDark ? "hover:text-gold-200" : "hover:text-clay-700";

  return (
    <div className="grid gap-8 sm:grid-cols-3">
      <div>
        <div className={`flex items-center gap-2 ${accent}`}>
          <MapPin size={14} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Visit</span>
        </div>
        <a
          href={BUSINESS.mapLink}
          target="_blank"
          rel="noreferrer noopener"
          className={`mt-2 block font-display text-xl leading-snug ${text} ${link} transition-colors`}
        >
          {BUSINESS.address.street}
          <br />
          {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
        </a>
        <p className={`mt-2 text-xs ${muted}`}>5 min from I-10 (Pin Oak Rd exit)</p>
      </div>

      <div>
        <div className={`flex items-center gap-2 ${accent}`}>
          <Phone size={14} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Call</span>
        </div>
        <a href={`tel:${BUSINESS.phoneTel}`} className={`mt-2 block font-display text-xl ${text} ${link} transition-colors`}>
          {BUSINESS.phone}
        </a>
        <p className={`mt-2 text-xs ${muted}`}>We answer 9 AM - 7 PM, Mon-Sat</p>
      </div>

      <div>
        <div className={`flex items-center gap-2 ${accent}`}>
          <Clock size={14} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Hours</span>
        </div>
        <div className={`mt-2 text-base leading-7 ${text}`}>
          <p>
            Mon-Sat <span className={muted}>9 AM - 7 PM</span>
          </p>
          <p>
            Sunday <span className={muted}>Closed</span>
          </p>
        </div>
      </div>
    </div>
  );
}

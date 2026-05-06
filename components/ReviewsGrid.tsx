import { Quote, Star } from "lucide-react";
import { REVIEWS } from "@/lib/reviews";

export default function ReviewsGrid({ count = 6, tone = "light" }: { count?: number; tone?: "light" | "dark" }) {
  const items = REVIEWS.slice(0, count);
  const isDark = tone === "dark";

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r) => (
        <article
          key={r.name}
          className={`rounded-[6px] p-6 transition-all duration-300 ${
            isDark
              ? "border border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-gold-500/35"
              : "border border-charcoal/10 bg-white/60 hover:-translate-y-0.5 hover:border-clay-500/35 hover:bg-white"
          }`}
        >
          <div className="mb-4 flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} className="fill-gold-500 text-gold-500" />
            ))}
            <Quote size={16} className={`ml-auto ${isDark ? "text-gold-300" : "text-clay-700"}`} />
          </div>
          <p className={`text-[15px] font-light leading-7 ${isDark ? "text-stone-quiet" : "text-charcoal/85"}`}>{r.quote}</p>
          <div className={`mt-5 border-t pt-4 ${isDark ? "border-white/10" : "border-charcoal/10"}`}>
            <p className={`font-display text-base ${isDark ? "text-ivory" : "text-charcoal"}`}>{r.name}</p>
            <p className={`text-[10px] uppercase tracking-[0.18em] ${isDark ? "text-stone-quiet/70" : "text-stone-warm"}`}>
              {r.meta?.badges?.includes("Local Guide") ? "Google Local Guide" : "Verified Google Review"}
              {r.meta?.when ? ` - ${r.meta.when}` : ""}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

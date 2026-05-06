"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQAccordion({
  faqs,
  tone = "light",
}: {
  faqs: { q: string; a: string }[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const isDark = tone === "dark";

  return (
    <div className={`divide-y ${isDark ? "divide-white/10" : "divide-charcoal/10"}`}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-start justify-between gap-6 rounded-[3px] text-left transition-colors ${
                isDark ? "text-ivory" : "text-charcoal"
              }`}
            >
              <h3 className="pr-4 font-display text-lg leading-snug sm:text-xl">{f.q}</h3>
              <span className={`mt-1 shrink-0 ${isDark ? "text-gold-300" : "text-clay-700"}`}>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {isOpen && (
              <p
                className={`mt-3 max-w-prose text-base font-light leading-7 ${
                  isDark ? "text-stone-quiet" : "text-stone-warm"
                }`}
              >
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

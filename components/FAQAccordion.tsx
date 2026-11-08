"use client";

import { useId, useState } from "react";
import { Plus, Minus } from "lucide-react";

// WAI-ARIA accordion pattern: heading > button (aria-expanded + aria-controls),
// panel labelled by its button. Answers are always in the HTML so crawlers and
// AI engines can read them; `hidden` only collapses them visually.
export default function FAQAccordion({
  faqs,
  tone = "light",
}: {
  faqs: { q: string; a: string }[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const isDark = tone === "dark";
  const baseId = useId();

  return (
    <div className={`divide-y ${isDark ? "divide-white/10" : "divide-charcoal/10"}`}>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={i} className="py-5 sm:py-6">
            <h3 className="font-display text-lg leading-snug sm:text-xl">
              <button
                type="button"
                id={buttonId}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`flex w-full items-start justify-between gap-6 rounded-[3px] text-left transition-colors ${
                  isDark ? "text-ivory" : "text-charcoal"
                }`}
              >
                <span className="pr-4">{f.q}</span>
                <span aria-hidden="true" className={`mt-1 shrink-0 ${isDark ? "text-gold-300" : "text-clay-700"}`}>
                  {isOpen ? <Minus aria-hidden="true" size={18} /> : <Plus aria-hidden="true" size={18} />}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p
                className={`mt-3 max-w-prose text-base font-light leading-7 ${
                  isDark ? "text-stone-quiet" : "text-stone-warm"
                }`}
              >
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

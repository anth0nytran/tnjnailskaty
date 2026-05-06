import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string; current?: boolean };

export default function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-stone-quiet" : "text-stone-warm";
  const hover = tone === "dark" ? "hover:text-gold-200" : "hover:text-clay-700";
  return (
    <nav aria-label="Breadcrumb" className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${text}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} className="opacity-50" />}
            {c.current ? (
              <span aria-current="page" className={tone === "dark" ? "text-ivory" : "text-charcoal"}>
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className={`${hover} transition-colors`}>
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

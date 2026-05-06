import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Gift, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { MENU, formatPrice } from "@/lib/menu";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Menu & Pricing — T&J Nails | Katy, TX 77493",
  description:
    "Full service menu and pricing for T&J Nails in Katy, TX. Manicures from $20, pedicures from $30, dip powder full sets from $50, gel from $35.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <Script
        id="ld-menu"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
          ])
        )}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Menu", path: "/menu", current: true }]} />
        </div>

        <div className="container-x grid gap-10 pb-20 pt-6 lg:grid-cols-12 lg:items-end lg:pb-24">
          <div className="lg:col-span-8">
            <p className="eyebrow">Menu &amp; Pricing</p>
            <h1 className="mt-5 page-title">The full menu, with honest pricing.</h1>
            <p className="mt-7 max-w-2xl lede">
              Pricing below is for standard length and shape. Long nails, designed shapes (almond, coffin, stiletto),
              and custom art are quoted at your visit — always before we start.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Link href="/book" className="btn-primary">Request appointment</Link>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn-secondary">
              <Phone size={14} className="text-clay-700" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {MENU.map((section) => (
            <div key={section.slug} id={section.slug} className="break-inside-avoid">
              <h2 className="border-b border-charcoal/15 pb-3 font-display text-3xl leading-tight text-charcoal">
                {section.section}
              </h2>
              {section.blurb && (
                <p className="mt-5 max-w-prose text-[15px] font-light leading-7 text-stone-warm">{section.blurb}</p>
              )}

              <div className="mt-7">
                {section.pricingColumns ? (
                  <>
                    <div className="grid grid-cols-[1fr_auto_auto] gap-6 border-b border-charcoal/10 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-warm">
                      <span></span>
                      <span className="text-right text-clay-700">{section.pricingColumns[0]}</span>
                      <span className="text-right text-clay-700">{section.pricingColumns[1]}</span>
                    </div>
                    <ul className="divide-y divide-charcoal/10">
                      {section.items.map((item) => (
                        <li key={item.name} className="grid grid-cols-[1fr_auto_auto] items-baseline gap-6 py-3.5">
                          <span className="text-[15px] text-charcoal">{item.name}</span>
                          <span className="text-right tabular-nums text-charcoal">
                            {item.fullSet ? formatPrice(item.fullSet) : "—"}
                          </span>
                          <span className="text-right tabular-nums text-charcoal">
                            {item.refill ? formatPrice(item.refill) : "—"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <ul className="divide-y divide-charcoal/10">
                    {section.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-6 py-3.5">
                        <span className="text-[15px] text-charcoal">{item.name}</span>
                        <span className="text-right tabular-nums text-charcoal">
                          {item.price !== undefined && formatPrice(item.price)}
                          {item.priceStartingAt !== undefined && `from ${formatPrice(item.priceStartingAt)}`}
                          {item.priceExtra !== undefined && `+${formatPrice(item.priceExtra)}`}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.extras && section.extras.length > 0 && (
                  <ul className="mt-3 divide-y divide-charcoal/10 border-t border-charcoal/10 pt-3">
                    {section.extras.map((extra) => (
                      <li key={extra.name} className="flex items-baseline justify-between gap-6 py-3">
                        <span className="text-[14px] italic text-stone-warm">{extra.name}</span>
                        <span className="text-right text-[14px] tabular-nums text-stone-warm">
                          {extra.price !== undefined && formatPrice(extra.price)}
                          {extra.priceStartingAt !== undefined && `from ${formatPrice(extra.priceStartingAt)}`}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.notes && section.notes.length > 0 && (
                  <ul className="mt-5 space-y-1.5 border-t border-charcoal/10 pt-4">
                    {section.notes.map((n) => (
                      <li key={n} className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-warm">
                        · {n}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad grid gap-6 lg:grid-cols-3">
          <div className="card-soft p-7">
            <Gift size={20} className="text-clay-700" />
            <h3 className="mt-5 font-display text-xl text-charcoal">Gift certificates</h3>
            <p className="mt-2.5 text-sm leading-6 text-stone-warm">
              Available in any amount, in-store. Easy last-minute gift.
            </p>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="mt-5 inline-flex items-center gap-2 border-b border-clay-500 pb-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal hover:text-clay-700"
            >
              Call to purchase <ArrowRight size={12} />
            </a>
          </div>
          <div className="card-soft p-7">
            <h3 className="font-display text-xl text-charcoal">Pricing notes</h3>
            <ul className="mt-3.5 space-y-2 text-sm font-light leading-6 text-stone-warm">
              <li>· Long nails and designed shapes add a small fee, quoted at your visit.</li>
              <li>· Custom nail art is priced by complexity. Bring an inspiration photo.</li>
              <li>· Cash, credit, debit, and Apple Pay accepted.</li>
            </ul>
          </div>
          <div className="card-soft p-7">
            <h3 className="font-display text-xl text-charcoal">Hours &amp; location</h3>
            <div className="mt-3.5 space-y-1 text-sm leading-6 text-stone-warm">
              <p>Monday – Saturday · 9 AM – 7 PM</p>
              <p>Sunday · Closed</p>
              <p className="pt-2.5 text-charcoal">{BUSINESS.address.street}</p>
              <p>{BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

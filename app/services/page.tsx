import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Nail Services in Katy, TX — T&J Nails",
  description:
    "All nail services at T&J Nails in Katy, TX — manicures, pedicures, dip powder, gel, shellac, acrylic, custom nail art, kids pedicures, and waxing. Family-owned for 25+ years.",
  path: "/services",
});

export default function ServicesHub() {
  const grouped = SERVICES.reduce<Record<string, typeof SERVICES>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});

  return (
    <>
      <Script
        id="ld-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ])
        )}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services", current: true }]} />
        </div>
        <div className="container-x pb-20 pt-6 lg:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-5 page-title">Every service we offer.</h1>
            <p className="mt-7 max-w-2xl lede">
              Eleven services, all performed by techs with 10+ years of practice. Click any one for the price, what&apos;s
              included, the steps involved, and the questions our clients ask.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad space-y-16">
          {Object.entries(grouped).map(([category, list]) => (
            <div key={category}>
              <h2 className="mb-8 border-b border-charcoal/10 pb-3 font-display text-3xl leading-tight text-charcoal">
                {category}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group card-soft flex flex-col gap-4 p-7"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl leading-tight text-charcoal">{s.name}</h3>
                      <span className="shrink-0 text-xs text-clay-700">From {s.priceDisplay}</span>
                    </div>
                    <p className="text-[15px] font-light leading-7 text-stone-warm">{s.intro}</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-warm">
                        {s.duration}
                      </span>
                      <span className="text-link">
                        See details <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

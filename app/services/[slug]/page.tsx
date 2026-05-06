import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Check, Phone } from "lucide-react";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { getArticlesForService } from "@/lib/articles";
import { breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getServiceBySlug(slug);
  if (!s) notFound();

  const related = s.relatedSlugs.map(getServiceBySlug).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const guides = getArticlesForService(s.slug);

  return (
    <>
      <Script
        id={`ld-${s.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd([
          serviceSchema({
            name: s.name,
            description: s.metaDescription,
            slug: s.slug,
            priceFrom: s.priceFrom,
          }),
          faqSchema(s.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.name, path: `/services/${s.slug}` },
          ]),
        ])}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: s.name, path: `/services/${s.slug}`, current: true },
            ]}
          />
        </div>

        <div className="container-x grid gap-10 pb-20 pt-6 lg:grid-cols-3 lg:gap-12 lg:pb-24">
          <div className="lg:col-span-2">
            <p className="eyebrow">{s.category} · {s.duration} · From {s.priceDisplay}</p>
            <h1 className="mt-5 page-title">{s.h1}</h1>
            <p className="mt-7 max-w-prose lede">{s.intro}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">Request appointment</Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-secondary">
                <Phone size={14} className="text-clay-700" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>

          <aside className="card-soft self-start p-7">
            <p className="font-display text-xl text-charcoal">Quick details</p>
            <dl className="mt-5 space-y-3.5 text-sm">
              <Row term="Starting at" value={s.priceDisplay} bold />
              <Row term="Duration" value={s.duration} />
              <Row term="Category" value={s.category} />
              <Row term="Walk-ins" value="Welcome" />
            </dl>
            <Link href="/menu" className="mt-6 text-link">
              See the full menu <ArrowRight size={12} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-3 lg:gap-14">
          <div className="space-y-6 lg:col-span-2">
            {s.description.map((p, i) => (
              <p key={i} className="text-[17px] font-light leading-8 text-charcoal/85">
                {p}
              </p>
            ))}

            <div className="grid gap-10 pt-4 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl text-charcoal">Who it&apos;s for</h2>
                <ul className="mt-5 space-y-3">
                  {s.whoFor.map((w) => (
                    <li key={w} className="flex gap-3 text-stone-warm leading-6">
                      <Check size={16} className="mt-1 shrink-0 text-clay-700" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl text-charcoal">What&apos;s included</h2>
                <ul className="mt-5 space-y-3">
                  {s.whatsIncluded.map((w) => (
                    <li key={w} className="flex gap-3 text-stone-warm leading-6">
                      <Check size={16} className="mt-1 shrink-0 text-clay-700" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="card-soft self-start p-7">
            <p className="font-display text-xl text-charcoal">The process</p>
            <ol className="mt-5 space-y-5 text-sm">
              {s.process.map((step, i) => (
                <li key={step.title}>
                  <p className="font-display text-base text-charcoal">
                    <span className="mr-2 text-clay-700">0{i + 1}</span>
                    {step.title}
                  </p>
                  <p className="mt-1.5 leading-6 text-stone-warm">{step.detail}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow">Aftercare</p>
            <h2 className="mt-5 section-title">Make it last.</h2>
            <ul className="mt-7 space-y-3.5">
              {s.aftercare.map((a) => (
                <li key={a} className="flex gap-3 text-stone-warm leading-7">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-clay-500" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-5 section-title">Asked &amp; answered.</h2>
            <div className="mt-5">
              <FAQAccordion faqs={s.faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad">
          <div className="mb-12 text-center">
            <p className="eyebrow">Often booked with</p>
            <h2 className="mt-4 section-title">You may also like.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="group card-soft p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight text-charcoal">{r.name}</h3>
                  <span className="shrink-0 text-xs text-clay-700">From {r.priceDisplay}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-warm">{r.intro}</p>
                <span className="mt-5 text-link">
                  See details <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="bg-sage-50">
          <div className="container-x section-pad">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow">Reading room</p>
              <h2 className="mt-5 section-title">More on {s.shortName.toLowerCase()}.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/articles/${guide.slug}`} className="group card-soft p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-clay-700">
                    {guide.category} · {guide.readingTime}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-charcoal">{guide.shortTitle}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-stone-warm">{guide.description}</p>
                  <span className="mt-6 text-link">
                    Read <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="eyebrow">Reserve your visit</p>
              <h2 className="mt-4 section-title">Book your {s.shortName.toLowerCase()}.</h2>
              <p className="mt-5 text-stone-warm">We call back within 5 minutes during open hours.</p>
            </div>
            <div className="panel p-6 sm:p-9 lg:p-10">
              <QuoteForm defaultService={s.name} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ term, value, bold = false }: { term: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between gap-4 border-b border-charcoal/10 pb-3 last:border-0">
      <dt className="text-stone-warm">{term}</dt>
      <dd className={bold ? "font-semibold text-charcoal" : "text-charcoal"}>{value}</dd>
    </div>
  );
}

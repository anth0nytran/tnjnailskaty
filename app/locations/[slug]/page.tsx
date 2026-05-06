import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Phone } from "lucide-react";
import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import NapBlock from "@/components/NapBlock";
import QuoteForm from "@/components/QuoteForm";
import ReviewsGrid from "@/components/ReviewsGrid";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocationBySlug(slug);
  if (!l) return {};
  return buildMetadata({
    title: l.metaTitle,
    description: l.metaDescription,
    path: `/locations/${l.slug}`,
  });
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLocationBySlug(slug);
  if (!l) notFound();

  return (
    <>
      <Script
        id={`ld-loc-${l.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd([
          faqSchema(l.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Area", path: "/locations" },
            { name: l.fullName, path: `/locations/${l.slug}` },
          ]),
        ])}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Service Area", path: "/locations" },
              { name: l.fullName, path: `/locations/${l.slug}`, current: true },
            ]}
          />
        </div>

        <div className="container-x pb-20 pt-6 lg:pb-24">
          <p className="eyebrow">Serving · {l.fullName}</p>
          <h1 className="mt-5 page-title">{l.h1}</h1>
          <p className="mt-7 max-w-2xl lede">{l.intro}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/book" className="btn-primary">Request appointment</Link>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn-secondary">
              <Phone size={14} className="text-clay-700" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-3 lg:gap-14">
          <div className="space-y-5 lg:col-span-2">
            {l.body.map((p, i) => (
              <p key={i} className="text-[17px] font-light leading-8 text-charcoal/85">
                {p}
              </p>
            ))}
          </div>

          <aside className="card-soft self-start p-7">
            <p className="font-display text-xl text-charcoal">Driving directions</p>
            <p className="mt-3 text-sm leading-7 text-stone-warm">{l.drivingDirections}</p>

            <p className="mt-6 font-display text-base text-charcoal">Travel time</p>
            <p className="mt-1 text-sm leading-6 text-stone-warm">{l.travelTime}</p>

            <p className="mt-6 font-display text-base text-charcoal">Nearby</p>
            <ul className="mt-1 space-y-1 text-sm text-stone-warm">
              {l.landmarks.map((lm) => (
                <li key={lm} className="leading-6">· {lm}</li>
              ))}
            </ul>

            <p className="mt-6 font-display text-base text-charcoal">ZIP codes served</p>
            <p className="mt-1 text-sm text-stone-warm">{l.zips.join(" · ")}</p>
          </aside>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="container-x py-14">
          <NapBlock tone="dark" />
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad">
          <div className="max-w-3xl">
            <p className="eyebrow">Local questions</p>
            <h2 className="mt-5 section-title">For {l.name} clients.</h2>
          </div>
          <div className="mt-8 max-w-3xl">
            <FAQAccordion faqs={l.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad">
          <div className="mb-12">
            <p className="eyebrow">From {l.name} clients</p>
            <h2 className="mt-4 section-title">What our neighbors say.</h2>
          </div>
          <ReviewsGrid count={6} tone="light" />
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="eyebrow">Reserve your visit</p>
              <h2 className="mt-4 section-title">Book from {l.name}.</h2>
              <p className="mt-5 text-stone-warm">We call back within 5 minutes during open hours.</p>
            </div>
            <div className="panel p-6 sm:p-9 lg:p-10">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

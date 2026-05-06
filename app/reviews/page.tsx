import Link from "next/link";
import Script from "next/script";
import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { REVIEWS } from "@/lib/reviews";
import { breadcrumbSchema, jsonLd, reviewsSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewsGrid from "@/components/ReviewsGrid";

export const metadata = buildMetadata({
  title: "Reviews — T&J Nails Katy, TX | 4.9★ on Google",
  description:
    "What clients say about T&J Nails in Katy, TX. 4.9 stars on Google with hundreds of reviews. Honest words from real Katy locals — many clients of 20+ years.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <Script
        id="ld-reviews"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd([
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]),
          ...reviewsSchema(REVIEWS),
        ])}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews", current: true }]} />
        </div>
        <div className="container-x pb-20 pt-6 lg:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow">From real clients</p>
            <h1 className="mt-5 page-title">
              {BUSINESS.rating.value} stars,
              <span className="block text-clay-700">earned one visit at a time.</span>
            </h1>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-stone-warm">
                <strong className="text-charcoal">{BUSINESS.rating.value}</strong> · {BUSINESS.rating.count}+ Google reviews
              </p>
            </div>
            <a
              href={BUSINESS.socials.google}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary mt-9"
            >
              Read more on Google
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad">
          <ReviewsGrid count={REVIEWS.length} tone="light" />
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad text-center">
          <h2 className="section-title">Like what you&apos;re reading?</h2>
          <p className="mt-5 text-stone-warm">Book your first visit. We&apos;ll do the rest.</p>
          <Link href="/book" className="btn-primary mt-8 inline-flex">Request appointment</Link>
        </div>
      </section>
    </>
  );
}

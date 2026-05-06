import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "About T&J Nails | Family-Owned Nail Salon in Katy, TX Since 2001",
  description:
    "T&J Nails is owned by Jenny and Tony — the same nail technicians who do your nails every visit. Family-owned in Katy, TX since 2001.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Script
        id="ld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about", current: true }]} />
        </div>

        <div className="container-x grid items-center gap-12 pb-20 pt-6 lg:grid-cols-12 lg:gap-14 lg:pb-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Owners · Jenny &amp; Tony</p>
            <h1 className="mt-5 page-title">25 years on the same Katy block.</h1>
            <p className="mt-7 max-w-prose lede">
              We opened T&amp;J Nails in 2001. We&apos;re still on the floor every day. When you walk in, one of us —
              or one of our long-time techs — is doing your nails. No handing off, no running between five chairs.
            </p>
          </div>

          <div className="lg:col-span-5">
            <Image
              src="/images/owners.jpg"
              alt="Jenny and Tony, owners of T&J Nails in Katy, TX"
              width={680}
              height={820}
              priority
              className="aspect-[4/5] w-full rounded-[6px] object-cover shadow-[0_24px_70px_rgba(26,26,26,0.12)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-3 lg:gap-14">
          <div className="space-y-6 text-[17px] font-light leading-8 text-charcoal/85 lg:col-span-2">
            <h2 className="font-display text-3xl leading-tight text-charcoal">Why we do this</h2>
            <p>
              When we started, Katy was a smaller town. Our first clients were neighbors, then their daughters,
              then their granddaughters. Some of those original clients still come every two weeks — we know their
              kids&apos; names and the chair they like.
            </p>
            <p>
              We never wanted to be a chain. We could&apos;ve expanded years ago. Instead we kept everything we make
              going back into one shop — better tools, better products, better training, more time per client.
            </p>
            <p>
              You&apos;ll feel the difference in the small things: cuticles done by hand and not rushed, a real soak
              before every pedicure, polish lines that follow the curve of your nail, and removal that respects the
              nail underneath.
            </p>

            <h2 className="pt-4 font-display text-3xl leading-tight text-charcoal">What we believe</h2>
            <ul className="space-y-3 list-none">
              <li><strong className="text-charcoal">Craft over speed.</strong> A rushed nail is a re-do.</li>
              <li><strong className="text-charcoal">Sterile by default.</strong> Tools autoclaved, liners single-use, every time.</li>
              <li><strong className="text-charcoal">Honesty about the work.</strong> If a service won&apos;t suit your nails, we&apos;ll say so.</li>
              <li><strong className="text-charcoal">Family hospitality.</strong> Cold drink, comfortable chair, real conversation.</li>
            </ul>
          </div>

          <aside className="card-soft self-start p-7">
            <p className="font-display text-xl text-charcoal">By the numbers</p>
            <dl className="mt-5 space-y-3.5 text-sm">
              <Row term="Years in Katy" value={`${BUSINESS.yearsInBusiness}+`} />
              <Row term="Founded" value={String(BUSINESS.foundedYear)} />
              <Row term="Owners on the floor" value="2 of 2" />
              <Row term="Google rating" value={`${BUSINESS.rating.value} ★`} />
              <Row term="Reviews" value={`${BUSINESS.rating.count}+`} />
              <Row term="Languages" value="English · Vietnamese" />
            </dl>
            <Link href="/book" className="btn-primary mt-7 w-full">Book with the owners</Link>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="mt-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal hover:text-clay-700"
            >
              <Phone size={12} className="text-clay-700" /> {BUSINESS.phone}
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-charcoal/10 pb-3 last:border-0">
      <dt className="text-stone-warm">{term}</dt>
      <dd className="font-semibold text-charcoal">{value}</dd>
    </div>
  );
}

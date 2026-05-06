import Link from "next/link";
import Script from "next/script";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SITE_FAQS } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata = buildMetadata({
  title: "FAQ — T&J Nails Katy, TX | Hours, Pricing, Services & More",
  description:
    "Frequently asked questions about T&J Nails in Katy, TX. Hours, pricing, walk-ins, sanitation, gift certificates, kids services, and more.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <Script
        id="ld-faq"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd([
          faqSchema(SITE_FAQS),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]),
        ])}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq", current: true }]} />
        </div>

        <div className="container-x grid gap-12 pb-20 pt-6 lg:grid-cols-3 lg:gap-14 lg:pb-24">
          <div>
            <p className="eyebrow">Common questions</p>
            <h1 className="mt-5 page-title">Asked &amp; answered.</h1>
            <p className="mt-7 lede">
              The questions our clients ask most. Anything else? Call{" "}
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-clay-700 underline underline-offset-4 hover:text-charcoal">
                {BUSINESS.phone}
              </a>
              .
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/book" className="btn-primary">Request appointment</Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-secondary">
                <Phone size={14} className="text-clay-700" />
                Call us
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FAQAccordion faqs={SITE_FAQS} />
          </div>
        </div>
      </section>
    </>
  );
}

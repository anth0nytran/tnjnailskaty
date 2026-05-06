import Script from "next/script";
import { CalendarDays, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import NapBlock from "@/components/NapBlock";
import QuoteForm from "@/components/QuoteForm";

export const metadata = buildMetadata({
  title: "Book an Appointment - T&J Nails Katy, TX | We Call Back in 5 Minutes",
  description:
    "Request an appointment at T&J Nails in Katy, TX. Tell us when, and Jenny or Tony will call you back within 5 minutes during open hours to confirm.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <Script
        id="ld-book"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Book", path: "/book" }]))}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Book", path: "/book", current: true }]} />
        </div>

        <div className="container-x grid gap-10 pb-20 pt-6 lg:grid-cols-12 lg:items-end lg:gap-12 lg:pb-24">
          <div className="lg:col-span-8">
            <p className="eyebrow">Book</p>
            <h1 className="mt-5 page-title">Request your visit.</h1>
            <p className="mt-7 max-w-2xl lede">
              Tell us your preferred day, time, and services. Jenny or Tony will call back{" "}
              <strong className="font-semibold text-charcoal">within 5 minutes</strong> during open hours to confirm
              the time and walk through pricing.
            </p>
          </div>
          <div className="lg:col-span-4">
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn-secondary w-full">
              <Phone size={14} className="text-clay-700" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="panel p-6 sm:p-9 lg:col-span-3 lg:p-10">
            <QuoteForm />
          </div>

          <aside className="space-y-5 lg:col-span-2">
            <div className="card-soft p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-sage-100 text-sage-700">
                <CalendarDays size={18} />
              </div>
              <h2 className="mt-6 font-display text-2xl text-charcoal">How booking works</h2>
              <ol className="mt-5 space-y-4 text-sm leading-7 text-stone-warm">
                <Step n={1}>You send a request with your preferred date, time, and services.</Step>
                <Step n={2}>Jenny or Tony calls you in under 5 minutes during open hours.</Step>
                <Step n={3}>We confirm the time and pricing — you&apos;re booked.</Step>
              </ol>
              <p className="mt-6 text-xs leading-6 text-stone-warm">
                We do callbacks instead of self-serve booking so we never double-book a tech and never surprise you
                on price.
              </p>
            </div>

            <div className="card-soft p-7">
              <h2 className="font-display text-2xl text-charcoal">Prefer to call?</h2>
              <a href={`tel:${BUSINESS.phoneTel}`} className="mt-3 inline-flex items-center gap-2 font-display text-3xl text-charcoal hover:text-clay-700">
                <Phone size={20} className="text-clay-700" />
                {BUSINESS.phone}
              </a>
              <p className="mt-3 text-sm leading-6 text-stone-warm">9 AM – 7 PM, Monday – Saturday.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="container-x py-14">
          <NapBlock tone="dark" />
        </div>
      </section>
    </>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 font-display text-lg text-clay-700">0{n}</span>
      <span>{children}</span>
    </li>
  );
}

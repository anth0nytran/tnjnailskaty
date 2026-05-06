import Script from "next/script";
import { Clock, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";

export const metadata = buildMetadata({
  title: "Contact T&J Nails | (281) 391-1411 - Katy, TX 77493",
  description:
    "Call T&J Nails in Katy, TX at (281) 391-1411. Located at 5304 E 5th St Ste 105. Open Mon-Sat 9 AM - 7 PM. Get directions and book your appointment.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Script
        id="ld-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]))}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact", current: true }]} />
        </div>

        <div className="container-x grid gap-12 pb-20 pt-6 lg:grid-cols-2 lg:gap-14 lg:pb-24">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-5 page-title">We love a phone call.</h1>
            <p className="mt-7 max-w-prose lede">
              The fastest way to book is a call — Jenny or Tony picks up between 9 and 7, Monday through Saturday.
              If you&apos;d rather not, send a request and we&apos;ll call you back in under 5 minutes.
            </p>

            <div className="mt-12 grid gap-5">
              <ContactRow
                icon={<Phone size={16} />}
                label="Phone"
                primary={
                  <a href={`tel:${BUSINESS.phoneTel}`} className="transition-colors hover:text-clay-700">
                    {BUSINESS.phone}
                  </a>
                }
                sub="Mon–Sat, 9 AM – 7 PM"
              />
              <ContactRow
                icon={<MapPin size={16} />}
                label="Address"
                primary={
                  <a href={BUSINESS.mapLink} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 transition-colors hover:text-clay-700">
                    {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
                    <ExternalLink size={12} />
                  </a>
                }
                sub="Old Towne Katy · 5 min from I-10 (Pin Oak Rd) · Free parking"
              />
              <ContactRow
                icon={<Clock size={16} />}
                label="Hours"
                primary={<span>Monday – Saturday, 9 AM – 7 PM</span>}
                sub="Closed Sunday"
              />
              <ContactRow
                icon={<Mail size={16} />}
                label="Email"
                primary={
                  <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-clay-700">
                    {BUSINESS.email}
                  </a>
                }
                sub="Replies within one business day"
              />
            </div>
          </div>

          <div className="panel p-6 sm:p-9 lg:p-10">
            <h2 className="font-display text-3xl leading-tight text-charcoal">Send a request</h2>
            <p className="mt-2.5 text-sm leading-6 text-stone-warm">We&apos;ll call you back within 5 minutes during open hours.</p>
            <div className="mt-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow">Where to find us</p>
            <h2 className="mt-5 section-title">We&apos;re in Old Towne Katy.</h2>
            <p className="mt-6 lede">
              Look for the gold sign — Suite 105, on the left side of the strip as you face it. Free lot parking
              out front. If you&apos;re coming from I-10, exit Pin Oak Rd and head north past the train tracks.
            </p>
            <a href={BUSINESS.mapLink} target="_blank" rel="noreferrer noopener" className="mt-8 btn-secondary">
              <Navigation size={14} />
              Open directions
            </a>
          </div>
          <div className="panel overflow-hidden p-2">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(`${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postal}`)}&output=embed`}
              width="100%"
              height="460"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map showing ${BUSINESS.name} in Katy, TX`}
              className="block rounded-[4px] border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, label, primary, sub }: { icon: React.ReactNode; label: string; primary: React.ReactNode; sub: string }) {
  return (
    <div className="flex gap-4 border-b border-charcoal/10 pb-5 last:border-0">
      <span className="mt-1 shrink-0 text-clay-700">{icon}</span>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-warm">{label}</p>
        <p className="mt-1.5 font-display text-xl leading-snug text-charcoal">{primary}</p>
        <p className="mt-1 text-xs text-stone-warm">{sub}</p>
      </div>
    </div>
  );
}

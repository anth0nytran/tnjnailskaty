import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CalendarDays, MapPin, Navigation, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { SITE_FAQS } from "@/lib/faqs";
import { ARTICLES } from "@/lib/articles";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import FAQAccordion from "@/components/FAQAccordion";
import ReviewsGrid from "@/components/ReviewsGrid";
import NapBlock from "@/components/NapBlock";
import QuoteForm from "@/components/QuoteForm";

export const metadata = buildMetadata({
  title: "Best Nail Salon in Katy, TX 77493 - T&J Nails | 25+ Years Family-Owned",
  description:
    "Top-rated nail salon in Katy, TX. Manicures, pedicures, dip powder, gel, acrylic, and custom nail art. Family-owned for over 25 years. 4.9 stars on Google. Book online — owners call back within 5 minutes.",
  path: "/",
});

export default function HomePage() {
  const featured = SERVICES.filter((s) =>
    ["dip-powder-nails", "gel-manicure", "pedicure", "manicure", "acrylic-nails", "nail-art"].includes(s.slug)
  );

  return (
    <>
      <Script
        id="ld-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd([
          faqSchema(SITE_FAQS.slice(0, 8)),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ])}
      />

      <section className="page-hero">
        <div className="container-x grid items-center gap-12 pb-20 pt-14 lg:grid-cols-12 lg:gap-14 lg:pb-28 lg:pt-20">
          <div className="lg:col-span-7">
            <p className="eyebrow">Katy, TX 77493 · Family-owned since 2001</p>
            <h1 className="mt-6 page-title">
              Katy&apos;s family-owned
              <span className="block text-clay-700">nail salon since 2001.</span>
            </h1>
            <p className="mt-7 max-w-2xl lede">
              Manicures, pedicures, dip powder, gel, acrylic, shellac, custom nail art, and waxing — done by the
              same hands that have done them in Old Towne Katy for over two decades.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/book" className="btn-primary">
                <CalendarDays size={15} />
                Request appointment
              </Link>
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-secondary">
                <Phone size={15} className="text-clay-700" />
                {BUSINESS.phone}
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
              <Stat top="4.9★" label="Google rating" />
              <Stat top="25+" label="Years in Katy" />
              <Stat top="5 min" label="Callback during hours" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <Image
                src="/images/gallery-2.jpeg"
                alt="Custom manicure done at T&J Nails in Katy, TX"
                width={720}
                height={860}
                priority
                className="aspect-[4/5] w-full rounded-[6px] object-cover shadow-[0_28px_80px_rgba(26,26,26,0.16)]"
              />
              <div className="absolute -bottom-6 left-5 right-5 rounded-[6px] border border-charcoal/10 bg-ivory/95 p-5 shadow-[0_20px_50px_rgba(26,26,26,0.14)] backdrop-blur sm:left-8 sm:right-8">
                <p className="font-display text-xl leading-tight text-charcoal">Same owners. Same chair. Same careful hands.</p>
                <p className="mt-1.5 text-sm text-stone-warm">Open Mon–Sat, 9 AM – 7 PM.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-ivory">
        <div className="container-x grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <Trust icon={<Sparkles size={16} />} label="Owner-led" sub="Jenny and Tony work the floor every day" />
          <Trust icon={<ShieldCheck size={16} />} label="Sterilized tools" sub="Autoclaved between every client" />
          <Trust icon={<CalendarDays size={16} />} label="Easy booking" sub="We call you back in under 5 minutes" />
          <Trust icon={<MapPin size={16} />} label="Old Towne Katy" sub="5304 E 5th St — free lot parking" />
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Services</p>
            <h2 className="mt-5 section-title">From a quick polish change to a full custom set.</h2>
            <p className="mx-auto mt-6 max-w-2xl lede">
              Click any service for the price, the time it takes, what&apos;s included, and the questions our clients
              ask most.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group card-soft p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-clay-700">{s.category}</span>
                  <span className="font-display text-sm text-charcoal/70">{priceLabel(s.priceDisplay)}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl leading-tight text-charcoal">{s.name}</h3>
                <p className="mt-3 text-[15px] font-light leading-7 text-stone-warm">{s.intro}</p>
                <span className="mt-6 text-link">
                  See details <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="/services" className="text-link">
              All services <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <Image
              src="/images/owners.jpg"
              alt="Jenny and Tony, owners of T&J Nails in Katy, TX"
              width={720}
              height={900}
              className="aspect-[4/5] w-full rounded-[6px] object-cover shadow-[0_24px_70px_rgba(26,26,26,0.12)]"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow">Family-owned</p>
            <h2 className="mt-5 section-title">We answer the phone. We do your nails.</h2>
            <div className="mt-7 space-y-5 text-[17px] font-light leading-8 text-stone-warm">
              <p>
                Jenny and Tony opened the shop in 2001 and never stopped working the floor. The team is small and
                steady — most of our techs have been with us a decade or more — so the person doing your nails knows
                you, and gets better at it every visit.
              </p>
              <p>
                Our regulars stay because the work is consistent. Same shape, same prep, same clean tools, every
                time. No surprise pricing. No rushed cuticles.
              </p>
            </div>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <Bullet title="We ask before we start">
                Length, shape, color, anything that bothered you about a previous set — we want to know.
              </Bullet>
              <Bullet title="Healthy nail standards">
                Tools autoclave-sterilized between every client. Removal by soak — never scraped or peeled.
              </Bullet>
            </div>
            <Link href="/about" className="mt-9 text-link">
              Meet Jenny &amp; Tony <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {ARTICLES.length > 0 && (
        <section className="bg-sage-50">
          <div className="container-x section-pad">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="eyebrow">Reading room</p>
                <h2 className="mt-5 section-title">Honest answers before you book.</h2>
              </div>
              <p className="lede max-w-2xl lg:justify-self-end">
                Short guides written by the owners — what to expect from a service, how long it lasts, and how to
                pick the right one for your nails.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {ARTICLES.slice(0, 3).map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group card-soft p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-clay-700">
                    {article.category} · {article.readingTime}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-charcoal">{article.shortTitle}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-stone-warm">{article.description}</p>
                  <span className="mt-6 text-link">
                    Read <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/articles" className="text-link">
                All guides <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-cream">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Recent work</p>
            <h2 className="mt-5 section-title">Real clients. Real Katy.</h2>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-ivory md:odd:mt-10">
                <Image
                  src={`/images/gallery-${i}.jpeg`}
                  alt={`T&J Nails Katy nail design ${i}`}
                  width={500}
                  height={625}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory">
        <div className="container-x section-pad">
          <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-on-dark">Reviews</p>
              <h2 className="mt-5 section-title text-ivory">{BUSINESS.rating.value} stars, earned one visit at a time.</h2>
              <p className="mt-5 max-w-xl text-lg font-light leading-8 text-stone-quiet">
                {BUSINESS.rating.count}+ Google reviews. Many of our clients have been with us for over a decade.
              </p>
            </div>
            <a href={BUSINESS.socials.google} target="_blank" rel="noreferrer noopener" className="btn-secondary-dark">
              <Star size={14} className="fill-gold-300 text-gold-300" />
              Read on Google
            </a>
          </div>
          <ReviewsGrid count={6} tone="dark" />
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Find us</p>
            <h2 className="mt-5 section-title">In the heart of Old Towne Katy.</h2>
            <p className="mx-auto mt-6 max-w-2xl lede">
              <strong className="font-semibold text-charcoal">5304 E 5th St Ste 105, Katy, TX 77493</strong> — five
              minutes north of I-10 at Pin Oak Road. Free lot parking out front.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <div className="panel h-full overflow-hidden p-2">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(`${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postal}`)}&output=embed`}
                width="100%"
                height="620"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Google Map showing ${BUSINESS.name} at ${BUSINESS.address.full}`}
                className="block h-[380px] w-full rounded-[4px] border-0 sm:h-[520px] lg:h-full lg:min-h-[620px]"
              />
            </div>

            <div className="panel flex flex-col justify-between p-7 sm:p-9">
              <div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Info label="Address" value={BUSINESS.address.full} />
                  <Info label="Hours" value="Mon–Sat · 9 AM – 7 PM" />
                  <Info label="Phone" value={BUSINESS.phone} />
                  <Info label="Parking" value="Free lot out front" />
                </div>

                <div className="mt-10">
                  <h3 className="font-display text-2xl text-charcoal">Nearby Katy neighborhoods</h3>
                  <div className="mt-5 grid gap-2.5">
                    {LOCATIONS.map((l) => (
                      <Link
                        key={l.slug}
                        href={`/locations/${l.slug}`}
                        className="group flex items-center justify-between rounded-[4px] border border-charcoal/10 bg-ivory/70 px-4 py-3 transition-colors hover:border-clay-500/40 hover:bg-white"
                      >
                        <span className="font-display text-lg text-charcoal">{l.name}</span>
                        <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-warm group-hover:text-clay-700">
                          {firstTravelTime(l.travelTime)} <ArrowRight size={12} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <a href={BUSINESS.mapLink} target="_blank" rel="noreferrer noopener" className="mt-10 btn-secondary w-full">
                <Navigation size={14} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sage-50">
        <div className="container-x section-pad grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-5 section-title">Asked &amp; answered.</h2>
            <p className="mt-6 text-stone-warm font-light leading-7">
              Anything else? Call{" "}
              <a href={`tel:${BUSINESS.phoneTel}`} className="text-clay-700 underline underline-offset-4 hover:text-charcoal">
                {BUSINESS.phone}
              </a>{" "}
              — we answer 9 to 7, Monday through Saturday.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FAQAccordion faqs={SITE_FAQS.slice(0, 8)} />
          </div>
        </div>
      </section>

      <section id="book" className="bg-cream">
        <div className="container-x section-pad">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="eyebrow">Book</p>
              <h2 className="mt-4 section-title">Request your appointment.</h2>
              <p className="mt-5 text-stone-warm">
                Tell us when. We call back <span className="font-semibold text-charcoal">within 5 minutes</span>{" "}
                during open hours.
              </p>
            </div>
            <div className="panel p-6 sm:p-9 lg:p-10">
              <QuoteForm />
            </div>
          </div>
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

function Stat({ top, label }: { top: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl leading-none text-charcoal">{top}</p>
      <p className="mt-2.5 text-[10px] uppercase tracking-[0.22em] text-stone-warm">{label}</p>
    </div>
  );
}

function Trust({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] bg-sage-50 text-clay-700">
        {icon}
      </span>
      <div>
        <p className="font-display text-lg leading-tight text-charcoal">{label}</p>
        <p className="mt-1 text-sm leading-6 text-stone-warm">{sub}</p>
      </div>
    </div>
  );
}

function Bullet({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l border-clay-500/40 pl-5">
      <p className="font-display text-xl text-charcoal">{title}</p>
      <p className="mt-1.5 text-sm leading-6 text-stone-warm">{children}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-clay-700">{label}</p>
      <p className="mt-2 font-display text-xl leading-snug text-charcoal">{value}</p>
    </div>
  );
}

function priceLabel(priceDisplay: string) {
  return priceDisplay.toLowerCase().startsWith("from") ? priceDisplay : `From ${priceDisplay}`;
}

function firstTravelTime(travelTime: string) {
  const cleaned = travelTime.replace(/Â·/g, "·");
  return cleaned.split("·")[0]?.trim() ?? cleaned;
}

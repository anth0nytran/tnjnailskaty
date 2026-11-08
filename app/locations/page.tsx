import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { LOCATIONS } from "@/lib/locations";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Nail Salon Near Katy, Fulshear & Cinco Ranch | T&J Nails",
  description:
    "Drive times and directions to T&J Nails from Katy (77493, 77494, 77449), Cinco Ranch, Fulshear, and Elyson. 5 min off I-10 at Pin Oak, free lot parking, walk-ins welcome.",
  path: "/locations",
});

export default function LocationsHub() {
  return (
    <>
      <script
        id="ld-locations"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations" },
          ])
        )}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Area", path: "/locations", current: true }]} />
        </div>
        <div className="container-x pb-20 pt-6 lg:pb-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Service area</p>
            <h1 className="mt-5 page-title">Easy to reach from anywhere in Katy.</h1>
            <p className="mt-7 max-w-2xl lede">
              We&apos;re in Old Towne Katy, five minutes from I-10. Most clients drive 5 to 20 minutes — directions
              and travel time below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l) => (
            <Link key={l.slug} href={`/locations/${l.slug}`} className="group card-soft flex flex-col gap-4 p-7">
              <div className="flex items-center gap-2 text-clay-700">
                <MapPin aria-hidden="true" size={14} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  {firstLeg(l.travelTime)}
                </span>
              </div>
              <h3 className="font-display text-2xl leading-tight text-charcoal">{l.fullName}</h3>
              <p className="text-sm font-light leading-7 text-stone-warm">{l.intro}</p>
              <span className="mt-auto text-link">
                See directions <ArrowRight aria-hidden="true" size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function firstLeg(travelTime: string) {
  const cleaned = travelTime.replace(/Â·/g, "·");
  return cleaned.split("·")[0]?.trim() ?? cleaned;
}

// Each location is its own indexable URL targeting hyperlocal searches.

export type Location = {
  slug: string;
  name: string;
  fullName: string;
  zips: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  body: string[];
  drivingDirections: string;
  travelTime: string;
  landmarks: string[];
  faqs: { q: string; a: string }[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "katy-tx",
    name: "Katy",
    fullName: "Katy, TX",
    zips: ["77449", "77450", "77491", "77492", "77493", "77494"],
    metaTitle: "Best Nail Salon in Katy, TX | T&J Nails — 25+ Years Family-Owned",
    metaDescription:
      "Top-rated nail salon in Katy, TX. Manicures, pedicures, dip powder, gel, acrylic, and custom nail art. 4.9★ on Google. (281) 391-1411.",
    h1: "Nail Salon in Katy, TX",
    intro:
      "T&J Nails has been Katy's neighborhood nail studio for over 25 years. We're a five-minute drive from Old Towne Katy, walk-ins welcome, appointments preferred.",
    body: [
      "Katy has changed a lot since we opened — Cinco Ranch, Cane Island, Elyson, Falcon Ranch — but our shop has stayed in the same family. Jenny and Tony, both nail technicians, run the floor every day.",
      "Most of our regulars are women who got tired of impersonal chain salons. We remember your shape, your color, and the chair you like. We're not the cheapest in Katy and we're not the most expensive — we sit in the spot where the work is consistent and the same person can do your nails for the next ten years.",
      "Our most-requested services in Katy are dip powder ($50 full set), the Royal Pedicure ($65), and a shellac collagen manicure ($40). We do a lot of brides, a lot of moms, and a lot of mom-and-daughter visits — we have side-by-side chairs.",
    ],
    drivingDirections:
      "From I-10, take Exit 743 (Pin Oak Rd) and head north. Cross over the train tracks, turn right onto E 5th Street. We're in the strip on the left, Suite 105.",
    travelTime: "5 min from Old Towne Katy · 10 min from Cinco Ranch · 12 min from Cane Island",
    landmarks: ["Katy ISD Education Support Complex", "Mary Jo Peckham Park", "Katy Mills Mall (15 min)", "MKT Trail trailhead"],
    faqs: [
      { q: "What's the best nail salon in Katy?", a: "T&J Nails has been Katy's family-owned nail studio for over 25 years, with 4.9 stars on Google and clients who've been coming for two decades." },
      { q: "Do you take walk-ins?", a: "Yes, walk-ins are welcome, but appointments are preferred — we get fully booked on weekends." },
      { q: "How far are you from Cinco Ranch?", a: "About 10 minutes — head north on Pin Oak from I-10, then right on E 5th." },
    ],
  },
  {
    slug: "cinco-ranch",
    name: "Cinco Ranch",
    fullName: "Cinco Ranch, Katy, TX",
    zips: ["77450", "77494"],
    metaTitle: "Nail Salon Near Cinco Ranch | T&J Nails — Katy, TX",
    metaDescription:
      "Cinco Ranch's go-to nail salon — 10 minutes from any Cinco Ranch home. Manicures, pedicures, dip powder, gel. Family-owned for 25+ years.",
    h1: "Nail Salon Near Cinco Ranch",
    intro:
      "T&J Nails is the family-owned nail studio Cinco Ranch residents have been driving to for two decades. About 10 minutes up Pin Oak — well worth the short trip.",
    body: [
      "We see Cinco Ranch clients in waves: Saturday mornings before lunches, Friday afternoons before date night, and the steady weekday flow of moms after school drop-off.",
      "Most of them tried us once on a friend's recommendation and stayed because we remember them. Jenny does most of the dip powder and brides. Tony specializes in the spa pedicures and the men's services.",
    ],
    drivingDirections:
      "Take Cinco Ranch Blvd to Pin Oak Rd, head north over I-10. Cross the train tracks at Old Towne Katy, turn right on E 5th Street. About 10 minutes door to door.",
    travelTime: "10 minutes from anywhere in Cinco Ranch",
    landmarks: ["Cinco Ranch HEB", "Cinco Ranch High School", "LaCenterra at Cinco Ranch (10 min)"],
    faqs: [
      { q: "Is there a good nail salon near Cinco Ranch?", a: "T&J Nails in Old Towne Katy is the most-recommended option for Cinco Ranch residents — about 10 minutes north on Pin Oak Rd." },
      { q: "Do you do gel manicures?", a: "Yes — gel and shellac manicures from $35. Same-day appointments available." },
    ],
  },
  {
    slug: "fulshear",
    name: "Fulshear",
    fullName: "Fulshear, TX",
    zips: ["77441"],
    metaTitle: "Nail Salon Near Fulshear | T&J Nails — Katy, TX",
    metaDescription:
      "Family-owned nail salon worth the drive from Fulshear. 15–20 minutes via FM-1463. Manicures, pedicures, dip, gel, acrylic. (281) 391-1411.",
    h1: "Nail Salon Near Fulshear",
    intro:
      "T&J Nails is a 15–20 minute drive from Fulshear — and the reason most Fulshear residents take that drive is that we remember them, their shape, and their color from one visit to the next.",
    body: [
      "Fulshear has grown faster than its salon options. Our Fulshear regulars come up FM-1463 once every 2–3 weeks for dip powder or a deluxe pedicure and are done in under 90 minutes.",
      "Book ahead on Saturdays — we sell out the morning slots fastest.",
    ],
    drivingDirections:
      "From Fulshear, take FM-1463 north to I-10. Exit Pin Oak Rd, head north into Old Towne Katy. Right on E 5th Street.",
    travelTime: "15–20 minutes from Fulshear",
    landmarks: ["Cross Creek Ranch (FM-1463)", "Fulshear High School", "Texas Heritage Pkwy"],
    faqs: [
      { q: "Are there good nail salons near Fulshear?", a: "T&J Nails in Old Towne Katy is the most popular option for Fulshear residents — 15–20 minutes via FM-1463 and worth the drive for the consistency." },
    ],
  },
  {
    slug: "elyson",
    name: "Elyson",
    fullName: "Elyson, Katy, TX",
    zips: ["77493"],
    metaTitle: "Nail Salon Near Elyson | T&J Nails — Katy, TX",
    metaDescription:
      "Elyson's closest premium nail salon. T&J Nails — 10 minutes from Elyson. Family-owned, 25+ years, 4.9★ on Google.",
    h1: "Nail Salon Near Elyson",
    intro: "T&J Nails is about 10 minutes from anywhere in Elyson — straight down Katy-Hockley Cut Off into Old Towne Katy.",
    body: [
      "Elyson is our newest neighborhood and we love seeing the buildout — but the nail salon mix is still catching up. We're the closest premium option, and our Elyson clients tell us the drive is worth it.",
      "Our Saturday mornings are popular — book ahead.",
    ],
    drivingDirections:
      "Take Katy-Hockley Cut Off Rd south to FM-529, then continue south to E 5th St. Right at the strip — Suite 105.",
    travelTime: "10 minutes from Elyson",
    landmarks: ["Elyson Cafe", "Elyson House", "Tompkins High School"],
    faqs: [
      { q: "What's the closest nail salon to Elyson?", a: "T&J Nails in Old Towne Katy — about 10 minutes south via Katy-Hockley Cut Off Rd." },
    ],
  },
  {
    slug: "katy-77493",
    name: "77493",
    fullName: "Katy, TX 77493",
    zips: ["77493"],
    metaTitle: "Nail Salon 77493 | T&J Nails — Old Towne Katy",
    metaDescription:
      "Nail salon in 77493. T&J Nails is in the heart of Old Towne Katy — 5304 E 5th St Ste 105. Manicures, pedicures, dip, gel, acrylic.",
    h1: "Nail Salon in 77493 (Old Towne Katy)",
    intro:
      "We're at the center of 77493 — Old Towne Katy, the historic district. Five minutes from the Katy ISD Education Support Complex, walking distance from the MKT Trail.",
    body: [
      "If you live in 77493, you're our nearest neighbor. Most of our long-term clients are 77493 residents who started coming because they walked past or got recommended by a neighbor.",
      "We see same-day for almost any service if you call before 5 PM.",
    ],
    drivingDirections: "Located on E 5th Street, between Pin Oak Rd and the MKT Trail. Suite 105.",
    travelTime: "5 minutes from anywhere in Old Towne Katy",
    landmarks: ["MKT Trail", "Mary Jo Peckham Park", "Katy ISD Education Support Complex"],
    faqs: [
      { q: "What's the best-rated nail salon in 77493?", a: "T&J Nails — 4.9 stars on Google with 25+ years of family ownership at 5304 E 5th St Ste 105." },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

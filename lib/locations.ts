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
  // Per-location unique content — neighborhood-specific micro-knowledge no
  // template can generate. Engineered for hyperlocal AI citation. Each
  // location's content is hand-written; identical structures, distinct facts.
  localContext?: {
    eyebrow: string;
    heading: string;
    lede: string;
    cards: { kicker: string; title: string; body: string }[];
  };
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
    localContext: {
      eyebrow: "Katy clients, in detail",
      heading: "What we know about Katy that we couldn't have known opening day in 2001.",
      lede:
        "Katy was a small ISD town when we opened — 14,000 students, two high schools, no Cane Island, no Elyson. Today KISD has 90,000+ students and 'Katy' means seven different feeling neighborhoods. Here's the lay of the land we've learned across 25 years of chairs.",
      cards: [
        {
          kicker: "Real demographic",
          title: "Two-income households, mom-and-daughter regulars",
          body:
            "Most of our standing appointments are working women in their 30s–60s with daughters who started coming around age 8 for kids' pedicures. The relationship is as much of the work as the work itself — we've watched daughters go from KISD elementary photos through Texas A&M graduations.",
        },
        {
          kicker: "Booking pattern",
          title: "The Katy week starts on Wednesday",
          body:
            "Friday evenings and Saturday mornings sell out by Thursday. Wednesday and Thursday daytime are wide open. If you can move your appointment to a Wednesday afternoon, you'll always get your preferred time, your preferred tech, and a longer chair without rushing.",
        },
        {
          kicker: "Old Towne advantage",
          title: "Free lot parking, no I-10 backup",
          body:
            "The 5304 E 5th St strip has its own lot. You're not fighting Katy Mills traffic on a Saturday; you're not parking three blocks away. Five minutes north of I-10/Pin Oak (Exit 743) — exit, two stoplights, parking. Most Katy clients are surprised the first time at how easy the trip is.",
        },
      ],
    },
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
    localContext: {
      eyebrow: "Cinco Ranch driving math",
      heading: "From any Cinco Ranch home, faster than the Cinco Ranch Blvd alternatives.",
      lede:
        "We've heard the math from hundreds of Cinco Ranch clients. Closer salons exist, sure — but the parking lot at LaCenterra runs 8–10 minutes alone on Saturdays. We're 10 minutes door-to-door from any Cinco Ranch zip — door open, no fight for a chair, parking out front.",
      cards: [
        {
          kicker: "Saturday morning",
          title: "Get on Pin Oak before 9:15 AM",
          body:
            "Cinco Ranch Blvd backs up at the I-10 entrance starting around 9:30 on Saturdays — wedding-day brides, brunch crowds, kids' sports. Leave by 9 AM and you're in our chair by 9:10. After 10 AM the same drive is 18 minutes and the lot is full.",
        },
        {
          kicker: "School-pickup window",
          title: "Tuesdays & Thursdays at 1 PM",
          body:
            "Most of our Cinco Ranch standing-appointment moms come Tuesday or Thursday at 1 — that's the pocket between Seven Lakes elementary release (2:30) and Cinco Ranch HS (3:45). Service done, you're parked at school in 25 minutes with time to spare.",
        },
        {
          kicker: "Wedding party deals",
          title: "Six chairs, side-by-side, 90 minutes",
          body:
            "We host 4–6 person bridal parties almost every Saturday. Cinco Ranch brides book us specifically because we can seat the entire party at once — no queueing, no rotating tech. Lock the date a month out; pricing is the same as individual bookings, no party fee.",
        },
      ],
    },
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
    localContext: {
      eyebrow: "Fulshear → T&J on FM-1463",
      heading: "Why Fulshear drives 20 minutes when there's a salon at every traffic light.",
      lede:
        "Fulshear has more strip-mall salons every quarter, but the techs rotate every six months. Twenty minutes up FM-1463 buys you a relationship: same hands, same chair, same chart of your shape and color. Our Fulshear regulars say the drive is the part that hasn't changed in five years.",
      cards: [
        {
          kicker: "FM-1463 reality",
          title: "Faster after 9:30 AM, slower after 3:30",
          body:
            "Morning Fulshear → Katy is mostly counter-flow — your 7:45 commute neighbors are heading the other way. Afternoon return is heavier. Plan your appointment between 10 AM and 2 PM and you'll be home before school release. Saturday morning is doable, but FM-1463 backs up after 10.",
        },
        {
          kicker: "Most-booked",
          title: "Dip + Royal Pedicure (~$115, 90 min)",
          body:
            "Three out of four Fulshear bookings combine these. It's the only nail trip that month for most clients, so the bundle makes sense — 90 minutes door to door, comes out around $115 with shellac top, lasts 3 weeks. We'll set it up side-by-side so the work runs in parallel.",
        },
        {
          kicker: "Cross Creek Ranch",
          title: "Between school and dinner is the clean window",
          body:
            "Cross Creek Ranch parents with kids at Tompkins HS or Adams JH have a clean window: 11 AM after morning routines, or 2 PM before pickup. You'll beat the FM-1463 afternoon return and still be home before practice runs start.",
        },
      ],
    },
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
    localContext: {
      eyebrow: "Elyson's salon gap",
      heading: "We're closer than the Cinco Ranch and Cypress options for most of Elyson.",
      lede:
        "Elyson has grown faster than its nail salon options — the buildout is still catching up. The closest premium salons are 15+ minutes south in Cinco Ranch or 20+ minutes east in Cypress. We're 10 minutes south on Katy-Hockley Cut Off — it's the shortest drive at this address.",
      cards: [
        {
          kicker: "Newer-build context",
          title: "We see Elyson move-ins on visit one",
          body:
            "Most Elyson clients we meet started here in their first six months in the neighborhood — they searched for a salon, found us on Google, and stayed because we remembered their shape and color on visit two. We've watched the section H buildout from the chair.",
        },
        {
          kicker: "Tompkins HS schedule",
          title: "Catch us between drop-off and pickup",
          body:
            "Tompkins HS releases at 4 PM. Most Elyson moms book at 9:30 AM (post-drop-off) or noon (lunch with the work-from-home schedule). The 1 PM weekday slot still has openings most weeks — uncommon for our shop, an Elyson advantage.",
        },
        {
          kicker: "Saturday morning",
          title: "9 AM is your golden hour",
          body:
            "Elyson clients booking Saturday at 9 AM beat the Cinco Ranch overflow on Pin Oak Rd. Same drive, no I-10 traffic to fight. By 10 AM the lot is full and the wait climbs to 20 minutes — book a 9 AM the week before to lock the chair.",
        },
      ],
    },
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
    localContext: {
      eyebrow: "Old Towne Katy walking distance",
      heading: "The only premium nail salon you can walk to from the MKT Trail.",
      lede:
        "If your zip is 77493, we're three blocks from the trailhead. Most of our oldest clients walked in on day one — literally walked, from the houses behind us — and never went anywhere else. Here's what's specifically true for 77493 residents.",
      cards: [
        {
          kicker: "Walk-up booking",
          title: "Same-day, almost always",
          body:
            "We hold Wednesday and Thursday afternoons for walk-ins because that's when the Old Towne neighbors stop by. If you live in 77493, call when you're walking out the door — we'll have a chair ready by the time you get here.",
        },
        {
          kicker: "Train tracks",
          title: "Yes, they still go through. No, they don't take 20 minutes.",
          body:
            "The Union Pacific tracks at Pin Oak run two trains a day during business hours, both before noon. They block traffic 4–6 minutes max. Plan around 11 AM and 5 PM if you're driving through, or just walk past them on E 5th from the historic district.",
        },
        {
          kicker: "MKT Trail connection",
          title: "Cool down or warm up here",
          body:
            "We're a 3-minute walk from the MKT Trail trailhead. Many of our 77493 regulars time appointments before or after a walk — Mary Jo Peckham Park is on the way back. If you're sweaty, our restroom has fresh towels and our front lounge has cold water. We built it for the trail crowd.",
        },
      ],
    },
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

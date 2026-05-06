// Each service is its own indexable URL. Hand-tuned copy for SEO + AEO citations.

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: "Manicure" | "Pedicure" | "Enhancement" | "Specialty";
  duration: string;
  priceFrom: number;
  priceDisplay: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  description: string[];
  whoFor: string[];
  whatsIncluded: string[];
  process: { title: string; detail: string }[];
  aftercare: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "dip-powder-nails",
    name: "Dip Powder Nails",
    shortName: "Dip Powder",
    category: "Enhancement",
    duration: "60–75 min",
    priceFrom: 50,
    priceDisplay: "$50",
    metaTitle: "Dip Powder Nails in Katy, TX | T&J Nails — From $50",
    metaDescription:
      "Long-lasting dip powder nails in Katy, TX. Odor-free, durable, 3–4 week wear. From $50 at T&J Nails — family-owned for 25+ years. Walk-ins welcome.",
    h1: "Dip Powder Nails in Katy, TX",
    intro:
      "Dip powder gives you the strength of acrylic and the shine of gel — without the harsh smell or the lamp time. It's our most-requested service, and it's why most of our clients keep coming back.",
    description: [
      "Dip powder is a layered system: a clear base, a fine pigmented powder, an activator, and a sealing top coat. The result is a nail that resists chipping for 3–4 weeks, looks glossy from day one to day twenty, and is gentler on your natural nail than UV-cured gel.",
      "We've been doing dip powder at T&J Nails since the technique landed in Katy, and we tune our process to your nail bed — thinner layers for short, flexible nails; structural layers if you want length or repair.",
    ],
    whoFor: [
      "You want polish that survives the gym, dishes, and a Texas summer.",
      "Your nails feel fragile after acrylic and you want a lighter alternative.",
      "You want vibrant color that won't fade in two weeks.",
      "You hate the smell of acrylic monomer.",
    ],
    whatsIncluded: [
      "Cuticle prep and shaping",
      "Base coat + 2–3 layers of dip powder in your chosen shade",
      "Activator and structural buff",
      "Glossy sealing top coat",
      "Quick hand massage to finish",
    ],
    process: [
      { title: "Consultation", detail: "We talk shape, length, and color. Bring a photo if you have one." },
      { title: "Prep", detail: "Cuticles trimmed, nails buffed and dehydrated for adhesion." },
      { title: "Application", detail: "Base, dip, repeat. We watch the apex on every nail to make sure it's balanced." },
      { title: "Finish", detail: "Activator, file, buff, top coat. You're walking out with glossy nails — no UV light required." },
    ],
    aftercare: [
      "Wear gloves for cleaning or gardening — chemicals dull dip powder fastest.",
      "Cuticle oil daily keeps the seal flexible and the color vibrant.",
      "Avoid using your nails as tools (no can-tab opening).",
      "Come in for a refill at 3–4 weeks before lift becomes a problem.",
    ],
    faqs: [
      {
        q: "How long does dip powder last?",
        a: "On most clients, 3–4 weeks before any visible lift. Some go to five. The end of life is usually growth at the cuticle, not chipping.",
      },
      {
        q: "Is dip powder safer than acrylic?",
        a: "It uses a different chemistry — no liquid monomer — so the smell is gone and many clients find it gentler. Both are safe in trained hands.",
      },
      {
        q: "Can I get dip on natural nails?",
        a: "Yes. We can dip directly over your natural nail for a strong, glossy overlay without adding length.",
      },
      {
        q: "Does dip powder need a UV lamp?",
        a: "No. It cures chemically with an activator. You won't sit under a light.",
      },
    ],
    relatedSlugs: ["gel-manicure", "acrylic-nails", "shellac-nails"],
  },
  {
    slug: "gel-manicure",
    name: "Gel Manicure",
    shortName: "Gel",
    category: "Manicure",
    duration: "45–60 min",
    priceFrom: 35,
    priceDisplay: "$35",
    metaTitle: "Gel Manicure in Katy, TX | Shellac Nails — T&J Nails From $35",
    metaDescription:
      "Glossy, chip-resistant gel manicures in Katy, TX. 2–3 weeks of perfect shine. Same-day appointments at T&J Nails — (281) 391-1411.",
    h1: "Gel Manicure in Katy, TX",
    intro:
      "A gel manicure is the answer when you want polish that looks salon-fresh on day fourteen. Cured under LED light, sealed in seconds, no smudges in the parking lot.",
    description: [
      "Our gel manicure starts with the full classic-manicure prep — soak, shape, cuticle care, and a hand massage — then finishes with a chip-resistant gel system in any color we stock (and we stock a lot).",
      "Most clients come back at the two-week mark for a fresh set; some stretch to three. If you've had gel that lifts or peels at other salons, give us one visit — most lift problems are prep problems.",
    ],
    whoFor: [
      "You want polish that survives a vacation and a wedding back-to-back.",
      "Your hands are in and out of water all day.",
      "You want classic shine and color without enhancement length.",
    ],
    whatsIncluded: [
      "Soak, shape, and cuticle care",
      "Hand and forearm massage",
      "Gel base, color (1–2 coats), and top coat",
      "LED cure between every layer",
      "Cuticle oil finish",
    ],
    process: [
      { title: "Soak & Shape", detail: "Warm soak, then file to your preferred shape — square, round, almond, coffin." },
      { title: "Cuticle Care", detail: "Push and trim, no aggressive cutting. Healthy cuticles = better adhesion." },
      { title: "Massage", detail: "5-minute hand and forearm massage with our house lotion." },
      { title: "Gel Application", detail: "Base, color, top coat, each cured under LED. Total cure time: about 4 minutes." },
    ],
    aftercare: [
      "Cuticle oil twice daily. Keeps gel flexible and skin healthy.",
      "Wear gloves for dishes — heat softens gel.",
      "Don't pick at lift. Come in for a soak-off ($15) when you're ready to remove.",
    ],
    faqs: [
      { q: "How long does a gel manicure last?", a: "Two to three weeks for most clients. Heavy hand-users may see edge wear sooner." },
      { q: "Will gel damage my natural nails?", a: "Not when removed properly. We soak — never scrape or peel — to protect your nail plate." },
      { q: "Can I get gel without color?", a: "Yes. A clear gel overlay adds shine and strength to a natural nail." },
    ],
    relatedSlugs: ["shellac-nails", "manicure", "dip-powder-nails"],
  },
  {
    slug: "shellac-nails",
    name: "Shellac Nails",
    shortName: "Shellac",
    category: "Manicure",
    duration: "45–60 min",
    priceFrom: 35,
    priceDisplay: "$35",
    metaTitle: "Shellac Nails in Katy, TX | T&J Nails — Long-Wear Manicure From $35",
    metaDescription:
      "Shellac manicures in Katy, TX. CND-quality polish that lasts two weeks without chipping. Book online or call (281) 391-1411.",
    h1: "Shellac Nails in Katy, TX",
    intro:
      "Shellac is the gel-polish hybrid that started the long-wear-manicure category. We still love it for its mirror finish and its respect for the natural nail.",
    description: [
      "Shellac sits between traditional polish and a full gel. It cures under LED in 30 seconds per coat, removes with a gentle soak, and gives you a glassier shine than most gels.",
      "Pair it with our collagen manicure if your hands have been working hard — the added hydration shows.",
    ],
    whoFor: [
      "You want a polished look without growing length.",
      "You're between full sets and want to give your natural nail a break.",
      "You want a shine that doesn't dull in a week.",
    ],
    whatsIncluded: ["Full manicure prep", "Shellac base, color, and top", "LED cure", "Cuticle oil"],
    process: [
      { title: "Manicure Prep", detail: "Same care as our classic manicure — never skipped, even for a quick service." },
      { title: "Shellac Layers", detail: "Base, color, top. Cured between coats. No streaks, no smudges." },
      { title: "Finishing", detail: "Cuticle oil, hand massage, you're done." },
    ],
    aftercare: ["Cuticle oil daily", "Gloves for cleaning", "Soak-off removal — never peel"],
    faqs: [
      { q: "Is shellac the same as gel?", a: "Shellac is a brand of gel-hybrid polish by CND. It's gel-style — cured under LED — but formulated for thinner application and easier removal." },
      { q: "How is shellac different from regular polish?", a: "Regular polish chips in 3–7 days. Shellac holds for 2 weeks with no chipping." },
    ],
    relatedSlugs: ["gel-manicure", "manicure", "dip-powder-nails"],
  },
  {
    slug: "pedicure",
    name: "Pedicure",
    shortName: "Pedicure",
    category: "Pedicure",
    duration: "30–70 min",
    priceFrom: 30,
    priceDisplay: "$30",
    metaTitle: "Best Pedicure in Katy, TX | Spa Pedicure — T&J Nails From $30",
    metaDescription:
      "Five pedicure tiers in Katy, TX — Classic, Pamper, Deluxe, Royal, and Deluxe Relief. Heated chairs, fresh liners, real care. From $30.",
    h1: "Pedicure in Katy, TX",
    intro:
      "Five tiers of foot care, from a tidy maintenance pedicure to a 70-minute relief experience. All performed in our heated massage chairs with fresh single-use liners and tools sterilized to medical-grade.",
    description: [
      "Every pedicure starts the same way: a warm soak, nail and cuticle work, callus reduction (firm or gentle — your call), and a polish or shellac finish if you want one.",
      "Where they differ is in the spa portion — the masks, exfoliants, hot stones, and massage time. The longer the tier, the more your calves and feet thank you tomorrow.",
    ],
    whoFor: [
      "You're on your feet all day and your arches need a real reset.",
      "You're prepping for a wedding, a vacation, or sandal weather.",
      "You want pedicure-as-self-care, not a 15-minute file-and-paint.",
    ],
    whatsIncluded: [
      "Warm soak in a freshly lined basin",
      "Nail trim, shape, and cuticle work",
      "Callus reduction at your preferred intensity",
      "Polish or shellac (your choice)",
      "Massage time scaled to the tier you choose",
    ],
    process: [
      { title: "Soak", detail: "Hot water with bath salts. Settle in." },
      { title: "Nail Care", detail: "Trim, shape, cuticles, buff." },
      { title: "Callus Work", detail: "We listen to how firm you want it. No surprise grinders." },
      { title: "Spa", detail: "Scrub, mask, hot stones, or paraffin — depends on the tier." },
      { title: "Massage", detail: "The longer the tier, the longer the leg and foot massage." },
      { title: "Polish", detail: "Standard polish included; shellac is an upgrade." },
    ],
    aftercare: ["Moisturize feet nightly to extend the smoothness", "Cotton socks the night of your pedicure if you got polish"],
    faqs: [
      { q: "What's the difference between Classic and Royal Pedicure?", a: "Classic is 30 minutes — clean, polished, done. Royal is 60 minutes with hot stones, scrub, mask, and an extended massage." },
      { q: "Do you sanitize tools?", a: "Yes. Tools are autoclave-sterilized and stored in sealed pouches. Pedicure liners are single-use." },
      { q: "Can I bring my own polish?", a: "Yes — happy to apply your shade." },
      { q: "Are kids welcome?", a: "Yes. We do kids pedicures regularly and have age-appropriate options." },
    ],
    relatedSlugs: ["kids-pedicure", "manicure", "gel-manicure"],
  },
  {
    slug: "manicure",
    name: "Classic Manicure",
    shortName: "Manicure",
    category: "Manicure",
    duration: "30–45 min",
    priceFrom: 20,
    priceDisplay: "$20",
    metaTitle: "Classic Manicure in Katy, TX | T&J Nails — From $20",
    metaDescription:
      "Classic manicure in Katy, TX. Soak, shape, cuticle care, hand massage, polish. Family-owned for 25+ years. Walk-ins welcome.",
    h1: "Classic Manicure in Katy, TX",
    intro: "The basics, done right. Soak, shape, cuticle care, hand massage, polish — every step, every time, no shortcuts.",
    description: [
      "A classic manicure sounds simple, but it's the test of any salon. Our prep is unhurried: warm soak, nail shaping to your preference, careful cuticle work, a real hand and forearm massage, and a polish you'll like for a week.",
      "Want it to last longer? Upgrade to a collagen manicure for hydration, or add shellac for two-week wear.",
    ],
    whoFor: [
      "You want clean, healthy hands without enhancement.",
      "Your nails feel ragged and need a reset.",
      "You're new to nail care and want a low-commitment first visit.",
    ],
    whatsIncluded: ["Warm soak", "Cuticle and shape work", "Hand and forearm massage", "Polish (your color choice)"],
    process: [
      { title: "Soak", detail: "Warm water, bath salts, calm." },
      { title: "Shape", detail: "Square, round, almond, oval — your call." },
      { title: "Cuticle Care", detail: "Push and trim. Healthy nail plates start here." },
      { title: "Massage", detail: "5+ minutes, full forearm." },
      { title: "Polish", detail: "Two coats and a top." },
    ],
    aftercare: ["Cuticle oil daily", "Hand cream after washing", "Gloves when cleaning"],
    faqs: [
      { q: "How long does a regular polish manicure last?", a: "5–7 days for most people. Add shellac for two-week wear." },
      { q: "What's a collagen manicure?", a: "Same prep with the addition of a collagen-infused mask and gloves — the difference shows in dry hands." },
    ],
    relatedSlugs: ["gel-manicure", "shellac-nails", "pedicure"],
  },
  {
    slug: "acrylic-nails",
    name: "Acrylic Nails",
    shortName: "Acrylic",
    category: "Enhancement",
    duration: "60–90 min",
    priceFrom: 40,
    priceDisplay: "$40",
    metaTitle: "Acrylic Nails in Katy, TX | Solar Nails — T&J Nails From $40",
    metaDescription:
      "Acrylic nails in Katy, TX. Solar full sets, color powder, white & pink. Strong, sculpted, made to last. From $40 at T&J Nails.",
    h1: "Acrylic Nails in Katy, TX",
    intro: "When you want length, structure, and a shape that holds — acrylic is still the workhorse. We sculpt; we don't just glue.",
    description: [
      "Acrylic gives you control over shape and apex like no other enhancement. We use Solar (a high-quality acrylic system) for full sets, with color powder, white & pink, or clear-tip-and-polish options.",
      "If you've had thick or lifted acrylic elsewhere, you'll feel the difference — our sets are slim where they should be slim, sturdy where they need structure.",
    ],
    whoFor: ["You want real length", "You want a precise shape (almond, coffin, stiletto)", "Your natural nail breaks faster than it grows"],
    whatsIncluded: ["Tip or sculpted form", "Acrylic build with structural apex", "Filing and shaping", "Polish or shellac top"],
    process: [
      { title: "Prep", detail: "Cuticles, dehydrate, primer where needed." },
      { title: "Tips", detail: "Sized and applied at the correct angle for your nail bed." },
      { title: "Acrylic", detail: "Bead size and ratio tuned to each nail." },
      { title: "Shape", detail: "Filed to apex, side wall, and tip." },
      { title: "Finish", detail: "Polish or shellac, top coat, oil." },
    ],
    aftercare: ["Refill at 2–3 weeks", "Cuticle oil to prevent lift", "Don't peel or pry off — soak off only"],
    faqs: [
      { q: "What's the difference between acrylic and dip?", a: "Acrylic is sculpted with liquid + powder for structure. Dip is layered for color and shine, with less control over shape." },
      { q: "Do acrylic nails ruin your nails?", a: "Not when applied and removed properly. Lift, peeling, and rough removal cause damage — not the product." },
    ],
    relatedSlugs: ["dip-powder-nails", "nail-art", "gel-manicure"],
  },
  {
    slug: "nail-art",
    name: "Nail Art & Custom Designs",
    shortName: "Nail Art",
    category: "Specialty",
    duration: "Add-on / Custom",
    priceFrom: 5,
    priceDisplay: "From $5",
    metaTitle: "Nail Art in Katy, TX | Custom Designs — T&J Nails",
    metaDescription:
      "Custom nail art in Katy, TX. Chrome, ombre, French, freehand, seasonal designs. Bring an inspiration photo — we'll match it. From $5/nail.",
    h1: "Custom Nail Art in Katy, TX",
    intro:
      "Bring us an inspiration photo. We'll tell you exactly how it'll look on your nail length, what's possible, and what's not — then we'll do it.",
    description: [
      "Our clients send us inspiration photos for a reason: we'll match the look, not approximate it. Chrome, ombre, French in any color, foil, glitter fade, hand-painted florals, seasonal — we do the work daily.",
      "Pricing depends on complexity and number of nails. Simple accent (one nail): $5. Full set custom design: $25–60+ on top of your base service.",
    ],
    whoFor: ["Special occasions", "You saved a nail photo on your phone six months ago", "You want a signature look that's yours"],
    whatsIncluded: ["Pre-design consultation", "Hand-painted detail or applied art (chrome, foil, gem, sticker)", "Sealed under top coat for durability"],
    process: [
      { title: "Photo Review", detail: "Show us. We'll talk feasibility and timing." },
      { title: "Base Service", detail: "Dip, gel, acrylic — whatever your foundation is." },
      { title: "Design", detail: "Painted on, then sealed." },
    ],
    aftercare: ["Top coat refresh every 2 weeks for hand-painted detail to keep edges sharp"],
    faqs: [
      { q: "Do I need to book extra time for nail art?", a: "Yes — let us know when you book. Detailed designs add 20–60 minutes." },
      { q: "Can you match a specific photo?", a: "Almost always. Chrome and certain pearlescent finishes need products we keep in stock — bring the photo." },
    ],
    relatedSlugs: ["acrylic-nails", "gel-manicure", "dip-powder-nails"],
  },
  {
    slug: "kids-pedicure",
    name: "Kids Pedicure",
    shortName: "Kids Pedicure",
    category: "Pedicure",
    duration: "20–30 min",
    priceFrom: 25,
    priceDisplay: "From $25",
    metaTitle: "Kids Pedicure in Katy, TX | T&J Nails — Family Salon",
    metaDescription:
      "Kids pedicure in Katy, TX. Gentle, age-appropriate, family-safe products. Mom-and-daughter pedicures welcome. T&J Nails — book today.",
    h1: "Kids Pedicure in Katy, TX",
    intro: "A first pedicure should feel like a treat, not a procedure. We keep it short, gentle, and fun.",
    description: [
      "Our kids pedicure is built for ages 5+ and uses age-appropriate, low-strength products. We skip the callus work and the heat lamps and keep the tone playful.",
      "Mom-and-daughter pedicures are popular here. Book side-by-side chairs and we'll synchronize the experience.",
    ],
    whoFor: ["First-time pedicure for a child", "Birthday or special occasion", "Mom-and-daughter spa day"],
    whatsIncluded: ["Warm soak", "Trim, shape, and gentle cuticle care", "Light foot massage", "Color polish of choice"],
    process: [
      { title: "Soak", detail: "Warm water, fun bath salts." },
      { title: "Trim & Polish", detail: "Quick, gentle, kid-friendly." },
    ],
    aftercare: ["Polish-friendly socks for the ride home"],
    faqs: [
      { q: "What age is appropriate?", a: "We see clients age 5 and up regularly. Younger? Call us — we'll work with you." },
      { q: "Do you do nail polish without all the chemicals?", a: "We can use lower-VOC kid-friendly polish on request." },
    ],
    relatedSlugs: ["pedicure", "manicure"],
  },
  {
    slug: "waxing",
    name: "Eyebrow & Facial Waxing",
    shortName: "Waxing",
    category: "Specialty",
    duration: "10–30 min",
    priceFrom: 10,
    priceDisplay: "From $10",
    metaTitle: "Eyebrow Waxing in Katy, TX | T&J Nails — From $10",
    metaDescription:
      "Eyebrow, lip, chin, face, underarm, and leg waxing in Katy, TX. Quick, comfortable, professional. T&J Nails — book online.",
    h1: "Waxing in Katy, TX",
    intro: "Brows shaped, lip and chin smooth, legs ready. Same care, same hands as your nails.",
    description: [
      "We've been doing brows for as long as we've been doing nails — many of our clients book a brow wax with every fill. Quick, comfortable, and tailored to your face shape.",
    ],
    whoFor: ["Pre-event prep", "Brow grow-out fix", "Quick stop on lunch break"],
    whatsIncluded: ["Brow mapping or area assessment", "Wax application and quick removal", "Soothing post-wax oil"],
    process: [
      { title: "Map", detail: "We outline before we wax — no surprises." },
      { title: "Wax", detail: "Strip wax for legs, hard wax for brows and face." },
      { title: "Soothe", detail: "Post-wax oil to calm the skin." },
    ],
    aftercare: ["No hot showers for 6 hours", "No exfoliation for 24 hours"],
    faqs: [
      { q: "Do you tint brows?", a: "Yes — eyebrow tinting is $20." },
      { q: "How often should I wax brows?", a: "Every 3–4 weeks for most clients." },
    ],
    relatedSlugs: ["manicure", "pedicure"],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

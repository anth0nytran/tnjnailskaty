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
  // Per-service unique content — Katy/Texas-specific buying context.
  // Engineered for AEO/AI citation: concrete claims, real brands, real local
  // references. Content is hand-written per service, not templated.
  katyContext?: {
    eyebrow: string;
    heading: string;
    lede: string;
    cards: { kicker: string; title: string; body: string }[];
    kicker?: string;
  };
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
    katyContext: {
      eyebrow: "Dip in Katy, specifically",
      heading: "What we've learned about dip powder after 25 Katy summers.",
      lede:
        "Dip is our most-booked service. Two-and-a-half decades of 95° Katy heat, dishpan hands, and pool weeks have taught us things the original SNS training booklet didn't cover. Here's what holds up — and what doesn't — in this climate.",
      cards: [
        {
          kicker: "Heat & humidity",
          title: "Sealed pours — never double-dipped",
          body:
            "A lot of salons in Katy still dip multiple clients' fingers into the same powder jar. We pour individual portions onto a clean pad and discard the unused powder. In Texas humidity that's the only sanitary way (and the only TDLR-defensible way) to do dip.",
        },
        {
          kicker: "Wear window",
          title: "3 weeks minimum, 4 if you wear gloves",
          body:
            "Pool, hot tub, dishwater, and yard work are dip's enemies. Cinco Ranch clients who garden through April–October refill at 2.5 weeks; office workers in 77493 stretch to 5. We log it on your chart so we can schedule honestly — not just every other Saturday because the slot's open.",
        },
        {
          kicker: "Color we stock",
          title: "300+ shades, refreshed seasonally",
          body:
            "We restock from Kiara Sky and Apres four times a year — warm neutrals for KISD school photos in October, deeper plums by November, milky French shades for Cinco Ranch brides through spring. Bring a phone photo of any color and we'll match from the wall.",
        },
      ],
      kicker:
        "Most-booked dip shades this season: 'Lily Pond' (sage) and 'Dahlia' (warm rose). Both came in on the September restock.",
    },
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
    katyContext: {
      eyebrow: "Gel that survives a Katy week",
      heading: "Why our gel doesn't peel by Wednesday.",
      lede:
        "If you've had gel that lifted at the cuticle by day three, that's almost always a prep problem — not a product problem. Here's what we do differently, and how to spot it at any salon you visit in Katy.",
      cards: [
        {
          kicker: "Prep depth",
          title: "Five-step prep, not three",
          body:
            "Push, gentle nip, dehydrate, primer, base. Most chain salons skip dehydrate and primer because it adds 90 seconds — that's 90 seconds you pay for in week-one chipping. If you don't smell the dehydrator at any salon you visit, that step got skipped.",
        },
        {
          kicker: "Cure quality",
          title: "LED, replaced every 18 months",
          body:
            "An aging UV lamp under-cures gel and you don't notice for two visits. We swapped to LED in 2018 and replace lamps every 18 months on a calendar reminder, not on guess. If your gel feels tacky after the wipe at any salon, ask for another cure — it should feel hard.",
        },
        {
          kicker: "Removal honesty",
          title: "$15 soak, 15 minutes, no scraping",
          body:
            "We charge $15 for a proper soak-off because it takes time and acetone we don't reuse. Salons that 'remove gel free' are scraping with a metal pusher — that's how nail beds get thinner over years. Pay the $15. Your nail plate is the long game.",
        },
      ],
      kicker:
        "If we did your gel, we'll fix any week-one chip free of charge. We rarely get the call.",
    },
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
    katyContext: {
      eyebrow: "Real CND Shellac",
      heading: "Why we still keep CND Shellac stocked.",
      lede:
        "Half the salons in Katy that say 'shellac' are using a different gel-polish brand. CND Shellac® is a trademarked product. Here's why the brand still matters and when we'll recommend it over plain gel.",
      cards: [
        {
          kicker: "Brand truth",
          title: "If they don't say CND, it isn't Shellac",
          body:
            "'Shellac-style' is shorthand for any LED-cured gel polish — most work fine, but they're not Shellac. We stock real CND because the formula breaks down differently on removal: less acetone, less time, less stress on the nail plate. That difference compounds over years.",
        },
        {
          kicker: "Glassiness",
          title: "Mirror finish that doesn't dull at week two",
          body:
            "CND Shellac top coat is the highest-shine top we stock. Other gel tops dull by day 10 in Katy weather; Shellac holds glass-clear to the end of week two. If you photograph your hands — brides, real estate agents, food bloggers in 77494 — that finish matters.",
        },
        {
          kicker: "Recovery service",
          title: "Best between two acrylic sets",
          body:
            "After a 6-month acrylic stretch, your natural nail needs a break — not bare. A Shellac collagen manicure ($40) gives you a hard top layer and a hydration boost without adding length. Most of our Cinco Ranch brides do this 4 weeks before the wedding, then a fresh full set the week of.",
        },
      ],
    },
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
    katyContext: {
      eyebrow: "Five tiers, picked for real reasons",
      heading: "Match the pedicure tier to what your feet actually went through.",
      lede:
        "We didn't pick five tiers to upsell you. We picked them because the right pedicure depends on what your feet did this month — yard work, marathon training, hospital shifts, or simply keeping up with kids. Here's how to choose at our shop.",
      cards: [
        {
          kicker: "Classic ($30)",
          title: "Maintenance, not therapy",
          body:
            "30 minutes. Trim, shape, cuticles, mild callus, polish. Right when your feet look fine and the polish is going. Most of our 77493 walk-ins book Classic because they live close enough to come back monthly without saving up the time.",
        },
        {
          kicker: "Royal ($65)",
          title: "What teachers and nurses book",
          body:
            "60 minutes with hot stones, sea salt scrub, mud mask, paraffin, and 15 minutes of leg massage. Katy ISD teachers in May/June book this weekly — the calf work resets after a year on classroom floors. Methodist West night-shift nurses come in mid-morning before sleeping.",
        },
        {
          kicker: "Deluxe Relief ($70)",
          title: "If you're on your feet 50+ hours/week",
          body:
            "70 minutes. Same as Royal plus a deeper exfoliation, an extended foot reflex massage, and time. We built this tier for one client — a long-time Katy hairstylist whose arches gave out — and a quarter of our Saturday afternoons now book it. Worth the upgrade if your work is your feet.",
        },
      ],
    },
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
    katyContext: {
      eyebrow: "Where most clients start",
      heading: "The $20 manicure is the test of any salon.",
      lede:
        "It's our cheapest service, and it's our hardest one to fake. The shortcuts that don't show up on a $50 dip set show up on a $20 polish manicure within a week. Here's what we don't skip — and what to look for at any salon you visit.",
      cards: [
        {
          kicker: "Soak depth",
          title: "5 minutes minimum, not the 60-second dip",
          body:
            "Cuticles need warm water and time to soften. A real soak makes the next 25 minutes possible. Watch the soak bowl at any salon — if it's room-temperature tap water and you're in it for 90 seconds, the cuticle work that follows is going to leave a hangnail.",
        },
        {
          kicker: "The massage",
          title: "Forearm, not just hand",
          body:
            "Our hand massage runs from fingertips to mid-forearm, 5+ minutes, with our house lotion. We added forearm work after enough KISD teachers and Cinco Ranch real-estate agents asked for it. Cost? Same $20. We absorbed the time because the regulars stayed.",
        },
        {
          kicker: "Polish that lasts",
          title: "OPI and CND base coats — never store-brand",
          body:
            "Cheap base coat is why polish chips by day four. We keep OPI Natural Nail Strengthener and CND Stickey Base in rotation; the application is identical, the wear is 3+ days longer. If a salon's base coat doesn't have a brand name on the bottle, that's where they're saving money.",
        },
      ],
    },
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
    katyContext: {
      eyebrow: "Solar acrylic, not MMA",
      heading: "Why our acrylic doesn't smell — and why that matters.",
      lede:
        "If a salon's acrylic smells like nail-polish remover from twenty feet away, that's MMA — methyl methacrylate — banned by Texas TDLR for nail services for decades. Here's what we use, why we use it, and how to spot the difference at any salon in Katy.",
      cards: [
        {
          kicker: "Chemistry",
          title: "EMA, not MMA",
          body:
            "We use EMA-based Solar acrylic — the legal, gentler chemistry. EMA cures slower (which is why our sets take 60–90 minutes) and bonds without bleaching the natural nail. MMA cures fast and cheap but is banned for a reason: it bonds so hard the natural nail comes off with the set.",
        },
        {
          kicker: "Apex placement",
          title: "Where the strength actually lives",
          body:
            "An acrylic set that breaks one nail a week has the apex in the wrong spot — too thin at the stress zone, too thick at the tip. We sculpt with an apex two-thirds back from the free edge. Our Cinco Ranch real-estate agents and Cane Island gardeners go a full 3 weeks without a break.",
        },
        {
          kicker: "Refill cadence",
          title: "Every 2–3 weeks — not 'when it lifts'",
          body:
            "Lift starts before you can see it. Refill at 2 weeks if you're hard on hands; 3 weeks for office work. We log your last visit on the chart so we'll tell you when to come back — most clients book the next refill before they leave the chair.",
        },
      ],
    },
  },
  {
    slug: "builder-gel-overlay",
    name: "Builder Gel Overlay",
    shortName: "Builder Gel",
    category: "Enhancement",
    duration: "60–75 min",
    priceFrom: 55,
    priceDisplay: "$55",
    metaTitle: "Builder Gel Overlay in Katy, TX | T&J Nails — From $55",
    metaDescription:
      "Builder gel overlay in Katy, TX. Strength for thin or brittle natural nails — flexible, light, lamp-cured. From $55 at T&J Nails. Family-owned for 25+ years.",
    h1: "Builder Gel Overlay in Katy, TX",
    intro:
      "A clear, hardening gel layered over your natural nail to add strength without adding length. It's what we recommend most often for clients whose nails feel thin, peel, or split.",
    description: [
      "Builder gel sits between gel polish and acrylic. We brush it directly over your natural nail — no tips, no extension — to reinforce the surface and stop everyday breakage. The result is a flexible armor that bends with your nail rather than fighting it.",
      "Each layer is sculpted at the apex (the strongest curved point of the nail), then cured under an LED lamp. We finish with color, shellac, or a French and a top coat. Most clients get 3–4 weeks of wear with no chips.",
    ],
    whoFor: [
      "Your natural nails are thin, peel, or split when they grow out.",
      "You want strength without artificial length.",
      "You're growing out an old acrylic or dip set and need a bridge.",
      "You want gel polish that lasts longer and stays glossier.",
    ],
    whatsIncluded: [
      "Cuticle prep and shaping",
      "Builder gel applied at natural length",
      "Sculpted apex for strength where your nail flexes",
      "Color, shellac, or French finish with top coat",
      "Cuticle oil",
    ],
    process: [
      { title: "Prep", detail: "Cuticles cleaned, surface lightly buffed, dehydrated." },
      { title: "Bond", detail: "A thin bonder is brushed on for adhesion to your natural nail." },
      { title: "Build", detail: "Builder gel applied in two thin layers and cured under an LED lamp." },
      { title: "Shape", detail: "Filed to your preferred shape with a defined apex." },
      { title: "Finish", detail: "Color, shellac, or French — top coat, oil." },
    ],
    aftercare: [
      "Cuticle oil daily — keeps the gel flexible and prevents lift.",
      "Soak off only — never peel or pry.",
      "Touch up every 3 weeks before the regrowth shows at the cuticle.",
    ],
    faqs: [
      {
        q: "What's the difference between builder gel and gel polish?",
        a: "Gel polish is a thin colored coating. Builder gel is a thicker structural gel that adds strength and shape over the natural nail before the polish goes on.",
      },
      {
        q: "Is builder gel the same as hard gel?",
        a: "They're related, but builder gel is softer and soaks off more easily. Hard gel has to be filed off entirely, which is harder on your natural nail.",
      },
      {
        q: "Will it ruin my natural nails?",
        a: "No — applied and removed properly, builder gel actually protects the natural nail underneath. The damage people associate with gel comes from peeling or rough removal.",
      },
      {
        q: "How long does builder gel last?",
        a: "3–4 weeks for most clients. We schedule a refill before regrowth shows at the cuticle.",
      },
    ],
    relatedSlugs: ["gel-manicure", "gel-x", "dip-powder-nails"],
    katyContext: {
      eyebrow: "Builder gel — the bridge service",
      heading: "Why we recommend builder gel more than we used to.",
      lede:
        "Five years ago builder gel was a niche service. Now it's the second-most-recommended enhancement in our chairs — because so many of our clients spent the 2010s on heavy acrylic and their natural nails need rest, not more removal. Here's when we suggest it.",
      cards: [
        {
          kicker: "Bridge service",
          title: "After acrylic, before going bare",
          body:
            "If you've been on acrylic for two years and your natural nail is paper-thin, going bare is painful — every dish, every type, your nails feel things they shouldn't. Builder gel adds back a hard top layer so the natural nail can grow underneath without the daily damage.",
        },
        {
          kicker: "Strength without length",
          title: "For people who tried acrylic and hated it",
          body:
            "Acrylic is heavy. Builder gel is half the weight at the apex, half the curing time, and removes in 15 minutes of soak instead of an hour of file work. Same 3–4 week wear, far less drama on the natural nail underneath.",
        },
        {
          kicker: "Refill rhythm",
          title: "3 weeks because of cuticle, not lift",
          body:
            "Builder gel rarely lifts when applied right — what brings clients back is regrowth at the cuticle showing. Book the next refill at 21 days; we'll touch up the apex and move the color forward without redoing the whole nail.",
        },
      ],
    },
  },
  {
    slug: "gel-x",
    name: "Gel X Extensions",
    shortName: "Gel X",
    category: "Enhancement",
    duration: "60–90 min",
    priceFrom: 55,
    priceDisplay: "$55",
    metaTitle: "Gel X Nails in Katy, TX | Apres Gel Extensions — T&J Nails From $55",
    metaDescription:
      "Gel X nail extensions in Katy, TX. Pre-shaped soft gel tips, lamp-cured, lighter than acrylic. Lasts 3+ weeks. From $55 at T&J Nails — family-owned for 25+ years.",
    h1: "Gel X Extensions in Katy, TX",
    intro:
      "A modern alternative to acrylic. Pre-shaped soft gel tips bonded with gel adhesive and cured under LED — lighter on your nails, faster to apply, and gentler when it's time to come off.",
    description: [
      "Gel X uses pre-formed soft gel tips that cover the entire natural nail from cuticle to free edge. We size each finger, apply gel adhesive, press the tip on, and cure under an LED lamp. There's no acrylic monomer, no harsh smell, and no aggressive filing of the natural nail underneath.",
      "It's the cleanest extension method we offer. Most clients get 3–4 weeks of wear, and removal is a 15-minute soak instead of an hour of filing.",
    ],
    whoFor: [
      "You want length but acrylic feels too heavy.",
      "You want a fast, low-odor service.",
      "You've had natural nail damage from acrylic and want to switch.",
      "You want a clean almond, coffin, or square shape without a lot of filing.",
    ],
    whatsIncluded: [
      "Cuticle prep and shaping",
      "Custom-sized soft gel tips",
      "Gel adhesive bond and full LED cure",
      "Length and shape filed to your preference",
      "Color, shellac, or French finish with top coat",
    ],
    process: [
      { title: "Size", detail: "Each tip sized one finger at a time so it sits flush at the cuticle." },
      { title: "Bond", detail: "Gel adhesive applied to the tip and the natural nail." },
      { title: "Press & Cure", detail: "Tip pressed on, held in place, cured under LED." },
      { title: "Shape", detail: "Filed to your length and chosen shape — coffin, almond, square, stiletto." },
      { title: "Finish", detail: "Color, shellac, or French — top coat, oil." },
    ],
    aftercare: [
      "Cuticle oil daily — keeps the bond strong.",
      "Don't bite, peel, or use your nails as tools.",
      "Soak off only — about 15 minutes in acetone.",
    ],
    faqs: [
      {
        q: "Is Gel X the same as acrylic?",
        a: "No. Acrylic is sculpted from liquid and powder; Gel X uses pre-shaped soft gel tips bonded and cured. Gel X is lighter, has no smell, and removes faster.",
      },
      {
        q: "How long does Gel X last?",
        a: "3–4 weeks for most clients. Cuticle regrowth, not lifting, is usually what brings people back in.",
      },
      {
        q: "Does Gel X damage your nails?",
        a: "Less than most extension methods. We don't file down the natural nail before applying, and removal is a soak — not a scrape.",
      },
      {
        q: "Can you do nail art on Gel X?",
        a: "Yes — chrome, French, ombre, and hand-painted designs all work great on Gel X. Mention it when you book so we set aside time.",
      },
    ],
    relatedSlugs: ["builder-gel-overlay", "acrylic-nails", "nail-art"],
    katyContext: {
      eyebrow: "Gel X — the modern acrylic",
      heading: "Why Gel X has taken over from acrylic in our chairs.",
      lede:
        "Gel X is a 5-year-old technology and most of Katy still calls it 'press-on with extra steps.' That misunderstanding costs clients results. Pre-shaped Apres tips, gel adhesive, full LED cure — done. Lighter than acrylic, faster than dip, removes in a soak. Here's why it's our top recommendation for first-time extensions.",
      cards: [
        {
          kicker: "Speed",
          title: "60–90 minutes vs. 90–120 for acrylic",
          body:
            "Pre-shaped tips mean less filing. We size each tip in five minutes total, then bond and cure. The set goes on like a kit — except sized to your specific nail width. Most of our Cinco Ranch and Fulshear lunch-break clients are in and out before the hour mark.",
        },
        {
          kicker: "Removal honesty",
          title: "15-minute soak, not an hour of filing",
          body:
            "Acrylic removal is brutal: file, file, file, soak. Gel X removal is a foil-wrap soak in 100% acetone for 15 minutes, then the tip slides off. We charge $20 for removal because the acetone we use isn't reused — but the natural nail underneath looks like it did before the set went on.",
        },
        {
          kicker: "Best for first-timers",
          title: "Try extensions without the commitment",
          body:
            "First time wanting length? Gel X is the lowest-risk way. If you don't like the feel after a week, removal is fast and gentle. Most clients keep them — but the option to bail without nail damage is what convinces hesitant clients to try.",
        },
      ],
    },
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
    katyContext: {
      eyebrow: "What we actually keep in stock",
      heading: "What's possible at our shop, today, on real Katy nails.",
      lede:
        "Pinterest boards lie about nail art. Half the designs need acrylic gel mediums most salons in Katy don't keep, or stamping plates we don't carry. Here's what we actually have stocked — so you can plan a design we can finish in your booked window.",
      cards: [
        {
          kicker: "Always stocked",
          title: "Chrome, foil, glitter fade, French",
          body:
            "Three chrome powders (silver, gold, holographic). Six foil patterns. Glitter in nine sizes from microfine to chunky. French in any color combo, including reverse and double. These add 15 minutes total — book any service +15 and you're set.",
        },
        {
          kicker: "Custom paint",
          title: "Hand-painted florals & seasonal designs",
          body:
            "Jenny does the paint work — small florals, abstracts, seasonal (KISD spirit colors come up every August before football). Adds 30–60 minutes per set. Bring a phone photo a day before so we can stage gel colors that match the inspiration.",
        },
        {
          kicker: "What we send you elsewhere for",
          title: "3D acrylic charms & nail piercings",
          body:
            "We don't carry 3D charm work or nail piercings — both need specific equipment we'd rarely use. If that's your design, we'll honestly tell you which Houston salon does it right. We'd rather lose the booking than do a bad version of someone's wedding nails.",
        },
      ],
    },
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
    katyContext: {
      eyebrow: "Built around what kids actually want",
      heading: "First-time pedicure: how to make it a yes.",
      lede:
        "Kid pedicures fail when they're scaled-down adult pedicures. We've done thousands of first-times for Katy families — birthday parties, mom-and-daughter trips, KISD teacher gifts. Here's what works in our chair.",
      cards: [
        {
          kicker: "Age & comfort",
          title: "5+ years, parent in the chair next to them",
          body:
            "We seat kids next to a parent in matching chairs. Parent gets the Classic Pedicure ($30); kid gets Kids ($25). Total visit ~45 minutes. Younger than 5? Bring them, but expect them to bail at minute 12 — we won't charge if it doesn't take.",
        },
        {
          kicker: "What we skip",
          title: "No callus blade, no heat lamps",
          body:
            "Kid feet don't have callus to remove. We use a soft buffer only. We skip the paraffin lamp (heat) and high-strength acetone in case they touch their face. Polish is regular kid-friendly — not gel — so it comes off easy at home with regular remover.",
        },
        {
          kicker: "Birthday parties",
          title: "Side-by-side chairs, 3+ kids welcome",
          body:
            "Book at least a week ahead for groups of 3+ — we'll set up the back chairs together. We've done KISD birthday parties (4–6 kids), Cinco Ranch dance recitals, quinceañera prep. Total cost stays at sticker price; no hidden party fee, no minimum spend.",
        },
      ],
    },
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
    katyContext: {
      eyebrow: "The combo most clients book",
      heading: "Brow wax + nail fill = one chair, one trip, two services done.",
      lede:
        "Most of our waxing happens during a fill — eight extra minutes for brows, twenty for face. Here's what works for the women who come in once every 3 weeks for a maintenance combo, and the brides booking for the day before the rehearsal.",
      cards: [
        {
          kicker: "Brow shape",
          title: "Hard wax, mapped before we start",
          body:
            "Soft wax (strip) on brows pulls fine skin in this Texas dry-air climate. Hard wax peels off itself; gentler. We map the brow with a pencil before any wax goes near skin — no surprise shape, no take-it-back conversation.",
        },
        {
          kicker: "Pre-wedding combo",
          title: "Brow + lip + chin = $42 total",
          body:
            "Most overlap with a fill or pedicure. Pre-wedding, brides usually book brow + lip + chin the morning of the rehearsal so any redness is gone by the next day. Post-wax oil included; we don't bill for it as an extra.",
        },
        {
          kicker: "What we don't do",
          title: "No bikini, no Brazilian",
          body:
            "We do brows, lip, chin, face, underarms, and legs. We don't do bikini line or Brazilian — there are full-body specialists nearby in Cinco Ranch we send those bookings to. Different equipment, different room. We won't do it half-right.",
        },
      ],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

// Site-wide FAQs (used on /faq + injected into FAQPage schema)

export type FAQ = { q: string; a: string };

export const SITE_FAQS: FAQ[] = [
  {
    q: "What's the best nail salon in Katy, TX?",
    a: "T&J Nails has been a top-rated, family-owned nail salon in Katy, Texas for over 25 years, with a 4.9-star Google rating from hundreds of local clients. The owners — Jenny and Tony — work the floor daily and personally know most of their regulars.",
  },
  {
    q: "Where is T&J Nails located?",
    a: "T&J Nails is at 5304 E 5th Street, Suite 105, Katy, TX 77493 — in Old Towne Katy, five minutes from I-10 (Pin Oak Rd exit).",
  },
  {
    q: "What time does T&J Nails open and close?",
    a: "T&J Nails opens at 9:00 AM and closes at 7:00 PM, Monday through Saturday. We're closed on Sunday.",
  },
  {
    q: "Is T&J Nails open on Sunday?",
    a: "No — T&J Nails is closed Sundays. We're open Monday through Saturday, 9 AM to 7 PM, and Saturday mornings book up first.",
  },
  {
    q: "Do you take walk-ins or do I need an appointment?",
    a: "Walk-ins are welcome, but we strongly recommend booking — Saturdays and Friday afternoons are usually fully booked. Request an appointment through the website and we'll call you within 5 minutes during open hours.",
  },
  {
    q: "How much does a full set cost at T&J Nails?",
    a: "Solar acrylic full sets start at $40, dip powder full sets at $50, and white-and-pink solar at $55. Refills are typically $5 less than the full set price. The full price list is on the menu page.",
  },
  {
    q: "How much is a manicure and pedicure at T&J Nails?",
    a: "A basic manicure is $20 and a Classic Pedicure is $30, so a mani-pedi starts at $50. Shellac manicures are $35, and pedicure tiers go up to $70 for the Deluxe Relief. Every price is on the menu page.",
  },
  {
    q: "How much is an eyebrow wax?",
    a: "Eyebrow waxing is $12 at T&J Nails, and eyebrow tinting is $20. Lip wax is $10 and a full face wax is $35. Walk-ins welcome.",
  },
  {
    q: "Is TJ Nails the same as T&J Nails in Katy?",
    a: "Yes. T&J Nails — also written TJ Nails, T and J Nails, or T & J Nails — is the family-owned salon at 5304 E 5th St Ste 105 in Katy, TX 77493. We have no other locations; other \"TJ Nails\" salons in other cities aren't affiliated with us.",
  },
  {
    q: "Do you do dip powder?",
    a: "Yes — dip powder is one of our most popular services. $50 full set, $45 refill. It lasts 3–4 weeks and is gentler on the natural nail than acrylic.",
  },
  {
    q: "Do you do nail art and custom designs?",
    a: "Yes. Bring an inspiration photo. Simple accents start at $5 per nail; full-set custom designs are quoted per complexity. We do chrome, ombre, French, hand-painted detail, and seasonal looks.",
  },
  {
    q: "How do you sanitize tools?",
    a: "All tools are autoclave-sterilized between every client and stored in sealed pouches until use. Pedicure liners are single-use and disposed of in front of you.",
  },
  {
    q: "Do you accept credit cards?",
    a: "Yes — cash, credit, debit, and Apple Pay.",
  },
  {
    q: "Do you do kids pedicures?",
    a: "Yes, and they're popular here. We have age-appropriate options for ages 5+ and run a lot of mom-and-daughter pedicures with side-by-side chairs.",
  },
  {
    q: "How long has T&J Nails been in business?",
    a: "Over 25 years, family-owned and operated by Jenny and Tony.",
  },
  {
    q: "Do you offer gift certificates?",
    a: "Yes, gift certificates are available in any amount in-store. Call (281) 391-1411 or stop by.",
  },
];

// Price questions people actually search (Search Console: "tj nails prices",
// "how much is shellac nails", "eyebrow waxing prices", "manicure cost", …).
// Rendered on /menu with FAQPage schema.
export const MENU_FAQS: FAQ[] = [
  {
    q: "How much does a manicure cost at T&J Nails?",
    a: "Basic manicure $20, collagen manicure $25, shellac manicure $35, and shellac collagen manicure $40.",
  },
  {
    q: "How much is a pedicure at T&J Nails?",
    a: "Classic $30, Pamper $40, Deluxe $50, Royal $65, and Deluxe Relief $70. Extra 10-minute massage is $15.",
  },
  {
    q: "How much are shellac nails?",
    a: "A shellac manicure is $35 ($40 with collagen). Solar clear tips with shellac polish are $50 for a full set and $45 for a refill.",
  },
  {
    q: "How much is a full set of acrylic or dip powder nails?",
    a: "Solar acrylic full sets start at $40 ($35 refill). Dip powder is $50 full set, $45 refill. White & pink powder is $55 full set, $50 refill. Builder gel overlay and Gel X start at $55.",
  },
  {
    q: "How much is an eyebrow wax and tint?",
    a: "Eyebrow wax $12, eyebrow tinting $20. Lip wax $10, chin from $20, full face $35, underarms $30, legs from $50.",
  },
  {
    q: "What costs extra?",
    a: "Long nails and designed shapes (almond, coffin, stiletto) add a small fee, French or color tips are +$10, and nail art starts at $5. We always quote the add-on before we start.",
  },
  {
    q: "How much is soak-off removal?",
    a: "Nail soak-off is $15. Nail repairs start at $5 per nail.",
  },
];

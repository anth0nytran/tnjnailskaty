// Source of truth for /menu — the URL printed on the salon's QR code.
// Pricing pulled from current in-shop menu. Keep in sync with shop.

export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  priceStartingAt?: number;
  priceExtra?: number;
  fullSet?: number;
  refill?: number;
};

export type MenuSection = {
  slug: string;
  section: string;
  blurb?: string;
  pricingColumns?: [string, string];
  items: MenuItem[];
  extras?: MenuItem[];
  notes?: string[];
};

export const MENU: MenuSection[] = [
  {
    slug: "nail-service",
    section: "Nail Enhancements",
    blurb:
      "Length, strength, and structure built to last 3+ weeks. All sets include shaping, prep, polish, and a finish coat.",
    pricingColumns: ["Full Set", "Refill"],
    items: [
      { name: "Solar Clear Tip with Color Polish", fullSet: 40, refill: 35 },
      { name: "Solar Clear Tip with Shellac Polish", fullSet: 50, refill: 45 },
      { name: "Solar White / Pearl Tip", fullSet: 45, refill: 40 },
      { name: "Solar White & Pink Powder", fullSet: 55, refill: 50 },
      { name: "Solar Color Powder", fullSet: 50, refill: 45 },
      { name: "Dipping Powder", fullSet: 50, refill: 45 },
    ],
    notes: ["Long nails — additional fee", "Designed shapes (almond, coffin, stiletto) — additional fee"],
  },
  {
    slug: "manicure",
    section: "Manicure",
    blurb:
      "Hand care that pampers — soak, shape, cuticle work, hand massage, and polish. Choose collagen for extra hydration.",
    items: [
      { name: "Basic Manicure", price: 20 },
      { name: "Collagen Manicure", price: 25 },
      { name: "Shellac Basic Manicure", price: 35 },
      { name: "Shellac Collagen Manicure", price: 40 },
    ],
  },
  {
    slug: "pedicure",
    section: "Pedicure",
    blurb:
      "Five tiers of foot care, from a tidy maintenance pedicure to a 70-minute relief experience with paraffin and extended massage.",
    items: [
      { name: "Classic Pedicure", price: 30 },
      { name: "Pamper Pedicure", price: 40 },
      { name: "Deluxe Pedicure", price: 50 },
      { name: "Royal Pedicure", price: 65 },
      { name: "Deluxe Relief Pedicure", price: 70 },
      { name: "Extra Massage (10 min)", price: 15 },
    ],
  },
  {
    slug: "waxing",
    section: "Waxing",
    blurb: "Smooth, comfortable, and quick. Done with care by the same hands that do your nails.",
    items: [
      { name: "Eyebrow Wax", price: 12 },
      { name: "Lip Wax", price: 10 },
      { name: "Chin Wax", priceStartingAt: 20 },
      { name: "Face Wax", price: 35 },
      { name: "Under Arms Wax", price: 30 },
      { name: "Legs Wax", priceStartingAt: 50 },
    ],
  },
  {
    slug: "additional-services",
    section: "À La Carte",
    blurb: "Quick fixes, finishing touches, and add-ons.",
    items: [
      { name: "Polish Change — Color", priceStartingAt: 15 },
      { name: "French or Color Tip", priceExtra: 10 },
      { name: "Nails Soak Off", price: 15 },
      { name: "Nails Repair", priceStartingAt: 5 },
      { name: "Nails Design", priceStartingAt: 5 },
      { name: "Nails Trim", priceExtra: 3 },
    ],
    extras: [{ name: "Eyebrow Tinting", price: 20 }],
  },
];

export function formatPrice(n: number) {
  return `$${n.toFixed(0)}`;
}

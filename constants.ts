import { BusinessInfo, Service } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "T&J Nails",
  address: "5304 E 5th St Ste 105",
  city: "Katy, TX 77493",
  phone: "(281) 391-1411",
  phoneClean: "2813911411",
  mapLink: "https://www.google.com/maps/search/?api=1&query=T%26J+Nails+5304+E+5th+St+Ste+105+Katy+TX",
  yearsInBusiness: 25,
  neighborhoods: ["Katy", "Cinco Ranch", "Elyson"]
};

export const SERVICES: Service[] = [
  {
    name: "Essential Manicure & Pedicure",
    description: "Shaping, cuticle care, gentle scrub, massage, and a clean polish finish."
  },
  {
    name: "Healthy Dip Powder",
    description: "Durable and low-odor finish that feels natural and removes without damage."
  },
  {
    name: "Gel Polish",
    description: "High-shine, chip-resistant polish cured under LED light for up to two weeks of wear."
  },
  {
    name: "Custom Nail Art",
    description: "Hand-painted accents, chrome, ombre, and seasonal looks built around your ideas."
  },
  {
    name: "Acrylic & Extensions",
    description: "Structured overlays and added length with balanced shaping and smooth finishing."
  }
];

export const TESTIMONIALS = [
  {
    text: "They greet my family by name and the space is always spotless. My dip powder never lifts.",
    author: "Sarah M."
  },
  {
    text: "Down-to-earth owners, fair pricing, and steady work every visit. You can see the pride they take.",
    author: "Emily R."
  },
  {
    text: "Easy scheduling, honest recommendations, and a relaxed atmosphere. Feels like a neighborhood staple.",
    author: "Jessica T."
  }
];
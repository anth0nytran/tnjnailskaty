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
    name: "Classic Manicure & Pedicure",
    description: "Relaxing soak, cuticle care, shaping, massage, and polish."
  },
  {
    name: "Dip Powder",
    description: "Long-lasting, durable, and odor-free powder application."
  },
  {
    name: "Shellac / Gel",
    description: "High-shine, chip-resistant polish cured under LED light."
  },
  {
    name: "Custom Nail Art",
    description: "Intricate designs, chrome, ombre, and seasonal styles."
  },
  {
    name: "Solar & Acrylics",
    description: "Expert enhancement for length and strength."
  }
];

export const TESTIMONIALS = [
  {
    text: "I've been coming here for 10 years. It truly feels like family. Best dip powder in Katy!",
    author: "Sarah M."
  },
  {
    text: "So clean and professional. They really take their time to make sure your nails are perfect.",
    author: "Emily R."
  },
  {
    text: "The new location is beautiful and the staff is as wonderful as ever.",
    author: "Jessica T."
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1632345031435-8727f68979a6?q=80&w=2070&auto=format&fit=crop",
    alt: "Luxury Salon Interior",
    type: "horizontal"
  },
  {
    url: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2070&auto=format&fit=crop",
    alt: "Detailed Nail Art",
    type: "horizontal"
  },
  {
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop",
    alt: "Manicure Process",
    type: "vertical"
  },
  {
    url: "https://images.unsplash.com/photo-1522337360705-8b13d5204394?q=80&w=2070&auto=format&fit=crop",
    alt: "Pink Gel Nails",
    type: "horizontal"
  },
  {
    url: "https://images.unsplash.com/photo-1630635468840-0ef5723b7e2b?q=80&w=1000&auto=format&fit=crop",
    alt: "Acrylic Close Up",
    type: "vertical"
  },
  {
    url: "https://images.unsplash.com/photo-1599692996168-3e6bfaa3a7e0?q=80&w=1000&auto=format&fit=crop",
    alt: "Nail Polish Collection",
    type: "vertical"
  }
];
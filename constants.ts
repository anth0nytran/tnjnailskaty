import { BusinessInfo, NeighborReview, Service } from './types';

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

export const NEIGHBOR_REVIEWS: NeighborReview[] = [
  {
    name: 'Samantha Tran',
    meta: { reviewCount: 1, photoCount: 10, when: '11 months ago', priceRange: '$60–80' },
    quote:
      "I love the two owners. They have been doing my nails for the past year. The whole staff treats me extremely well. I always get what I asked for, they are always honest about their work. My sets just progressively get more beautiful :)) The pricing will never beat anyone else I've heard of, especially with designs and how intricate the designs I want are.",
  },
  {
    name: 'Marcus Kinnard Bing',
    meta: { badges: ['Local Guide'], reviewCount: 7, photoCount: 1, when: '5 months ago', priceRange: '$40–60' },
    quote:
      "I started coming here because of a close friend’s recommendation, and I’m so glad I did. The service never fails — every visit feels just as amazing as the last. The staff are genuinely some of the kindest and most caring people I’ve ever met. They always go above and beyond to make sure I’m comfortable and happy with the results.",
  },
  {
    name: 'Leah English',
    meta: { badges: ['Local Guide'], reviewCount: 111, photoCount: 83, when: 'Edited 4 years ago' },
    quote:
      "Love getting my nails done here, and I have throughout the years on and off. I’ve been coming since 2010, and they always remember me, my family etc. Right now they only take appointments, which made me feel safer and they have a covid care certificate. Consider trying them out, and support a small family owner business!!!",
  },
  {
    name: 'Jennie Le',
    meta: { badges: ['Local Guide'], reviewCount: 24, photoCount: 14, when: 'a year ago', priceRange: '$40–60' },
    quote:
      'Jenny never misses! I love my nails — the chrome was her suggestion and she did amazing! Prices were super fair and I will never stop coming here!!!',
  },
  {
    name: 'Cazhia Jackson',
    meta: { reviewCount: 2, photoCount: 2, when: 'a year ago' },
    quote:
      'I love my nails so much and customer service is so great they get you in and out and they make you feel welcome also treat you like family I love love love going there I definitely recommend',
  },
  {
    name: 'Emily Holcomb',
    meta: { reviewCount: 2, photoCount: 1, when: 'a year ago' },
    quote:
      "I’ve been coming to T&J for 20 years! They never disappoint! Their customer service is top notch and their work is phenomenal! They’re the only place in Katy I trust to do my nails. Their work is consistent and I never leave disappointed.",
  },
  {
    name: 'Emma Rice',
    meta: { reviewCount: 3, photoCount: 1, when: 'a year ago', priceRange: '$60–80' },
    quote:
      'Ive been going here for 4 years and they never disappoint! I always bring an inspiration picture and they never fail to recreate whatever I bring to them! I will never go anywhere else.',
  },
  {
    name: 'K.K. Chase',
    meta: { reviewCount: 8, when: 'a year ago' },
    quote:
      'One of the best if not the best… beautiful nails on both hands and feet. I love that Jenny and Lynn took their time and were so detailed. I love that this is a small, couple-owned business that has been operating for 23 years. Katy should come and experience the excellence of this staff. I met customers who have been coming for over 20 years! So thankful.',
  },
  {
    name: 'Dimples Ramirez',
    meta: { badges: ['Local Guide'], reviewCount: 16, when: '6 years ago' },
    quote:
      "I showed up almost at closing time and they still took me in and my nails look beautiful!! She didn't rush, she took her time and I'm soo happy with nails! I'm so glad I got recommend here!! If my nails stay long enough I'll be coming back without a doubt.. Even tho it was a long day for them they were still happy and joking. Made it feel so welcoming.. I'm definitely telling friends of this favorite place of mine!! I'm in love with my nails!!",
  },
  {
    name: 'Elizabeth Garcia Cooper',
    meta: { badges: ['Local Guide'], reviewCount: 62, photoCount: 5, when: '3 years ago' },
    quote:
      'I love this place and have highly recommended it to many people even strangers. I sometimes work at front desk at one of the clinics I work for an most mothers ask where I get my nails done and always hand write the name address and phone number for people. I love the cost and services I get here. Sometimes feel that the visits can go by quicker but I understand beauty takes time. LOL. Ask for Jenny or Tony.!!!',
  },
  {
    name: 'Meredith St. Cyr',
    meta: { badges: ['Local Guide'], reviewCount: 23, photoCount: 2, when: '4 years ago' },
    quote:
      'I am definitely making this my new nail salon! Everyone was super nice and accommodating. I went for a pedicure and Jenny did an amazing job! I also got my eyebrows waxed by her, I have had bad experiences with getting my eyebrows waxed, but Jenny made them look perfect! I highly recommend this salon!',
  },
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
export type Review = {
  name: string;
  rating: 5;
  quote: string;
  meta?: {
    badges?: string[];
    reviewCount?: number;
    photoCount?: number;
    when?: string;
    priceRange?: string;
  };
};

export const REVIEWS: Review[] = [
  {
    name: "Samantha Tran",
    rating: 5,
    quote:
      "I love the two owners. They have been doing my nails for the past year. The whole staff treats me extremely well. I always get what I asked for, they are always honest about their work. My sets just progressively get more beautiful. The pricing will never beat anyone else I've heard of, especially with designs and how intricate the designs I want are.",
    meta: { reviewCount: 1, photoCount: 10, when: "11 months ago", priceRange: "$60–80" },
  },
  {
    name: "Marcus Kinnard Bing",
    rating: 5,
    quote:
      "I started coming here because of a close friend's recommendation, and I'm so glad I did. The service never fails — every visit feels just as amazing as the last. The staff are genuinely some of the kindest and most caring people I've ever met. They always go above and beyond to make sure I'm comfortable and happy with the results.",
    meta: { badges: ["Local Guide"], reviewCount: 7, photoCount: 1, when: "5 months ago", priceRange: "$40–60" },
  },
  {
    name: "Leah English",
    rating: 5,
    quote:
      "Love getting my nails done here, and I have throughout the years on and off. I've been coming since 2010, and they always remember me, my family etc. Consider trying them out, and support a small family-owned business!",
    meta: { badges: ["Local Guide"], reviewCount: 111, photoCount: 83, when: "Edited 4 years ago" },
  },
  {
    name: "Jennie Le",
    rating: 5,
    quote:
      "Jenny never misses! I love my nails — the chrome was her suggestion and she did amazing! Prices were super fair and I will never stop coming here.",
    meta: { badges: ["Local Guide"], reviewCount: 24, photoCount: 14, when: "a year ago", priceRange: "$40–60" },
  },
  {
    name: "Cazhia Jackson",
    rating: 5,
    quote:
      "I love my nails so much and customer service is so great. They get you in and out and they make you feel welcome — also treat you like family. I love going there. I definitely recommend.",
    meta: { reviewCount: 2, photoCount: 2, when: "a year ago" },
  },
  {
    name: "Emily Holcomb",
    rating: 5,
    quote:
      "I've been coming to T&J for 20 years! They never disappoint. Their customer service is top notch and their work is phenomenal. They're the only place in Katy I trust to do my nails. Their work is consistent and I never leave disappointed.",
    meta: { reviewCount: 2, photoCount: 1, when: "a year ago" },
  },
  {
    name: "Emma Rice",
    rating: 5,
    quote:
      "I've been going here for 4 years and they never disappoint. I always bring an inspiration picture and they never fail to recreate whatever I bring to them. I will never go anywhere else.",
    meta: { reviewCount: 3, photoCount: 1, when: "a year ago", priceRange: "$60–80" },
  },
  {
    name: "K.K. Chase",
    rating: 5,
    quote:
      "One of the best, if not the best. Beautiful nails on both hands and feet. I love that Jenny and Lynn took their time and were so detailed. I love that this is a small, couple-owned business that has been operating for 23 years. Katy should come and experience the excellence of this staff. I met customers who have been coming for over 20 years.",
    meta: { reviewCount: 8, when: "a year ago" },
  },
  {
    name: "Dimples Ramirez",
    rating: 5,
    quote:
      "I showed up almost at closing time and they still took me in and my nails look beautiful. She didn't rush, she took her time and I'm so happy with my nails. Even though it was a long day for them they were still happy and joking. Made it feel so welcoming.",
    meta: { badges: ["Local Guide"], reviewCount: 16, when: "6 years ago" },
  },
  {
    name: "Elizabeth Garcia Cooper",
    rating: 5,
    quote:
      "I love this place and have highly recommended it to many people, even strangers. I love the cost and services I get here. Ask for Jenny or Tony!",
    meta: { badges: ["Local Guide"], reviewCount: 62, photoCount: 5, when: "3 years ago" },
  },
  {
    name: "Meredith St. Cyr",
    rating: 5,
    quote:
      "I am definitely making this my new nail salon. Everyone was super nice and accommodating. I went for a pedicure and Jenny did an amazing job. I also got my eyebrows waxed by her — Jenny made them look perfect. Highly recommend.",
    meta: { badges: ["Local Guide"], reviewCount: 23, photoCount: 2, when: "4 years ago" },
  },
];

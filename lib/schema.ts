import { BUSINESS } from "./business";
import { SITE_URL } from "./seo";
import type { Article } from "./articles";

// ──────────────────────────────────────────────
// Root LocalBusiness / NailSalon (used on every page)
// ──────────────────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "NailSalon", "BeautySalon"],
    "@id": `${SITE_URL}#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Family-owned nail salon in Katy, Texas offering manicures, pedicures, dip powder, gel, builder gel overlay, Gel X extensions, acrylic, custom nail art, and waxing for over 25 years.",
    url: SITE_URL,
    telephone: BUSINESS.phoneTel,
    email: BUSINESS.email,
    image: [`${SITE_URL}/images/gallery-1.jpeg`, `${SITE_URL}/images/gallery-3.jpeg`],
    logo: `${SITE_URL}/logo.png`,
    priceRange: BUSINESS.priceRange,
    paymentAccepted: BUSINESS.paymentAccepted.join(", "),
    currenciesAccepted: "USD",
    foundingDate: `${BUSINESS.foundedYear}-01-01`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postal,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: BUSINESS.servingNeighborhoods.map((n) => ({ "@type": "City", name: n })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value.toFixed(1),
      reviewCount: BUSINESS.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [BUSINESS.socials.instagram, BUSINESS.socials.facebook, BUSINESS.socials.google],
    hasMap: BUSINESS.mapLink,
  };
}

// ──────────────────────────────────────────────
// Per-page Service schema
// ──────────────────────────────────────────────
export function serviceSchema(input: {
  name: string;
  description: string;
  slug: string;
  priceFrom: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${input.slug}#service`,
    name: input.name,
    description: input.description,
    provider: { "@id": `${SITE_URL}#business` },
    areaServed: { "@type": "City", name: "Katy, TX" },
    serviceType: input.name,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: input.priceFrom,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/services/${input.slug}`,
    },
  };
}

// ──────────────────────────────────────────────
// FAQPage schema
// ──────────────────────────────────────────────
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// ──────────────────────────────────────────────
// BreadcrumbList schema
// ──────────────────────────────────────────────
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

// ──────────────────────────────────────────────
// Review collection schema
// ──────────────────────────────────────────────
export function reviewsSchema(reviews: { name: string; rating: number; quote: string }[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
    author: { "@type": "Person", name: r.name },
    reviewBody: r.quote,
    itemReviewed: { "@id": `${SITE_URL}#business` },
  }));
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/articles/${article.slug}#article`,
    headline: article.h1,
    description: article.description,
    image: `${SITE_URL}${article.heroImage}`,
    dateModified: article.updated,
    datePublished: article.updated,
    author: { "@id": `${SITE_URL}#business` },
    publisher: { "@id": `${SITE_URL}#org` },
    mainEntityOfPage: `${SITE_URL}/articles/${article.slug}`,
    about: article.relatedServiceSlugs.map((slug) => ({ "@id": `${SITE_URL}/services/${slug}#service` })),
  };
}

// ──────────────────────────────────────────────
// Organization schema (for global brand entity)
// ──────────────────────────────────────────────
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#org`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneTel,
      contactType: "Reservations",
      areaServed: "US-TX",
      availableLanguage: ["English", "Vietnamese"],
    },
    sameAs: [BUSINESS.socials.instagram, BUSINESS.socials.facebook],
  };
}

// ──────────────────────────────────────────────
// JSON-LD <script> renderer helper (use as JSX)
// ──────────────────────────────────────────────
export function jsonLd(data: object | object[]) {
  return {
    __html: JSON.stringify(Array.isArray(data) ? data : data).replace(/</g, "\\u003c"),
  };
}

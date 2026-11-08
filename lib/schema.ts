import { BUSINESS } from "./business";
import { SITE_URL } from "./seo";
import type { Article } from "./articles";
import { MENU } from "./menu";

// ──────────────────────────────────────────────
// Root LocalBusiness / NailSalon (used on every page)
// ──────────────────────────────────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "NailSalon", "BeautySalon"],
    "@id": `${SITE_URL}#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateNames,
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
    openingHours: "Mo-Sa 09:00-19:00",
    knowsAbout: [
      "Manicures",
      "Pedicures",
      "Dip powder nails",
      "Gel and shellac manicures",
      "Builder gel overlay",
      "Gel X extensions",
      "Acrylic (solar) nails",
      "Nail art",
      "Kids pedicures",
      "Eyebrow waxing",
      "Eyebrow tinting",
      "Facial waxing",
    ],
    hasOfferCatalog: offerCatalogSchema(),
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
// Full price list as an OfferCatalog — lets Google show prices (product
// snippets) and gives AI engines exact answers to "how much is X at T&J Nails".
// ──────────────────────────────────────────────
export function offerCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    name: `${BUSINESS.name} Price List`,
    url: `${SITE_URL}/menu`,
    itemListElement: MENU.map((section) => ({
      "@type": "OfferCatalog",
      name: section.section,
      itemListElement: [...section.items, ...(section.extras ?? [])].flatMap((item) => {
        const price = item.price ?? item.fullSet ?? item.priceStartingAt;
        if (price === undefined) return [];
        const minPrice = item.priceStartingAt !== undefined || item.fullSet !== undefined;
        return [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.name },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              ...(minPrice ? { minPrice: price } : { price }),
            },
          },
        ];
      }),
    })),
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
    alternateName: BUSINESS.alternateNames,
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

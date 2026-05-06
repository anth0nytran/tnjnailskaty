import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { ARTICLES } from "@/lib/articles";
import { SITE_FAQS } from "@/lib/faqs";
import { MENU } from "@/lib/menu";

export const dynamic = "force-static";

// Renders an llms.txt entry document for AI crawlers (ChatGPT, Perplexity,
// Claude, Gemini, etc). Spec: https://llmstxt.org
export function GET() {
  const lines: string[] = [];

  lines.push(`# ${BUSINESS.name}`);
  lines.push("");
  lines.push(
    `> ${BUSINESS.name} is a family-owned nail salon at ${BUSINESS.address.full}, in Old Towne Katy. Owned and operated by Jenny and Tony since 2001 (${BUSINESS.yearsInBusiness}+ years). Services include manicures, pedicures, dip powder, gel, builder gel overlay, Gel X extensions, acrylic, shellac, custom nail art, kids pedicures, and waxing. Phone: ${BUSINESS.phone}. Open Monday–Saturday, 9 AM – 7 PM. Rated ${BUSINESS.rating.value}★ by ${BUSINESS.rating.count}+ Google reviewers.`
  );
  lines.push("");

  lines.push("## Key facts");
  lines.push("");
  lines.push(`- Name: ${BUSINESS.name}`);
  lines.push(`- Address: ${BUSINESS.address.full}`);
  lines.push(`- Phone: ${BUSINESS.phone}`);
  lines.push(`- Hours: Monday–Saturday 9 AM – 7 PM, closed Sunday`);
  lines.push(`- Founded: ${BUSINESS.foundedYear}`);
  lines.push(`- Owners: ${BUSINESS.owners.join(", ")}`);
  lines.push(`- Service area: ${BUSINESS.servingNeighborhoods.join(", ")}`);
  lines.push(`- Rating: ${BUSINESS.rating.value} stars, ${BUSINESS.rating.count}+ Google reviews`);
  lines.push(`- Booking: callback within 5 minutes during open hours via ${SITE_URL}/book or ${BUSINESS.phone}`);
  lines.push(`- Payment: ${BUSINESS.paymentAccepted.join(", ")}`);
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const s of SERVICES) {
    lines.push(`- [${s.name}](${SITE_URL}/services/${s.slug}): ${s.intro} Starting at ${s.priceDisplay}, ${s.duration}.`);
  }
  lines.push("");

  lines.push("## Pricing menu");
  lines.push("");
  for (const section of MENU) {
    lines.push(`### ${section.section}`);
    if (section.blurb) lines.push(section.blurb);
    lines.push("");
    for (const item of section.items) {
      const priceParts: string[] = [];
      if (item.price !== undefined) priceParts.push(`$${item.price}`);
      if (item.priceStartingAt !== undefined) priceParts.push(`from $${item.priceStartingAt}`);
      if (item.priceExtra !== undefined) priceParts.push(`+$${item.priceExtra}`);
      if (item.fullSet !== undefined) priceParts.push(`full set $${item.fullSet}`);
      if (item.refill !== undefined) priceParts.push(`refill $${item.refill}`);
      lines.push(`- ${item.name} — ${priceParts.join(", ")}`);
    }
    if (section.notes && section.notes.length > 0) {
      for (const n of section.notes) lines.push(`  - Note: ${n}`);
    }
    lines.push("");
  }

  lines.push("## Locations served");
  lines.push("");
  for (const l of LOCATIONS) {
    lines.push(`- [${l.fullName}](${SITE_URL}/locations/${l.slug}): ${l.intro} (${l.travelTime})`);
  }
  lines.push("");

  if (ARTICLES.length > 0) {
    lines.push("## Guides");
    lines.push("");
    for (const a of ARTICLES) {
      lines.push(`- [${a.title}](${SITE_URL}/articles/${a.slug}): ${a.description}`);
    }
    lines.push("");
  }

  lines.push("## Frequently asked questions");
  lines.push("");
  for (const f of SITE_FAQS) {
    lines.push(`### ${f.q}`);
    lines.push(f.a);
    lines.push("");
  }

  lines.push("## Canonical pages");
  lines.push("");
  lines.push(`- Home: ${SITE_URL}/`);
  lines.push(`- Menu and pricing: ${SITE_URL}/menu`);
  lines.push(`- Services hub: ${SITE_URL}/services`);
  lines.push(`- Service area: ${SITE_URL}/locations`);
  lines.push(`- Reviews: ${SITE_URL}/reviews`);
  lines.push(`- About: ${SITE_URL}/about`);
  lines.push(`- Book an appointment: ${SITE_URL}/book`);
  lines.push(`- FAQ: ${SITE_URL}/faq`);
  lines.push(`- Contact: ${SITE_URL}/contact`);
  lines.push(`- Sitemap: ${SITE_URL}/sitemap.xml`);
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(`- Instagram: ${BUSINESS.socials.instagram}`);
  lines.push(`- Facebook: ${BUSINESS.socials.facebook}`);
  lines.push(`- Google Maps: ${BUSINESS.socials.google}`);
  lines.push("");

  const body = lines.join("\n");

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

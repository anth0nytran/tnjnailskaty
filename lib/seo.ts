import type { Metadata } from "next";
import { BUSINESS } from "./business";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? BUSINESS.siteUrl;

// Note: when no `image` is passed, Next.js falls back to the dynamically
// generated /opengraph-image (see app/opengraph-image.tsx) automatically.
export function buildMetadata(input: {
  title: string;
  description: string;
  path?: string; // e.g. "/services/dip-powder-nails"
  image?: string; // optional override (must be absolute or rooted)
  noindex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${input.path ?? ""}`;
  const customImage = input.image
    ? [{ url: input.image, width: 1200, height: 630, alt: BUSINESS.name }]
    : undefined;

  return {
    title: input.title,
    description: input.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    openGraph: {
      type: "website",
      url,
      title: input.title,
      description: input.description,
      siteName: BUSINESS.name,
      ...(customImage && { images: customImage }),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      ...(input.image && { images: [input.image] }),
    },
  };
}

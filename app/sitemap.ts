import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { ARTICLES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/menu", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/reviews", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/book", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/articles", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...LOCATIONS.map((l) => ({
      url: `${SITE_URL}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...ARTICLES.map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: new Date(article.updated),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}

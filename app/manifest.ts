import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BUSINESS.name} — Katy, TX`,
    short_name: BUSINESS.name,
    description:
      "Family-owned nail salon in Katy, TX. Manicures, pedicures, dip powder, gel, acrylic, and custom nail art.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F3",
    theme_color: "#1A1A1A",
    orientation: "portrait",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
    categories: ["beauty", "lifestyle", "shopping"],
  };
}

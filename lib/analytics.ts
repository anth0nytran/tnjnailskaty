// Typed event names + props for Vercel Analytics.
// Use the helper exported below to keep tracking consistent across the site.
//
// Usage:
//   import { trackEvent } from "@/lib/analytics";
//   trackEvent("phone_call_clicked", { source: "header" });
//
// See dashboard at https://vercel.com/<team>/<project>/analytics/events

import { track } from "@vercel/analytics";

export type TrackSource =
  | "announcement_bar"
  | "header"
  | "header_mobile_drawer"
  | "footer"
  | "hero"
  | "hero_cta"
  | "nap_block"
  | "service_page"
  | "service_card"
  | "location_page"
  | "location_card"
  | "menu_page"
  | "contact_page"
  | "book_page"
  | "about_page"
  | "faq_page"
  | "reviews_page"
  | "reviews_section"
  | "article"
  | "form_success_state";

type EventMap = {
  // Lead funnel
  quote_form_started: { source: TrackSource; service?: string };
  quote_form_submitted: { services_count: number; service_categories: string };
  quote_form_succeeded: { services_count: number };
  quote_form_failed: { reason: string };

  // High-intent conversion clicks
  phone_call_clicked: { source: TrackSource };
  book_cta_clicked: { source: TrackSource; label?: string };
  directions_clicked: { source: TrackSource };

  // Outbound traffic (attribution)
  google_reviews_clicked: { source: TrackSource };
  social_clicked: { source: TrackSource; network: "instagram" | "facebook" };

  // Content engagement
  service_card_clicked: { slug: string; source: TrackSource };
  related_service_clicked: { from_slug: string; to_slug: string };
  guide_clicked: { slug: string; source: TrackSource };
};

export function trackEvent<K extends keyof EventMap>(
  name: K,
  props: EventMap[K]
) {
  // The Vercel SDK accepts string props at runtime — coerce safely.
  const safeProps: Record<string, string | number | boolean | null> = {};
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined) continue;
    if (typeof v === "string" || typeof v === "number" || typeof v === "boolean" || v === null) {
      safeProps[k] = v;
    } else {
      safeProps[k] = String(v);
    }
  }
  track(name, safeProps);
}

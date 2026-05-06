// Captures the marketing attribution for the current visitor — silently.
// Runs client-side, persists in sessionStorage, and is read back when the
// quote form is submitted. The salon sees it appended at the bottom of the
// booking email.
//
// What we capture:
//   - First-touch UTM parameters (source/medium/campaign/content/term)
//   - First-touch referrer (Yelp, Google, TikTok, Instagram, Facebook, etc.)
//   - First-touch landing page (the page they arrived on)
//   - Last-touch page (the page they were on when they submitted)
//   - User agent + screen
//
// "First touch" means the very first pageview in this browser tab/session.
// We won't overwrite it on subsequent navigation, so if someone clicks a
// Google ad and then browses around, the email still says they came from
// Google.

export type Attribution = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer?: string;
  referrerHost?: string;
  channel?: string; // best-guess channel grouping
  landingPath?: string;
  capturedAt?: string; // ISO
};

const KEY = "tj_attr_v1";

// Hosts → channel labels we care about for marketing attribution.
const REFERRER_RULES: { test: RegExp; channel: string }[] = [
  { test: /(^|\.)yelp\./i, channel: "Yelp" },
  { test: /(^|\.)tiktok\./i, channel: "TikTok" },
  { test: /(^|\.)instagram\./i, channel: "Instagram" },
  { test: /(^|\.)facebook\.|(^|\.)fb\./i, channel: "Facebook" },
  { test: /(^|\.)l\.facebook\./i, channel: "Facebook" },
  { test: /(^|\.)m\.facebook\./i, channel: "Facebook" },
  { test: /(^|\.)pinterest\./i, channel: "Pinterest" },
  { test: /(^|\.)reddit\./i, channel: "Reddit" },
  { test: /(^|\.)x\.com|(^|\.)twitter\./i, channel: "X / Twitter" },
  { test: /(^|\.)linkedin\./i, channel: "LinkedIn" },
  { test: /(^|\.)youtube\.|(^|\.)youtu\.be/i, channel: "YouTube" },
  { test: /(^|\.)nextdoor\./i, channel: "Nextdoor" },
  { test: /(^|\.)bing\./i, channel: "Bing" },
  { test: /(^|\.)duckduckgo\./i, channel: "DuckDuckGo" },
  { test: /(^|\.)google\./i, channel: "Google" },
  { test: /(^|\.)maps\.google\./i, channel: "Google Maps" },
  { test: /(^|\.)search\.brave\./i, channel: "Brave Search" },
  { test: /(^|\.)perplexity\./i, channel: "Perplexity" },
  { test: /(^|\.)chatgpt\.|(^|\.)chat\.openai\./i, channel: "ChatGPT" },
  { test: /(^|\.)claude\.|(^|\.)anthropic\./i, channel: "Claude" },
  { test: /(^|\.)gemini\.google\./i, channel: "Gemini" },
];

function classifyReferrer(host: string | undefined, utmSource?: string): string {
  if (utmSource) {
    const s = utmSource.toLowerCase();
    if (s.includes("yelp")) return "Yelp";
    if (s.includes("tiktok") || s.includes("tt")) return "TikTok";
    if (s.includes("ig") || s.includes("instagram")) return "Instagram";
    if (s.includes("fb") || s.includes("facebook") || s.includes("meta")) return "Facebook";
    if (s.includes("google") || s === "g") return "Google";
    if (s.includes("bing")) return "Bing";
    if (s.includes("nextdoor")) return "Nextdoor";
    if (s.includes("email") || s.includes("newsletter")) return "Email";
    if (s.includes("qr")) return "QR Code";
    return utmSource; // honor whatever the campaign tagged it as
  }
  if (!host) return "Direct / Bookmark";
  for (const { test, channel } of REFERRER_RULES) {
    if (test.test(host)) return channel;
  }
  return host;
}

function safeUrl(input: string): URL | null {
  try {
    return new URL(input);
  } catch {
    return null;
  }
}

// Run once per session, on the FIRST page the user lands on.
export function captureAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;

  // Already captured this session — keep first-touch intact
  try {
    const existing = window.sessionStorage.getItem(KEY);
    if (existing) return JSON.parse(existing) as Attribution;
  } catch {
    // sessionStorage might be blocked; fall through
  }

  const url = new URL(window.location.href);
  const params = url.searchParams;
  const referrer = document.referrer || undefined;
  const referrerHost = referrer ? safeUrl(referrer)?.hostname : undefined;

  // Don't count internal navigation as a referrer
  const cleanReferrerHost =
    referrerHost && referrerHost !== url.hostname ? referrerHost : undefined;

  const utmSource = params.get("utm_source") ?? undefined;
  const utmMedium = params.get("utm_medium") ?? undefined;
  const utmCampaign = params.get("utm_campaign") ?? undefined;
  const utmContent = params.get("utm_content") ?? undefined;
  const utmTerm = params.get("utm_term") ?? undefined;

  // Convenience: a `?ref=qr` style param marks QR-code traffic for the menu
  const refParam = params.get("ref") ?? params.get("source") ?? undefined;

  const attribution: Attribution = {
    utmSource: utmSource ?? refParam ?? undefined,
    utmMedium: utmMedium ?? undefined,
    utmCampaign: utmCampaign ?? undefined,
    utmContent: utmContent ?? undefined,
    utmTerm: utmTerm ?? undefined,
    referrer: cleanReferrerHost ? referrer : undefined,
    referrerHost: cleanReferrerHost,
    channel: classifyReferrer(cleanReferrerHost, utmSource ?? refParam),
    landingPath: url.pathname + (url.search || ""),
    capturedAt: new Date().toISOString(),
  };

  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(attribution));
  } catch {
    // ignore — best effort
  }

  return attribution;
}

export function readAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

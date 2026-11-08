import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/seo";
import { jsonLd, localBusinessSchema, organizationSchema } from "@/lib/schema";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AttributionTracker from "@/components/AttributionTracker";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Best Nail Salon in Katy, TX 77493 - 25+ Years Family-Owned`,
    template: `%s | ${BUSINESS.name} - Katy, TX`,
  },
  description:
    "Top-rated nail salon in Katy, TX. Manicures, pedicures, dip powder, gel, acrylic, and custom nail art. Family-owned for 25+ years. 4.9 stars on Google. (281) 391-1411.",
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  generator: "Next.js",
  keywords: [
    "nail salon Katy",
    "nail salon Katy TX",
    "best nail salon Katy",
    "nail salon 77493",
    "dip powder Katy",
    "gel manicure Katy",
    "pedicure Katy",
    "acrylic nails Katy",
    "T&J Nails",
    "nail salon Cinco Ranch",
    "nail salon Fulshear",
    "nail salon Elyson",
  ],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd([organizationSchema(), localBusinessSchema()])}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-ivory text-charcoal">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[3px] focus:bg-charcoal focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Skip to main content
        </a>
        <AttributionTracker />
        <AnnouncementBar />
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

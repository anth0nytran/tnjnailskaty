import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/seo";
import { jsonLd, localBusinessSchema, organizationSchema } from "@/lib/schema";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={jsonLd([organizationSchema(), localBusinessSchema()])}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-ivory text-charcoal">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

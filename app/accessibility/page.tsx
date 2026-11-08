import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Accessibility Statement | T&J Nails Katy, TX",
  description:
    "T&J Nails is committed to making tjnailskaty.com usable for everyone, including people who use screen readers, keyboards, or other assistive technology.",
  path: "/accessibility",
});

const UPDATED = "November 8, 2026";

export default function AccessibilityPage() {
  return (
    <>
      <script
        id="ld-accessibility"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Accessibility", path: "/accessibility" },
          ])
        )}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Accessibility", path: "/accessibility", current: true },
            ]}
          />
        </div>
        <div className="container-x pb-14 pt-6">
          <p className="eyebrow">Last reviewed {UPDATED}</p>
          <h1 className="mt-5 page-title">Accessibility Statement</h1>
          <p className="mt-7 max-w-2xl lede">
            We want everyone to be able to find our hours, see our prices, and book an appointment — however you use
            the web.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad">
          <div className="prose prose-stone max-w-3xl prose-headings:font-display prose-headings:font-normal prose-a:text-clay-700">
            <h2>Our goal</h2>
            <p>
              {BUSINESS.name} aims to meet the{" "}
              <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noreferrer noopener">
                Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
              </a>
              . These guidelines explain how to make websites easier to use for people with disabilities, including
              people who are blind or have low vision, are deaf or hard of hearing, or have motor or cognitive
              disabilities.
            </p>

            <h2>What we&apos;ve done</h2>
            <ul>
              <li>A &ldquo;Skip to main content&rdquo; link and a consistent page structure with headings and landmarks</li>
              <li>Every page works with a keyboard alone, with a visible focus outline</li>
              <li>Form fields have labels, required fields are announced, and errors are read out by screen readers</li>
              <li>Text and buttons meet WCAG color-contrast ratios</li>
              <li>Images have text descriptions, and decorative icons are hidden from screen readers</li>
              <li>Pages reflow on phones and still work when text is enlarged up to 200%</li>
              <li>Parallax and motion effects turn off when your device is set to reduce motion</li>
              <li>Prices, hours, and services are written as real text, not pictures of text</li>
            </ul>

            <h2>Known limitations</h2>
            <ul>
              <li>
                The embedded Google Maps on our home and contact pages are provided by Google and may not be fully
                accessible. Our full address and a text &ldquo;Get directions&rdquo; link are always shown next to
                the map.
              </li>
              <li>
                Links to Instagram, Facebook, and Google reviews go to third-party sites we don&apos;t control.
              </li>
            </ul>

            <h2>Need help or found a problem?</h2>
            <p>
              If anything on this site is hard to use, please tell us and we&apos;ll fix it or help you another way.
              You can always book, ask about prices, or get directions by phone.
            </p>
            <ul>
              <li>
                Phone: <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a> (Mon–Sat, 9 AM – 7 PM)
              </li>
              <li>
                Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </li>
              <li>In person: {BUSINESS.address.full}</li>
            </ul>
            <p>
              Please tell us the page and what went wrong, and we&apos;ll get back to you as quickly as we can.
            </p>

            <h2>At the salon</h2>
            <p>
              If you need an accommodation during your visit, call ahead and let us know — we&apos;re happy to help.
            </p>

            <p>
              See also our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

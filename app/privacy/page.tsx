import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Privacy Policy | T&J Nails Katy, TX",
  description:
    "How T&J Nails collects, uses, and protects the information you share when you request an appointment on tjnailskaty.com.",
  path: "/privacy",
});

const EFFECTIVE = "November 8, 2026";

// Keep this page in sync with what the code actually does:
// - components/QuoteForm.tsx + app/api/quote/route.ts (form fields, IP, user agent)
// - lib/attribution.ts (sessionStorage "how you found us")
// - @vercel/analytics (cookieless analytics)
// - Google Maps iframes on / and /contact
export default function PrivacyPage() {
  return (
    <>
      <script
        id="ld-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ])
        )}
      />

      <section className="page-hero">
        <div className="container-x pb-6 pt-2">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Privacy Policy", path: "/privacy", current: true },
            ]}
          />
        </div>
        <div className="container-x pb-14 pt-6">
          <p className="eyebrow">Effective {EFFECTIVE}</p>
          <h1 className="mt-5 page-title">Privacy Policy</h1>
          <p className="mt-7 max-w-2xl lede">
            We&apos;re a family-owned nail salon. We only collect what we need to book your appointment, we never sell
            your information, and we don&apos;t use advertising cookies.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-x section-pad">
          <div className="prose prose-stone max-w-3xl prose-headings:font-display prose-headings:font-normal prose-a:text-clay-700">
            <h2>Who we are</h2>
            <p>
              {BUSINESS.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates tjnailskaty.com and the salon at{" "}
              {BUSINESS.address.full}. Questions about this policy: call{" "}
              <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a> or email{" "}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
            </p>

            <h2>Information you give us</h2>
            <p>When you submit the appointment request form, we collect:</p>
            <ul>
              <li>Your name, phone number, and email address</li>
              <li>Your preferred date, time, and the services you select</li>
              <li>Anything you write in the notes field</li>
            </ul>
            <p>
              If you call, text, or email us, we receive whatever you choose to share in that conversation.
            </p>

            <h2>Information collected automatically</h2>
            <ul>
              <li>
                <strong>Technical details with your request.</strong> When you submit the form, our server receives
                your IP address and browser type (user agent). We use these to block spam and abuse, and they are
                included in the booking email we receive.
              </li>
              <li>
                <strong>How you found us.</strong> When you arrive on the site, your browser keeps a short note of the
                website or campaign link that sent you (for example Google, Instagram, or a QR code) and the first page
                you visited. It&apos;s stored in your browser&apos;s session storage, is deleted when you close the tab,
                and is only sent to us if you submit the appointment form.
              </li>
              <li>
                <strong>Site analytics.</strong> We use Vercel Web Analytics to count page views and button clicks
                (such as &ldquo;Call&rdquo; or &ldquo;Book&rdquo;). It does not use cookies, does not identify you
                personally, and does not track you across other websites.
              </li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our own website does not set cookies. Pages that show an embedded Google Map (the home page and the
              contact page) load the map from Google, and Google may set its own cookies or collect usage data under
              the{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer noopener">
                Google Privacy Policy
              </a>
              . Links to Instagram, Facebook, and Google take you to those sites, which have their own policies.
            </p>

            <h2>How we use your information</h2>
            <ul>
              <li>To call, text, or email you about the appointment you requested</li>
              <li>To prepare for your visit (services, timing, special requests)</li>
              <li>To understand which ads, listings, or pages bring in bookings</li>
              <li>To keep the site secure and stop spam</li>
            </ul>
            <p>
              We only contact you about the appointment you requested. We do not send marketing texts or emails
              unless you separately ask us to.
            </p>

            <h2>Who we share it with</h2>
            <p>
              We do not sell your personal information, and we do not share it for targeted advertising. We use a
              small number of service providers who handle data only so we can run the website:
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> — website hosting and cookieless analytics
              </li>
              <li>
                <strong>Resend</strong> — delivers the appointment-request email to our salon inbox
              </li>
              <li>
                <strong>Google</strong> — embedded maps
              </li>
            </ul>
            <p>We may also disclose information if required by law.</p>

            <h2>How long we keep it</h2>
            <p>
              Appointment requests are kept in our email inbox for as long as we need them to serve you and keep
              normal business records. Ask us any time and we&apos;ll delete your request.
            </p>

            <h2>Your choices and rights</h2>
            <p>
              You can ask us to show you, correct, or delete the personal information we have about you by calling{" "}
              <a href={`tel:${BUSINESS.phoneTel}`}>{BUSINESS.phone}</a> or emailing{" "}
              <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>. We won&apos;t treat you differently for
              asking. Because we don&apos;t sell personal data or use it for targeted ads, there is nothing to opt
              out of — and browser signals such as Global Privacy Control are respected by default.
            </p>

            <h2>Children</h2>
            <p>
              This website is meant for adults. We don&apos;t knowingly collect personal information from children
              under 13 — parents or guardians book kids&apos; services for them.
            </p>

            <h2>Security</h2>
            <p>
              The site is served over HTTPS, and form submissions are sent encrypted. No method of transmission is
              perfectly secure, so please don&apos;t include sensitive information (like payment card or medical
              details) in the notes field.
            </p>

            <h2>Changes</h2>
            <p>
              If we change this policy, we&apos;ll update it on this page and change the effective date above.
            </p>

            <p>
              See also our <Link href="/accessibility">Accessibility Statement</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-quiet">
      <div className="container-x section-pad grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="font-display text-4xl leading-none text-ivory">
            T<span className="text-gold-400">&amp;</span>J Nails
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-quiet/90">
            Family-owned nail care in Katy, Texas for over 25 years. Jenny and Tony still work the floor every day.
          </p>
          <div className="mt-6 flex gap-2">
            <a
              href={BUSINESS.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/10 transition-colors hover:border-gold-400 hover:text-gold-300"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a
              href={BUSINESS.socials.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/10 transition-colors hover:border-gold-400 hover:text-gold-300"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <FooterColumn title="Visit">
          <li className="flex gap-3">
            <MapPin size={15} className="mt-1 shrink-0 text-gold-300" />
            <a href={BUSINESS.mapLink} target="_blank" rel="noreferrer noopener" className="hover:text-gold-200">
              {BUSINESS.address.street}
              <br />
              {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postal}
            </a>
          </li>
          <li className="flex gap-3">
            <Phone size={15} className="mt-1 shrink-0 text-gold-300" />
            <a href={`tel:${BUSINESS.phoneTel}`} className="hover:text-gold-200">
              {BUSINESS.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <Clock size={15} className="mt-1 shrink-0 text-gold-300" />
            <span>
              Mon–Sat · 9 AM – 7 PM
              <br />
              Sunday closed
            </span>
          </li>
        </FooterColumn>

        <FooterColumn title="Services">
          <li><Link href="/services/dip-powder-nails">Dip Powder Nails</Link></li>
          <li><Link href="/services/gel-manicure">Gel Manicure</Link></li>
          <li><Link href="/services/shellac-nails">Shellac Nails</Link></li>
          <li><Link href="/services/pedicure">Pedicure</Link></li>
          <li><Link href="/services/manicure">Manicure</Link></li>
          <li><Link href="/services/acrylic-nails">Acrylic Nails</Link></li>
          <li><Link href="/services/nail-art">Custom Nail Art</Link></li>
          <li><Link href="/services/waxing">Waxing</Link></li>
        </FooterColumn>

        <FooterColumn title="Local">
          <li><Link href="/locations/katy-tx">Katy, TX</Link></li>
          <li><Link href="/locations/cinco-ranch">Cinco Ranch</Link></li>
          <li><Link href="/locations/fulshear">Fulshear</Link></li>
          <li><Link href="/locations/elyson">Elyson</Link></li>
          <li><Link href="/locations/katy-77493">Old Towne Katy 77493</Link></li>
          <li className="pt-3"><Link href="/book">Request appointment</Link></li>
          <li><Link href="/articles">Nail care guides</Link></li>
          <li><Link href="/menu">Menu &amp; pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-[10px] uppercase tracking-[0.18em] text-stone-quiet/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} T&amp;J Nails Katy. All rights reserved.</p>
          <p>5304 E 5th St Ste 105 - Katy, TX 77493</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-ivory">{title}</h4>
      <ul className="space-y-3 text-sm leading-6 [&_a]:transition-colors [&_a:hover]:text-gold-200">{children}</ul>
    </div>
  );
}

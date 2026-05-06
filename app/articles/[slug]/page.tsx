import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, Phone } from "lucide-react";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import { getServiceBySlug } from "@/lib/services";
import { BUSINESS } from "@/lib/business";
import { articleSchema, breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: `${article.title} | T&J Nails Katy`,
    description: article.description,
    path: `/articles/${article.slug}`,
    image: article.heroImage,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const services = article.relatedServiceSlugs.map(getServiceBySlug).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const relatedArticles = article.relatedArticleSlugs.map(getArticleBySlug).filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <Script
        id={`ld-article-${article.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd([
          articleSchema(article),
          faqSchema(article.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Articles", path: "/articles" },
            { name: article.shortTitle, path: `/articles/${article.slug}` },
          ]),
        ])}
      />

      <article>
        <section className="page-hero">
          <div className="container-x pb-6">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Articles", path: "/articles" },
                { name: article.shortTitle, path: `/articles/${article.slug}`, current: true },
              ]}
            />
          </div>

          <div className="container-x grid gap-10 pb-16 pt-4 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">{article.category} - {article.readingTime} - Updated {formatDate(article.updated)}</p>
              <h1 className="mt-4 page-title">{article.h1}</h1>
              <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-stone-warm">{article.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/book" className="btn-primary">Request appointment</Link>
                <a href={`tel:${BUSINESS.phoneTel}`} className="btn-secondary">
                  <Phone size={14} className="text-clay-700" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <Image
                src={article.heroImage}
                alt={article.title}
                width={720}
                height={860}
                priority
                className="aspect-[4/5] w-full rounded-[6px] object-cover shadow-[0_28px_80px_rgba(26,26,26,0.14)]"
              />
            </div>
          </div>
        </section>

        <section className="bg-ivory">
          <div className="container-x section-pad grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="max-w-3xl">
              <div className="rounded-[6px] border border-charcoal/10 bg-sage-50 p-6">
                <h2 className="font-display text-2xl text-charcoal">Quick takeaways</h2>
                <ul className="mt-4 grid gap-3">
                  {article.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3 text-sm leading-6 text-stone-warm">
                      <Check size={16} className="mt-1 shrink-0 text-clay-700" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 space-y-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-3xl leading-tight text-charcoal">{section.heading}</h2>
                    <div className="mt-4 space-y-4 text-[17px] font-light leading-8 text-stone-warm">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <section className="mt-12">
                <h2 className="font-display text-3xl leading-tight text-charcoal">Questions answered in this guide</h2>
                <div className="mt-4">
                  <FAQAccordion faqs={article.faqs} />
                </div>
              </section>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="card-soft p-6">
                <h2 className="font-display text-2xl text-charcoal">Related services</h2>
                <div className="mt-4 grid gap-3">
                  {services.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="group border-b border-charcoal/10 pb-3 last:border-0">
                      <p className="font-display text-lg text-charcoal group-hover:text-clay-700">{service.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-warm">
                        {priceLabel(service.priceDisplay)} - {service.duration}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="card-soft p-6">
                <h2 className="font-display text-2xl text-charcoal">Keep reading</h2>
                <div className="mt-4 grid gap-3">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/articles/${related.slug}`} className="group flex items-center justify-between gap-4 border-b border-charcoal/10 pb-3 last:border-0">
                      <span className="text-sm font-medium leading-6 text-charcoal group-hover:text-clay-700">{related.shortTitle}</span>
                      <ArrowRight size={13} className="shrink-0 text-clay-700" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[6px] bg-charcoal p-6 text-ivory">
                <p className="eyebrow-on-dark">Book locally</p>
                <h2 className="mt-3 font-display text-2xl leading-tight">Need help choosing?</h2>
                <p className="mt-3 text-sm leading-6 text-stone-quiet">
                  Tell us your nail goals and timing. Jenny or Tony will confirm the right service before your visit.
                </p>
                <Link href="/book" className="mt-5 btn-primary-dark w-full">Request appointment</Link>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

function priceLabel(priceDisplay: string) {
  return priceDisplay.toLowerCase().startsWith("from") ? priceDisplay : `From ${priceDisplay}`;
}

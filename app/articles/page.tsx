import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, BookOpen } from "lucide-react";
import { ARTICLES } from "@/lib/articles";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Nail Care Guides in Katy, TX | T&J Nails Articles",
  description:
    "Useful nail care guides from T&J Nails in Katy, TX. Compare dip, gel, acrylic, pedicures, sanitation, nail art pricing, and first-visit tips.",
  path: "/articles",
});

export default function ArticlesPage() {
  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  return (
    <>
      <Script
        id="ld-articles"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Articles", path: "/articles" },
          ])
        )}
      />

      <section className="page-hero">
        <div className="container-x pb-6">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Articles", path: "/articles", current: true }]} />
        </div>
        <div className="container-x grid gap-10 pb-16 pt-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow">Nail care articles</p>
            <h1 className="mt-4 page-title">Helpful nail guides for Katy clients.</h1>
            <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-stone-warm">
              Practical articles on choosing a service, understanding pricing, protecting nail health, and planning a
              first visit to T&amp;J Nails.
            </p>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <div className="rounded-[6px] border border-charcoal/10 bg-white/60 p-6">
              <BookOpen size={22} className="text-clay-700" />
              <p className="mt-4 font-display text-2xl leading-tight text-charcoal">Built for real booking questions.</p>
              <p className="mt-2 text-sm leading-6 text-stone-warm">No filler posts. Every guide links to a service, price, or local decision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="container-x section-pad">
          <Link href={`/articles/${featured.slug}`} className="group grid gap-8 rounded-[6px] border border-charcoal/10 bg-white/60 p-4 transition-all hover:border-clay-500/40 hover:bg-white lg:grid-cols-2 lg:p-6">
            <Image
              src={featured.heroImage}
              alt={featured.title}
              width={720}
              height={520}
              className="aspect-[4/3] w-full rounded-[4px] object-cover"
            />
            <div className="flex flex-col justify-center p-2 lg:p-6">
              <p className="eyebrow">{featured.category} - {featured.readingTime}</p>
              <h2 className="mt-4 section-title">{featured.title}</h2>
              <p className="mt-5 lede">{featured.description}</p>
              <span className="mt-8 text-link">
                Read guide <ArrowRight size={13} />
              </span>
            </div>
          </Link>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleCard({ article }: { article: (typeof ARTICLES)[number] }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group card-soft overflow-hidden">
      <Image
        src={article.heroImage}
        alt={article.title}
        width={520}
        height={360}
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay-700">
          {article.category} - {article.readingTime}
        </p>
        <h2 className="mt-4 font-display text-2xl leading-tight text-charcoal">{article.shortTitle}</h2>
        <p className="mt-3 text-sm font-light leading-6 text-stone-warm">{article.description}</p>
        <span className="mt-5 text-link">
          Read more <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}

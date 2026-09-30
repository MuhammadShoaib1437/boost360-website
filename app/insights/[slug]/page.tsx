import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { BlogCard } from "@/components/ui/Cards";
import { Icons } from "@/components/ui/icons";
import { INSIGHT_POSTS } from "@/lib/data-content";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return INSIGHT_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = INSIGHT_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${SITE_NAME} Insights`,
    description: post.metaDescription,
    alternates: { canonical: `/insights/${post.slug}` },
  };
}

export default async function InsightPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = INSIGHT_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = [
    ...INSIGHT_POSTS.filter(
      (p) => p.slug !== post.slug && p.category === post.category,
    ),
    ...INSIGHT_POSTS.filter(
      (p) => p.slug !== post.slug && p.category !== post.category,
    ),
  ].slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: SITE_NAME },
    datePublished: post.date,
    url: `${SITE_URL}/insights/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-white pb-20 sm:pb-24">
        <Container className="max-w-3xl">
          <div className="pt-10">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/insights" },
                { label: post.title.length > 48 ? `${post.title.slice(0, 48)}…` : post.title },
              ]}
            />
          </div>

          <Reveal>
            <header className="mt-8">
              <span className="inline-flex items-center rounded-full border border-electric/25 bg-electric/[0.06] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                {post.category}
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                <span className="font-semibold text-ink">{post.author}</span>
                <span aria-hidden="true" className="text-muted/50">·</span>
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden="true" className="text-muted/50">·</span>
                <span>{post.readingTime}</span>
              </div>
            </header>
          </Reveal>

          {/* Table of contents */}
          <Reveal delay={80}>
            <nav
              aria-label="Table of contents"
              className="mt-10 rounded-2xl border border-[rgba(15,70,130,0.12)] bg-mist p-6 sm:p-7"
            >
              <h2 className="text-sm font-extrabold uppercase tracking-[0.18em] text-brand">
                Table of contents
              </h2>
              <ol className="mt-4 space-y-2.5">
                {post.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-brand"
                    >
                      <span className="text-gradient text-xs font-extrabold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="underline-offset-4 group-hover:underline">
                        {section.h2}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>

          {/* Article */}
          <article className="mt-12">
            {post.sections.map((section, i) => (
              <Reveal key={i} delay={0}>
                <div id={`section-${i}`} className="mt-12 scroll-mt-24 first:mt-0">
                  <h2 className="text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-[28px]">
                    {section.h2}
                  </h2>
                  {section.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="mt-5 text-[16.5px] leading-[1.85] text-muted"
                    >
                      {para}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-6 space-y-3.5">
                      {section.bullets.map((bullet, k) => (
                        <li
                          key={k}
                          className="flex items-start gap-3 text-[16px] leading-relaxed text-ink"
                        >
                          <Icons.check className="mt-1 h-5 w-5 shrink-0 text-growth" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </article>

          {/* Author box */}
          <Reveal>
            <div className="mt-14 flex items-start gap-5 rounded-2xl border border-[rgba(15,70,130,0.12)] bg-mist p-6 sm:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-electric text-xl font-extrabold text-white">
                B3
              </span>
              <div>
                <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand">
                  Written by
                </p>
                <p className="mt-1.5 text-lg font-bold tracking-tight text-ink">
                  The Boost360Pro Team
                </p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  We work with marketplace sellers every day — on listings,
                  catalogs, SEO and account health. These guides come from that
                  hands-on work.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Keep reading
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {related.map((r, i) => (
                  <BlogCard key={r.slug} post={r} delay={i * 90} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
      <CTASection />
    </>
  );
}

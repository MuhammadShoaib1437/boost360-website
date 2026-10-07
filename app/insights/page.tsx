import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { BlogCard } from "@/components/ui/Cards";
import { Icons } from "@/components/ui/icons";
import { INSIGHT_POSTS, INSIGHT_CATEGORIES } from "@/lib/data-content";

export const metadata = {
  title: "Insights for Online Sellers",
  description:
    "Practical guides for marketplace sellers: Marketplace SEO, Amazon, Etsy, eBay, advertising and e-commerce growth — written by the Boost360Pro team.",
  alternates: { canonical: "/insights" },
};

function slugify(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export default function InsightsPage() {
  const categoriesWithPosts = INSIGHT_CATEGORIES.filter((c) =>
    INSIGHT_POSTS.some((p) => p.category === c),
  );
  return (
    <>
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-abyss">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -top-32 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-electric/15 blur-[130px]" />
          <div className="absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-ice/10 blur-[110px]" />
        </div>
        <Container className="relative py-14 sm:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <Badge dark>Insights</Badge>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Insights for{" "}
                <span className="text-gradient">Online Sellers.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Practical guides on marketplace SEO, listing optimization,
                account health and e-commerce growth — written from real
                operational experience, not recycled theory.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section className="bg-white">
        {/* Category anchor chips */}
        <nav aria-label="Browse by category">
          <div className="flex flex-wrap gap-3">
            {INSIGHT_CATEGORIES.map((category) => {
              const hasPosts = INSIGHT_POSTS.some((p) => p.category === category);
              const chipClass =
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold";
              if (hasPosts) {
                return (
                  <a
                    key={category}
                    href={`#cat-${slugify(category)}`}
                    className={`${chipClass} border-electric/25 bg-electric/[0.06] text-brand transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:shadow-[0_12px_28px_-14px_rgba(255,59,71,0.6)]`}
                  >
                    {category}
                  </a>
                );
              }
              return (
                <span
                  key={category}
                  className={`${chipClass} cursor-default border-[rgba(255,59,71,0.1)] bg-mist text-muted/60`}
                >
                  {category}
                  <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-muted/70">
                    Soon
                  </span>
                </span>
              );
            })}
          </div>
        </nav>

        {/* Sections per category with posts */}
        <div className="mt-14 space-y-16">
          {categoriesWithPosts.map((category) => {
            const posts = INSIGHT_POSTS.filter((p) => p.category === category);
            return (
              <section key={category} id={`cat-${slugify(category)}`} aria-label={category}>
                <SectionHeading
                  align="left"
                  title={category}
                  description={`${posts.length} ${posts.length === 1 ? "article" : "articles"}`}
                />
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post, i) => (
                    <BlogCard key={post.slug} post={post} delay={(i % 3) * 90} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* More to come */}
        <Reveal className="mt-16">
          <div className="mx-auto max-w-2xl rounded-2xl border border-[rgba(255,59,71,0.12)] bg-mist p-8 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-ice/15 text-brand">
              <Icons.spark className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-ink">
              More guides on the way
            </h2>
            <p className="mx-auto mt-2.5 max-w-md text-[14.5px] leading-relaxed text-muted">
              We&apos;re adding practical guides for every category — Walmart, eBay,
              Shopify, TikTok Shop, advertising and e-commerce growth.
            </p>
            <div className="mt-6">
              <Button variant="ghost" href="/contact" withArrow>
                Suggest a Topic
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <NewsletterSignup />
      </div>

      <CTASection
        heading="Want these insights applied to your store?"
        description="Reading about optimization is a start. Let us audit your listings and show you exactly what needs fixing."
      />
    </>
  );
}

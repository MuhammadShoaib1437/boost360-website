import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge, SectionHeading, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import {
  ServiceCard,
  MarketplaceCard,
  CaseStudyCard,
  BlogCard,
} from "@/components/ui/Cards";
import { HeroDashboard } from "@/components/sections/HeroDashboard";
import { Circle360 } from "@/components/sections/Circle360";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Marquee } from "@/components/sections/Marquee";
import {
  Guarantees,
  FreeAuditCTA,
  ComparisonTable,
  HomeFAQ,
} from "@/components/sections/HomeExtras";
import { Icons } from "@/components/ui/icons";
import { SERVICES } from "@/lib/data-services";
import { MARKETPLACES } from "@/lib/data-marketplaces";
import { CASE_STUDIES, INSIGHT_POSTS } from "@/lib/data-content";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boost360Pro — Complete E-Commerce Growth",
  description:
    "Boost360Pro helps brands and marketplace sellers launch, manage, optimize and scale across Amazon, Walmart, eBay, Etsy, Shopify and TikTok Shop.",
  alternates: { canonical: "/" },
};

const MARKETPLACE_POINTS: Record<string, string[]> = {
  amazon: ["Marketplace Management", "Listings & SEO", "PPC", "Catalog Support"],
  walmart: ["Catalog Management", "Listing Optimization", "Account Health", "Store Operations"],
  ebay: ["SEO Listings", "Store Management", "Item Specifics", "Policy Review"],
  etsy: ["Etsy SEO", "Keyword Research", "Digital Products", "Physical Products"],
  shopify: ["Store Setup", "Product Pages", "Catalog Management", "Store Optimization"],
  "tiktok-shop": ["Product Listings", "Catalog Management", "Shop Optimization", "Marketplace Operations"],
};

const WHY = [
  {
    icon: "globe" as const,
    title: "Every Marketplace, One Team",
    desc: "Amazon, Walmart, eBay, Etsy, Shopify, TikTok Shop — all run by a single team that knows each platform's rules.",
  },
  {
    icon: "chart" as const,
    title: "Honest About the Numbers",
    desc: "We show you what's actually working, what isn't, and what we'll do next. Real figures — no vanity metrics.",
  },
  {
    icon: "layers" as const,
    title: "The Full Circle, Not Piecemeal Tasks",
    desc: "Research, setup, listings, SEO, ads, account health — eight stages working as one system, so nothing slips between providers.",
  },
  {
    icon: "tag" as const,
    title: "Strategy Built Around Your Margins",
    desc: "Every recommendation weighed against your products, pricing and profit — never generic best practices.",
  },
  {
    icon: "check" as const,
    title: "You Always Know What's Happening",
    desc: "Weekly plain-language updates on what was done and why. Ask anything on WhatsApp and get a straight answer.",
  },
  {
    icon: "rocket" as const,
    title: "Grows When You Grow",
    desc: "Start with a listing pack or a single store, expand to full multi-channel management when you're ready. No rebuilding from scratch.",
  },
];

const PROCESS = [
  { title: "Discover", desc: "Understand the seller's business, products, marketplaces and goals." },
  { title: "Audit", desc: "Review the current store, listings, catalog and opportunities." },
  { title: "Plan", desc: "Develop a prioritized action plan." },
  { title: "Execute", desc: "Implement approved improvements." },
  { title: "Optimize", desc: "Review available data and improve performance." },
  { title: "Scale", desc: "Expand successful strategies, products and channels where appropriate." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Boost360Pro",
      url: SITE_URL,
      slogan: "Complete E-Commerce Growth",
      logo: `${SITE_URL}/logo.png`,
    },
    {
      "@type": "ProfessionalService",
      name: "Boost360Pro",
      url: SITE_URL,
      description:
        "Full-service e-commerce management, optimization and growth: marketplace management, product research, listing optimization, marketplace SEO, PPC and store setup.",
      areaServed: "Worldwide",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-abyss">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark" />
          <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-electric/15 blur-[140px]" />
          <div className="absolute -left-32 top-1/3 h-[340px] w-[340px] rounded-full bg-ice/10 blur-[120px]" />
          <div className="absolute -right-24 bottom-0 h-[300px] w-[300px] rounded-full bg-growth/10 blur-[120px]" />
        </div>

        <Container className="relative pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="animate-fade-up">
              <Badge dark>360° E-Commerce Management &amp; Growth</Badge>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[60px]">
                More Sales on Every Marketplace{" "}
                <span className="text-gradient">That Matters</span>.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Boost360Pro is your complete e-commerce growth team — from your
                first listing to a multi-channel brand. One team handles
                research, setup, listings, SEO, advertising and daily
                operations across Amazon, Walmart, eBay, Etsy, Shopify and
                TikTok Shop, so every part of your business pushes sales
                forward.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" href="/get-a-quote" withArrow>
                  Get a Free Consultation
                </Button>
                <Button size="lg" variant="secondary" href="/services" withArrow>
                  Explore Our Services
                </Button>
              </div>
              <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Strategy <span className="mx-1.5 text-ice">•</span> Management{" "}
                <span className="mx-1.5 text-ice">•</span> Optimization{" "}
                <span className="mx-1.5 text-ice">•</span> Growth
              </p>
            </div>
            <div className="animate-fade-up [animation-delay:200ms]">
              <HeroDashboard />
            </div>
          </div>
        </Container>
      </section>

      {/* ============ MARKETPLACE TRUST STRIP ============ */}
      <section className="border-b border-[rgba(15,70,130,0.1)] bg-white py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Sell Everywhere. Grow With One Team.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                One team running your stores across every major marketplace — you focus on your products, we drive the sales.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-9">
              <Marquee
                items={["Amazon", "Walmart", "eBay", "Etsy", "Shopify", "TikTok Shop"]}
              />
            </div>
            <p className="mt-6 text-center text-[12.5px] text-muted/80">
              Independent service provider — not officially affiliated with or
              endorsed by any marketplace.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============ SERVICES ============ */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Everything You Need to Sell Smarter."
            description="From launching your first listing to managing multi-channel operations, Boost360Pro provides practical e-commerce support designed around your business."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={(i % 4) * 80} />
          ))}
        </div>
      </Section>

      {/* ============ 360 CONCEPT ============ */}
      <section className="relative overflow-hidden bg-abyss py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-electric/10 blur-[130px]" />
        </div>
        <Container className="relative">
          <Reveal>
            <SectionHeading
              dark
              title="Your Entire E-Commerce Operation. Covered."
              description="Eight connected stages, one coordinated workflow. Nothing falls through the cracks."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <Circle360 />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ WHY BOOST360 ============ */}
      <Section className="bg-mist">
        <Reveal>
          <SectionHeading title="Why Sellers Work With Boost360Pro" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => {
            const Icon = Icons[w.icon];
            return (
              <Reveal key={w.title} delay={(i % 3) * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(9,105,246,0.45)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-ice/15 text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Guarantees />

      {/* ============ PROCESS ============ */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A Clear Path to Better E-Commerce."
            description="A straightforward engagement process — you always know what's happening and why."
          />
        </Reveal>
        <div className="mt-14">
          <ProcessTimeline steps={PROCESS} />
        </div>
        <Reveal>
          <div className="mt-12 text-center">
            <Button href="/get-a-quote" withArrow>
              Start With a Free Consultation
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ============ MARKETPLACE EXPERTISE ============ */}
      <section className="relative overflow-hidden bg-abyss py-20 sm:py-24 lg:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-1/4 h-[380px] w-[380px] rounded-full bg-electric/10 blur-[130px]" />
          <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-ice/10 blur-[130px]" />
        </div>
        <Container className="relative">
          <Reveal>
            <SectionHeading
              dark
              title="Built for Multi-Channel Commerce."
              description="Marketplace-specific expertise — because Amazon, eBay and Etsy each play by different rules."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETPLACES.map((m, i) => (
              <MarketplaceCard
                key={m.slug}
                marketplace={m}
                points={MARKETPLACE_POINTS[m.slug] ?? []}
                dark
                delay={(i % 3) * 80}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ============ BEFORE / AFTER ============ */}
      <Section>
        <Reveal>
          <SectionHeading
            title="See What Better Optimization Looks Like."
            description="The difference between a listing that exists and a listing that sells — structure, completeness and buyer focus."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-4xl">
            <BeforeAfter />
          </div>
        </Reveal>
      </Section>

      <ComparisonTable />

      {/* ============ FREE AUDIT ============ */}
      <FreeAuditCTA />

      {/* ============ CASE STUDIES TEASER ============ */}
      <Section className="bg-mist">
        <Reveal>
          <SectionHeading
            title="Built Around Real E-Commerce Challenges."
            description="How we approach the problems sellers actually face — shown as illustrative examples of our process."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {CASE_STUDIES.slice(0, 3).map((c, i) => (
            <CaseStudyCard key={c.slug} study={c} delay={i * 80} />
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Button variant="ghost" href="/case-studies" withArrow>
              View All Case Studies
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* ============ INSIGHTS TEASER ============ */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Practical E-Commerce Knowledge."
            description="Guides and explainers from the Boost360Pro team — no hype, just how things work."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {INSIGHT_POSTS.slice(0, 3).map((p, i) => (
            <BlogCard key={p.slug} post={p} delay={i * 80} />
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Button variant="ghost" href="/insights" withArrow>
              Browse All Insights
            </Button>
          </div>
        </Reveal>
      </Section>

      <HomeFAQ />

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { MarketplaceCard } from "@/components/ui/Cards";
import { Icons } from "@/components/ui/icons";
import { MARKETPLACES } from "@/lib/data-marketplaces";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketplaces We Support",
  description:
    "Boost360Pro supports Amazon, Walmart, eBay, Etsy, Shopify and TikTok Shop sellers with marketplace-specific listings, SEO and management services.",
  alternates: { canonical: "/marketplaces" },
};

const CARD_POINTS: Record<string, string[]> = {
  amazon: [
    "Marketplace Management",
    "Listings & SEO",
    "PPC",
    "Catalog Support",
  ],
  walmart: [
    "Catalog Management",
    "Listing Optimization",
    "Account Health",
    "Store Operations",
  ],
  ebay: [
    "SEO Listings",
    "Store Management",
    "Item Specifics",
    "Policy Review",
  ],
  etsy: [
    "Etsy SEO",
    "Keyword Research",
    "Digital Products",
    "Physical Products",
  ],
  shopify: [
    "Store Setup",
    "Product Pages",
    "Catalog Management",
    "Store Optimization",
  ],
  "tiktok-shop": [
    "Product Listings",
    "Catalog Management",
    "Shop Optimization",
    "Marketplace Operations",
  ],
};

const WHY_POINTS = [
  {
    icon: "search" as const,
    title: "Different search algorithms",
    desc: "Amazon ranks on sales velocity and relevance; Etsy ranks on tags, titles and shop signals. One SEO template does not fit both.",
  },
  {
    icon: "shield" as const,
    title: "Different policies and risks",
    desc: "Account health rules, listing standards and enforcement vary wildly by platform. Marketplace-specific experience avoids costly mistakes.",
  },
  {
    icon: "chart" as const,
    title: "Different buyers",
    desc: "A Walmart shopper and an Etsy shopper respond to very different content, pricing cues and branding. Messaging should match the marketplace.",
  },
];

export default function MarketplacesPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-abyss">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-electric/15 blur-[130px]" />
          <div className="absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-ice/10 blur-[110px]" />
        </div>
        <Container className="relative py-14 sm:py-20">
          <Reveal>
            <Breadcrumbs
              dark
              items={[
                { label: "Home", href: "/" },
                { label: "Marketplaces" },
              ]}
            />
            <div className="mt-6">
              <Badge dark>Marketplace Expertise</Badge>
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Marketplaces <span className="text-gradient">We Support.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Marketplace-specific expertise — because every platform plays by
              different rules.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" href="/get-a-quote" withArrow>
                Get a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="whatsapp"
                href={waLink(
                  "Hi Boost360Pro, I'd like to learn more about your marketplace services.",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.whatsapp className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Dark marketplace grid */}
      <section className="bg-abyss py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Platforms"
              title="Pick your marketplace"
              description="Click through for the services, workflows and common seller challenges we handle on each platform."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETPLACES.map((m, i) => (
              <MarketplaceCard
                key={m.slug}
                marketplace={m}
                points={CARD_POINTS[m.slug] ?? []}
                dark
                delay={(i % 3) * 0.08}
              />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] leading-relaxed text-slate-400">
            Independent service provider — not officially affiliated with or
            endorsed by any marketplace.
          </p>
        </Container>
      </section>

      {/* Why marketplace-specific */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Why it matters"
            title="Why marketplace-specific?"
            description="Selling on multiple platforms sounds simple. Running each one well is not."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY_POINTS.map((point, i) => {
            const Icon = Icons[point.icon];
            return (
              <Reveal key={point.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-ice/15 text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                    {point.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CTASection
        heading="Ready to grow on your marketplace?"
        description="Tell us which platform you sell on and what you want to improve. We'll map out the right next steps together."
      />
    </>
  );
}

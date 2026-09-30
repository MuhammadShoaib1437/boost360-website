import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { ServiceCard } from "@/components/ui/Cards";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Icons } from "@/components/ui/icons";
import { SERVICES } from "@/lib/data-services";
import { SITE_URL, waLink } from "@/lib/site";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title}`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

const PROCESS_STEPS = [
  {
    title: "Discover",
    desc: "We learn about your business, products and goals, so the work targets what actually matters to your bottom line.",
  },
  {
    title: "Audit",
    desc: "We review the current state of this service area — listings, data, accounts, workflows — and identify the real gaps.",
  },
  {
    title: "Plan",
    desc: "You receive a prioritized action plan: what to do first, why it matters, and what it will take to get done.",
  },
  {
    title: "Execute",
    desc: "We implement the approved improvements carefully, documenting every change in plain language along the way.",
  },
  {
    title: "Review",
    desc: "We measure what changed, report honestly on what we see, and refine the work from there.",
  },
];

const MARKETPLACE_LINKS = [
  { label: "Amazon", href: "/marketplaces/amazon" },
  { label: "Walmart Marketplace", href: "/marketplaces/walmart" },
  { label: "eBay", href: "/marketplaces/ebay" },
  { label: "Etsy", href: "/marketplaces/etsy" },
  { label: "Shopify", href: "/marketplaces/shopify" },
  { label: "TikTok Shop", href: "/marketplaces/tiktok-shop" },
];

const WHY_POINTS = [
  {
    title: "Marketplace-specific expertise",
    desc: "Every marketplace runs its own search engine, policy book and buyer behavior. We work marketplace by marketplace — never one-size-fits-all.",
  },
  {
    title: "Clear communication & documentation",
    desc: "Every change is documented and explained in plain language. You always know what was done, why, and what it affects.",
  },
  {
    title: "No hype, honest reporting",
    desc: "We don't promise guaranteed sales or rankings. We do thorough work and report what the data actually shows.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Boost360Pro",
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    url: `${SITE_URL}/services/${service.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* (a) Dark hero */}
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
                { label: "Services", href: "/services" },
                { label: service.title },
              ]}
            />
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              {service.heroIntro}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" href="/get-a-quote" withArrow>
                Get a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="whatsapp"
                href={waLink(
                  `Hi Boost360Pro, I'm interested in your ${service.title} service.`,
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

      {/* (b) Overview */}
      <Section>
        <SectionHeading
          align="left"
          eyebrow="Overview"
          title="What this service covers"
        />
        <div className="mt-8 max-w-3xl space-y-5 text-[17px] leading-relaxed text-muted">
          {service.overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* (c) Common challenges */}
      <Section className="bg-mist">
        <SectionHeading
          eyebrow="Challenges"
          title="Common challenges we help with"
          description="If any of these sound familiar, this service was built for you."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {service.challenges.map((challenge, i) => (
            <Reveal key={challenge} delay={(i % 2) * 80}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-rose-600">
                  <Icons.x className="h-4 w-4" />
                </span>
                <p className="pt-1.5 leading-relaxed text-ink">{challenge}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* (d) What's included */}
      <Section>
        <SectionHeading
          eyebrow="Included"
          title="What's included"
          description="Everything below is delivered as part of this service — no vague promises, just concrete work."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.included.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 80}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-growth/10 text-growth">
                  <Icons.check className="h-4 w-4" />
                </span>
                <p className="pt-1.5 font-medium leading-relaxed text-ink">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* (e) Our process */}
      <Section>
        <SectionHeading
          eyebrow="Our process"
          title="How this service is delivered"
          description="The same disciplined workflow behind everything we do — adapted to this service."
        />
        <div className="mt-12">
          <ProcessTimeline steps={PROCESS_STEPS} />
        </div>
      </Section>

      {/* (f) Supported marketplaces */}
      <Section>
        <SectionHeading
          eyebrow="Marketplaces"
          title="Supported marketplaces"
          description="This service is adapted to the rules and realities of each marketplace below."
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {MARKETPLACE_LINKS.map((marketplace) => (
            <Link
              key={marketplace.href}
              href={marketplace.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(15,70,130,0.18)] bg-white px-5 py-2.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:text-brand"
            >
              {marketplace.label}
              <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </Section>

      {/* (g) Why Boost360Pro — dark band */}
      <section className="relative overflow-hidden bg-abyss py-16 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[280px] w-[640px] -translate-x-1/2 rounded-full bg-electric/15 blur-[120px]" />
          <div className="absolute -bottom-24 -right-20 h-[280px] w-[280px] rounded-full bg-growth/10 blur-[110px]" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Why Boost360Pro
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              What makes working with us different — in three plain statements.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {WHY_POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-[15px] font-extrabold uppercase tracking-[0.18em] text-ice">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-slate-300">
                    {point.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              size="lg"
              variant="whatsapp"
              href={waLink(
                `Hi Boost360Pro, I have a question about your ${service.title} service.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.whatsapp className="h-5 w-5" />
              Ask Us on WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      {/* (h) FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title={`Questions about ${service.title}`}
        />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQ items={service.faqs} />
        </div>
      </Section>

      {/* (i) Related services */}
      <Section className="bg-mist">
        <SectionHeading
          eyebrow="Keep exploring"
          title="Related services"
          description="Combine services to cover more of your operation — or start with one and add more later."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((relatedService, i) => (
            <ServiceCard
              key={relatedService.slug}
              service={relatedService}
              delay={i * 80}
            />
          ))}
        </div>
      </Section>

      {/* (j) Final CTA */}
      <CTASection
        heading={`Ready to get started with ${service.title}?`}
        description="Tell us about your store and goals — we'll recommend the right next steps for your business."
      />
    </main>
  );
}

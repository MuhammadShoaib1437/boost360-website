import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { Icons } from "@/components/ui/icons";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { MARKETPLACES } from "@/lib/data-marketplaces";
import { SERVICES } from "@/lib/data-services";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  return MARKETPLACES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = MARKETPLACES.find((x) => x.slug === slug);
  if (!m) return { title: "Marketplace not found" };
  return {
    title: `${m.name} Seller Services`,
    description: m.metaDescription,
    alternates: { canonical: `/marketplaces/${m.slug}` },
  };
}

const RELATED_SLUGS = [
  "marketplace-management",
  "listing-optimization",
  "ecommerce-seo",
];

export default async function MarketplaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = MARKETPLACES.find((x) => x.slug === slug);
  if (!m) notFound();

  const related = RELATED_SLUGS.map((s) =>
    SERVICES.find((svc) => svc.slug === s),
  ).filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
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
                { label: "Marketplaces", href: "/marketplaces" },
                { label: m.name },
              ]}
            />
            <div className="mt-6">
              <Badge dark>{m.tagline}</Badge>
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {m.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {m.intro}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" href="/get-a-quote" withArrow>
                Get a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="whatsapp"
                href={waLink(
                  `Hi Boost360Pro, I sell on ${m.name} and would like help.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.whatsapp className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
            <p className="mt-8 text-[13px] leading-relaxed text-slate-400">
              Independent service provider — not officially affiliated with or
              endorsed by any marketplace.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* (b) Services */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={`Services for ${m.name} sellers`}
            description="Practical, hands-on support across the parts of your operation that actually move the needle."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {m.services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-6 sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-ice/15 text-brand">
                  <Icons.check className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* (c) Challenges */}
      <section className="bg-mist py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Seller reality"
              title={`Common ${m.name} seller challenges`}
              description={`Problems we see again and again from ${m.name} sellers — and what to watch for in your own store.`}
            />
          </Reveal>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {m.challenges.map((c, i) => (
              <Reveal key={c} delay={(i % 2) * 0.08}>
                <li className="flex items-start gap-3.5 rounded-xl border border-[rgba(15,70,130,0.12)] bg-white p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    <Icons.x className="h-4 w-4" />
                  </span>
                  <span className="text-[14.5px] leading-relaxed text-ink">
                    {c}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* (d) How Boost360Pro helps */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our role"
              title="How Boost360Pro helps"
              description={`Exactly what we do for ${m.name} sellers — no vague promises, just the work.`}
            />
          </Reveal>
          <ul className="space-y-4">
            {m.howWeHelp.map((h, i) => (
              <Reveal key={h} delay={i * 0.06}>
                <li className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-growth/10 text-growth">
                    <Icons.check className="h-4 w-4" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink">
                    {h}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* (e) Workflow */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Our workflow"
            description={`How an engagement for ${m.name} sellers typically runs, step by step.`}
          />
        </Reveal>
        <div className="mt-12">
          <ProcessTimeline steps={m.workflow} />
        </div>
      </Section>

      {/* (f) FAQ */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title={`${m.name} seller questions`}
              description={`Straight answers to the questions ${m.name} sellers ask us most.`}
            />
          </Reveal>
          <Reveal className="mt-10">
            <FAQ items={m.faqs} />
          </Reveal>
        </div>
      </Section>

      {/* (g) Related services */}
      <section className="bg-mist py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Keep exploring"
              title="Related services"
              description="Services that pair well with marketplace-specific support."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 0.08} className="h-full">
                <Link
                  href={`/services/${svc.slug}`}
                  aria-label={`${svc.title} — learn more`}
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-6 transition-all duration-300",
                    "hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(9,105,246,0.45)] sm:p-7",
                  )}
                >
                  <h3 className="text-lg font-bold tracking-tight text-ink">
                    {svc.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-muted">
                    {svc.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    Learn More
                    <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* (h) CTA */}
      <CTASection
        heading={`Sell on ${m.name}? Let's talk.`}
        description={`Tell us about your ${m.name} store and what you want to improve. We'll identify the right next steps together.`}
      />
    </>
  );
}

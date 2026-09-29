import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Icons, type IconName } from "@/components/ui/icons";
import { SERVICES } from "@/lib/data-services";
import { MARKETPLACES } from "@/lib/data-marketplaces";

export const metadata = {
  title: "About Boost360 — E-Commerce Expertise Built Around Sellers",
  description:
    "Boost360 is a dedicated e-commerce services practice focused on marketplace sellers — helping stores on Amazon, Walmart, eBay, Etsy, Shopify and TikTok Shop grow.",
  alternates: { canonical: "/about" },
};

const VALUE_PROPS: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "check",
    title: "Transparency",
    desc: "Every change is documented and every recommendation is explained in plain language — no black box, ever.",
  },
  {
    icon: "shield",
    title: "Responsibility",
    desc: "We treat your seller account like our own reputation depends on it, because it does.",
  },
  {
    icon: "layers",
    title: "Consistency",
    desc: "The same careful process on listing one and listing five hundred — quality that doesn't drift.",
  },
  {
    icon: "megaphone",
    title: "Clear Communication",
    desc: "Straightforward updates in plain English (or Urdu/Hindi on WhatsApp) — no jargon, no fluff.",
  },
  {
    icon: "chart",
    title: "Continuous Improvement",
    desc: "Marketplaces change constantly; we keep learning and refining our playbooks so your store keeps up.",
  },
  {
    icon: "cart",
    title: "Seller-Focused Execution",
    desc: "We measure our work by what it does for the seller — time saved, clarity gained, problems solved.",
  },
];

const WHY_BOOST360 = [
  {
    title: "Marketplace-native thinking",
    desc: "Marketplace search engines rank products, not pages. Our entire process is built around how eBay, Amazon, Etsy and the rest actually work — not borrowed Google SEO tactics.",
  },
  {
    title: "Documented, honest process",
    desc: "We tell you what we're going to do, do it, and show you what changed. If something isn't working, we'll say so — and change course.",
  },
  {
    title: "Built for real sellers",
    desc: "We work with the realities of selling: thin margins, policy headaches, supplier problems. Practical help, not agency theater.",
  },
];

export default function AboutPage() {
  const services = SERVICES.slice(0, 6);
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
              <Badge dark>About Boost360</Badge>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                E-Commerce Expertise{" "}
                <span className="text-gradient">Built Around Sellers.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Boost360 exists for one reason: to help online sellers run
                better stores. From listing quality to catalog health to
                day-to-day marketplace operations, we do the detailed work
                that turns effort into growth.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" href="/get-a-quote" withArrow>
                  Get a Free Consultation
                </Button>
                <Button size="lg" variant="secondary" href="/case-studies">
                  See How We Work
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Our Story */}
      <Section>
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="A services practice built for marketplace sellers"
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
                <p>
                  Boost360 is a dedicated e-commerce services practice focused
                  on marketplace sellers — the people listing products on
                  Amazon, Walmart, eBay, Etsy, Shopify and TikTok Shop, and
                  dealing every day with the unglamorous work that keeps a
                  store alive: listings, catalogs, keywords, policies, ads and
                  account health.
                </p>
                <p>
                  We started Boost360 because we kept seeing the same pattern:
                  sellers with good products losing visibility and sales to
                  fixable problems — incomplete listings, messy catalogs,
                  disconnected channels. The work that fixes those problems
                  isn&apos;t magic. It&apos;s careful, consistent execution, marketplace
                  by marketplace.
                </p>
                <p>
                  That&apos;s what we do. No shortcuts, no inflated promises, no
                  invented results — just structured, documented work that
                  makes your store better.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { n: "6+", label: "Marketplaces covered" },
                { n: "8", label: "Core service areas" },
                { n: "1", label: "Focus: your store's growth" },
                { n: "0", label: "Empty promises made" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-[rgba(15,70,130,0.12)] bg-mist p-6 text-center"
                >
                  <div className="text-gradient text-4xl font-extrabold sm:text-5xl">
                    {s.n}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-brand">
                Our Mission
              </p>
              <p className="mt-6 text-2xl font-extrabold leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
                “To give every marketplace seller access to the kind of careful,
                professional e-commerce execution that used to be reserved for
                big brands.”
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* What We Do */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Full-service e-commerce support"
          description="Eight service areas covering the complete lifecycle of an online store — from research and launch to daily management and growth."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                aria-label={`${service.title} — learn more`}
                className="group flex h-full flex-col rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(9,105,246,0.45)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-ice/15 text-brand transition-transform duration-300 group-hover:scale-110">
                  {(function () {
                    const Icon = Icons[service.icon as IconName];
                    return <Icon className="h-6 w-6" />;
                  })()}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-muted">
                  {service.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Learn More
                  <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="ghost" href="/services" withArrow>
            View All Services
          </Button>
        </div>
      </Section>

      {/* How We Work */}
      <section className="bg-mist py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A process you can see"
            description="Every engagement follows the same transparent workflow — you'll always know what phase your project is in."
          />
          <div className="mt-14">
            <ProcessTimeline
              steps={[
                {
                  title: "Discover",
                  desc: "We learn your store: what you sell, where you sell, what's working and what hurts. No assumptions — just questions and answers.",
                },
                {
                  title: "Audit",
                  desc: "We examine your listings, catalog health, account standing and competitors against a clear checklist, and document every finding.",
                },
                {
                  title: "Plan",
                  desc: "We turn the audit into a prioritized action plan: what we'll fix first, what it takes, and what we expect it to change.",
                },
                {
                  title: "Execute",
                  desc: "We do the work — listings rewritten, catalogs cleaned, campaigns rebuilt — with every change logged for your records.",
                },
                {
                  title: "Optimize",
                  desc: "We review results, refine what worked, and correct what didn't. Execution is the start, not the finish.",
                },
                {
                  title: "Scale",
                  desc: "With foundations solid, we help you expand: new products, new channels, bigger campaigns — growth on purpose.",
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Values */}
      <Section>
        <SectionHeading
          eyebrow="Our Values"
          title="How we show up every day"
          description="Six principles that guide every listing we touch and every message we send."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((v, i) => (
            <Reveal key={v.title} delay={(i % 3) * 90} className="h-full">
              <div className="h-full rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(9,105,246,0.45)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-ice/15 text-brand">
                  {(function () {
                    const Icon = Icons[v.icon];
                    return <Icon className="h-6 w-6" />;
                  })()}
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Marketplace Expertise */}
      <section className="bg-mist py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Marketplace Expertise"
            title="We speak marketplace"
            description="Each platform has its own search engine, policies and buyer behavior. We work natively on all six."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {MARKETPLACES.map((m) => (
              <Link
                key={m.slug}
                href={`/marketplaces/${m.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(15,70,130,0.14)] bg-white px-5 py-2.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-electric/50 hover:text-brand hover:shadow-[0_12px_30px_-12px_rgba(9,105,246,0.5)]"
              >
                {m.name}
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Boost360 */}
      <Section>
        <SectionHeading
          eyebrow="Why Boost360"
          title="Why sellers work with us"
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {WHY_BOOST360.map((w, i) => (
            <Reveal key={w.title} delay={i * 90} className="h-full">
              <div className="relative h-full overflow-hidden rounded-2xl bg-abyss p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric/20 blur-3xl" />
                </div>
                <div className="relative">
                  <span className="text-gradient text-sm font-extrabold uppercase tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-white">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-slate-300">
                    {w.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Want to know what we'd do for your store?"
        description="Tell us where you sell and what's holding you back. We'll review it and come back with an honest, practical plan."
      />
    </>
  );
}

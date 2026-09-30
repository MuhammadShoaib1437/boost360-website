import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { Icons } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Boost360Pro pricing: monthly management packages for e-commerce sellers, plus one-time services like store audits and listing optimization. Custom quotes based on your catalog and goals.",
  alternates: { canonical: "/pricing" },
};

const PACKAGES = [
  {
    name: "Launch",
    tagline: "For new sellers getting started.",
    features: [
      "Store setup on 1 marketplace",
      "Up to 20 listings created & optimized",
      "SEO titles, bullets & descriptions",
      "Product image guidelines",
      "Account health setup check",
      "Email & WhatsApp support",
    ],
    featured: false,
  },
  {
    name: "Grow",
    tagline: "For active sellers ready to scale.",
    features: [
      "Full management on up to 2 marketplaces",
      "Unlimited listing optimization",
      "Ongoing e-commerce SEO",
      "PPC / ad campaign management",
      "Weekly plain-language reports",
      "Account health monitoring",
      "Priority WhatsApp support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    tagline: "For brands selling multi-channel.",
    features: [
      "Everything in Grow, plus:",
      "Up to 5 marketplaces managed",
      "Multi-channel inventory coordination",
      "Advanced PPC & scaling strategy",
      "Monthly growth strategy call",
      "Dedicated account manager",
    ],
    featured: false,
  },
];

const ONE_TIME = [
  {
    title: "Free 10-Point Store Audit",
    desc: "A plain-language report on what's holding your sales back. Free, no obligation.",
    price: "Free",
  },
  {
    title: "Listing Optimization Pack",
    desc: "10 listings rewritten with SEO titles, bullets, descriptions and backend terms.",
    price: "Custom",
  },
  {
    title: "Full Store Setup",
    desc: "New store launched end-to-end: account, branding, policies, first listings live.",
    price: "Custom",
  },
];

const PRICING_FAQS = [
  {
    q: "Why aren't exact prices listed?",
    a: "Because honest pricing depends on your catalog size, how many marketplaces you sell on, and how much hands-on work you need. A seller with 15 products needs something very different from a brand with 500. Message us on WhatsApp with your store link and we'll give you an exact number — usually within a few hours.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No. Monthly packages are month-to-month with no long-term lock-in. One-time services are fixed-scope: you approve the scope and price before any work starts.",
  },
  {
    q: "Do you charge a percentage of sales?",
    a: "Our standard packages are flat monthly pricing so costs stay predictable. For larger scaling engagements we can discuss performance-linked arrangements — ask us on the free consultation call.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Absolutely — most sellers start with a listing pack or the Launch package, then move to full management once they see how we work. There's no penalty for upgrading.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We work with international clients and accept standard online payment methods. We'll confirm the simplest option for your country before you pay anything.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge>Pricing</Badge>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Honest Pricing for Real Work.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
                Every store is different, so final pricing depends on your
                catalog and goals — but our packages are simple, monthly, and
                have no hidden fees. Message us your store link for an exact
                quote, usually within hours.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ============ PACKAGES ============ */}
      <Section className="bg-mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Monthly Packages"
              title="Choose How Much Support You Need."
              description="Month-to-month. Cancel anytime. Every package includes direct WhatsApp access to your team."
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5",
                    p.featured
                      ? "border-brand/40 bg-abyss text-white shadow-[0_30px_70px_-25px_rgba(9,105,246,0.55)]"
                      : "border-[rgba(15,70,130,0.12)] bg-white",
                  )}
                >
                  {p.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand to-electric px-4 py-1 text-[12px] font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={cn(
                      "text-xl font-extrabold tracking-tight",
                      p.featured ? "text-white" : "text-ink",
                    )}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-1.5 text-[14.5px]",
                      p.featured ? "text-slate-300" : "text-muted",
                    )}
                  >
                    {p.tagline}
                  </p>
                  <p className="mt-6">
                    <span
                      className={cn(
                        "text-4xl font-extrabold tracking-tight",
                        p.featured ? "text-white" : "text-ink",
                      )}
                    >
                      Custom
                    </span>
                    <span
                      className={cn(
                        "ml-2 text-sm",
                        p.featured ? "text-slate-400" : "text-muted",
                      )}
                    >
                      / month
                    </span>
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-[13px]",
                      p.featured ? "text-slate-400" : "text-muted",
                    )}
                  >
                    Exact price depends on your catalog size &amp; marketplaces.
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
                        <span
                          className={cn(
                            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            p.featured
                              ? "bg-ice/20 text-ice"
                              : "bg-brand/10 text-brand",
                          )}
                        >
                          <Icons.check className="h-3 w-3" />
                        </span>
                        <span className={p.featured ? "text-slate-200" : "text-ink"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      variant={p.featured ? "primary" : "ghost"}
                      className="w-full"
                      href={waLink(
                        `Hi Boost360Pro, I'm interested in the ${p.name} package. My store URL is: `,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icons.whatsapp className="h-4 w-4" />
                      Get Exact Price
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ ONE-TIME ============ */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="One-Time Services"
              title="Not Ready for Monthly? Start Here."
              description="Fixed-scope projects with upfront pricing. You approve everything before work begins."
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {ONE_TIME.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(9,105,246,0.45)]">
                  <p className="text-[15px] font-extrabold uppercase tracking-wider text-brand">
                    {s.price}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">
                    {s.desc}
                  </p>
                  <div className="mt-6">
                    <Button
                      variant="ghost"
                      className="w-full"
                      href={waLink(`Hi Boost360Pro, I'm interested in: ${s.title}. `)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ask on WhatsApp
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============ FAQ ============ */}
      <Section className="bg-mist">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Pricing Questions, Answered."
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10">
                <FAQ items={PRICING_FAQS} />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}

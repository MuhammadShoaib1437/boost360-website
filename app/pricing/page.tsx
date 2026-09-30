import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { Icons } from "@/components/ui/icons";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Boost360Pro pricing: fixed USD pricing for one-time e-commerce services — free store audit, listing optimization packs and full store setup.",
  alternates: { canonical: "/pricing" },
};

const ONE_TIME = [
  {
    title: "Free 10-Point Store Audit",
    desc: "A plain-language report on what's holding your sales back. Free, no obligation.",
    price: "Free",
  },
  {
    title: "Listing Optimization Pack",
    desc: "10 listings rewritten with SEO titles, bullets, descriptions and backend terms.",
    price: "$60",
  },
  {
    title: "Full Store Setup",
    desc: "New store launched end-to-end: account, branding, policies, first listings live.",
    price: "$150",
  },
];

const PRICING_FAQS = [
  {
    q: "Are these prices final?",
    a: "Yes — every service on this page is fixed at the listed price. What you see is what you pay. If you need something ongoing like monthly management, message us on WhatsApp and we'll work out a custom quote.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No. Every service is a fixed-scope, one-time project: you approve the scope and price before any work starts.",
  },
  {
    q: "Do you charge a percentage of sales?",
    a: "No. Every service has a flat fixed price so costs stay predictable. For larger ongoing engagements we can discuss custom arrangements — ask us on the free consultation call.",
  },
  {
    q: "Can I start small and upgrade later?",
    a: "Absolutely — most sellers start with the free audit or a listing pack, then move to a full store setup once they see how we work.",
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
                Simple, fixed pricing in USD — no hidden fees, no surprises.
                Every service is fixed-scope: you approve everything before
                work begins. Message us on WhatsApp and we&apos;ll confirm
                your timeline, usually within hours.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ============ ONE-TIME ============ */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="One-Time Services"
              title="Simple, Fixed-Price Services."
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
                      href={waLink(`Hi Boost360Pro, I'm interested in: ${s.title} (${s.price}). `)}
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

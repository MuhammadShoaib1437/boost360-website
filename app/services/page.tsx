import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { CTASection } from "@/components/ui/CTASection";
import { ServiceCard } from "@/components/ui/Cards";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Icons } from "@/components/ui/icons";
import { SERVICES } from "@/lib/data-services";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "E-Commerce Services",
  description:
    "Boost360 services: marketplace management, product research, listing optimization, e-commerce SEO, PPC advertising, store setup, account health and multi-channel management.",
  alternates: { canonical: "/services" },
};

const WORK_STEPS = [
  {
    title: "Discover",
    desc: "We start with a straightforward conversation about your business, products, goals and constraints — so the work targets what actually matters to you.",
  },
  {
    title: "Audit",
    desc: "We review your current listings, account health and operations to find what's really holding you back, instead of guessing.",
  },
  {
    title: "Plan",
    desc: "You receive a prioritized action plan: what to do first, why it matters, and what it will take — before any work begins.",
  },
  {
    title: "Execute",
    desc: "We implement the approved improvements with care, documenting every change in plain language along the way.",
  },
  {
    title: "Optimize",
    desc: "We measure what happened, report honestly on what we see, and keep refining — ongoing work that compounds over time.",
  },
];

const GENERAL_FAQS = [
  {
    q: "What exactly does Boost360 do?",
    a: "Boost360 is a full-service e-commerce agency. We help sellers and brands launch, manage, optimize and grow stores across Amazon, Walmart Marketplace, eBay, Etsy, Shopify and TikTok Shop — from store setup and product listings to SEO, advertising and day-to-day account operations.",
  },
  {
    q: "Do you guarantee sales, rankings or results?",
    a: "No — and we'd advise caution with anyone who does. Sales and rankings depend on your product, pricing, competition and listing quality, much of which we don't control. What we do promise is thorough, documented work and honest reporting on what we observe.",
  },
  {
    q: "Which marketplaces do you support?",
    a: "Amazon, Walmart Marketplace, eBay, Etsy, Shopify and TikTok Shop, plus Facebook Marketplace support. Every service is adapted to the specific marketplace you're selling on, because each one works differently.",
  },
  {
    q: "How do we get started?",
    a: "Start with a free consultation: tell us where your business is today and where you want to take it, and we'll recommend the right next steps. There's no obligation and no pushy sales pitch — just a clear read on your situation.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Dark hero */}
      <section className="relative overflow-hidden bg-abyss">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-electric/15 blur-[130px]" />
          <div className="absolute -right-24 bottom-0 h-[260px] w-[260px] rounded-full bg-ice/10 blur-[110px]" />
        </div>
        <Container className="relative py-14 sm:py-20">
          <Reveal>
            <Badge dark>Our Services</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything You Need to{" "}
              <span className="text-gradient">
                Build, Manage &amp; Grow Online.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              From launching your first store to managing catalogs across six
              marketplaces, Boost360 covers the full e-commerce lifecycle. Pick
              one service or hand us the whole operation — either way, every
              change is documented and every report is honest.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" href="/get-a-quote" withArrow>
                Get a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="whatsapp"
                href={waLink(
                  "Hi Boost360, I'd like to discuss which of your services fits my store.",
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

      {/* All services */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Eight services. One growth team."
          description="Each service is delivered marketplace by marketplace — never one-size-fits-all. Start with one, or combine them into a complete operation."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              delay={(i % 4) * 80}
            />
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section className="bg-mist">
        <SectionHeading
          eyebrow="How we work"
          title="A simple process, applied to everything"
          description="Every engagement — from a single listing rewrite to full multi-channel management — follows the same disciplined workflow."
        />
        <div className="mt-12">
          <ProcessTimeline steps={WORK_STEPS} />
        </div>
      </Section>

      {/* General FAQ */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Honest answers to common questions"
        />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQ items={GENERAL_FAQS} />
        </div>
      </Section>

      <CTASection />
    </main>
  );
}

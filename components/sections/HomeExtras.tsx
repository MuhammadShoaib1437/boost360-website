import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/ui/FAQ";
import { Icons } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { CARD_ACCENTS } from "@/components/ui/Cards";

/* ============ GUARANTEES ============ */
const GUARANTEES = [
  {
    icon: "shield",
    title: "Your Store Stays Yours",
    desc: "Full ownership and access remain with you, always. We work inside your accounts — nothing is ever held hostage.",
  },
  {
    icon: "check",
    title: "No Long-Term Lock-In",
    desc: "Start month-to-month. We earn your business every single month with clear work and honest reporting.",
  },
  {
    icon: "chart",
    title: "Transparent Weekly Reports",
    desc: "You always know what was done and why — plain-language updates. No jargon, no black box.",
  },
  {
    icon: "whatsapp",
    title: "Real Human Support",
    desc: "Talk directly with the people managing your store on WhatsApp. Fast replies, no ticket queues.",
  },
] as const;

export function Guarantees() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Our Promise"
          title="Simple Guarantees, Kept Every Week."
          description="No fine print. This is how we work with every seller, from day one."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GUARANTEES.map((g, i) => {
          const Icon = Icons[g.icon];
          return (
            <Reveal key={g.title} delay={(i % 4) * 80} className="h-full">
              <div className="group h-full rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(9,105,246,0.45)]">
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6", CARD_ACCENTS[i % CARD_ACCENTS.length])}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[16px] font-bold tracking-tight text-ink">
                  {g.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{g.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

/* ============ FREE AUDIT CTA ============ */
export function FreeAuditCTA() {
  return (
    <section className="relative overflow-hidden bg-abyss py-16 sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-electric/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[280px] w-[280px] rounded-full bg-ice/10 blur-[120px]" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[15px] font-extrabold uppercase tracking-[0.2em] text-ice">
              Free Offer
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get a Free 10-Point Store Audit.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-slate-300">
              We&apos;ll review your listings, SEO, pricing, images and account
              health — then send you a plain-language report of exactly
              what&apos;s holding your sales back. No cost, no obligation.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="whatsapp"
                size="lg"
                href={waLink(
                  "Hi Boost360Pro, I'd like a FREE 10-point store audit. My store URL is: ",
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.whatsapp className="h-5 w-5" />
                Claim My Free Audit
              </Button>
              <Button variant="secondary" size="lg" href="/get-a-quote" withArrow>
                Get a Full Quote
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/audit-checklist.pdf"
                download="Boost360Pro-10-Point-Store-Audit-Checklist.pdf"
              >
                <Icons.download className="h-5 w-5" />
                Download Free Checklist
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ============ COMPARISON TABLE ============ */
const COMPARISON_ROWS: { label: string; us: string; diy: string; hire: string }[] = [
  {
    label: "Expertise across marketplaces",
    us: "Amazon, Walmart, eBay, Etsy, Shopify, TikTok Shop",
    diy: "Hours of research per platform",
    hire: "Usually one person's knowledge",
  },
  {
    label: "Your time required",
    us: "Minimal — we handle the operations",
    diy: "20+ hours a week learning & doing",
    hire: "Ongoing training & management",
  },
  {
    label: "SEO, listings & PPC",
    us: "All covered under one roof",
    diy: "Learn each skill separately",
    hire: "Rarely found in one hire",
  },
  {
    label: "Reporting",
    us: "Weekly, plain-language updates",
    diy: "Your own spreadsheets",
    hire: "Depends on the person",
  },
  {
    label: "Cost structure",
    us: "Fixed one-time pricing — no surprises",
    diy: "“Free” — but slow and costly in mistakes",
    hire: "Salary, benefits & overhead",
  },
];

export function ComparisonTable() {
  return (
    <Section className="bg-mist">
      <Reveal>
        <SectionHeading
          eyebrow="Why Boost360Pro"
          title="A Smarter Way to Grow."
          description="Selling online takes consistent expert work. Here's how working with Boost360Pro compares to the alternatives."
        />
      </Reveal>
      <Reveal delay={100}>
        <div className="mx-auto mt-12 max-w-5xl overflow-x-auto rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[rgba(15,70,130,0.12)]">
                <th className="px-6 py-4 text-sm font-semibold text-muted">
                  <span className="sr-only">Factor</span>
                </th>
                <th className="bg-brand/5 px-6 py-4 text-[15px] font-extrabold text-brand">
                  Boost360Pro
                </th>
                <th className="px-6 py-4 text-[15px] font-bold text-ink">
                  Doing It Yourself
                </th>
                <th className="px-6 py-4 text-[15px] font-bold text-ink">
                  Hiring In-House
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((r, i) => (
                <tr
                  key={r.label}
                  className={cn(
                    i !== COMPARISON_ROWS.length - 1 &&
                      "border-b border-[rgba(15,70,130,0.08)]",
                  )}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-ink">
                    {r.label}
                  </td>
                  <td className="bg-brand/5 px-6 py-4 text-sm text-ink">
                    <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 align-middle text-brand">
                      <Icons.check className="h-3 w-3" />
                    </span>
                    {r.us}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">{r.diy}</td>
                  <td className="px-6 py-4 text-sm text-muted">{r.hire}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}

/* ============ HOME FAQ ============ */
const HOME_FAQS = [
  {
    q: "How fast will I see results?",
    a: "It depends on your starting point, but most sellers see clearer listing improvements within the first 2–4 weeks, and SEO and advertising gains typically compound over 2–3 months. We'll give you an honest assessment of your store before you commit to anything.",
  },
  {
    q: "Do you need access to my seller accounts?",
    a: "Yes — to manage listings, ads and account health we need limited user access to your marketplace and ad accounts. You grant only the permissions we need, and you can revoke access at any time. Your store and funds always stay 100% yours.",
  },
  {
    q: "Which marketplaces do you work with?",
    a: "Amazon, Walmart, eBay, Etsy, Shopify, TikTok Shop and Facebook Marketplace. If you sell on several at once, we coordinate everything as one operation instead of disconnected efforts.",
  },
  {
    q: "How much does it cost?",
    a: "Simple fixed pricing: a free 10-point store audit, a $40 Listing Optimization Pack (10 listings), and $150 Full Store Setup. No hidden fees, no lock-in. See our pricing page or ask us on WhatsApp for a fast answer.",
  },
  {
    q: "Do I keep ownership of my store and listings?",
    a: "Completely. Everything we create or optimize — listings, images, ad campaigns — belongs to you and stays in your accounts. If you ever leave, it all stays with you.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Our plans are month-to-month with no long-term lock-in. If we're not earning our keep, you shouldn't have to stay — though most sellers stay because the work speaks for itself.",
  },
];

export function HomeFAQ() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Sellers Ask Us."
            description="Straight answers before you ever talk to us."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10">
            <FAQ items={HOME_FAQS} />
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-10 text-center">
            <Button variant="ghost" href="/contact" withArrow>
              Still Have Questions? Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

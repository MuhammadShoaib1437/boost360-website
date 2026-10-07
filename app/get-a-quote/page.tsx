import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/icons";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "Get a Free Consultation",
  description:
    "Answer a few questions about your store and get a clear action plan. Free consultation — honest advice, no hard sell.",
  alternates: { canonical: "/get-a-quote" },
};

const NEXT_STEPS = [
  {
    title: "We review your answers",
    desc: "A real person reads through what you sent — your marketplaces, your products, your challenges.",
  },
  {
    title: "We reach out on WhatsApp or email",
    desc: "We follow up personally to ask anything that needs clarifying before we propose anything.",
  },
  {
    title: "You get a clear action plan",
    desc: "Honest, practical next steps for your store — no hard sell, no pressure, no obligation.",
  },
];

export default function GetAQuotePage() {
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
              <Badge dark>Free Consultation</Badge>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Get a <span className="text-gradient">Free Consultation.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Answer a few questions about your store and your goals. We&apos;ll
                review them personally and come back with an honest,
                practical action plan — free, with no obligation.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-[rgba(15,70,130,0.12)] bg-white p-6 shadow-[0_20px_60px_-30px_rgba(9,105,246,0.3)] sm:p-10">
              <SectionHeading
                align="left"
                eyebrow="Tell Us About Your Store"
                title="A few questions, four steps"
                description="Walk through the steps — your answers help us give you advice that's actually useful."
              />
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={120}>
            <aside className="flex flex-col gap-6">
              <div className="rounded-3xl bg-abyss p-7 sm:p-8">
                <h2 className="text-xl font-extrabold tracking-tight text-white">
                  What happens next
                </h2>
                <ol className="mt-6 space-y-6">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric/30 to-ice/15 text-sm font-extrabold text-ice">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-bold text-white">{step.title}</p>
                        <p className="mt-1.5 text-[14px] leading-relaxed text-slate-300">
                          {step.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-3xl border border-[rgba(15,70,130,0.12)] bg-mist p-7 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c15e]/10 text-[#22c15e]">
                  <Icons.whatsapp className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-ink">
                  Prefer to skip the form?
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  Message us directly on WhatsApp and tell us about your store
                  in your own words.
                </p>
                <div className="mt-5">
                  <Button
                    variant="whatsapp"
                    href={waLink("Hi Boost360Pro, I'd like a free consultation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Icons.whatsapp className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

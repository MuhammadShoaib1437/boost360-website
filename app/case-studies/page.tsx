import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/icons";
import { CASE_STUDIES } from "@/lib/data-content";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "Case Studies — Illustrative E-Commerce Examples",
  description:
    "Illustrative examples of how Boost360Pro approaches common e-commerce challenges: listing optimization, multi-channel management, catalog cleanup, store launches and ad restructuring.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
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
              <Badge dark>Case Studies</Badge>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Built Around Real{" "}
                <span className="text-gradient">E-Commerce Challenges.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                We don&apos;t publish client data without permission — so instead of
                unverifiable success stories, here are honest, illustrative
                scenarios showing exactly how we approach the problems sellers
                bring to us.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Honesty notice */}
      <section className="bg-white pt-12 sm:pt-16">
        <Container>
          <Reveal>
            <div
              role="note"
              className="rounded-2xl border border-electric/25 bg-electric/[0.06] p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icons.shield className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-lg font-bold tracking-tight text-ink">
                    An honest note before you read
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    The examples below are illustrative scenarios showing how we
                    approach common e-commerce challenges. They are not client
                    results, and we don&apos;t publish client data without
                    permission. What they do show is real: our process, our
                    thinking, and the kind of work we put in.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Case study blocks */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Our Approach, In Practice"
          title="Five challenges sellers face every day"
          description="Each scenario shows the situation, the key challenges, and exactly how we'd work through it."
        />
        <div className="mt-12 space-y-10">
          {CASE_STUDIES.map((study) => (
            <Reveal key={study.slug} delay={0}>
              <article className="overflow-hidden rounded-3xl border border-[rgba(15,70,130,0.12)] bg-white shadow-[0_20px_60px_-30px_rgba(9,105,246,0.3)]">
                <div className="bg-gradient-to-br from-navy via-midnight to-[#0b2a5e] p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-ice/15 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-ice">
                      {study.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-semibold text-slate-200">
                      <Icons.check className="h-3.5 w-3.5" />
                      Illustrative example — not a client result
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-3xl">
                    {study.title}
                  </h3>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="rounded-2xl bg-mist p-5 sm:p-6">
                    <p className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-brand">
                      The situation
                    </p>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink">
                      {study.situation}
                    </p>
                  </div>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-[rgba(15,70,130,0.12)] p-6">
                      <h4 className="text-base font-bold tracking-tight text-ink">
                        Key challenges
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {study.focus.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted"
                          >
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-electric" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-[rgba(15,70,130,0.12)] p-6">
                      <h4 className="text-base font-bold tracking-tight text-ink">
                        Our approach
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {study.approach.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-muted"
                          >
                            <Icons.check className="mt-0.5 h-5 w-5 shrink-0 text-growth" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-abyss py-20 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[440px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[140px]" />
          <div className="absolute -bottom-32 -left-20 h-[300px] w-[300px] rounded-full bg-growth/10 blur-[110px]" />
        </div>
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have a similar challenge?{" "}
                <span className="text-gradient">Let&apos;s talk.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Tell us what&apos;s going on with your store. We&apos;ll review it
                honestly and come back with a clear plan — no obligation.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" href="/get-a-quote" withArrow>
                  Get a Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="whatsapp"
                  href={waLink(
                    "Hi Boost360Pro, I'm facing a challenge with my store and would like to discuss it.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.whatsapp className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

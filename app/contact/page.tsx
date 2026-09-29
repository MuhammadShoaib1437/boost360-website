import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Badge } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/icons";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  WHATSAPP_DISPLAY,
  EMAIL,
  WA_DEFAULT_MESSAGE,
  waLink,
  mailtoLink,
} from "@/lib/site";

export const metadata = {
  title: "Contact Boost360 — Let's Talk About Your Store",
  description:
    "Reach Boost360 on WhatsApp or email. Tell us about your store — every inquiry is read by a real person.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
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
              <Badge dark>Contact</Badge>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Talk About{" "}
                <span className="text-gradient">Your Store.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Questions about our services, a problem with your store, or just
                want to say hello? Pick whichever channel suits you — we reply
                to all of them.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact cards */}
      <section className="bg-white pt-14 sm:pt-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-3xl border border-[rgba(15,70,130,0.12)] bg-white p-8 shadow-[0_20px_60px_-30px_rgba(9,105,246,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-electric/40">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22c15e]/10 text-[#22c15e]">
                  <Icons.whatsapp className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink">
                  WhatsApp
                </h2>
                <p className="mt-2 text-lg font-semibold text-brand">
                  {WHATSAPP_DISPLAY}
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  Chat with us directly. The fastest way to reach us — tell us
                  about your store and what you need help with.
                </p>
                <div className="mt-7">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    href={waLink(WA_DEFAULT_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Icons.whatsapp className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full flex-col rounded-3xl border border-[rgba(15,70,130,0.12)] bg-white p-8 shadow-[0_20px_60px_-30px_rgba(9,105,246,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-electric/40">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                  <Icons.mail className="h-7 w-7" />
                </span>
                <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink">
                  Email
                </h2>
                <p className="mt-2 break-all text-lg font-semibold text-brand">
                  {EMAIL}
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  Prefer writing? Send us an email with your questions, your
                  store link, or anything else you&apos;d like to discuss.
                </p>
                <div className="mt-7">
                  <Button
                    variant="ghost"
                    size="lg"
                    href={mailtoLink("Hello Boost360", "Hi Boost360,")}
                    className="w-full sm:w-auto"
                  >
                    <Icons.mail className="h-5 w-5" />
                    Send an Email
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Form */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-[rgba(15,70,130,0.12)] bg-white p-7 shadow-[0_20px_60px_-30px_rgba(9,105,246,0.3)] sm:p-10">
              <SectionHeading
                align="left"
                eyebrow="Send a Message"
                title="Drop us a line"
                description="Fill in the form and we'll get back to you. Prefer WhatsApp or email — every inquiry is read by a real person."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-3xl bg-abyss p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice/10 text-ice">
                  <Icons.globe className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                  We work with sellers worldwide
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-300">
                  Our work is fully remote. Whether you sell on Amazon in the
                  US, Etsy in the UK, or eBay in Australia — if your store is
                  online, we can help.
                </p>
              </div>
              <div className="rounded-3xl border border-[rgba(15,70,130,0.12)] bg-mist p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/10 to-ice/15 text-brand">
                  <Icons.spark className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                  What to include
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Which marketplaces you sell on",
                    "What you're selling (product types)",
                    "The biggest challenge you're facing",
                    "Your store or listing links (optional)",
                  ].map((item) => (
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
          </Reveal>
        </div>
      </Section>
    </>
  );
}

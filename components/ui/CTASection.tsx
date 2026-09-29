import { waLink } from "@/lib/site";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Icons } from "../ui/icons";
import { Reveal } from "../ui/Reveal";

/** Full-width dark CTA used across pages. */
export function CTASection({
  heading = "Ready to Give Your E-Commerce Business a Boost?",
  description = "Tell us where your business is today and where you want to take it. Let's identify the right next steps for your store.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-abyss py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[140px]" />
        <div className="absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full bg-ice/15 blur-[120px]" />
        <div className="absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full bg-growth/10 blur-[120px]" />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" href="/get-a-quote" withArrow>
                Get a Free Consultation
              </Button>
              <Button
                size="lg"
                variant="whatsapp"
                href={waLink(
                  "Hi Boost360, I'm interested in your e-commerce services.",
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
  );
}

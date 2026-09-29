import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Let's get you back to growing your e-commerce business.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center overflow-hidden bg-abyss">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/15 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-growth/10 blur-[110px]" />
      </div>
      <Container className="relative py-24 text-center">
        {/* animated 360 ring */}
        <div aria-hidden="true" className="relative mx-auto h-44 w-44">
          <div className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-ice/40" />
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gradient text-6xl font-extrabold">360°</span>
          </div>
        </div>
        <p className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-ice">
          404 — Page not found
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Looks Like This Page Took a Detour.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
          Let&apos;s get you back to growing your e-commerce business.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" href="/" withArrow>
            Back to Home
          </Button>
          <Button size="lg" variant="secondary" href="/contact">
            <Icons.mail className="h-5 w-5" />
            Contact Boost360
          </Button>
        </div>
      </Container>
    </div>
  );
}

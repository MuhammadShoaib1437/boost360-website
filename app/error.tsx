"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-mist">
      <Container className="py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">
          Something went wrong.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          An unexpected error occurred. Please try again — or reach us directly
          and we&apos;ll help.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-brand via-electric to-ice px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5"
          >
            Try again
          </button>
          <Button variant="ghost" href="/contact">
            Contact Boost360Pro
          </Button>
        </div>
      </Container>
    </div>
  );
}

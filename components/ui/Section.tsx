import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Badge({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-semibold tracking-wide",
        dark
          ? "border-ice/25 bg-ice/10 text-ice"
          : "border-electric/20 bg-electric/5 text-brand",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-growth animate-pulse-soft" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-[15px] font-extrabold uppercase tracking-[0.22em]",
            dark ? "text-ice" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[44px]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Section({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      className={cn("py-20 sm:py-24 lg:py-28", dark ? "bg-abyss" : "bg-white", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

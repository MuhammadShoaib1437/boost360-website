import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand via-electric to-ice text-white shadow-[0_8px_30px_-6px_rgba(255,90,46,0.55)] hover:shadow-[0_12px_40px_-6px_rgba(255,90,46,0.7)] hover:-translate-y-0.5",
  secondary:
    "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-ice/60 hover:bg-white/10 hover:-translate-y-0.5",
  ghost:
    "border border-[rgba(255,59,71,0.18)] bg-white text-ink hover:border-electric/50 hover:text-brand hover:-translate-y-0.5",
  whatsapp:
    "bg-[#22c15e] text-white shadow-[0_8px_30px_-6px_rgba(34,193,94,0.5)] hover:brightness-95 hover:-translate-y-0.5",
  light: "bg-white text-navy hover:-translate-y-0.5 hover:shadow-xl",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: Props) {
  return (
    <a
      className={cn(
        "group btn-sheen inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-[15px]",
        size === "lg" && "px-8 py-4 text-base",
        styles[variant],
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {withArrow && (
        <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </a>
  );
}

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export function Breadcrumbs({
  items,
  dark = false,
}: {
  items: { label: string; href?: string }[];
  dark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className={dark ? "text-slate-500" : "text-muted/60"}
                >
                  /
                </span>
              )}
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    dark
                      ? "text-slate-400 hover:text-ice"
                      : "text-muted hover:text-brand",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className={cn(
                    "font-medium",
                    dark ? "text-slate-200" : "text-ink",
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-brand"
    >
      <Icons.arrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}

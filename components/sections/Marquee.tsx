"use client";

import Link from "next/link";

/** Infinite logo/text marquee. Pauses on hover; static under reduced motion. */
const DOT_GRADIENTS = [
  "from-brand to-electric",
  "from-ice to-growth",
  "from-growth to-ice",
  "from-amber-400 to-orange-500",
];

export type MarqueeItem = { label: string; href?: string };

export function Marquee({ items }: { items: MarqueeItem[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
      aria-label="Supported marketplaces"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="marquee-track flex w-max animate-marquee gap-4 py-2 hover:[animation-play-state:paused]">
        {doubled.map((item, i) => {
          const dup = i >= items.length;
          const inner = (
            <>
              <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${DOT_GRADIENTS[i % DOT_GRADIENTS.length]}`} />
              {item.label}
              {item.href && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-electric opacity-0 transition-all duration-300 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              )}
            </>
          );
          const cls =
            "group flex items-center gap-3 whitespace-nowrap rounded-2xl border border-[rgba(15,70,130,0.12)] bg-mist px-7 py-4 text-lg font-bold tracking-tight text-ink transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white hover:shadow-[0_16px_40px_-20px_rgba(9,105,246,0.5)]";
          return item.href ? (
            <Link
              key={`${item.label}-${i}`}
              href={item.href}
              aria-hidden={dup || undefined}
              tabIndex={dup ? -1 : undefined}
              className={cls}
            >
              {inner}
            </Link>
          ) : (
            <span
              key={`${item.label}-${i}`}
              aria-hidden={dup || undefined}
              className={cls}
            >
              {inner}
            </span>
          );
        })}
      </div>
    </div>
  );
}

"use client";

/** Infinite logo/text marquee. Pauses on hover; static under reduced motion. */
const DOT_GRADIENTS = [
  "from-brand to-electric",
  "from-ice to-growth",
  "from-growth to-ice",
  "from-amber-400 to-orange-500",
];

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
      aria-label="Supported marketplaces"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="marquee-track flex w-max animate-marquee gap-4 py-2 hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 whitespace-nowrap rounded-2xl border border-[rgba(15,70,130,0.12)] bg-mist px-7 py-4 text-lg font-bold tracking-tight text-ink transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white hover:shadow-[0_16px_40px_-20px_rgba(9,105,246,0.5)]"
          >
            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${DOT_GRADIENTS[i % DOT_GRADIENTS.length]}`} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

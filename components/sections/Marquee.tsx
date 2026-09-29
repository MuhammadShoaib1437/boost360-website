"use client";

/** Infinite logo/text marquee. Pauses on hover; static under reduced motion. */
export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden"
      aria-label="Supported marketplaces"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
      <div className="marquee-track flex w-max animate-marquee gap-4 py-2">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 whitespace-nowrap rounded-2xl border border-[rgba(15,70,130,0.12)] bg-mist px-7 py-4 text-lg font-bold tracking-tight text-ink"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-electric to-growth" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

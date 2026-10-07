"use client";

import { useRef, useState, useCallback } from "react";
import { Icons } from "../ui/icons";

const BEFORE = [
  "Basic title",
  "Weak product images",
  "Missing attributes",
  "Poor description structure",
  "Limited keyword coverage",
];

const AFTER = [
  "Structured, keyword-led title",
  "Improved image hierarchy",
  "Complete, relevant attributes",
  "Buyer-friendly description",
  "Stronger keyword structure",
];

function Panel({
  kind,
}: {
  kind: "before" | "after";
}) {
  const items = kind === "before" ? BEFORE : AFTER;
  const isAfter = kind === "after";
  return (
    <div className={isAfter ? "bg-mist" : "bg-[#eef1f7]"}>
      <div className="p-7 sm:p-10">
        <span
          className={
            isAfter
              ? "inline-block rounded-full bg-growth/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#22c15e]"
              : "inline-block rounded-full bg-slate-500/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500"
          }
        >
          {isAfter ? "After" : "Before"}
        </span>
        <div className="mt-6 max-w-md space-y-4">
          <div
            aria-hidden="true"
            className={
              isAfter
                ? "h-10 rounded-lg bg-gradient-to-r from-electric/25 to-ice/25 ring-1 ring-ice/40"
                : "h-10 rounded-lg bg-slate-300/50"
            }
          />
          <div className="flex gap-3" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={
                  isAfter
                    ? `h-20 w-20 rounded-xl ring-1 ${i === 0 ? "bg-gradient-to-br from-electric/30 to-ice/30 ring-ice/40" : "bg-ice/15 ring-ice/25"}`
                    : `h-20 w-20 rounded-xl ${i === 0 ? "bg-slate-300/40" : "bg-slate-200/60"}`
                }
              />
            ))}
          </div>
          <ul className="space-y-3 pt-1">
            {items.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-2.5 text-[15px] ${isAfter ? "font-medium text-ink" : "text-slate-500"}`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${isAfter ? "bg-growth/20" : "bg-slate-400/25"}`}
                >
                  {isAfter ? (
                    <Icons.check className="h-3 w-3 text-[#22c15e]" />
                  ) : (
                    <Icons.x className="h-3 w-3 text-slate-500" />
                  )}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Interactive Before/After listing comparison. Clearly labeled illustrative. */
export function BeforeAfter() {  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(97, Math.max(3, pct)));
  }, []);

  return (
    <div>
      <div
        ref={trackRef}
        className="relative cursor-ew-resize select-none overflow-hidden rounded-3xl border border-[rgba(15,70,130,0.14)] shadow-[0_30px_70px_-30px_rgba(9,105,246,0.35)]"
        onPointerDown={(e) => {
          dragging.current = true;
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
        role="slider"
        aria-label="Before and after comparison slider"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(3, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(97, p + 4));
        }}
      >
        <Panel kind="before" />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          aria-hidden="true"
        >
          <Panel kind="after" />
        </div>

        {/* divider handle */}
        <div className="absolute inset-y-0 z-10" style={{ left: `${pos}%` }} aria-hidden="true">
          <div className="absolute inset-y-0 -left-px w-0.5 bg-gradient-to-b from-electric via-ice to-growth" />
          <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-ice/60">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 6-4 6 4 6" />
              <path d="m15 6 4 6-4 6" />
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-muted">
        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[12px] font-bold uppercase tracking-wider text-slate-500">
          Illustrative example
        </span>{" "}
        — drag the handle to compare. Not a client result.
      </p>

      {/* Concrete title transformation example */}
      <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
        <div className="group rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-[0_20px_45px_-24px_rgba(100,116,139,0.5)]">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            Before — typical weak title
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
            “nice lamp for home decoration gift”
          </p>
          <ul className="mt-4 space-y-2 text-[13.5px] text-slate-500">
            <li className="flex gap-2 transition-transform duration-300 hover:translate-x-1"><span aria-hidden="true" className="font-bold text-red-400 transition-transform duration-300 group-hover:scale-125">✕</span> No searchable keywords</li>
            <li className="flex gap-2 transition-transform duration-300 hover:translate-x-1"><span aria-hidden="true" className="font-bold text-red-400 transition-transform duration-300 group-hover:scale-125">✕</span> No features buyers filter for</li>
            <li className="flex gap-2 transition-transform duration-300 hover:translate-x-1"><span aria-hidden="true" className="font-bold text-red-400 transition-transform duration-300 group-hover:scale-125">✕</span> Wastes 60+ characters of title space</li>
          </ul>
        </div>
        <div className="glow-card group rounded-2xl border border-ice/40 bg-gradient-to-br from-white via-white to-mist p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_-24px_rgba(9,105,246,0.5)]">
          <p className="inline-block rounded-full bg-growth/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#22c15e]">
            After — optimized title
          </p>
          <p className="mt-3 text-[15px] font-medium leading-relaxed text-ink">
            “Dimmable LED Table Lamp with USB Charging Port — Modern Bedside Lamp for Bedroom &amp; Office”
          </p>
          <ul className="mt-4 space-y-2 text-[13.5px] font-medium text-ink">
            <li className="flex gap-2 transition-transform duration-300 hover:translate-x-1"><span aria-hidden="true" className="font-bold text-[#22c15e] transition-transform duration-300 group-hover:scale-125">✓</span> Keywords buyers actually search</li>
            <li className="flex gap-2 transition-transform duration-300 hover:translate-x-1"><span aria-hidden="true" className="font-bold text-[#22c15e] transition-transform duration-300 group-hover:scale-125">✓</span> Features that match marketplace filters</li>
            <li className="flex gap-2 transition-transform duration-300 hover:translate-x-1"><span aria-hidden="true" className="font-bold text-[#22c15e] transition-transform duration-300 group-hover:scale-125">✓</span> Full title space working for clicks</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center text-[12.5px] text-muted/80">
        Sample transformation for illustration — not a client listing.
      </p>
    </div>
  );
}

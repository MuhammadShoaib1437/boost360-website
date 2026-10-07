"use client";

import { useEffect, useRef, useState } from "react";
import { Icons } from "../ui/icons";

/**
 * Animated analytics dashboard visual for the hero.
 * All figures are SAMPLE UI demonstration data — not Boost360Pro client results.
 */

/** Adds `is-visible` whenever the element is in view (removed when scrolled away,
 * so the revenue line redraws every time the chart re-enters the viewport). */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setInView(e.isIntersecting));
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}
const CHIPS = ["Amazon", "Walmart", "eBay", "Etsy", "Shopify", "TikTok Shop"];

const KPIS = [
  { label: "Total Sales", value: "$48,290", delta: "+12.4%", icon: "cart" },
  { label: "Orders", value: "1,284", delta: "+8.1%", icon: "layers" },
  { label: "Conversion Rate", value: "3.42%", delta: "+0.6%", icon: "chart" },
  { label: "Store Health", value: "98/100", delta: "Excellent", icon: "shield" },
] as const;

function KpiCard({
  label,
  value,
  delta,
  icon,
  className = "",
}: {
  label: string;
  value: string;
  delta: string;
  icon: keyof typeof Icons;
  className?: string;
}) {
  const Icon = Icons[icon];
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          {label}
        </p>
        <Icon className="h-4 w-4 text-ice/70" />
      </div>
      <p className="mt-2 text-2xl font-extrabold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-growth">
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor" aria-hidden="true">
          <path d="M12 4l7 9H5l7-9Z" />
        </svg>
        {delta}
      </p>
    </div>
  );
}

export function HeroDashboard() {
  const chart = useInView<HTMLDivElement>(0.2);
  return (
    <div className="relative" aria-hidden="true">
      {/* glow */}
      <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-br from-electric/25 via-ice/15 to-growth/10 blur-3xl" />

      {/* floating marketplace chips */}
      {CHIPS.map((chip, i) => (
        <div
          key={chip}
          className={`absolute z-10 hidden rounded-full border border-white/15 bg-midnight/90 px-3.5 py-1.5 text-[12px] font-semibold text-slate-200 shadow-xl backdrop-blur-md animate-float-slow md:block ${
            [
              "-left-6 top-6",
              "-right-4 top-20",
              "-left-8 top-1/2",
              "-right-8 top-2/3",
              "left-10 -bottom-4",
              "right-12 -top-4",
            ][i]
          }`}
          style={{ animationDelay: `${i * 0.9}s` }}
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-ice" />
          {chip}
        </div>
      ))}

      <div className="relative animate-float rounded-[24px] border border-white/10 bg-midnight/80 p-5 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff3b47]" />
          </div>
          <p className="rounded-full bg-ice/10 px-3 py-1 text-[11px] font-semibold text-ice">
            Sample dashboard
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((k) => (
            <KpiCard key={k.label} {...k} />
          ))}
        </div>

        {/* revenue trend chart — line redraws upward every time it enters the viewport */}
        <div
          ref={chart.ref}
          className={`mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 draw-on-view${
            chart.inView ? " is-visible" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Revenue Trend
            </p>
            <p className="text-[12px] font-semibold text-growth">+18.2% this period</p>
          </div>
          <svg viewBox="0 0 560 180" className="mt-2 h-36 w-full sm:h-44" role="img" aria-label="Sample revenue trend chart">
            <defs>
              <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff8a1e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ff8a1e" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="revLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff5a2e" />
                <stop offset="60%" stopColor="#ff8a1e" />
                <stop offset="100%" stopColor="#ff3b47" />
              </linearGradient>
            </defs>
            {[30, 70, 110, 150].map((y) => (
              <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            ))}
            <path
              d="M0,150 C40,145 60,120 90,118 C120,116 140,130 170,124 C200,118 210,90 245,88 C280,86 295,105 325,98 C355,91 370,60 405,58 C440,56 455,75 490,62 C520,52 540,40 560,34 L560,180 L0,180 Z"
              fill="url(#revFill)"
              className="draw-fill"
            />
            <path
              d="M0,150 C40,145 60,120 90,118 C120,116 140,130 170,124 C200,118 210,90 245,88 C280,86 295,105 325,98 C355,91 370,60 405,58 C440,56 455,75 490,62 C520,52 540,40 560,34"
              fill="none"
              stroke="url(#revLine)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="640"
              className="draw-line"
            />
            <circle cx="560" cy="34" r="5" fill="#ff3b47">
              <animate attributeName="r" values="5;7;5" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* channel bars */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Marketplace", value: "92%", w: "92%" },
            { label: "Advertising", value: "78%", w: "78%" },
            { label: "Channels", value: "6 active", w: "100%" },
          ].map((b) => (
            <div key={b.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="truncate text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                {b.label}
              </p>
              <p className="mt-1.5 text-lg font-extrabold text-white">{b.value}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-electric to-growth"
                  style={{ width: b.w }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] text-slate-500">
          Illustrative interface preview — sample data for demonstration only.
        </p>
      </div>
    </div>
  );
}

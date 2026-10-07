"use client";

import Link from "next/link";
import { Icons } from "../ui/icons";

const NODES: { label: string; href: string }[] = [
  { label: "Research", href: "/services/product-research" },
  { label: "Setup", href: "/services/store-setup" },
  { label: "Listings", href: "/services/listing-optimization" },
  { label: "SEO", href: "/services/ecommerce-seo" },
  { label: "Advertising", href: "/services/ppc-advertising" },
  { label: "Operations", href: "/services/account-health" },
  { label: "Optimization", href: "/services/marketplace-management" },
  { label: "Growth", href: "/services/multi-channel-management" },
];

/**
 * Animated 360° concept graphic.
 * Nodes orbit slowly around the center (counter-rotated so labels stay upright)
 * and each node links to its service page.
 */
export function Circle360() {
  return (
    <div>
      {/* Desktop / tablet radial */}
      <div className="relative mx-auto hidden h-[480px] w-[480px] sm:block lg:h-[560px] lg:w-[560px]">
        {/* outer ring */}
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-ice/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-10 rounded-full border border-white/8"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,90,46,0.16),transparent_62%)]"
        />

        {/* nodes — orbit around the center, labels stay upright, click opens the service */}
        <div className="absolute inset-0 animate-spin-slower">
          {NODES.map((node, i) => {
            const rad = ((i / NODES.length) * 360 - 90) * (Math.PI / 180);
            const left = 50 + 38 * Math.cos(rad);
            const top = 50 + 38 * Math.sin(rad);
            return (
              <div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <Link
                  href={node.href}
                  className="block animate-spin-slower-reverse whitespace-nowrap rounded-full border border-ice/30 bg-midnight/90 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_-6px_rgba(255,138,30,0.55)] backdrop-blur-md transition-colors hover:border-ice/70 hover:text-ice"
                >
                  {node.label}
                </Link>
              </div>
            );
          })}
        </div>

        {/* center */}
        <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-ice/30 bg-navy shadow-[0_0_80px_-10px_rgba(255,138,30,0.6)] lg:h-52 lg:w-52">
          <span className="text-gradient text-5xl font-extrabold tracking-tight lg:text-6xl">
            360°
          </span>
          <span className="mt-2 px-6 text-center text-[12px] font-medium uppercase tracking-[0.2em] text-slate-300">
            Full Coverage
          </span>
        </div>
      </div>

      {/* Mobile grid fallback */}
      <div className="sm:hidden">
        <div className="mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full border border-ice/30 bg-navy shadow-[0_0_60px_-10px_rgba(255,138,30,0.6)]">
          <span className="text-gradient text-4xl font-extrabold">360°</span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-300">
            Full Coverage
          </span>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3">
          {NODES.map((node, i) => (
            <li key={node.label}>
              <Link
                href={node.href}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-ice/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ice/10 text-[13px] font-bold text-ice">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-semibold text-white">
                  {node.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-400">
        <Icons.check className="h-4 w-4 text-growth" />
        Every stage connected — one team, one workflow, full visibility.
      </p>
    </div>
  );
}

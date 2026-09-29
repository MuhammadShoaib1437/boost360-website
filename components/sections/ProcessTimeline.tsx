"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "../ui/Reveal";

export type Step = { title: string; desc: string };

/** Scroll-animated vertical timeline with a progress line. */
export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh * 0.4;
      const done = Math.min(Math.max(vh * 0.7 - rect.top, 0), Math.max(total, 1));
      setProgress(Math.min(1, done / Math.max(total, 1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="relative mx-auto max-w-3xl">
      {/* track */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-[27px] top-8 w-[3px] rounded-full bg-[rgba(15,70,130,0.12)] sm:left-[31px]"
      />
      <div
        ref={lineRef}
        aria-hidden="true"
        className="absolute bottom-8 left-[27px] top-8 w-[3px] rounded-full bg-gradient-to-b from-electric via-ice to-growth transition-[height] duration-150 sm:left-[31px]"
        style={{ height: `calc((100% - 64px) * ${progress})` }}
      />

      <ol className="space-y-10">
        {steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-6 sm:gap-8">
            <Reveal delay={(i % 3) * 80} className="flex w-full gap-6 sm:gap-8">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-electric text-lg font-extrabold text-white shadow-[0_10px_30px_-8px_rgba(9,105,246,0.6)] sm:h-16 sm:w-16">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div
                className={cn(
                  "flex-1 rounded-2xl border border-[rgba(15,70,130,0.12)] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(9,105,246,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_24px_50px_-24px_rgba(9,105,246,0.5)] sm:p-7",
                )}
              >
                <h3 className="text-xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{step.desc}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}

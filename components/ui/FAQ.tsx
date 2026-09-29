"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";

export function FAQ({
  items,
  dark = false,
}: {
  items: { q: string; a: string }[];
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[rgba(15,70,130,0.1)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={cn(dark && "divide-white/10")}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={cn(
                "flex w-full items-center justify-between gap-4 py-5 text-left",
                dark ? "text-white" : "text-ink",
              )}
            >
              <span className="text-[17px] font-semibold">{item.q}</span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300",
                  dark ? "border-white/20" : "border-[rgba(15,70,130,0.15)]",
                  isOpen && "rotate-180 bg-ice/10 border-ice/40",
                )}
              >
                <Icons.chevronDown className="h-4 w-4" />
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p
                  className={cn(
                    "max-w-3xl leading-relaxed",
                    dark ? "text-slate-300" : "text-muted",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

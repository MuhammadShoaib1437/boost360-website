"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { waLink } from "@/lib/site";
import { Icons } from "../ui/icons";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink("Hi Boost360Pro, I'm interested in your e-commerce services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Boost360Pro on WhatsApp"
      title="Chat with Boost360Pro"
      className={cn(
        "group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22c15e] text-white shadow-[0_10px_35px_-5px_rgba(34,193,94,0.6)] transition-all duration-500 hover:scale-105 hover:brightness-95 sm:bottom-6 sm:right-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Icons.whatsapp className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with Boost360Pro
      </span>
    </a>
  );
}

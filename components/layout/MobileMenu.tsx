"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/site";
import { SERVICES } from "@/lib/data-services";
import { MARKETPLACES } from "@/lib/data-marketplaces";
import { Icons } from "../ui/icons";
import { Button } from "../ui/Button";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const [lastOpen, setLastOpen] = useState(open);

  // Reset the accordion whenever the menu closes (React's sanctioned
  // "adjust state during render" pattern for derived state).
  if (lastOpen !== open) {
    setLastOpen(open);
    if (!open) setExpanded(null);
  }

  const groups = [
    {
      label: "Services",
      href: "/services",
      items: SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
    },
    {
      label: "Marketplaces",
      href: "/marketplaces",
      items: MARKETPLACES.map((m) => ({ label: m.name, href: `/marketplaces/${m.slug}` })),
    },
  ];

  return (
    <div
      className={cn("fixed inset-0 z-[60] lg:hidden", open ? "visible" : "invisible")}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-abyss/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-midnight shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <Image
            src="/logo-v3.png"
            alt="Boost360Pro"
            width={2107}
            height={643}
            className="h-10 w-auto drop-shadow-[0_0_16px_rgba(255,107,107,0.45)]"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white"
          >
            <Icons.x className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto p-5">
          <Link
            href="/"
            onClick={onClose}
            className="block rounded-xl px-3 py-3 text-[16px] font-medium text-white hover:bg-white/5"
          >
            Home
          </Link>
          {groups.map((g) => {
            const isOpen = expanded === g.label;
            return (
              <div key={g.label} className="mt-1">
                <div className="flex items-center rounded-xl hover:bg-white/5">
                  <Link
                    href={g.href}
                    onClick={onClose}
                    className="flex-1 px-3 py-3 text-[16px] font-medium text-white"
                  >
                    {g.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : g.label)}
                    aria-expanded={isOpen}
                    aria-label={`Expand ${g.label}`}
                    className="mr-2 flex h-9 w-9 items-center justify-center rounded-lg text-slate-300"
                  >
                    <Icons.chevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </div>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="ml-3 space-y-0.5 border-l border-white/10 py-1 pl-4">
                      {g.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-lg px-2 py-2 text-[14px] text-slate-300 hover:bg-white/5 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {[
            { label: "Case Studies", href: "/case-studies" },
            { label: "Pricing", href: "/pricing" },
            { label: "About", href: "/about" },
            { label: "Insights", href: "/insights" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="mt-1 block rounded-xl px-3 py-3 text-[16px] font-medium text-white hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-3 border-t border-white/10 p-5">
          <Button
            variant="whatsapp"
            href={waLink(WA_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Icons.whatsapp className="h-5 w-5" />
            WhatsApp Us
          </Button>
          <Button href="/get-a-quote" className="w-full" withArrow>
            Get a Free Consultation
          </Button>
        </div>
      </aside>
    </div>
  );
}

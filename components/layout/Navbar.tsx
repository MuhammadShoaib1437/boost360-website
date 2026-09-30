"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { waLink, WA_DEFAULT_MESSAGE } from "@/lib/site";
import { SERVICES } from "@/lib/data-services";
import { MARKETPLACES } from "@/lib/data-marketplaces";
import { Icons } from "../ui/icons";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";

function Dropdown({
  label,
  href,
  items,
  active,
}: {
  label: string;
  href: string;
  items: { title: string; slug: string; short: string }[];
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link
          href={href}
          aria-expanded={open}
          className={cn(
            "flex items-center gap-1 px-3 py-2 text-[15px] font-medium transition-colors",
            active ? "text-brand" : "text-slate-600 hover:text-ink",
          )}
        >
          {label}
          <Icons.chevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </Link>
      </div>
      <div
        className={cn(
          "absolute left-1/2 top-full w-[480px] -translate-x-1/2 pt-3 transition-all duration-150",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-midnight/95 p-3 shadow-[0_24px_70px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`${href}/${item.slug}`}
              className="group rounded-xl p-3 transition-colors hover:bg-white/5"
            >
              <p className="text-[14px] font-semibold text-white group-hover:text-ice">
                {item.title}
              </p>
              <p className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-slate-400">
                {item.short}
              </p>
            </Link>
          ))}
          <Link
            href={href}
            className="col-span-2 mt-1 flex items-center justify-center gap-2 rounded-xl bg-ice/10 px-3 py-2.5 text-sm font-semibold text-ice transition-colors hover:bg-ice/15"
          >
            View all {label.toLowerCase()}
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu whenever the route changes (React's sanctioned
  // "adjust state during render" pattern for derived state).
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  const serviceItems = SERVICES.map((s) => ({
    title: s.title,
    slug: s.slug,
    short: s.short,
  }));
  const marketplaceItems = MARKETPLACES.map((m) => ({
    title: m.name,
    slug: m.slug,
    short: m.tagline,
  }));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 py-2 shadow-lg backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex w-full max-w-7xl items-center justify-between pl-2 pr-5 sm:pl-3 sm:pr-8 lg:pl-4 lg:pr-10"
        >
          <Link href="/" aria-label="Boost360Pro home" className="shrink-0">
            <Image
              src="/logo-v3.png"
              alt="Boost360Pro — Complete E-Commerce Growth"
              width={2107}
              height={643}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 text-[15px] font-medium transition-colors",
                pathname === "/" ? "text-brand" : "text-slate-600 hover:text-ink",
              )}
            >
              Home
            </Link>
            <Dropdown
              label="Services"
              href="/services"
              items={serviceItems}
              active={pathname.startsWith("/services")}
            />
            <Dropdown
              label="Marketplaces"
              href="/marketplaces"
              items={marketplaceItems}
              active={pathname.startsWith("/marketplaces")}
            />
            {[
              { label: "Case Studies", href: "/case-studies" },
              { label: "About", href: "/about" },
              { label: "Insights", href: "/insights" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-2 text-[15px] font-medium transition-colors",
                  pathname === l.href || pathname.startsWith(l.href + "/")
                    ? "text-brand"
                    : "text-slate-600 hover:text-ink",
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              variant="whatsapp"
              size="sm"
              href={waLink(WA_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.whatsapp className="h-4 w-4" />
              WhatsApp Us
            </Button>
            <Button size="sm" href="/get-a-quote" withArrow>
              Get a Free Consultation
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-800 lg:hidden"
          >
            <Icons.menu className="h-5 w-5" />
          </button>
        </nav>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

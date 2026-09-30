import Link from "next/link";
import Image from "next/image";
import {
  SITE_TAGLINE,
  WHATSAPP_DISPLAY,
  EMAIL,
  waLink,
  WA_DEFAULT_MESSAGE,
  mailtoLink,
} from "@/lib/site";
import { SERVICES } from "@/lib/data-services";
import { MARKETPLACES } from "@/lib/data-marketplaces";
import { Icons } from "../ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  const columns: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" },
        { label: "Get a Quote", href: "/get-a-quote" },
      ],
    },
    {
      title: "Services",
      links: SERVICES.slice(0, 6).map((s) => ({
        label: s.title.replace(" Support", "").replace(" Management", ""),
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: "Marketplaces",
      links: MARKETPLACES.map((m) => ({
        label: m.name,
        href: `/marketplaces/${m.slug}`,
      })),
    },
  ];

  return (
    <footer className="bg-abyss text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Link href="/" aria-label="Boost360Pro home">
              <span className="inline-flex items-center rounded-xl bg-white px-3 py-2">
                <Image
                  src="/logo-v3.png"
                  alt="Boost360Pro"
                  width={2107}
                  height={643}
                  className="h-10 w-auto"
                />
              </span>
            </Link>
            <p className="mt-3 text-sm font-semibold tracking-wide text-ice">
              {SITE_TAGLINE}
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-slate-400">
              Marketplace management, optimization and growth support for modern
              online sellers.
            </p>
            <div className="mt-6 space-y-3 text-[15px]">
              <a
                href={waLink(WA_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#22c15e]/15 text-[#2bd96b]">
                  <Icons.whatsapp className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    WhatsApp
                  </span>
                  <span className="font-semibold">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
              <a
                href={mailtoLink("Hello Boost360Pro", "Hi Boost360Pro,")}
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ice/10 text-ice">
                  <Icons.mail className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <span className="font-semibold">{EMAIL}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={`Footer — ${col.title}`}>
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="text-[14.5px] text-slate-400 transition-colors hover:text-ice"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} Boost360Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-slate-500 transition-colors hover:text-ice"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 transition-colors hover:text-ice"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

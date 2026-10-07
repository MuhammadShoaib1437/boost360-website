import Link from "next/link";
import { Icons, type IconName } from "./icons";
import { Reveal } from "./Reveal";
import type { Service } from "@/lib/data-services";
import type { Marketplace } from "@/lib/data-marketplaces";
import type { CaseStudy, InsightPost } from "@/lib/data-content";
import { cn } from "@/lib/utils";

function CardShell({
  children,
  href,
  label,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 sm:p-7",
        dark
          ? "border-white/10 bg-white/[0.04] hover:border-ice/40 hover:bg-white/[0.06]"
          : "border-[rgba(255,59,71,0.12)] bg-white hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(255,59,71,0.45)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: dark
            ? "radial-gradient(420px circle at 50% 0%, rgba(255,138,30,0.12), transparent 70%)"
            : "radial-gradient(420px circle at 50% 0%, rgba(255,90,46,0.08), transparent 70%)",
        }}
      />
      {children}
    </Link>
  );
}

function IconBadge({ icon, dark = false }: { icon: IconName; dark?: boolean }) {
  const Icon = Icons[icon];
  return (
    <span
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
        dark
          ? "bg-gradient-to-br from-electric/25 to-ice/15 text-ice"
          : "bg-gradient-to-br from-brand/10 to-ice/15 text-brand",
      )}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

export function ServiceCard({
  service,
  dark = false,
  delay = 0,
}: {
  service: Service;
  dark?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <CardShell
        href={`/services/${service.slug}`}
        label={`${service.title} — learn more`}
        dark={dark}
      >
        <IconBadge icon={service.icon as IconName} dark={dark} />
        <h3
          className={cn(
            "mt-5 text-lg font-bold tracking-tight",
            dark ? "text-white" : "text-ink",
          )}
        >
          {service.title}
        </h3>
        <p
          className={cn(
            "mt-2.5 flex-1 text-[14.5px] leading-relaxed",
            dark ? "text-slate-300" : "text-muted",
          )}
        >
          {service.short}
        </p>
        <span
          className={cn(
            "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold",
            dark ? "text-ice" : "text-brand",
          )}
        >
          Learn More
          <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </CardShell>
    </Reveal>
  );
}

export function MarketplaceCard({
  marketplace,
  points,
  dark = false,
  delay = 0,
}: {
  marketplace: Marketplace;
  points: string[];
  dark?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <CardShell
        href={`/marketplaces/${marketplace.slug}`}
        label={`${marketplace.name} services — learn more`}
        dark={dark}
      >
        <div className="flex items-center justify-between">
          <h3
            className={cn(
              "text-lg font-bold tracking-tight",
              dark ? "text-white" : "text-ink",
            )}
          >
            {marketplace.name}
          </h3>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ice/10 text-ice transition-transform duration-300 group-hover:translate-x-1">
            <Icons.arrowRight className="h-4 w-4" />
          </span>
        </div>
        <ul className="mt-4 flex-1 space-y-2">
          {points.map((p) => (
            <li
              key={p}
              className={cn(
                "flex items-center gap-2.5 text-[14.5px]",
                dark ? "text-slate-300" : "text-muted",
              )}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-electric to-growth" />
              {p}
            </li>
          ))}
        </ul>
      </CardShell>
    </Reveal>
  );
}

export function CaseStudyCard({
  study,
  delay = 0,
}: {
  study: CaseStudy;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(255,59,71,0.12)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(255,59,71,0.45)]">
        <div className="relative bg-gradient-to-br from-navy via-midnight to-[#101019] p-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-grid-dark opacity-60"
          />
          <div className="relative">
            <span className="inline-block rounded-full bg-ice/15 px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-ice">
              {study.category}
            </span>
            <span className="ml-2 inline-block rounded-full bg-white/10 px-3 py-1 text-[11.5px] font-semibold text-slate-300">
              Illustrative example
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">
            {study.title}
          </h3>
          <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted line-clamp-3">
            {study.situation}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            View approach
            <Icons.arrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
        <Link
          href="/case-studies"
          aria-label={`${study.title} — view case study`}
          className="absolute inset-0"
        >
          <span className="sr-only">View case study</span>
        </Link>
      </article>
    </Reveal>
  );
}

export function BlogCard({ post, delay = 0 }: { post: InsightPost; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(255,59,71,0.12)] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/40 hover:shadow-[0_24px_55px_-24px_rgba(255,59,71,0.45)]">
        <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-[#101019] to-electric">
          <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-70" />
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ice/20 blur-3xl transition-all duration-500 group-hover:bg-ice/30"
          />
          <span className="relative rounded-full bg-white/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-[17px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3 text-[12.5px] text-muted">
            <span>{post.date}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
        <Link
          href={`/insights/${post.slug}`}
          aria-label={`Read: ${post.title}`}
          className="absolute inset-0"
        >
          <span className="sr-only">Read article</span>
        </Link>
      </article>
    </Reveal>
  );
}

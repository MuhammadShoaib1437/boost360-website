/** Minimal inline SVG icon set — no external icon dependency. */
import type { SVGProps } from "react";

function base(props: SVGProps<SVGSVGElement>, children: React.ReactNode) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Icons = {
  layers: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </>,
    ),
  search: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>,
    ),
  tag: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M12 2H2v10l9.3 9.3a1 1 0 0 0 1.4 0l8.6-8.6a1 1 0 0 0 0-1.4L12 2Z" />
        <circle cx="7" cy="7" r="1.5" />
      </>,
    ),
  chart: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="m7 14 4-4 3 3 5-6" />
      </>,
    ),
  megaphone: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="m3 11 18-5v12L3 14v-3Z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>,
    ),
  rocket: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.1-.7-3 .8Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.9 7.5-6 11a22 22 0 0 1-4 2Z" />
        <path d="M9 12H4s.5-3.8 2-6c1.6-2.5 5-3 5-3" />
        <path d="M12 15v5s3.8-.5 6-2c2.5-1.6 3-5 3-5" />
      </>,
    ),
  shield: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M20 13c0 5-3.5 7.5-7.7 9a.6.6 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .7-1c2.7-.8 5.2-2 6.8-3a1 1 0 0 1 1 0c1.6 1 4.1 2.2 6.8 3a1 1 0 0 1 .7 1v7Z" />
        <path d="m9 12 2 2 4-4" />
      </>,
    ),
  globe: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
      </>,
    ),
  check: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M20 6 9 17l-5-5" />
      </>,
    ),
  arrowRight: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>,
    ),
  menu: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>,
    ),
  x: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>,
    ),
  chevronDown: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="m6 9 6 6 6-6" />
      </>,
    ),
  whatsapp: (p: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.18-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.13 15.06l-.3-.18-3.06.89.9-2.98-.2-.31a8.1 8.1 0 0 1 6.79-12.48Zm-3.5 4.02c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24s.96 2.6 1.1 2.78c.13.18 1.9 3.11 4.74 4.16 2.36.87 2.84.7 3.36.65.51-.05 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.6.07-.27-.14-1.15-.42-2.2-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.56.13-.12.28-.32.42-.48.14-.16.18-.27.28-.46.09-.18.05-.34-.02-.48-.07-.14-.6-1.47-.83-2.01-.22-.52-.44-.45-.6-.46l-.52-.01Z" />
    </svg>
  ),
  mail: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>,
    ),
  cart: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <circle cx="9" cy="20" r="1.6" />
        <circle cx="18" cy="20" r="1.6" />
        <path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L20.5 7H6" />
      </>,
    ),
  spark: (p: SVGProps<SVGSVGElement>) =>
    base(
      p,
      <>
        <path d="M12 2v4" />
        <path d="M12 18v4" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m5 5 2.8 2.8" />
        <path d="m16.2 16.2 2.8 2.8" />
        <path d="m19 5-2.8 2.8" />
        <path d="m7.8 16.2-2.8 2.8" />
      </>,
    ),
};

export type IconName = keyof typeof Icons;

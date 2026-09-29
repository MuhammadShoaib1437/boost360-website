/** Central site constants — single source of truth for contact details. */

export const SITE_NAME = "Boost360";
export const SITE_TAGLINE = "Complete E-Commerce Growth";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.boost360.com";

/** Display format shown to visitors. */
export const WHATSAPP_DISPLAY = "+92 342 2625439";
/** International format used inside wa.me URLs (no +, no spaces, no hyphens). */
export const WHATSAPP_INTL = "923422625439";
export const EMAIL = "helloshoaib01@gmail.com";

export const WA_DEFAULT_MESSAGE =
  "Hi Boost360, I'm interested in your e-commerce services and would like to discuss my store.";

/** Build a wa.me deep link with a pre-filled message. */
export function waLink(message: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(message)}`;
}

/** Build a mailto link with pre-filled subject/body. */
export function mailtoLink(subject: string, body: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Marketplaces", href: "/marketplaces" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

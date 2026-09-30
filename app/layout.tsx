import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE} | E-Commerce Management & Growth`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Boost360Pro helps online sellers launch, manage, optimize and scale across Amazon, Walmart, eBay, Etsy, Shopify and TikTok Shop. Marketplace management, SEO, listings, PPC and growth strategy.",
  keywords: [
    "ecommerce management",
    "marketplace management",
    "amazon seller services",
    "ebay seo",
    "etsy seo",
    "listing optimization",
    "walmart marketplace",
    "tiktok shop",
    "shopify store setup",
    "ecommerce growth agency",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "We manage the complexity of e-commerce so sellers can focus on growth. Marketplace management, SEO, listings, PPC and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Marketplace management, optimization and growth support for modern online sellers.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ice focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-[72px] sm:pt-[76px]">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

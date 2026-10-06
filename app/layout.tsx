import localFont from "next/font/local";
import type { Metadata } from "next";
import { Header, Footer } from "@/components/ui";
import { siteUrl } from "@/lib/content";
import "./globals.css";
const inter = localFont({ src: "./fonts/inter-latin-variable.woff2", variable: "--font-inter", display: "swap", weight: "100 900", fallback: ["Arial"], adjustFontFallback: "Arial" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Boost360Pro — Complete E-Commerce Growth",
    template: "%s | Boost360Pro",
  },
  description:
    "Practical marketplace management, listing optimization, SEO and store setup. Start with a free 10-point store audit.",
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Boost360Pro",
    url: siteUrl,
    slogan: "Complete E-Commerce Growth",
    logo: `${siteUrl}/icon.svg`,
    telephone: "+923422625439",
    description: "E-commerce services for marketplace sellers.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+923422625439",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
  };
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

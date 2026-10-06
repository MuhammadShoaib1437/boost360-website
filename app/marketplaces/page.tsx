import Link from "next/link";
import { PageHero, IsoArt, FinalCTA } from "@/components/ui";
import { marketplaces, slugify, meta } from "@/lib/content";
export const metadata = meta(
  "Marketplaces We Support",
  "E-commerce support across Amazon, Walmart, eBay, Etsy, Shopify and TikTok Shop. Independent service provider.",
  "/marketplaces",
);
export default function Markets() {
  return (
    <>
      <PageHero
        eyebrow="MARKETPLACE SUPPORT"
        title="Different platforms. A considered approach."
        text="Build around the marketplace you use, the products you sell and the operational support you need."
      />
      <section className="section">
        <div className="container marketplace-grid">
          {marketplaces.map((m, i) => (
            <article key={m} className="marketplace-card">
              <IsoArt kind={i} />
              <h2>
                <Link href={`/marketplaces/${slugify(m)}`}>{m} ↗</Link>
              </h2>
              <p>Listing, catalog and store support scoped to your business.</p>
            </article>
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

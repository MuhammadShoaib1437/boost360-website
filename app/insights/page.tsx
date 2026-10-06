import { PageHero, ArticleGrid, FinalCTA } from "@/components/ui";
import { meta } from "@/lib/content";
export const metadata = meta(
  "E-Commerce Insights",
  "Practical guides to listing quality, product information and organized marketplace operations.",
  "/insights",
);
export default function Insights() {
  return (
    <>
      <PageHero
        eyebrow="FIELD NOTES"
        title="Useful thinking for your next store decision."
        text="Straightforward reading on product content, listing reviews and the everyday work of running an online store."
      />
      <section className="section">
        <div className="container">
          <ArticleGrid />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

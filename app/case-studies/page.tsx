import { PageHero, ExampleGrid, FinalCTA } from "@/components/ui";
import { meta } from "@/lib/content";
export const metadata = meta(
  "Illustrative E-Commerce Examples",
  "Explore illustrative examples of listing optimization, catalog coordination and account health workflows. Not client results.",
  "/case-studies",
);
export default function Examples() {
  return (
    <>
      <PageHero
        eyebrow="ILLUSTRATIVE EXAMPLES"
        title="The thinking behind the work."
        text="Explore how we would approach common e-commerce challenges. Every example is illustrative; none represents a client engagement or reported result."
      />
      <section className="section">
        <div className="container">
          <ExampleGrid />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

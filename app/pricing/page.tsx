import { PageHero, PricingCards, FAQ, FinalCTA } from "@/components/ui";
import { meta } from "@/lib/content";
export const metadata = meta(
  "Simple One-Time Pricing",
  "Free 10-Point Audit, $40 Listing Optimization Pack for 10 listings, and $150 Full Store Setup. Clear scope and one-time pricing.",
  "/pricing",
);
export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="SIMPLE, ONE-TIME PRICING"
        title="A clear next step. A clear price."
        text="Choose a starting point that fits your store. We confirm the scope and deliverables together before any work begins."
        kind={1}
      />
      <section className="section mist">
        <div className="container">
          <PricingCards />
          <p className="pricing-note">
            Paid packages are priced in USD, with a one-time service fee.
            Platform fees, subscriptions, advertising spend and third-party
            costs are separate. Setup scope and any additional services are
            agreed before work begins.
          </p>
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}

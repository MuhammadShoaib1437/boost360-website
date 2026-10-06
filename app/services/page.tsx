import { PageHero, ServiceGrid, FinalCTA } from "@/components/ui";
import { meta } from "@/lib/content";
export const metadata = meta(
  "E-Commerce Services",
  "Eight connected services: marketplace management, product research, listings, SEO, advertising, store setup, account health and multi-channel support.",
  "/services",
);
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title="Every part of your store. Working together."
        text="Start with the support you need today. Build a clear scope around your products, your marketplace and your next step."
      />
      <section className="section mist">
        <div className="container">
          <ServiceGrid />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

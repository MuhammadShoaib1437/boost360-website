import { PageHero, CTA, IsoArt, FinalCTA, SectionTitle } from "@/components/ui";
import { meta } from "@/lib/content";
export const metadata = meta(
  "About Boost360Pro",
  "Meet Muhammad Shoaib and the practical, seller-focused approach behind Boost360Pro. Clear communication, careful execution and honest expectations.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT BOOST360PRO"
        title="Built around sellers. Grounded in the details."
        text="Good products deserve careful execution. We help marketplace sellers bring clarity to their listings, catalogs and store operations."
      />
      <section className="section">
        <div className="container founder-grid">
          <div
            className="founder-placeholder"
            role="img"
            aria-label="Photo placeholder for Muhammad Shoaib, founder of Boost360Pro"
          >
            <strong>MS</strong>
            <span>FOUNDER PHOTO PLACEHOLDER</span>
          </div>
          <div className="founder-copy">
            <span className="eyebrow">MEET THE FOUNDER</span>
            <h2>Muhammad Shoaib</h2>
            <span className="founder-role">
              Founder · E-commerce specialist, eBay & Etsy
            </span>
            <p>
              Boost360Pro grew out of hands-on work with marketplace sellers:
              rewriting listings, organizing product information and working
              through the details that make a store easier to run.
            </p>
            <p>
              My approach is straightforward. Understand the store, explain the
              priorities and do the agreed work carefully. You should know what
              changed, why it changed and what needs attention next.
            </p>
            <p>
              When you reach out on WhatsApp, the conversation starts with your
              business—not a generic sales pitch.
            </p>
            <CTA message="Hi Shoaib, I would like to discuss my store with you.">
              Talk to Shoaib
            </CTA>
          </div>
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <SectionTitle
            eyebrow="OUR MISSION"
            title="Make careful e-commerce execution accessible."
            text="Practical support for sellers who want a better store, a clearer process and honest expectations."
          />
          <div className="values-grid">
            {[
              [
                "Transparency",
                "We explain the recommendations, agree the scope and document the work.",
              ],
              [
                "Careful execution",
                "Product accuracy and platform context guide every change.",
              ],
              [
                "Seller ownership",
                "Your store, your accounts and your assets remain yours.",
              ],
            ].map(([title, text], i) => (
              <article className="value-card" key={title}>
                <IsoArt kind={i} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

import Link from "next/link";
import {
  ArticleGrid,
  CTA,
  Dashboard,
  ExampleGrid,
  FAQ,
  FinalCTA,
  Process,
  SectionTitle,
  ServiceGrid,
  IsoArt,
} from "@/components/ui";
import { BeforeAfter, Motion } from "@/components/interactive";
import { meta, marketplaces, slugify } from "@/lib/content";
export const metadata = meta(
  "Complete E-Commerce Growth",
  "Your marketplace, working better. Listing optimization, store setup, SEO and practical e-commerce support. Start with a free 10-point audit.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="live-dot" /> A BETTER WAY TO BUILD YOUR STORE
            </div>
            <h1>
              Your marketplace.
              <br />
              Our expertise.
              <br />
              <span>Growth, connected.</span>
            </h1>
            <p>
              From your first listing to your next chapter. Practical e-commerce
              support that brings every part of your store together.
            </p>
            <div className="hero-actions">
              <CTA>Get your free audit</CTA>
              <CTA
                secondary
                message="Hi Boost360Pro, I would like to discuss my e-commerce project."
              >
                Let’s talk about your store
              </CTA>
            </div>
            <div className="hero-assurances">
              <span>✓ Clear scope</span>
              <span>✓ One-time pricing</span>
              <span>✓ Direct support</span>
            </div>
          </div>
          <Dashboard />
        </div>
        <div className="container hero-bottom">
          <span>STRATEGY / SETUP / OPTIMIZATION / OPERATIONS</span>
          <span>
            EVERY DETAIL. ONE CONNECTED PLAN. <span aria-hidden="true">↓</span>
          </span>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container">
          <p>PLATFORM-SPECIFIC THINKING. ONE CONNECTED TEAM.</p>
          <div className="marketplace-badges">
            {marketplaces.map((m) => (
              <Link key={m} href={`/marketplaces/${slugify(m)}`}>
                {m}
              </Link>
            ))}
          </div>
          <small>
            Independent expertise. No marketplace affiliation or endorsement.
          </small>
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <div className="section-header">
            <SectionTitle
              eyebrow="THE RIGHT SUPPORT, ALL AROUND"
              title="Every part of your store. Considered."
            />
            <p className="section-aside">
              Eight connected services. One practical approach to building a
              better e-commerce business.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>
      <Process />
      <section className="section why-section">
        <div className="container">
          <div className="section-header">
            <SectionTitle
              light
              eyebrow="WHY BOOST360PRO"
              title="Thoughtful work. Without the guesswork."
            />
            <p className="section-aside">
              You deserve to know what’s happening in your store—and why it
              matters.
            </p>
          </div>
          <div className="why-grid">
            {[
              [
                "Built around your store",
                "Your products, margins and marketplace shape the work. We start with your context, then define the priorities.",
              ],
              [
                "Clear from the first conversation",
                "Agree the scope and one-time price before work begins. Know what you are getting and what comes next.",
              ],
              [
                "Your store stays yours",
                "Keep ownership of your accounts, listings and assets. Use limited permissions whenever access is needed.",
              ],
            ].map(([h, p], i) => (
              <Motion className="why-card" tilt reveal key={h}>
                <IsoArt kind={i} />
                <h3>{h}</h3>
                <p>{p}</p>
              </Motion>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <SectionTitle
              eyebrow="THE DETAILS MAKE THE DIFFERENCE"
              title="Same product. A clearer story."
            />
            <p className="section-aside">
              See how structure and specificity can make a listing easier to
              understand.
            </p>
          </div>
          <BeforeAfter />
        </div>
      </section>
      <section className="section mist">
        <div className="container">
          <SectionTitle
            eyebrow="CHOOSE WHAT FITS YOUR BUSINESS"
            title="A clear view of your options."
            text="Different approaches suit different stages. Here is how the working arrangements compare."
          />
          <div
            className="table-scroll"
            role="region"
            aria-label="E-commerce support options comparison"
            tabIndex={0}
          >
            <table>
              <caption className="sr-only">
                Compare Boost360Pro, doing it yourself and hiring in-house.
              </caption>
              <thead>
                <tr>
                  <th scope="col">What to consider</th>
                  <th scope="col">
                    Boost360Pro <span>↗</span>
                  </th>
                  <th scope="col">Do it yourself</th>
                  <th scope="col">Hire in-house</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Scope",
                    "Agreed services and deliverables",
                    "You set and deliver the work",
                    "Defined by the role you hire",
                  ],
                  [
                    "Day-to-day involvement",
                    "Provide context and approvals",
                    "Own execution and review",
                    "Manage and support your hire",
                  ],
                  [
                    "Knowledge",
                    "Marketplace-focused support",
                    "Build your own skills",
                    "Depends on the person’s experience",
                  ],
                  [
                    "Cost structure",
                    "Published one-time packages",
                    "Your time and any tools",
                    "Employment and operating costs",
                  ],
                  [
                    "Ownership",
                    "Your accounts and assets remain yours",
                    "You retain full control",
                    "Managed within your business",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    {row.map((c, i) =>
                      i === 0 ? (
                        <th key={c} scope="row">
                          {c}
                        </th>
                      ) : (
                        <td key={c}>{c}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="FROM CHALLENGE TO APPROACH"
            title="What thoughtful execution looks like."
            text="Illustrative examples of how we would approach common seller challenges. These are not client case studies or reported results."
          />
          <ExampleGrid />
        </div>
      </section>
      <section className="section insights-section">
        <div className="container">
          <SectionTitle
            eyebrow="FROM THE WORKBENCH"
            title="Less noise. More useful thinking."
            text="Practical notes for people building and running online stores."
          />
          <ArticleGrid />
        </div>
      </section>
      <FAQ />
      <FinalCTA />
    </>
  );
}

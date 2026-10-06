import { notFound } from "next/navigation";
import { marketplaces, slugify, meta } from "@/lib/content";
import { PageHero, CTA, FinalCTA } from "@/components/ui";
export const dynamicParams = false;
export const generateStaticParams = () =>
  marketplaces.map((m) => ({ slug: slugify(m) }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = marketplaces.find((m) => slugify(m) === slug);
  return m
    ? meta(
        `${m} Store Support`,
        `Practical ${m} listing, catalog and store support from Boost360Pro. Independent service provider.`,
        `/marketplaces/${slug}`,
      )
    : {};
}
export default async function Market({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = marketplaces.find((m) => slugify(m) === slug);
  if (!m) notFound();
  return (
    <>
      <PageHero
        eyebrow={`${m} SUPPORT`}
        title={`A more considered ${m} storefront.`}
        text={`Share your ${m} store and priorities. We will review where listing, catalog or setup support can help.`}
      />
      <section className="section">
        <div className="container detail-layout">
          <div>
            <h2>Start with your store’s priorities.</h2>
            <ul className="check-list">
              <li>Accurate product information and clear listing structure</li>
              <li>Consistent catalog attributes and product presentation</li>
              <li>Store setup and operational tasks within an agreed scope</li>
              <li>Documented changes and a practical handover</li>
            </ul>
            <p>
              Platform capabilities and account permissions shape what is
              possible. We confirm the work with you before starting.
            </p>
          </div>
          <aside className="info-card">
            <h2>Let’s review your store.</h2>
            <p>Send your store URL and the issues you want to address.</p>
            <CTA
              message={`Hi Boost360Pro, I would like a free audit of my ${m} store.`}
            >
              Request your free audit
            </CTA>
            <p className="caption mt-6">
              Boost360Pro is independent and is not affiliated with or endorsed
              by {m}.
            </p>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { services, meta } from "@/lib/content";
import { CTA, PageHero, FinalCTA } from "@/components/ui";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s ? meta(s.name, s.description, `/services/${slug}`) : {};
}
export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageHero
        eyebrow={s.name}
        title={s.intro}
        text={s.description}
        kind={services.indexOf(s)}
      />
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span aria-current="page">{s.name}</span>
        </nav>
      </div>
      <section className="section">
        <div className="container detail-layout">
          <div>
            <span className="eyebrow">A CLEAR SCOPE OF WORK</span>
            <h2>What we work through.</h2>
            <ul className="check-list">
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <h2 className="mt-12">What you leave with.</h2>
            <p>{s.outcome}</p>
            <p className="caption">
              The exact scope and timeline are agreed before work starts. Any
              additional project is scoped and quoted separately as a one-time
              engagement.
            </p>
          </div>
          <aside className="info-card">
            <span className="eyebrow">BEFORE WE START</span>
            <h2>Bring a little context.</h2>
            <p>{s.needs}</p>
            <CTA
              message={`Hi Boost360Pro, I’d like to discuss ${s.name}. Please help me confirm the scope and one-time price.`}
            >
              Talk through your project
            </CTA>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

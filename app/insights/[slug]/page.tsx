import { notFound } from "next/navigation";
import { articles, meta } from "@/lib/content";
import { PageHero, FinalCTA } from "@/components/ui";
export const dynamicParams = false;
export const generateStaticParams = () =>
  articles.map((a) => ({ slug: a.slug }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return a ? meta(a.title, a.excerpt, `/insights/${slug}`) : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <>
      <PageHero eyebrow={a.category} title={a.title} text={a.excerpt} />
      <div className="section container">
        <article className="prose">
          <span className="micro">By Boost360Pro · Practical seller notes</span>
          {a.sections.map(([h, p]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}
          <p className="caption">
            These notes describe a general workflow. For current marketplace
            requirements, consult the guidance in your seller account.
          </p>
        </article>
      </div>
      <FinalCTA />
    </>
  );
}

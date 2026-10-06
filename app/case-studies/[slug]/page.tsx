import { notFound } from "next/navigation";
import { examples, meta } from "@/lib/content";
import { PageHero, FinalCTA } from "@/components/ui";
export const dynamicParams = false;
export const generateStaticParams = () =>
  examples.map((x) => ({ slug: x.slug }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const x = examples.find((x) => x.slug === slug);
  return x ? meta(x.title, x.problem, `/case-studies/${slug}`) : {};
}
export default async function Example({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const x = examples.find((x) => x.slug === slug);
  if (!x) notFound();
  return (
    <>
      <PageHero
        eyebrow="ILLUSTRATIVE EXAMPLE"
        title={x.title}
        text={`${x.category}. A hypothetical workflow, not a client story or measured result.`}
      />
      <div className="section container">
        <article className="prose">
          <p className="caption">
            Illustrative example. No client names, performance statistics or
            outcome claims are used.
          </p>
          {[
            ["The challenge", x.problem],
            ["The approach", x.approach],
            ["The proposed deliverable", x.deliverable],
          ].map(([h, p]) => (
            <section key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </section>
          ))}
        </article>
      </div>
      <FinalCTA />
    </>
  );
}

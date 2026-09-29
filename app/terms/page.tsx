import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EMAIL, WHATSAPP_DISPLAY } from "@/lib/site";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of the Boost360 website — plain-language conditions for browsing, contacting us and requesting services.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Website use",
    paragraphs: [
      "You may browse this website freely. You agree not to misuse it — for example, by submitting spam through our forms, attempting to disrupt the site, or copying our content to misrepresent it as your own.",
    ],
  },
  {
    h2: "Informational content",
    paragraphs: [
      "The articles, guides and descriptions on this site are provided for general information. E-commerce rules and marketplace policies change frequently; while we do our best to keep content accurate, we can't guarantee every detail is current at the moment you read it.",
    ],
  },
  {
    h2: "Service inquiries",
    paragraphs: [
      "Submitting a contact or quote form does not create a service agreement. Any engagement with Boost360 is agreed separately, in writing (including by email or WhatsApp), after we've discussed your needs — with clear scope, deliverables and terms that you approve first.",
    ],
  },
  {
    h2: "Third-party platforms",
    paragraphs: [
      "Our work involves marketplaces and platforms such as Amazon, Walmart, eBay, Etsy, Shopify and TikTok Shop. Each of these platforms has its own terms, policies and approval processes, which are entirely outside our control. Using their platforms — and compliance with their rules — remains your responsibility as the seller.",
    ],
  },
  {
    h2: "Intellectual property",
    paragraphs: [
      "The text, design and original content on this website belong to Boost360 unless stated otherwise. You're welcome to share our articles with credit and a link back, but please don't republish our content as your own or claim our work.",
    ],
  },
  {
    h2: "External links",
    paragraphs: [
      "We link to external sites (for example, WhatsApp and marketplace help pages) for your convenience. We're not responsible for the content, availability or practices of those sites.",
    ],
  },
  {
    h2: "No guaranteed results",
    paragraphs: [
      "Boost360 cannot guarantee sales, rankings, advertising performance or marketplace approvals. E-commerce outcomes depend on many factors beyond any service provider's control — including your products, pricing, competition and platform policies. What we do guarantee is honest, documented, professional work.",
    ],
  },
  {
    h2: "Changes to services",
    paragraphs: [
      "We may update our services, website content and these terms from time to time. Material changes to these terms will be reflected in the 'last updated' date above.",
    ],
  },
  {
    h2: "Contact",
    paragraphs: [
      `Questions about these terms? Reach us at ${EMAIL} or on WhatsApp at ${WHATSAPP_DISPLAY}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <Container className="max-w-3xl">
        <div className="pt-10">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
          />
        </div>
        <h1 className="mt-8 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[44px]">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm font-medium text-muted">
          Last updated: September 2026
        </p>
        <p className="mt-6 text-[16.5px] leading-[1.85] text-muted">
          These terms explain the basics of using the Boost360 website and
          working with us. We&apos;ve kept them in plain language on purpose.
        </p>
        <div className="mt-10">
          {SECTIONS.map((section) => (
            <div key={section.h2} className="mt-10 first:mt-0">
              <h2 className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                {section.h2}
              </h2>
              {section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="mt-4 text-[16px] leading-[1.85] text-muted"
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

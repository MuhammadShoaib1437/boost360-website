import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EMAIL, WHATSAPP_DISPLAY } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Boost360 collects, uses and protects your information when you use our website and contact us.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { h2: string; paragraphs: string[] }[] = [
  {
    h2: "Information you submit",
    paragraphs: [
      "When you fill out a contact or quote form on this website, we receive the information you provide — typically your name, email address, phone or WhatsApp number, store details and whatever else you choose to tell us about your business.",
      "We use this information solely to respond to your inquiry, prepare a consultation, and communicate with you about our services. We do not sell your information or share it with third parties for marketing purposes.",
    ],
  },
  {
    h2: "Contact information",
    paragraphs: [
      "If you reach out to us via WhatsApp or email, we retain that correspondence for as long as needed to handle your request and maintain a record of our conversation. This helps us follow up properly and avoid asking you for the same details twice.",
    ],
  },
  {
    h2: "WhatsApp and email communication",
    paragraphs: [
      "Communications through WhatsApp are subject to WhatsApp's own privacy policy, and email communications are subject to your email provider's policies. When you message us on these channels, we can only see the information you choose to share.",
      "We will never add you to a marketing list or message you unsolicited beyond responding to your own inquiry.",
    ],
  },
  {
    h2: "Analytics",
    paragraphs: [
      "We may use privacy-respecting analytics tools to understand how visitors use our website — for example, which pages are viewed most. These tools are configured to avoid collecting unnecessary personal data.",
    ],
  },
  {
    h2: "Cookies",
    paragraphs: [
      "This website may use a small number of cookies for basic functionality — for example, to remember form progress or keep the site working properly. We do not use cookies for cross-site advertising or behavioral tracking.",
      "You can disable cookies in your browser settings at any time; the site will continue to work, though some conveniences (like multi-step form progress) may be affected.",
    ],
  },
  {
    h2: "Third-party links",
    paragraphs: [
      "Our website links to third-party services such as WhatsApp and the marketplaces we write about. We don't control those sites, and their privacy practices are their own. We encourage you to review their policies before sharing personal information with them.",
    ],
  },
  {
    h2: "Data retention",
    paragraphs: [
      "We keep your information only as long as necessary to respond to your inquiry and provide any services you request. If you ask us to delete your information, we will do so within a reasonable timeframe unless we're required to keep it for legal or record-keeping reasons.",
    ],
  },
  {
    h2: "Your choices",
    paragraphs: [
      "You can ask us at any time what information we hold about you, ask us to correct it, or ask us to delete it. You can also simply stop contacting us — we won't chase you.",
    ],
  },
  {
    h2: "Contact us",
    paragraphs: [
      `For any privacy questions or requests, contact us at ${EMAIL} or on WhatsApp at ${WHATSAPP_DISPLAY}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <Container className="max-w-3xl">
        <div className="pt-10">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
          />
        </div>
        <h1 className="mt-8 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[44px]">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm font-medium text-muted">
          Last updated: September 2026
        </p>
        <p className="mt-6 text-[16.5px] leading-[1.85] text-muted">
          Boost360 is an e-commerce services practice. This policy explains, in
          plain language, what information we collect when you use our website
          and how we use it.
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

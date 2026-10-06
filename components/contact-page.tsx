import { PageHero, CTA } from "./ui";
import { QuoteForm } from "./interactive";
export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="LET’S TALK ABOUT YOUR STORE"
        title="One conversation. A clearer direction."
        text="Share your marketplace, store URL and what you would like to improve. We’ll help you define a practical next step."
        kind={1}
      />
      <section className="section mist">
        <div className="container contact-layout">
          <div className="contact-intro">
            <span className="eyebrow">WHATSAPP FIRST</span>
            <h2>Start where it feels easy.</h2>
            <p>
              Have a quick question? Message directly. Have a project in mind?
              Use the brief to get the conversation started.
            </p>
            <CTA message="Hi Boost360Pro, I have a question about my store.">
              Chat on WhatsApp
            </CTA>
            <p className="micro">+92 342 2625439</p>
            <ul className="check-list">
              <li>Clear scope before work begins</li>
              <li>One-time packages and project quotes</li>
              <li>No passwords needed in your message</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

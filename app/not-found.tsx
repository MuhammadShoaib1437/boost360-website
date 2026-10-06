import { CTA } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">PAGE NOT FOUND</span>
      <h1>Let’s find your next step.</h1>
      <p>
        This address doesn’t point to a page. Use the navigation or message us
        for help.
      </p>
      <CTA message="Hi Boost360Pro, I need help finding a service on your website.">
        Ask us on WhatsApp
      </CTA>
    </section>
  );
}

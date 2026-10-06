import Link from "next/link";
import type { ReactNode, CSSProperties } from "react";
import {
  services,
  whatsapp,
  steps,
  examples,
  articles,
  faqs,
} from "@/lib/content";
import { MobileNav, Motion } from "./interactive";
export function CTA({
  children = "Get a free audit",
  message,
  secondary = false,
}: {
  children?: ReactNode;
  message?: string;
  secondary?: boolean;
}) {
  return (
    <a
      data-cta="whatsapp"
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={whatsapp(message)}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Boost360Pro home">
      <span className="brand-symbol" aria-hidden="true">
        b<span>↗</span>
      </span>
      <span>
        Boost360<span className="brand-pro">Pro</span>
        <small>COMPLETE E-COMMERCE GROWTH</small>
      </span>
    </Link>
  );
}
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/insights">Insights</Link>
        </nav>
        <div className="header-cta">
          <CTA>Let’s talk growth</CTA>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>
              Practical e-commerce support.
              <br />
              Thoughtful work. A clearer next step.
            </p>
            <a
              href={whatsapp(
                "Hi Boost360Pro, I have a question about my store.",
              )}
              className="contact-number"
            >
              +92 342 2625439 ↗
            </a>
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/about">About us</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/case-studies">Illustrative examples</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h2>Expertise</h2>
            {services.slice(0, 4).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.short}
              </Link>
            ))}
          </div>
          <div>
            <h2>Around your store</h2>
            {services.slice(4).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.short}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Boost360Pro</span>
          <span>
            Independent service provider. No marketplace affiliation or
            endorsement.
          </span>
        </div>
      </div>
    </footer>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-title ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function IsoArt({
  kind = 0,
  large = false,
}: {
  kind?: number;
  large?: boolean;
}) {
  const tones = ["#0C5FB1", "#15DC7A", "#4590d8"];
  return (
    <div className={`iso-art ${large ? "iso-large" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 220 180" fill="none">
        <ellipse
          cx="111"
          cy="151"
          rx="76"
          ry="17"
          fill="#062D71"
          opacity=".08"
        />
        <path d="M25 119 110 71 195 119 110 168Z" fill="#dceaf7" />
        <path d="m25 119 85 49v-12L25 107Z" fill="#b8d3eb" />
        <path d="m110 156 85-49v12l-85 49Z" fill="#9cbedc" />
        {[0, 1, 2].map((n) => (
          <g key={n} transform={`translate(${n * 29 - 28} ${-n * 8})`}>
            <path d="m83 85 27-16 27 16-27 16Z" fill={tones[(n + kind) % 3]} />
            <path
              d={`m83 85 27 16v${32 + n * 7}l-27-16Z`}
              fill={tones[(n + kind) % 3]}
              opacity=".82"
            />
            <path
              d={`m110 101 27-16v${32 + n * 7}l-27 16Z`}
              fill="#062D71"
              opacity=".9"
            />
            <path
              d="m88 84 21-12"
              stroke="white"
              strokeOpacity=".65"
              strokeWidth="2"
            />
          </g>
        ))}
        <path
          d="m48 58 59-34 53 30"
          stroke="#0C5FB1"
          strokeWidth="2"
          strokeDasharray="4 5"
        />
        <path
          d="m152 39 9 16-17-1"
          stroke="#15DC7A"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="48" cy="58" r="6" fill="#15DC7A" />
        <path d="m169 91 11-6 11 6-11 6Z" fill="#15DC7A" />
        <path d="m169 91 11 6v13l-11-6Z" fill="#0C5FB1" />
        <path d="m180 97 11-6v13l-11 6Z" fill="#062D71" />
      </svg>
    </div>
  );
}
export function Dashboard() {
  return (
    <Motion className="hero-art" tilt>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="sphere sphere-one" />
      <div className="sphere sphere-two" />
      <div className="dashboard float-slow">
        <div className="dashboard-head">
          <span className="dash-logo">b↗</span>
          <span>
            YOUR GROWTH WORKSPACE<small>One store. A connected plan.</small>
          </span>
          <span className="dash-dots">•••</span>
        </div>
        <div className="dashboard-body">
          <div className="dash-sidebar">
            <span className="selected">◈</span>
            <span>▥</span>
            <span>⌕</span>
            <span>◎</span>
          </div>
          <div className="dash-content">
            <div className="dash-title">
              <h3>A clearer path forward</h3>
              <span className="status">In focus</span>
            </div>
            <div className="dash-stats">
              <div>
                <span>LISTINGS</span>
                <strong>Refine</strong>
                <small>Clarity that connects</small>
              </div>
              <div>
                <span>YOUR STORE</span>
                <strong>Prepare</strong>
                <small>Foundations first</small>
              </div>
            </div>
            <div className="chart-title">
              Your store, working together <span>↗</span>
            </div>
            <div className="growth-chart" aria-hidden="true">
              <svg viewBox="0 0 360 100" preserveAspectRatio="none">
                <path
                  d="M0 89C35 90 41 72 68 76S110 66 136 58S165 67 197 43S241 58 273 28S318 36 360 8L360 100H0Z"
                  fill="#15DC7A"
                  opacity=".13"
                />
                <path
                  d="M0 89C35 90 41 72 68 76S110 66 136 58S165 67 197 43S241 58 273 28S318 36 360 8"
                  stroke="#15DC7A"
                  fill="none"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="chart-axis">
              <span>Audit</span>
              <span>Build</span>
              <span>Review</span>
            </div>
          </div>
        </div>
        <div className="dashboard-foot">
          <span className="live-dot" /> Illustrative example · Concept
          interface, not performance data
        </div>
      </div>
      <div className="floating-card audit-card">
        <span className="floating-icon">✓</span>
        <span>
          <small>THE FIRST STEP</small>
          <strong>Free 10-point audit</strong>
          <em>Find your next opportunity</em>
        </span>
      </div>
      <div className="floating-card listing-card">
        <span className="tiny-bars">
          <i />
          <i />
          <i />
        </span>
        <span>
          <small>BUILT WITH INTENTION</small>
          <strong>Every detail matters.</strong>
        </span>
      </div>
      <div className="chat-card">
        <span>↗</span>Let’s make your store work better.
      </div>
    </Motion>
  );
}
export function PageHero({
  eyebrow,
  title,
  text,
  kind = 0,
}: {
  eyebrow: string;
  title: string;
  text: string;
  kind?: number;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{text}</p>
          <CTA message={`Hi Boost360Pro, I would like to discuss ${eyebrow}.`}>
            Discuss your project
          </CTA>
        </div>
        <Motion tilt className="page-art">
          <div className="sphere" />
          <IsoArt kind={kind} large />
          <span className="art-note">CLEAR THINKING. CONNECTED EXECUTION.</span>
        </Motion>
      </div>
    </section>
  );
}
export function ServiceGrid() {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <Motion key={s.slug} tilt reveal className="service-card">
          <div className="service-top">
            <IsoArt kind={i} />
            <span className="card-index">0{i + 1}</span>
          </div>
          <h3>
            <Link href={`/services/${s.slug}`}>
              {s.short}
              <span aria-hidden="true">↗</span>
            </Link>
          </h3>
          <p>{s.description}</p>
          <a
            className="text-cta"
            data-cta="whatsapp"
            href={whatsapp(`Hi Boost360Pro, I’d like to discuss ${s.name}.`)}
          >
            Discuss this service <span aria-hidden="true">↗</span>
          </a>
        </Motion>
      ))}
    </div>
  );
}
export function Process() {
  return (
    <section className="section process-section">
      <div className="container process-layout">
        <div className="process-intro">
          <SectionTitle
            eyebrow="THE 360° APPROACH"
            title="A connected plan. From first step to next chapter."
            text="Good e-commerce is the sum of its details. We bring them together in a process you can see."
          />
          <CTA>Start with your store</CTA>
          <div className="process-orbit" aria-hidden="true">
            <span>
              360<sup>°</sup>
              <small>EVERY DETAIL CONNECTED</small>
            </span>
          </div>
        </div>
        <div className="process-stack">
          {steps.map(([name, title, text, tags], i) => (
            <article
              className="process-card"
              key={name}
              style={{ "--step": i } as CSSProperties}
            >
              <div className="process-card-top">
                <span className="step-number">0{i + 1}</span>
                <span className="micro">{name}</span>
              </div>
              <IsoArt kind={i} />
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="process-tags">{tags}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-orbit" aria-hidden="true" />
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>
          Good products deserve
          <br />a better <span>storefront.</span>
        </h2>
        <p>Tell us where you sell. Let’s find the right next step together.</p>
        <CTA>Get your free 10-point audit</CTA>
        <span className="cta-note">
          No cost. No obligation. Just a clearer starting point.
        </span>
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section">
      <div className="container faq-layout">
        <SectionTitle
          eyebrow="BEFORE WE BEGIN"
          title="Good questions. Straight answers."
          text="Everything else? We’re a WhatsApp message away."
        />
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function PricingCards() {
  const packs = [
    {
      title: "Free 10-Point Audit",
      price: "Free",
      desc: "A useful starting point for your store.",
      items: [
        "A focused review of your store",
        "10 areas to check and prioritize",
        "Plain-language recommendations",
      ],
      cta: "Request your free audit",
    },
    {
      title: "Listing Optimization Pack",
      price: "$40",
      desc: "Give 10 listings a more considered finish.",
      items: [
        "10 product listings",
        "Titles, descriptions & attributes",
        "Keyword and image recommendations",
      ],
      cta: "Discuss your listing pack",
    },
    {
      title: "Full Store Setup",
      price: "$150",
      desc: "Lay the foundations for your launch.",
      items: [
        "Agreed platform & store structure",
        "Configuration and launch review",
        "Clear setup handover",
      ],
      cta: "Discuss your store setup",
    },
  ];
  return (
    <div className="pricing-grid">
      {packs.map((p, i) => (
        <Motion
          tilt
          reveal
          className={`price-card ${i === 1 ? "featured" : ""}`}
          key={p.title}
        >
          {i === 1 && <span className="popular">MOST POPULAR</span>}
          <span className="micro">
            {i === 0
              ? "START WITH CLARITY"
              : i === 1
                ? "REFINE YOUR LISTINGS"
                : "BUILD YOUR FOUNDATIONS"}
          </span>
          <h2>{p.title}</h2>
          <div className="price">
            {p.price}
            <span>{i === 0 ? "No cost" : "USD · one-time"}</span>
          </div>
          <p>{p.desc}</p>
          <ul className="check-list">
            {p.items.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          <CTA
            message={`Hi Boost360Pro, I’m interested in the ${p.title}${i ? ` at ${p.price} one-time` : ""}.`}
          >
            {p.cta}
          </CTA>
        </Motion>
      ))}
    </div>
  );
}
export function ExampleGrid() {
  return (
    <div className="example-grid">
      {examples.map((x, i) => (
        <article key={x.slug} className="example-card">
          <div className={`example-art example-${i}`}>
            <IsoArt kind={i} large />
            <span>ILLUSTRATIVE EXAMPLE</span>
          </div>
          <div className="example-copy">
            <span className="micro">{x.category}</span>
            <h3>
              <Link href={`/case-studies/${x.slug}`}>
                {x.title} <span aria-hidden="true">↗</span>
              </Link>
            </h3>
            <p>{x.problem}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
export function ArticleGrid() {
  return (
    <div className="article-grid">
      {articles.map((a, i) => (
        <article key={a.slug}>
          <span className="article-number">0{i + 1} / FIELD NOTES</span>
          <span className="micro">{a.category}</span>
          <h3>
            <Link href={`/insights/${a.slug}`}>
              {a.title} <span aria-hidden="true">↗</span>
            </Link>
          </h3>
          <p>{a.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

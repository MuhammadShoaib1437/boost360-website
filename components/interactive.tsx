"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { whatsapp } from "@/lib/content";

export function Motion({
  children,
  className = "",
  tilt = false,
  reveal = false,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  reveal?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reveal || reduced.matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          node.classList.toggle("motion-active", entry.isIntersecting);
          if (entry.isIntersecting) {
            node.classList.add("revealed");
            observer.unobserve(node);
          }
        }),
      { threshold: 0.08 },
    );
    node.classList.add("reveal-ready");
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
    };
  }, [reveal]);
  return (
    <div
      ref={ref}
      className={`${className} ${tilt ? "tilt" : ""}`}
      onPointerMove={(event) => {
        if (
          !tilt ||
          !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const box = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(() => {
          ref.current?.style.setProperty("--rx", `${-y * 7}deg`);
          ref.current?.style.setProperty("--ry", `${x * 9}deg`);
          ref.current?.style.setProperty("--px", `${x * 14}px`);
          ref.current?.style.setProperty("--py", `${y * 10}px`);
        });
      }}
      onPointerLeave={() => {
        cancelAnimationFrame(frame.current);
        ref.current?.style.setProperty("--rx", "0deg");
        ref.current?.style.setProperty("--ry", "0deg");
        ref.current?.style.setProperty("--px", "0px");
        ref.current?.style.setProperty("--py", "0px");
      }}
    >
      {children}
    </div>
  );
}
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <div
      className="mobile-nav"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation">
          {[
            ["/services", "Services"],
            ["/about", "About"],
            ["/pricing", "Pricing"],
            ["/case-studies", "Examples"],
            ["/insights", "Insights"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a className="button" href={whatsapp()}>
            Get a free audit ↗
          </a>
        </nav>
      )}
    </div>
  );
}
function Listing({ improved = false }: { improved?: boolean }) {
  return (
    <div className={`listing-demo ${improved ? "improved" : ""}`}>
      <div className="listing-product" aria-hidden="true">
        <div className="lamp">
          <i />
          <b />
          <span />
        </div>
      </div>
      <div className="listing-copy">
        <span className="micro">
          {improved
            ? "AFTER · STRUCTURED & SPECIFIC"
            : "BEFORE · INCOMPLETE & VAGUE"}
        </span>
        <h3>
          {improved
            ? "Dimmable LED desk lamp with USB charging"
            : "Nice lamp for home"}
        </h3>
        <p>
          {improved
            ? "Adjustable lighting for a reading corner or workspace. Product details made easy to find."
            : "Beautiful lamp. Good quality. Great for a gift."}
        </p>
        <div className="listing-chips">
          {(improved
            ? [
                "Clear product type",
                "Relevant attributes",
                "Buyer-focused details",
              ]
            : ["Vague title", "Missing attributes", "Limited detail"]
          ).map((s) => (
            <span key={s}>
              {improved ? "✓" : "−"} {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
export function BeforeAfter() {
  const [value, setValue] = useState(50);
  return (
    <div className="compare-widget">
      <div className="compare-stage" aria-hidden="true">
        <Listing />
        <div
          className="after-layer"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Listing improved />
        </div>
        <div className="compare-line" style={{ left: `${value}%` }}>
          <span>↔</span>
        </div>
      </div>
      <label className="slider-label" htmlFor="listing-comparison">
        <span>Before</span>
        <span>Drag to compare · {value}% after</span>
        <span>After</span>
      </label>
      <input
        id="listing-comparison"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Listing comparison: percentage of improved listing shown"
        aria-valuetext={`${value} percent of the improved listing shown`}
      />
      <p className="sr-only">
        Before: vague title, missing attributes and limited detail. After: clear
        product type, relevant attributes and buyer-focused details.
      </p>
      <p className="caption">
        Illustrative example. Product features are fictional; this is not a
        client listing or result.
      </p>
    </div>
  );
}
export function QuoteForm() {
  const [market, setMarket] = useState("Etsy");
  const [store, setStore] = useState("");
  const [service, setService] = useState("Free 10-Point Audit");
  const [message, setMessage] = useState("");
  return (
    <form
      className="quote-form"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.assign(
          whatsapp(
            `Hi Boost360Pro, I’m interested in ${service}.\nMarketplace: ${market}\nStore: ${store.trim() || "Not launched yet"}\nProject details: ${message.trim() || "Please help me identify the next steps."}`,
          ),
        );
      }}
    >
      <h2>Tell us a little about your store.</h2>
      <p>
        We’ll turn your brief into a WhatsApp message. You review it before
        sending.
      </p>
      <div className="form-grid">
        <label>
          Marketplace
          <select value={market} onChange={(e) => setMarket(e.target.value)}>
            {[
              "Amazon",
              "Walmart",
              "eBay",
              "Etsy",
              "Shopify",
              "TikTok Shop",
              "Multiple / Other",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          How can we help?
          <select value={service} onChange={(e) => setService(e.target.value)}>
            {[
              "Free 10-Point Audit",
              "Listing Optimization Pack — $40",
              "Full Store Setup — $150",
              "A custom project",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>
      <label>
        Store URL <span>(optional)</span>
        <input
          type="url"
          value={store}
          onChange={(e) => setStore(e.target.value)}
          placeholder="https://"
          autoComplete="url"
          maxLength={400}
        />
      </label>
      <label>
        What would you like to improve? <span>(optional)</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your products, priorities or current challenges."
          rows={4}
          maxLength={1500}
        />
      </label>
      <button className="button" type="submit">
        Continue on WhatsApp <span aria-hidden="true">↗</span>
      </button>
      <p className="caption">
        This form has no server submission or local storage. Continuing shares
        your entered details with WhatsApp to prepare a message. Please don’t
        include passwords or sensitive account information.
      </p>
    </form>
  );
}

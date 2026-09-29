"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";

const STEP_MARKETPLACES = [
  "Amazon",
  "Walmart",
  "eBay",
  "Etsy",
  "Shopify",
  "TikTok Shop",
  "Other",
];
const STEP_SERVICES = [
  "Account Management",
  "Product Research",
  "Listing Optimization",
  "SEO",
  "PPC",
  "Store Setup",
  "Account Health",
  "Multi-Channel Management",
  "Other",
];

type Quote = {
  marketplaces: string[];
  services: string[];
  storeUrl: string;
  currentMarketplaces: string;
  productCount: string;
  challenge: string;
  revenue: string;
  name: string;
  email: string;
  whatsapp: string;
};

const EMPTY: Quote = {
  marketplaces: [],
  services: [],
  storeUrl: "",
  currentMarketplaces: "",
  productCount: "",
  challenge: "",
  revenue: "",
  name: "",
  email: "",
  whatsapp: "",
};

const STEPS = ["Where Do You Sell?", "What Do You Need Help With?", "Tell Us About Your Business", "How Can We Reach You?"];

/** Multi-step quote form. Validates, then opens WhatsApp with the full inquiry. */
export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Quote>(EMPTY);
  const [error, setError] = useState("");

  const toggle = (key: "marketplaces" | "services", value: string) =>
    setData((d) => ({
      ...d,
      [key]: d[key].includes(value)
        ? d[key].filter((v) => v !== value)
        : [...d[key], value],
    }));

  const setField =
    (key: keyof Quote) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData((d) => ({ ...d, [key]: e.target.value }));

  function canNext(): boolean {
    setError("");
    if (step === 0 && data.marketplaces.length === 0) {
      setError("Please select at least one marketplace.");
      return false;
    }
    if (step === 1 && data.services.length === 0) {
      setError("Please select at least one service.");
      return false;
    }
    if (step === 2 && data.challenge.trim().length < 10) {
      setError("Please describe your primary challenge (at least 10 characters).");
      return false;
    }
    return true;
  }

  function submit(): boolean {
    if (data.name.trim().length < 2) {
      setError("Please enter your name.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  const next = () => canNext() && setStep((s) => Math.min(3, s + 1));
  const back = () => {
    setError("");
    setStep((s) => Math.max(0, s - 1));
  };

  const finish = () => {
    if (step < 3) return next();
    if (!submit()) return;
    const msg = [
      "Hello Boost360,",
      "",
      "I'd like a free consultation / quote for your e-commerce services.",
      "",
      `Marketplaces: ${data.marketplaces.join(", ")}`,
      `Services needed: ${data.services.join(", ")}`,
      data.storeUrl.trim() ? `Store URL: ${data.storeUrl.trim()}` : null,
      data.currentMarketplaces.trim()
        ? `Current marketplaces: ${data.currentMarketplaces.trim()}`
        : null,
      data.productCount ? `Number of products: ${data.productCount}` : null,
      `Primary challenge: ${data.challenge.trim()}`,
      data.revenue ? `Revenue range: ${data.revenue}` : null,
      "",
      `Name: ${data.name.trim()}`,
      `Email: ${data.email.trim()}`,
      data.whatsapp.trim() ? `WhatsApp: ${data.whatsapp.trim()}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const chip = (active: boolean) =>
    cn(
      "flex items-center gap-2 rounded-xl border px-4 py-3 text-[14.5px] font-medium transition-all duration-200",
      active
        ? "border-electric bg-electric/10 text-brand shadow-[0_0_0_3px_rgba(0,200,248,0.15)]"
        : "border-[rgba(15,70,130,0.16)] bg-white text-ink hover:border-electric/50",
    );

  const inputCls =
    "w-full rounded-xl border border-[rgba(15,70,130,0.18)] bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 transition-all focus:border-electric focus:ring-2 focus:ring-ice/30 focus:outline-none";

  return (
    <div className="overflow-hidden rounded-3xl border border-[rgba(15,70,130,0.14)] bg-white shadow-[0_30px_80px_-30px_rgba(9,105,246,0.35)]">
      {/* progress */}
      <div className="border-b border-[rgba(15,70,130,0.1)] bg-mist/60 px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span className="text-ink">
            Step {step + 1} of 4
          </span>
          <span className="text-muted">{Math.round(((step + 1) / 4) * 100)}%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[rgba(15,70,130,0.1)]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-electric via-ice to-growth transition-all duration-500"
            style={{ width: `${((step + 1) / 4) * 100}%` }}
          />
        </div>
        <h2 className="mt-4 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
          {STEPS[step]}
        </h2>
      </div>

      <div className="px-6 py-7 sm:px-8" key={step}>
        {step === 0 && (
          <div>
            <p className="mb-4 text-[15px] text-muted">
              Select all marketplaces where you sell or plan to sell.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {STEP_MARKETPLACES.map((m) => {
                const active = data.marketplaces.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggle("marketplaces", m)}
                    aria-pressed={active}
                    className={chip(active)}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-md border",
                        active ? "border-electric bg-electric text-white" : "border-slate-300",
                      )}
                    >
                      {active && <Icons.check className="h-3 w-3" />}
                    </span>
                    {m}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <p className="mb-4 text-[15px] text-muted">
              What would you like help with? Select all that apply.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {STEP_SERVICES.map((s) => {
                const active = data.services.includes(s);
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggle("services", s)}
                    aria-pressed={active}
                    className={chip(active)}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-md border",
                        active ? "border-electric bg-electric text-white" : "border-slate-300",
                      )}
                    >
                      {active && <Icons.check className="h-3 w-3" />}
                    </span>
                    {s}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="q-url" className="mb-1.5 block text-sm font-semibold text-ink">
                  Store URL
                </label>
                <input id="q-url" className={inputCls} placeholder="https://…"
                  value={data.storeUrl} onChange={setField("storeUrl")} inputMode="url" />
              </div>
              <div>
                <label htmlFor="q-count" className="mb-1.5 block text-sm font-semibold text-ink">
                  Number of products
                </label>
                <select id="q-count" className={inputCls} value={data.productCount} onChange={setField("productCount")}>
                  <option value="">Select…</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>201–1000</option>
                  <option>1000+</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="q-current" className="mb-1.5 block text-sm font-semibold text-ink">
                Current marketplaces
              </label>
              <input id="q-current" className={inputCls} placeholder="e.g. eBay and Etsy"
                value={data.currentMarketplaces} onChange={setField("currentMarketplaces")} />
            </div>
            <div>
              <label htmlFor="q-challenge" className="mb-1.5 block text-sm font-semibold text-ink">
                Primary challenge <span className="text-brand">*</span>
              </label>
              <textarea id="q-challenge" rows={4} className={cn(inputCls, "resize-y")}
                placeholder="What's the biggest challenge with your store right now?"
                value={data.challenge} onChange={setField("challenge")} />
            </div>
            <div>
              <label htmlFor="q-revenue" className="mb-1.5 block text-sm font-semibold text-ink">
                Revenue range <span className="font-normal text-muted">(optional)</span>
              </label>
              <select id="q-revenue" className={inputCls} value={data.revenue} onChange={setField("revenue")}>
                <option value="">Prefer not to say</option>
                <option>Just starting</option>
                <option>Under $1k / month</option>
                <option>$1k – $10k / month</option>
                <option>$10k – $50k / month</option>
                <option>$50k+ / month</option>
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <div>
              <label htmlFor="q-name" className="mb-1.5 block text-sm font-semibold text-ink">
                Name <span className="text-brand">*</span>
              </label>
              <input id="q-name" className={inputCls} placeholder="Your full name"
                value={data.name} onChange={setField("name")} autoComplete="name" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="q-email" className="mb-1.5 block text-sm font-semibold text-ink">
                  Email <span className="text-brand">*</span>
                </label>
                <input id="q-email" type="email" className={inputCls} placeholder="Enter your email address"
                  value={data.email} onChange={setField("email")} autoComplete="email" />
              </div>
              <div>
                <label htmlFor="q-wa" className="mb-1.5 block text-sm font-semibold text-ink">
                  WhatsApp
                </label>
                <input id="q-wa" className={inputCls} placeholder="+1 555 000 1234"
                  value={data.whatsapp} onChange={setField("whatsapp")} autoComplete="tel" />
              </div>
            </div>
            <div className="rounded-2xl bg-mist p-5 text-sm leading-relaxed text-muted">
              <p className="font-semibold text-ink">Your inquiry summary</p>
              <p className="mt-2">
                <span className="font-medium text-ink">Selling on:</span>{" "}
                {data.marketplaces.join(", ") || "—"}
              </p>
              <p className="mt-1">
                <span className="font-medium text-ink">Needs help with:</span>{" "}
                {data.services.join(", ") || "—"}
              </p>
            </div>
          </div>
        )}

        {error && (
          <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </p>
        )}

        <div className="mt-7 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={back}
            disabled={step === 0}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all",
              step === 0
                ? "cursor-not-allowed text-slate-300"
                : "text-ink hover:bg-slate-100",
            )}
          >
            <Icons.arrowRight className="h-4 w-4 rotate-180" />
            Back
          </button>
          <button
            type="button"
            onClick={finish}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand via-electric to-ice px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(0,140,255,0.55)] transition-all hover:-translate-y-0.5"
          >
            {step === 3 ? (
              <>
                <Icons.whatsapp className="h-5 w-5" />
                Request My Free Consultation
              </>
            ) : (
              <>
                Continue
                <Icons.arrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
        {step === 3 && (
          <p className="mt-4 text-center text-[13px] text-muted">
            This opens WhatsApp with your inquiry pre-filled — nothing is sent
            until you press send there.
          </p>
        )}
      </div>
    </div>
  );
}

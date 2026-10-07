"use client";

import { useState } from "react";
import { waLink, mailtoLink } from "@/lib/site";
import { Icons } from "../ui/icons";
import { cn } from "@/lib/utils";

const MARKETPLACE_OPTIONS = [
  "Amazon",
  "Walmart",
  "eBay",
  "Etsy",
  "Shopify",
  "TikTok Shop",
  "Facebook Marketplace",
  "Other",
];

const SERVICE_OPTIONS = [
  "Marketplace Account Management",
  "Product Research",
  "Product Listing Creation",
  "Listing Optimization",
  "Marketplace SEO",
  "Keyword Research",
  "PPC / Advertising Management",
  "Store Setup",
  "Account Health Support",
  "Multi-Channel Management",
  "Growth Strategy",
  "Other",
];

const inputCls =
  "w-full rounded-xl border border-[rgba(15,70,130,0.18)] bg-white px-4 py-3 text-[15px] text-ink placeholder:text-slate-400 transition-all focus:border-electric focus:ring-2 focus:ring-ice/30 focus:outline-none";
const labelCls = "mb-1.5 block text-sm font-semibold text-ink";
const errCls = "mt-1.5 text-[13px] font-medium text-red-600";

type Fields = {
  name: string;
  email: string;
  phone: string;
  business: string;
  storeUrl: string;
  marketplace: string;
  service: string;
  message: string;
};

/**
 * Contact form — genuinely functional without a backend:
 * validates, then opens WhatsApp with the structured inquiry.
 * "Email Instead" opens a pre-filled mailto as an alternative.
 */
export function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    business: "",
    storeUrl: "",
    marketplace: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [tried, setTried] = useState(false);

  const set = (k: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (tried) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function validate(): boolean {
    const er: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) er.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()))
      er.email = "Please enter a valid email address.";
    if (fields.message.trim().length < 10)
      er.message = "Please tell us a little more (at least 10 characters).";
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  function buildMessage(): string {
    const f = fields;
    return [
      "Hello Boost360Pro,",
      "",
      "I'd like to discuss your e-commerce services.",
      "",
      `Name: ${f.name.trim()}`,
      `Email: ${f.email.trim()}`,
      f.phone.trim() ? `Phone/WhatsApp: ${f.phone.trim()}` : null,
      f.business.trim() ? `Business/Store: ${f.business.trim()}` : null,
      f.storeUrl.trim() ? `Store URL: ${f.storeUrl.trim()}` : null,
      f.marketplace ? `Primary Marketplace: ${f.marketplace}` : null,
      f.service ? `Service Needed: ${f.service}` : null,
      "",
      `Message: ${f.message.trim()}`,
    ]
      .filter((l) => l !== null)
      .join("\n");
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTried(true);
    if (!validate()) {
      document
        .querySelector("[data-error]")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");
  };

  const emailInstead = () => {
    const f = fields;
    const body = [
      `Name: ${f.name}`,
      `Email: ${f.email}`,
      f.phone ? `Phone/WhatsApp: ${f.phone}` : "",
      f.business ? `Business/Store: ${f.business}` : "",
      f.storeUrl ? `Store URL: ${f.storeUrl}` : "",
      f.marketplace ? `Primary Marketplace: ${f.marketplace}` : "",
      f.service ? `Service Needed: ${f.service}` : "",
      "",
      f.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = mailtoLink("Boost360Pro Service Inquiry", body);
  };

  const field = (
    key: keyof Fields,
    label: string,
    required: boolean,
    control: React.ReactNode,
  ) => (
    <div data-error={errors[key] ? true : undefined}>
      <label htmlFor={`cf-${key}`} className={labelCls}>
        {label} {required && <span className="text-brand">*</span>}
      </label>
      {control}
      {errors[key] && (
        <p role="alert" className={errCls}>
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {field(
          "name",
          "Full Name",
          true,
          <input
            id="cf-name"
            className={cn(inputCls, errors.name && "border-red-400")}
            placeholder="Jane Smith"
            value={fields.name}
            onChange={set("name")}
            autoComplete="name"
          />,
        )}
        {field(
          "email",
          "Email",
          true,
          <input
            id="cf-email"
            type="email"
            className={cn(inputCls, errors.email && "border-red-400")}
            placeholder="Enter your email address"
            value={fields.email}
            onChange={set("email")}
            autoComplete="email"
          />,
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field(
          "phone",
          "Phone / WhatsApp",
          false,
          <input
            id="cf-phone"
            className={inputCls}
            placeholder="+1 555 000 1234"
            value={fields.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />,
        )}
        {field(
          "business",
          "Business / Store Name",
          false,
          <input
            id="cf-business"
            className={inputCls}
            placeholder="Smith Home Goods"
            value={fields.business}
            onChange={set("business")}
            autoComplete="organization"
          />,
        )}
      </div>
      {field(
        "storeUrl",
        "Website / Store URL",
        false,
        <input
          id="cf-storeUrl"
          className={inputCls}
          placeholder="https://…"
          value={fields.storeUrl}
          onChange={set("storeUrl")}
          inputMode="url"
        />,
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        {field(
          "marketplace",
          "Primary Marketplace",
          false,
          <select
            id="cf-marketplace"
            className={inputCls}
            value={fields.marketplace}
            onChange={set("marketplace")}
          >
            <option value="">Select…</option>
            {MARKETPLACE_OPTIONS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>,
        )}
        {field(
          "service",
          "Service Needed",
          false,
          <select
            id="cf-service"
            className={inputCls}
            value={fields.service}
            onChange={set("service")}
          >
            <option value="">Select…</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>,
        )}
      </div>
      {field(
        "message",
        "Message",
        true,
        <textarea
          id="cf-message"
          rows={5}
          className={cn(inputCls, "resize-y", errors.message && "border-red-400")}
          placeholder="Tell us about your store and what you'd like help with…"
          value={fields.message}
          onChange={set("message")}
        />,
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand via-electric to-ice px-6 py-3.5 font-semibold text-white shadow-[0_8px_30px_-6px_rgba(0,140,255,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-6px_rgba(0,140,255,0.7)]"
        >
          <Icons.whatsapp className="h-5 w-5" />
          Send My Inquiry
        </button>
        <button
          type="button"
          onClick={emailInstead}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(15,70,130,0.18)] bg-white px-6 py-3.5 font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-electric/50"
        >
          <Icons.mail className="h-5 w-5 text-brand" />
          Email Instead
        </button>
      </div>
      <p className="text-center text-[13px] text-muted">
        Submitting opens WhatsApp with your inquiry pre-filled — nothing is sent
        until you press send there.
      </p>
    </form>
  );
}

"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Icons } from "@/components/ui/icons";
import { EMAIL, mailtoLink } from "@/lib/site";

/**
 * Simple newsletter capture without a backend: the signup opens the
 * visitor's email client with a pre-filled subscription email to Boost360.
 * Honest and functional — no fake "subscribed!" claims.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    window.location.href = mailtoLink(
      "Newsletter signup — Boost360 growth tips",
      `Hi Boost360,\n\nPlease add me to the monthly e-commerce growth tips newsletter.\n\nMy email: ${value}\n\nThanks!`,
    );
    setSent(true);
  };

  return (
    <Reveal className="mt-16">
      <div className="mx-auto max-w-2xl rounded-3xl bg-abyss p-8 text-center sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-ice/15 text-ice">
          <Icons.mail className="h-6 w-6" />
        </span>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
          Get Monthly Growth Tips.
        </h2>
        <p className="mx-auto mt-2.5 max-w-md text-[14.5px] leading-relaxed text-slate-300">
          One practical e-commerce email a month — listing wins, SEO changes,
          marketplace updates. No spam, unsubscribe anytime.
        </p>
        {sent ? (
          <p className="mx-auto mt-6 max-w-md rounded-xl bg-ice/10 px-4 py-3 text-sm font-medium text-ice">
            Your email app should have opened with the signup ready to send —
            just hit send and you&apos;re on the list.
          </p>
        ) : (
          <form onSubmit={submit} noValidate className="mx-auto mt-6 max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="w-full flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-[15px] text-white placeholder:text-slate-400 focus:border-ice focus:outline-none focus:ring-2 focus:ring-ice/30"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand via-electric to-ice px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </div>
            {error && (
              <p role="alert" className="mt-3 text-sm font-medium text-red-300">
                {error}
              </p>
            )}
            <p className="mt-3 text-[12.5px] text-slate-400">
              We&apos;ll only ever email you the newsletter. ({EMAIL})
            </p>
          </form>
        )}
      </div>
    </Reveal>
  );
}

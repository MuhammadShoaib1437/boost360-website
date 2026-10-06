# Validation report

Validated against the production build on 6 October 2026 (UTC).

## Passed

- `npm run build`: Next.js 16.4.0 production build and static page generation.
- TypeScript strict compilation during the production build; standalone typecheck also passed before final presentation changes.
- All 29 sitemap content routes: HTTP 200, exactly one H1, page description, Open Graph title, correct canonical path, valid WhatsApp sales CTA targets.
- Responsive overflow checks on home, services index, service detail, pricing, about and contact at 320, 375, 390, 700, 768, 900, 1024, 1150, 1280, 1440 and 1920 CSS pixels.
- Mobile navigation opens, closes with Escape and restores focus.
- Before/after range accepts ArrowRight, Home and End.
- FAQ expands with Enter.
- Quote form includes store URL and project details in the encoded WhatsApp message. Navigation intercepted in testing; no message sent.
- Pointer movement changes the hero's depth variables; service cards reveal on entering the viewport.
- Reduced-motion preference disables tilt transforms.
- Unknown service route returns HTTP 404.
- Social sharing image endpoint returns HTTP 200.
- No browser page errors recorded.
- Axe WCAG 2 A/AA and WCAG 2.1 AA scan: zero automated violations on home, pricing, about, contact and listing-optimization detail pages in desktop Chromium.
- Desktop and mobile hero screenshots visually reviewed; full homepage checked for section structure.

`test-results/report.json` contains the final machine-readable results. `previews/` contains desktop and mobile homepage crops for quick review.

## Scope of validation

Browser checks used headless Chromium. Safari, Firefox, real iOS/Android devices, assistive-technology user testing, field Core Web Vitals and live Vercel deployment were not tested. Automated accessibility checks do not prove full conformance. The code includes reduced-motion behavior, semantic controls, focus states and touch-specific motion restrictions.

No live website was modified. Before publishing, merge any existing approved legal pages, redirects and integrations as described in README.md. Replace the explicit founder photo placeholder when the real asset is available.

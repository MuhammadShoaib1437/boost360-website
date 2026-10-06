# Boost360Pro — professional Next.js redesign

Complete source for a 29-page, responsive agency website. Built for Next.js App Router and Tailwind CSS 4, with CSS/SVG depth effects and small React interaction components.

## Run the project

Use Node.js 20.9 or newer (Node 22 LTS or newer recommended for your development environment).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production check:

```bash
npm run typecheck
npm run build
npm start
```

The package lock records the exact dependency graph used for validation. `build` explicitly uses webpack for a predictable production build; this is supported by Next.js 16. Inter is bundled locally under the included SIL Open Font License (`app/fonts/OFL.txt`), loaded with `next/font/local`, and requires no additional npm dependency. No Three.js, React Three Fiber, GSAP, Framer Motion, external icon package or runtime image service is required.

## Integrate with your current project

Your public website was reviewed, but your repository was not supplied. This is a complete replacement implementation, not a patch against unseen files. Keep a backup or a branch of your current project.

1. Copy `app/`, `components/`, `lib/` and `public/` into your project. If you use `src/`, place the first three inside `src/` and retain `public/` at the project root. Resolve any conflicting old route files deliberately.
2. Replace the current root layout and global stylesheet with the supplied versions. Do not mount the old header/footer as well.
3. Keep the `@/*` alias aligned with your chosen source root in `tsconfig.json`.
4. Merge `postcss.config.mjs` and the necessary dependencies. This standalone package uses Next.js 16.4.0 and React/React DOM 19.3.0. If retaining your installed versions, stay on compatible, patched Next.js 16 / React 19 versions and rebuild. Tailwind 4 uses `@tailwindcss/postcss`.
5. Merge rather than overwrite any existing redirects, integrations, middleware, authentication or project-specific configuration. The supplied `next.config.ts` only disables the powered-by header.
6. Set `NEXT_PUBLIC_SITE_URL` to the final public origin, with `https://` and no trailing slash. The default is your provided Vercel domain. Rebuild after changing it.
7. Deploy the resulting repository to your existing Vercel project using the Next.js framework preset and `npm run build`.

There are no API keys, database, background services or environment secrets to configure. This deliverable does not modify or deploy your existing live website.

## Main files

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Complete homepage in the requested section order |
| `app/globals.css` | Brand tokens, responsive layouts, CSS 3D and reduced-motion rules |
| `components/ui.tsx` | Shared header/footer, buttons, SVG artwork, hero dashboard and reusable sections |
| `components/interactive.tsx` | Tilt/parallax, reveal, mobile menu, comparison slider and WhatsApp brief |
| `lib/content.ts` | All eight services, examples, FAQs, articles, WhatsApp URL and metadata helper |
| `app/services/[slug]/page.tsx` | Eight static service pages with individual content |
| `app/about/page.tsx` | Founder story, explicit photo placeholder, mission and values |
| `app/pricing/page.tsx` | Three exact packages, with $40 highlighted |
| `components/contact-page.tsx` | Shared Contact and Get-a-quote view |
| `app/case-studies/` | Illustrative examples, including three detail pages |
| `app/insights/` | Insight index and three original practical articles |
| `app/marketplaces/` | Marketplace index and six platform pages |
| `app/layout.tsx` | Site metadata, accessible landmarks and Organization JSON-LD |
| `app/opengraph-image.tsx` | Generated 1200×630 social sharing image |
| `app/sitemap.ts`, `app/robots.ts` | Canonical sitemap and crawler configuration |
| `tests/smoke.cjs` | Optional browser, keyboard, route and accessibility checks |

## Content and links

The existing eight service slugs are retained exactly: `marketplace-management`, `product-research`, `listing-optimization`, `ecommerce-seo`, `ppc-advertising`, `store-setup`, `account-health`, `multi-channel-management`.

Pricing is limited to the Free 10-Point Audit, $40 Listing Optimization Pack (10 listings), and $150 Full Store Setup. Paid packages are one-time, in USD. Other service scopes are discussed as separately quoted one-time projects. There are no invented client statistics, testimonials, clients or partnerships.

Every sales CTA opens `https://wa.me/923422625439` with URL-encoded context. Navigation links and article/service headings open the relevant site pages. The comparison slider and menu buttons are interface controls, not sales CTAs. The quote form prepares a WhatsApp message; it does not automatically send it. It has no backend or local persistence. A visitor must send their message inside WhatsApp.

Case examples and dashboard graphics are explicitly labeled illustrative. The line in the hero dashboard is a conceptual graphic, not sales data. Founder name and story are based on the current About page; the founder photo is an intentional, labeled placeholder. Replace it with your real photo when available. Use `next/image`, explicit width/height and an accurate alt text for any real photograph you add.

The existing insight URLs and marketplace URLs are preserved, with rewritten content. The current site's `/privacy`, `/terms` and `/audit-checklist.pdf` are outside this brief: retain your approved legal pages and checklist when merging, and restore their footer links if needed. No replacement legal policy has been invented. Add genuine client case studies only with accurate evidence and permission.

## Animation and performance

- Hero: layered, floating cards; pointer tilt and separately moving foreground layers; CSS spheres and orbit rings.
- Cards: perspective hover tilt only on fine pointers. No motion tracking on touch devices.
- Process: native CSS sticky stacking, no scroll event loop.
- Reveals: IntersectionObserver, one-time fade/rise; readable server-rendered content before JavaScript.
- Reduced motion: disables continuous animation, tilt, smooth scrolling and sticky stacking.
- All illustrations are small inline SVG/CSS assets. There is no below-fold 3D engine or image bundle to download; offscreen example artwork uses content visibility to defer rendering where supported.
- Static generation for all content routes. No external hero images, external font requests, analytics or trackers.
- Defined artwork dimensions avoid late image-induced layout shifts. Real-world Core Web Vitals still depend on deployment, devices and future changes; no Lighthouse score is claimed.

## Accessibility and QA

Native range slider supports arrow keys, Home and End; the native details/summary FAQ supports keyboard operation. The mobile menu exposes expanded state and closes with Escape while restoring focus. Forms have labels, the table has row/column headings and horizontal keyboard scrolling, and the layout includes a skip link and visible focus indicators.

`QA.md` records completed checks and remaining device-level validation. Browser tests are optional development tooling; they are not production dependencies:

```bash
npm install --no-save playwright @axe-core/playwright
npx playwright install chromium
# Start the production server in one terminal:
npm start -- --hostname 127.0.0.1 --port 3100
# In another terminal:
node tests/smoke.cjs
```

The test intercepts WhatsApp navigation; it sends no messages. Screenshots and the machine-readable report are written to `test-results/`. `TEST_BASE_URL` overrides the test origin and `CHROMIUM_PATH` selects an existing Chromium executable when needed.

/** Marketplace page content. Each page has unique copy — no duplication. */

export type Marketplace = {
  slug: string;
  name: string;
  tagline: string;
  h1: string;
  intro: string;
  services: { title: string; desc: string }[];
  challenges: string[];
  howWeHelp: string[];
  workflow: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metaDescription: string;
};

export const MARKETPLACES: Marketplace[] = [
  {
    slug: "amazon",
    name: "Amazon",
    tagline: "Marketplace Management · Listings · SEO · PPC · Catalog Support",
    h1: "Amazon Seller Support That Covers the Whole Operation",
    intro:
      "Amazon rewards sellers who get the details right: complete listings, compliant catalogs, healthy account metrics and well-structured advertising. Boost360Pro supports Amazon sellers across all of it — from new product listings to ongoing catalog and account management.",
    metaDescription:
      "Boost360Pro Amazon services: listing optimization, catalog support, Amazon SEO, PPC management and account health for Amazon sellers.",
    services: [
      {
        title: "Listing Creation & Optimization",
        desc: "Keyword-led titles, bullet points, descriptions and A+ style content structure built for Amazon search and conversion.",
      },
      {
        title: "Catalog Support",
        desc: "Variation families, attribute completion, suppressed listing fixes and catalog hygiene at scale.",
      },
      {
        title: "Amazon SEO",
        desc: "Search-term research mapped to titles, bullets, descriptions and backend search terms.",
      },
      {
        title: "PPC Management",
        desc: "Structured Sponsored Products and Sponsored Brands campaigns with regular search-term review.",
      },
      {
        title: "Account Health Monitoring",
        desc: "Ongoing review of account health signals, policy notifications and listing issues.",
      },
    ],
    challenges: [
      "Suppressed listings and stranded inventory tying up capital",
      "Hijacked listings or incorrect variation structures",
      "Ad spend growing faster than sales",
      "Policy warnings from detail-page or review manipulation rules",
      "Catalog errors multiplying as SKU counts grow",
    ],
    howWeHelp: [
      "Audit your catalog and listings against a completeness checklist",
      "Rebuild underperforming detail pages with structured, keyword-led content",
      "Clean up variation families and fix suppression causes",
      "Set up PPC with clear segmentation and margin-aware budgets",
      "Monitor account health signals and triage issues early",
    ],
    workflow: [
      {
        title: "Catalog Audit",
        desc: "We review your listings, variations, attributes and account health to find what needs attention first.",
      },
      {
        title: "Priority Plan",
        desc: "Fixes are sequenced by impact: suppression risks and top-traffic listings first.",
      },
      {
        title: "Listing Rebuilds",
        desc: "Titles, bullets, descriptions and backend terms rewritten to Amazon's structure.",
      },
      {
        title: "Ad Structure",
        desc: "Campaigns organized by product role with budgets tied to your margins.",
      },
      {
        title: "Ongoing Management",
        desc: "Regular catalog checks, search-term reviews and health monitoring keep the account steady.",
      },
    ],
    faqs: [
      {
        q: "Do you work with Seller Central and Vendor Central?",
        a: "Our core work is with Seller Central accounts. If you're on Vendor Central, contact us and we'll assess fit honestly.",
      },
      {
        q: "Can you fix suppressed listings?",
        a: "We diagnose the suppression cause and fix what's in our control — missing attributes, policy conflicts, data errors. Some suppressions need brand registry or Amazon support involvement, which we help you navigate.",
      },
      {
        q: "Do you guarantee sales or rankings on Amazon?",
        a: "No. We deliver thorough execution — complete listings, clean catalogs, structured ads — and report transparently on what we observe.",
      },
    ],
  },
  {
    slug: "walmart",
    name: "Walmart Marketplace",
    tagline: "Catalog Management · Listing Optimization · Account Health",
    h1: "Walmart Marketplace, Managed With Precision",
    intro:
      "Walmart Marketplace has strict listing standards and a catalog system that punishes sloppy data. Boost360Pro helps sellers meet Walmart's requirements cleanly — accurate catalogs, optimized listings and steady account health.",
    metaDescription:
      "Boost360Pro Walmart Marketplace services: catalog management, listing optimization, account health and store operations.",
    services: [
      {
        title: "Catalog Management",
        desc: "Accurate product data, correct categories and complete attributes that pass Walmart's validation.",
      },
      {
        title: "Listing Optimization",
        desc: "Titles, descriptions and key features rewritten for Walmart's search and buyer expectations.",
      },
      {
        title: "Account Health",
        desc: "Monitoring of Walmart's performance standards with early warning on at-risk metrics.",
      },
      {
        title: "Store Operations",
        desc: "Day-to-day operational support: pricing, promotions and listing upkeep.",
      },
    ],
    challenges: [
      "Listings rejected by Walmart's data validation rules",
      "Incorrect categories burying products in browse",
      "Thin content underperforming against retail-ready competitors",
      "Strict on-time shipping and cancellation metrics",
      "Catalog feeds breaking during bulk updates",
    ],
    howWeHelp: [
      "Build Walmart-compliant product data from the start",
      "Rewrite titles and descriptions to Walmart's editorial standards",
      "Fix validation errors and feed issues systematically",
      "Monitor the metrics Walmart actually enforces",
      "Keep catalogs clean as you add SKUs",
    ],
    workflow: [
      {
        title: "Data Audit",
        desc: "We check your catalog against Walmart's requirements and find every gap.",
      },
      {
        title: "Compliance Fixes",
        desc: "Validation errors, miscategorized items and thin content get corrected.",
      },
      {
        title: "Content Upgrade",
        desc: "Titles, descriptions and attributes rewritten for search and conversion.",
      },
      {
        title: "Health Monitoring",
        desc: "Ongoing watch on performance metrics with proactive fixes.",
      },
    ],
    faqs: [
      {
        q: "Is Walmart Marketplace harder than Amazon?",
        a: "Different, not harder. Walmart's listing standards are strict but clear — sellers struggle when they copy Amazon data over without adapting it. We build for Walmart from the start.",
      },
      {
        q: "Can you help with Walmart's approval process?",
        a: "We prepare your application and catalog correctly, but approval is Walmart's decision alone.",
      },
      {
        q: "Do you manage Walmart advertising?",
        a: "We support Walmart Connect campaign setup and optimization as part of broader advertising management.",
      },
    ],
  },
  {
    slug: "ebay",
    name: "eBay",
    tagline: "SEO Listings · Store Management · Item Specifics · Policy Review",
    h1: "eBay SEO and Store Management Done Properly",
    intro:
      "eBay's Cassini search rewards complete, relevant listings from healthy sellers. Boost360Pro builds eBay listings the way Cassini reads them — keyword-led 80-character titles, fully completed item specifics, correct categories — and manages stores for long-term standing.",
    metaDescription:
      "Boost360Pro eBay services: Cassini-friendly SEO listings, item specifics, store management and policy review.",
    services: [
      {
        title: "SEO Listings",
        desc: "80-character keyword-led titles, complete item specifics and correct categories for Cassini.",
      },
      {
        title: "Store Management",
        desc: "Ongoing listing upkeep, store categories and operational routines for eBay sellers.",
      },
      {
        title: "Item Specifics Completion",
        desc: "Every relevant specific filled — the filter visibility most sellers leave on the table.",
      },
      {
        title: "Policy Review",
        desc: "Listings and practices checked against eBay's current policies before problems arise.",
      },
    ],
    challenges: [
      "Titles wasting characters on filler instead of search terms",
      "Half-empty item specifics losing filter traffic",
      "Wrong categories making products invisible",
      "Seller performance slipping toward Below Standard",
      "Promoted Listings spend with no strategy",
    ],
    howWeHelp: [
      "Research the exact terms eBay buyers search for your products",
      "Rewrite titles to the 80-character formula: brand + product + key attributes",
      "Complete every relevant item specific across your catalog",
      "Audit categories and fix miscategorized listings",
      "Review seller dashboard signals and build an improvement routine",
    ],
    workflow: [
      {
        title: "Keyword Research",
        desc: "eBay-native research: autocomplete, Terapeak-style sold data and category patterns.",
      },
      {
        title: "Title & Specifics Rebuild",
        desc: "Titles rewritten, specifics completed, categories corrected.",
      },
      {
        title: "Description Upgrade",
        desc: "Mobile-friendly, scannable descriptions with the keywords that matter.",
      },
      {
        title: "Health Routine",
        desc: "A repeatable process for keeping listings fresh and metrics strong.",
      },
    ],
    faqs: [
      {
        q: "What is Cassini and why does it matter?",
        a: "Cassini is eBay's search engine. It weighs title relevance, item specifics, seller performance and buyer behavior. Our eBay work is built around exactly these factors.",
      },
      {
        q: "Should I use Promoted Listings?",
        a: "Only on listings that already convert. We audit first, then recommend a strategy — never blanket spend.",
      },
      {
        q: "Can you manage high-SKU eBay stores?",
        a: "Yes. We prioritize by traffic and revenue, then work through catalogs systematically with documented changes.",
      },
    ],
  },
  {
    slug: "etsy",
    name: "Etsy",
    tagline: "SEO · Keyword Research · Digital & Physical Products",
    h1: "Etsy SEO for Handmade, Digital and Physical Products",
    intro:
      "Etsy discovery runs on tags, titles and attributes — and most shops use them badly. Boost360Pro optimizes Etsy listings the way Etsy's search actually reads them: all 13 tags as buyer phrases, keyword-led titles, and every attribute filled.",
    metaDescription:
      "Boost360Pro Etsy services: Etsy SEO, keyword research, tag and title optimization for digital and physical products.",
    services: [
      {
        title: "Etsy SEO",
        desc: "Tag, title and attribute optimization built around Etsy's relevance signals.",
      },
      {
        title: "Keyword Research",
        desc: "Buyer-language research from Etsy's own search suggestions and category data.",
      },
      {
        title: "Digital Products",
        desc: "Listing structure for downloads: clear previews, file details and buyer-friendly descriptions.",
      },
      {
        title: "Physical Products",
        desc: "Handmade and crafted product listings with complete materials, attributes and variations.",
      },
      {
        title: "Listing Optimization",
        desc: "Full listing rebuilds: titles, descriptions, tags, images order and shop sections.",
      },
    ],
    challenges: [
      "Tags filled with single words instead of buyer phrases",
      "Titles that bury the main keyword",
      "Empty materials and attributes",
      "Listings competing on price instead of positioning",
      "No idea which listings actually get found",
    ],
    howWeHelp: [
      "Research the phrases Etsy buyers actually type for your products",
      "Rewrite all 13 tags as multi-word buyer phrases — no repeats, no filler",
      "Front-load titles with the primary keyword in the first 55 characters",
      "Complete materials, attributes and variations on every listing",
      "Structure descriptions for skimming buyers on mobile",
    ],
    workflow: [
      {
        title: "Search Research",
        desc: "We map how buyers search your product category on Etsy.",
      },
      {
        title: "Tag & Title Rebuild",
        desc: "Every tag and title rewritten around researched buyer language.",
      },
      {
        title: "Listing Completion",
        desc: "Attributes, materials, variations and descriptions finished properly.",
      },
      {
        title: "Shop Review",
        desc: "Shop title, sections and policies aligned with your positioning.",
      },
    ],
    faqs: [
      {
        q: "Do Etsy ads work?",
        a: "Sometimes — but only for listings that already convert. We fix the listing first, then advise on ads honestly.",
      },
      {
        q: "How is Etsy SEO different from eBay SEO?",
        a: "Etsy weighs tags and titles heavily and factors in listing recency and shop performance differently than eBay's Cassini. We research and optimize per marketplace, never with one generic template.",
      },
      {
        q: "Can you help new Etsy shops?",
        a: "Yes — new shops benefit most from starting with correct structure instead of fixing bad habits later.",
      },
    ],
  },
  {
    slug: "shopify",
    name: "Shopify",
    tagline: "Store Setup · Product Pages · Catalog & Store Optimization",
    h1: "Shopify Stores Built to Sell, Not Just to Exist",
    intro:
      "Shopify gives you a store, not traffic — everything else is on you. Boost360Pro builds clean, fast Shopify storefronts with product pages structured to convert, then supports catalog management and ongoing optimization.",
    metaDescription:
      "Boost360Pro Shopify services: store setup, product page optimization, catalog management and store optimization.",
    services: [
      {
        title: "Store Setup",
        desc: "Complete Shopify configuration: theme, navigation, checkout, policies and settings.",
      },
      {
        title: "Product Pages",
        desc: "Product pages with clear hierarchy, benefit-led copy and conversion-focused structure.",
      },
      {
        title: "Catalog Management",
        desc: "Clean product data, collections and tagging that scale as you add products.",
      },
      {
        title: "Store Optimization",
        desc: "Ongoing review of speed, navigation, content and conversion friction points.",
      },
    ],
    challenges: [
      "Pretty stores with product pages that don't convert",
      "No traffic strategy — expecting Shopify to bring buyers",
      "Messy catalogs as product counts grow",
      "Slow themes and bloated apps hurting speed",
      "Checkout friction quietly killing sales",
    ],
    howWeHelp: [
      "Build or rebuild your storefront with conversion structure first",
      "Write product pages around buyer questions, not feature lists",
      "Organize catalogs with clean collections and tagging",
      "Audit speed and app bloat with practical fixes",
      "Set up the analytics you need to make decisions",
    ],
    workflow: [
      {
        title: "Foundation",
        desc: "Theme selection, settings, policies and checkout configured correctly.",
      },
      {
        title: "Catalog Build",
        desc: "Products, collections and navigation structured for how buyers shop.",
      },
      {
        title: "Page Craft",
        desc: "Product and landing pages written and laid out to convert.",
      },
      {
        title: "Optimization",
        desc: "Speed, friction points and content reviewed on an ongoing rhythm.",
      },
    ],
    faqs: [
      {
        q: "Will you bring traffic to my Shopify store?",
        a: "Honestly: Shopify stores need their own traffic — ads, SEO, social or email. We build the store to convert traffic well; traffic strategy is a separate discussion we'll have openly.",
      },
      {
        q: "Do you work with existing Shopify stores?",
        a: "Yes — audits and rebuilds of existing stores are common. We fix structure rather than patching symptoms.",
      },
      {
        q: "Which theme should I use?",
        a: "It depends on your catalog and goals. We recommend fast, well-supported themes and avoid bloated page builders where possible.",
      },
    ],
  },
  {
    slug: "tiktok-shop",
    name: "TikTok Shop",
    tagline: "Product Listings · Catalog Management · Shop Optimization",
    h1: "TikTok Shop, Set Up for Discovery Commerce",
    intro:
      "TikTok Shop blends content and commerce — but behind every viral product is a clean catalog, compliant listings and a well-run shop. Boost360Pro handles the operational foundation so your products are ready when attention arrives.",
    metaDescription:
      "Boost360Pro TikTok Shop services: product listings, catalog management, shop optimization and marketplace operations.",
    services: [
      {
        title: "Product Listings",
        desc: "Complete, compliant product listings built for TikTok Shop's format.",
      },
      {
        title: "Catalog Management",
        desc: "Clean product data and variant structures that stay manageable at scale.",
      },
      {
        title: "Shop Optimization",
        desc: "Shop profile, product presentation and operational settings tuned for the platform.",
      },
      {
        title: "Marketplace Operations",
        desc: "Day-to-day support for orders workflow, promotions and shop maintenance.",
      },
    ],
    challenges: [
      "Listings rejected for policy or data issues",
      "Viral attention wasted on unprepared product pages",
      "Variant and pricing structures done wrong",
      "Fulfillment metrics slipping under volume spikes",
      "No operational routine behind the storefront",
    ],
    howWeHelp: [
      "Build compliant listings that pass review first time",
      "Structure variants, pricing and promotions correctly",
      "Optimize shop presentation for discovery browsing",
      "Set up operational routines for fulfillment metrics",
      "Keep the catalog clean as trends shift",
    ],
    workflow: [
      {
        title: "Shop Audit",
        desc: "We review your shop setup, listings and compliance standing.",
      },
      {
        title: "Listing Builds",
        desc: "Products listed with complete, policy-safe data.",
      },
      {
        title: "Shop Tuning",
        desc: "Profile, presentation and settings optimized for the platform.",
      },
      {
        title: "Operations",
        desc: "Ongoing routines keep metrics healthy through demand spikes.",
      },
    ],
    faqs: [
      {
        q: "Do you create TikTok videos for products?",
        a: "Our focus is the commerce foundation — listings, catalog and shop operations. Content strategy can be discussed, but our core work is making sure the shop converts when content works.",
      },
      {
        q: "Is TikTok Shop available in my region?",
        a: "Availability varies by country and changes over time. We'll verify current eligibility for your market during discovery.",
      },
      {
        q: "Can you guarantee viral sales?",
        a: "No — virality can't be manufactured on demand. We make sure your shop is ready to capture demand whenever it comes.",
      },
    ],
  },
];

/** Shared content data: services, marketplaces, case studies, insights.
 *  Honesty rule: nothing here may invent client results, metrics, reviews,
 *  partnerships, awards, or certifications. Copy stays capability-focused. */

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  overview: string[];
  challenges: string[];
  included: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "marketplace-management",
    title: "Marketplace Account Management",
    short:
      "End-to-end support for marketplace operations, catalogs, listings and day-to-day account management.",
    icon: "layers",
    metaDescription:
      "Boost360Pro manages your marketplace operations end-to-end: catalogs, listings, orders workflow and day-to-day account management.",
    heroTitle: "Marketplace Management, Handled End-to-End",
    heroIntro:
      "Running a marketplace store means juggling listings, catalog data, pricing, messages and policy changes every single day. Boost360Pro takes over the operational load with a structured management workflow, so you can focus on sourcing, margins and growth.",
    overview: [
      "Marketplace management is the day-to-day work that keeps a store healthy: keeping catalog data accurate, listings complete and compliant, pricing consistent, and operational issues resolved before they become warnings. Most sellers lose time here — not because the work is hard, but because it never stops.",
      "Boost360Pro provides ongoing management coverage across your marketplaces. We work from a clear operating checklist for each account, document every change we make, and keep you informed with straightforward updates — no jargon, no black box.",
    ],
    challenges: [
      "Listings go stale because nobody has time for regular upkeep",
      "Catalog errors and suppressed listings pile up unnoticed",
      "Pricing drifts out of sync across channels",
      "Policy updates get missed until a warning arrives",
      "Day-to-day operations eat the time meant for growth",
    ],
    included: [
      "Ongoing catalog and listing maintenance",
      "Listing completeness and compliance checks",
      "Pricing and promotion coordination",
      "Order workflow and message handling support",
      "Policy change monitoring for your marketplaces",
      "Regular status updates and documented changes",
    ],
    faqs: [
      {
        q: "Do you take over my seller account completely?",
        a: "We work within the access you grant us and follow a documented process for every change. You stay in control of credentials, payouts and final decisions — we handle the operational execution.",
      },
      {
        q: "Which marketplaces do you manage?",
        a: "Amazon, Walmart Marketplace, eBay, Etsy, Shopify and TikTok Shop, plus Facebook Marketplace support. Multi-channel sellers get one coordinated workflow instead of separate processes per channel.",
      },
      {
        q: "How do I know what you're doing in my account?",
        a: "Every change is documented and shared with you in plain language. You'll always know what was updated, why, and what it affects.",
      },
      {
        q: "Can you guarantee sales growth?",
        a: "No — and you should be cautious of anyone who does. What we guarantee is thorough, consistent execution of the operational work that gives your store its best chance to perform.",
      },
    ],
  },
  {
    slug: "product-research",
    title: "Product Research",
    short:
      "Research marketplace opportunities using available demand, competition and commercial information.",
    icon: "search",
    metaDescription:
      "Boost360Pro product research: demand signals, competition review and commercial viability analysis before you commit inventory.",
    heroTitle: "Product Research Before You Commit Inventory",
    heroIntro:
      "Choosing the wrong product is the most expensive mistake in e-commerce. Boost360Pro researches opportunities using available marketplace demand signals, competition data and commercial factors — so you commit inventory with open eyes, not guesses.",
    overview: [
      "Good product research answers three questions: is there real demand, can you compete, and does the math work after fees, shipping and ad costs? We pull together what's publicly observable on each marketplace — search behavior, category depth, review velocity, pricing bands — and organize it into a clear read.",
      "We don't sell 'winning product lists' or promise secret methods. We do structured, evidence-based research and show our working, including the risks and unknowns for every opportunity we review.",
    ],
    challenges: [
      "Picking products on gut feeling instead of evidence",
      "Entering categories dominated by entrenched sellers",
      "Underestimating fees, shipping and ad costs",
      "Missing seasonal or trend-driven demand windows",
      "No clear differentiation from existing listings",
    ],
    included: [
      "Demand signal review from marketplace search data",
      "Competition and pricing-band analysis",
      "Fee, shipping and margin modeling",
      "Differentiation and positioning notes",
      "Risk and seasonality assessment",
      "Clear go / no-go style summary with reasoning",
    ],
    faqs: [
      {
        q: "Can you find me a guaranteed winning product?",
        a: "No. Anyone promising guaranteed winners is selling hype. We give you structured evidence — demand signals, competition, margins — so you can make an informed decision.",
      },
      {
        q: "What data do you use?",
        a: "Publicly available marketplace information: search results, category structures, pricing, review patterns and seller activity, combined with fee and cost modeling.",
      },
      {
        q: "Do you research for a specific marketplace?",
        a: "Yes — research is always marketplace-specific, because demand and competition look completely different on Amazon versus Etsy or TikTok Shop.",
      },
    ],
  },
  {
    slug: "listing-optimization",
    title: "Listing Optimization",
    short:
      "Improve titles, descriptions, images, attributes and overall listing quality.",
    icon: "tag",
    metaDescription:
      "Boost360Pro listing optimization: stronger titles, descriptions, images and attributes that improve quality and conversion.",
    heroTitle: "Listings That Work Harder for Every Click",
    heroIntro:
      "Most underperforming listings don't have a traffic problem — they have a listing problem. Weak titles, thin descriptions, missing attributes and poor image order quietly kill conversion. Boost360Pro rebuilds listings piece by piece against a quality checklist.",
    overview: [
      "Listing optimization is systematic, not creative guesswork. We audit each listing against what buyers and marketplace search actually respond to: a clear keyword-led title, scannable benefit-driven description, complete attributes, logical image hierarchy, and accurate categorization.",
      "Every optimized listing is delivered with a before/after summary so you can see exactly what changed and why. The goal is simple: when a buyer lands on your page, nothing about the listing gives them a reason to leave.",
    ],
    challenges: [
      "Titles that waste characters or miss key search terms",
      "Descriptions written for algorithms instead of buyers",
      "Missing or incorrect attributes hurting filter visibility",
      "Weak main images losing the click in search results",
      "Inconsistent quality across a large catalog",
    ],
    included: [
      "Full listing audit against a quality checklist",
      "Keyword-led title rewrites",
      "Buyer-focused description restructuring",
      "Attribute and item-specific completion",
      "Image order and hierarchy recommendations",
      "Before/after documentation for every listing",
    ],
    faqs: [
      {
        q: "How many listings can you optimize?",
        a: "From a handful of hero products to full catalogs. For large catalogs we typically start with your top-traffic listings, then work through the rest in priority order.",
      },
      {
        q: "Do you write the content or just advise?",
        a: "We do the work: rewritten titles, restructured descriptions and completed attributes, ready for your review before anything goes live.",
      },
      {
        q: "Will optimization guarantee higher rankings?",
        a: "No ethical provider can guarantee rankings. Optimization removes the listing-quality barriers that hold rankings and conversion back — that's what we control and deliver.",
      },
    ],
  },
  {
    slug: "ecommerce-seo",
    title: "E-Commerce SEO",
    short:
      "Keyword research and marketplace search optimization designed to improve discoverability.",
    icon: "chart",
    metaDescription:
      "Boost360Pro e-commerce SEO: marketplace keyword research and search optimization for eBay, Etsy, Amazon and more.",
    heroTitle: "Get Found Where Buyers Actually Search",
    heroIntro:
      "Marketplace SEO isn't Google SEO — each marketplace runs its own search engine with its own rules. Boost360Pro researches the exact terms buyers type on your marketplace and rebuilds your titles, attributes and descriptions around them.",
    overview: [
      "On eBay, eBay's Cassini search weighs titles, item specifics and seller signals. On Etsy, tags, titles and attributes drive discovery. On Amazon, backend terms and structured data matter. We work marketplace by marketplace, because one generic approach fits none of them.",
      "Our process starts with keyword research from marketplace-native sources — autocomplete, category structures and observed search behavior — then maps every keyword to the listing fields where it actually counts. No stuffing, no tricks: just complete, relevant, well-structured listings.",
    ],
    challenges: [
      "Guessing keywords instead of researching them",
      "Keyword-stuffed titles that hurt readability",
      "Empty backend search fields and attributes",
      "One-size-fits-all copy across different marketplaces",
      "No mapping of which keyword targets which listing",
    ],
    included: [
      "Marketplace-native keyword research",
      "Keyword-to-listing mapping",
      "Title and attribute optimization",
      "Backend search term completion",
      "Category and browse-path review",
      "Ongoing keyword performance review",
    ],
    faqs: [
      {
        q: "Is marketplace SEO different from Google SEO?",
        a: "Completely. Marketplace search engines rank products, not pages, and weigh factors like sales history, listing completeness and seller performance. We optimize for the marketplace you're actually selling on.",
      },
      {
        q: "Which marketplaces do you cover?",
        a: "eBay, Etsy, Amazon, Walmart Marketplace, TikTok Shop and Shopify's on-site search — each with its own keyword research and field mapping.",
      },
      {
        q: "How long until we see movement?",
        a: "Marketplace search responds to listing changes, but timing varies by marketplace, competition and listing history. We track the inputs we control and report honestly on what we observe.",
      },
    ],
  },
  {
    slug: "ppc-advertising",
    title: "PPC & Advertising Management",
    short:
      "Support campaign setup, management and optimization using available advertising data.",
    icon: "megaphone",
    metaDescription:
      "Boost360Pro PPC management: structured campaign setup, monitoring and optimization for Amazon, eBay, Etsy and Walmart ads.",
    heroTitle: "Advertising With Structure, Not Guesswork",
    heroIntro:
      "Marketplace ads can scale a good listing — or burn money on a bad one. Boost360Pro sets up campaigns with clear structure, sensible budgets and honest reporting, then optimizes based on what the data actually shows.",
    overview: [
      "We start with campaign fundamentals: which products deserve ad spend (hint: only listings that already convert), how campaigns are segmented, what budgets and bids make sense for your margins, and how performance gets measured.",
      "Ongoing management means regular search-term review, bid adjustments, budget reallocation toward what works, and plain-language reports. If the data says a campaign shouldn't run, we'll tell you — we'd rather save your budget than spend it.",
    ],
    challenges: [
      "Advertising listings that don't convert organically",
      "One giant campaign with no structure",
      "No search-term review — paying for irrelevant clicks",
      "Budgets set by guesswork instead of margins",
      "Reports nobody reads or understands",
    ],
    included: [
      "Campaign structure design per marketplace",
      "Keyword and targeting setup",
      "Budget and bid recommendations tied to margins",
      "Search-term review and negative targeting",
      "Ongoing optimization cycles",
      "Plain-language performance reporting",
    ],
    faqs: [
      {
        q: "Which ad platforms do you manage?",
        a: "Amazon Ads (Sponsored Products/Brands), eBay Promoted Listings, Etsy Ads, Walmart Connect and TikTok Shop ads — depending on where you sell.",
      },
      {
        q: "Do you guarantee a specific ROAS?",
        a: "No. Ad performance depends on your product, pricing, competition and listing quality. We manage toward efficiency and report transparently.",
      },
      {
        q: "Should I run ads on new listings?",
        a: "Usually not first. We typically recommend fixing listing quality before spending — ads amplify what's already there, good or bad.",
      },
    ],
  },
  {
    slug: "store-setup",
    title: "Store Setup & Launch",
    short:
      "Build and configure new stores and prepare them for launch.",
    icon: "rocket",
    metaDescription:
      "Boost360Pro store setup: new marketplace stores and Shopify builds, configured correctly and prepared for launch.",
    heroTitle: "Launch Right the First Time",
    heroIntro:
      "A rushed launch creates months of cleanup: wrong categories, thin listings, missing policies, broken settings. Boost360Pro sets up new stores methodically — every field, policy and listing prepared before you go live.",
    overview: [
      "Store setup covers the unglamorous details that determine whether a store starts healthy: account configuration, tax and shipping settings, return and payment policies, category structure, and launch-ready listings with complete data.",
      "For Shopify, that means a clean, fast storefront with proper product pages, navigation and checkout configuration. For marketplaces, it means compliant, complete seller profiles ready for their first sale.",
    ],
    challenges: [
      "Launching with incomplete listings and policies",
      "Wrong categories that bury products in search",
      "Shipping and tax settings configured incorrectly",
      "No launch checklist — things get missed",
      "Rework and suspensions from early mistakes",
    ],
    included: [
      "Account and profile configuration",
      "Shipping, tax and return policy setup",
      "Category and catalog structure",
      "Launch-ready product listings",
      "Shopify storefront build and configuration",
      "Pre-launch compliance and completeness check",
    ],
    faqs: [
      {
        q: "How long does a store setup take?",
        a: "It depends on catalog size and marketplace. A focused marketplace store can be launch-ready in weeks; larger catalogs and Shopify builds take longer. We scope honestly after a discovery call.",
      },
      {
        q: "Do you handle the marketplace approval process?",
        a: "We prepare everything correctly for submission, but final approvals are always the marketplace's decision — no one can guarantee or shortcut that.",
      },
      {
        q: "Can you migrate an existing store?",
        a: "Yes — we can audit your current setup, fix structural issues and relaunch cleanly rather than patching over problems.",
      },
    ],
  },
  {
    slug: "account-health",
    title: "Account Health Support",
    short:
      "Identify listing issues, marketplace warnings and operational risks.",
    icon: "shield",
    metaDescription:
      "Boost360Pro account health: find listing issues, policy risks and warnings before they threaten your marketplace account.",
    heroTitle: "Catch Problems Before They Cost You",
    heroIntro:
      "Suppressed listings, policy warnings and defect rates rarely appear out of nowhere — they build up quietly. Boost360Pro audits your account health, flags risks early, and helps you fix issues systematically.",
    overview: [
      "Account health work is diagnostic: we review your dashboards, listing statuses, policy notifications and performance metrics to find what's actually wrong — then prioritize fixes by risk, not by noise.",
      "We also review your listings and workflows against current marketplace policies, so you're not relying on last year's understanding of the rules. Prevention is cheaper than reinstatement, every time.",
    ],
    challenges: [
      "Suppressed or delisted products discovered too late",
      "Policy warnings nobody fully understands",
      "Rising defect or late-shipment rates",
      "Intellectual property complaints",
      "No routine for monitoring account standing",
    ],
    included: [
      "Full account health audit",
      "Suppressed listing diagnosis and fixes",
      "Policy and compliance review",
      "Warning and notification triage",
      "Corrective action planning",
      "Ongoing health monitoring routine",
    ],
    faqs: [
      {
        q: "Can you get my suspended account reinstated?",
        a: "We can help diagnose the cause and prepare a proper plan of action, but reinstatement decisions belong to the marketplace. Be wary of anyone promising guaranteed reinstatement.",
      },
      {
        q: "How often should account health be checked?",
        a: "Continuously for active sellers. We recommend a structured review rhythm — dashboards weekly, deep audits monthly or quarterly depending on volume.",
      },
      {
        q: "Do you work with Amazon, eBay and Walmart policies?",
        a: "Yes — each marketplace's policy framework is different, and our reviews are marketplace-specific.",
      },
    ],
  },
  {
    slug: "multi-channel-management",
    title: "Multi-Channel Management",
    short:
      "Coordinate products and store operations across multiple marketplaces.",
    icon: "globe",
    metaDescription:
      "Boost360Pro multi-channel management: one coordinated workflow for selling across Amazon, eBay, Etsy, Walmart and more.",
    heroTitle: "One Operation Across Every Channel",
    heroIntro:
      "Selling on three marketplaces shouldn't mean doing everything three times. Boost360Pro coordinates your products, listings and operations across channels with one workflow — consistent data, consistent pricing logic, consistent standards.",
    overview: [
      "Multi-channel selling multiplies complexity: catalog data drifts between platforms, pricing goes inconsistent, and each marketplace's quirks demand different handling. Without coordination, every channel becomes its own full-time job.",
      "We build a single source of truth for your product data and a channel-aware process for listings, pricing and operations. Each marketplace still gets what its algorithm and buyers expect — but you manage it as one business, not five.",
    ],
    challenges: [
      "Product data inconsistent across marketplaces",
      "Pricing conflicts between channels",
      "Doing the same work separately per platform",
      "No unified view of what's happening where",
      "Channel-specific rules handled inconsistently",
    ],
    included: [
      "Unified product data structure",
      "Channel-specific listing adaptation",
      "Cross-channel pricing coordination",
      "Centralized operations workflow",
      "Marketplace-by-marketplace compliance",
      "Consolidated reporting view",
    ],
    faqs: [
      {
        q: "How many channels can you handle?",
        a: "We work with sellers on two to six-plus channels. The workflow scales — what matters is that each channel gets proper, marketplace-specific treatment.",
      },
      {
        q: "Do you use inventory sync software?",
        a: "We work with the tools you already use and recommend approaches that fit your volume. The process comes first; tools support it.",
      },
      {
        q: "Is multi-channel right for every seller?",
        a: "No — expansion should follow performance, not precede it. We'll tell you honestly if your current channel needs work before adding another.",
      },
    ],
  },
];

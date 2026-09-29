/** Case studies + Insights content.
 *  Honesty rule: case studies are CLEARLY labeled illustrative examples —
 *  no client names, no revenue numbers, no fabricated results. */

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  situation: string;
  focus: string[];
  approach: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "listing-optimization-illustrative",
    category: "Marketplace Listing Optimization",
    title: "Catalog-Wide Listing Rebuild for a Home-Goods Seller",
    situation:
      "A home-goods seller with several hundred active listings was seeing steady impressions but weak click-through and conversion. Titles were inconsistent, attributes were half-completed, and descriptions had been copied from supplier sheets without adaptation.",
    focus: [
      "Inconsistent title structure across the catalog",
      "Missing attributes hurting filter visibility",
      "Supplier-copy descriptions with no buyer focus",
    ],
    approach: [
      "Audited the full catalog against a listing-quality checklist and prioritized by traffic",
      "Rebuilt titles around researched buyer keywords with a consistent formula",
      "Completed attributes and corrected categories listing by listing",
      "Rewrote descriptions for skimming buyers with clear benefit structure",
      "Documented every change in a before/after log for the seller's records",
    ],
  },
  {
    slug: "multi-channel-illustrative",
    category: "Multi-Channel Management",
    title: "Unifying Product Data Across Three Marketplaces",
    situation:
      "A seller operating on Amazon, eBay and Etsy was maintaining each channel separately. Product data drifted between platforms, pricing went inconsistent, and every update meant doing the same work three times with three different standards.",
    focus: [
      "Product data inconsistent across channels",
      "Pricing conflicts between marketplaces",
      "Triple workload for every catalog update",
    ],
    approach: [
      "Built a single product-data template as the source of truth",
      "Adapted listings per marketplace (not copy-pasted) for each platform's search",
      "Established a cross-channel pricing logic the seller approved",
      "Created one update workflow that covers all channels in sequence",
    ],
  },
  {
    slug: "catalog-cleanup-illustrative",
    category: "Catalog Cleanup",
    title: "Cleaning Up a Suppression-Prone Amazon Catalog",
    situation:
      "An Amazon seller's catalog had grown quickly through bulk uploads. Suppressed listings were accumulating, variation families were misstructured, and nobody could say which listings were actually healthy.",
    focus: [
      "Growing number of suppressed listings",
      "Broken variation structures confusing buyers",
      "No visibility into overall catalog health",
    ],
    approach: [
      "Full catalog health audit with every issue categorized by cause",
      "Fixed suppression causes: missing attributes, policy conflicts, data errors",
      "Rebuilt variation families with correct parent-child relationships",
      "Set up a recurring catalog hygiene routine to prevent recurrence",
    ],
  },
  {
    slug: "store-launch-illustrative",
    category: "Store Launch",
    title: "Launching a New Etsy Shop With Correct Structure",
    situation:
      "A maker preparing to launch on Etsy wanted to start right instead of fixing mistakes later. The product line was strong, but there was no keyword strategy, no listing template and no shop-level SEO plan.",
    focus: [
      "No keyword research behind the product line",
      "No listing template or quality standard",
      "Shop-level SEO completely unplanned",
    ],
    approach: [
      "Researched buyer search language for the product category on Etsy",
      "Built a listing template: title formula, tag strategy, description structure",
      "Completed all attributes, materials and variations before launch",
      "Aligned shop title, sections and policies with the positioning",
    ],
  },
  {
    slug: "advertising-optimization-illustrative",
    category: "Advertising Optimization",
    title: "Restructuring Ad Spend for a Multi-Product Seller",
    situation:
      "A seller was running marketplace ads with a single catch-all campaign structure. Spend was spread thin, search-term data was never reviewed, and nobody could say which products deserved the budget.",
    focus: [
      "One unstructured campaign for all products",
      "No search-term review or negative targeting",
      "Budgets disconnected from product margins",
    ],
    approach: [
      "Audited which listings converted well enough to deserve ad spend",
      "Rebuilt campaigns segmented by product role and intent",
      "Added negative targeting from search-term review",
      "Tied budgets to per-product margins with clear reporting",
    ],
  },
];

export type InsightSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  sections: InsightSection[];
  metaDescription: string;
};

export const INSIGHT_POSTS: InsightPost[] = [
  {
    slug: "marketplace-seo-basics-ebay-etsy-amazon",
    title: "Marketplace SEO Basics: How eBay, Etsy and Amazon Search Actually Work",
    category: "Marketplace SEO",
    excerpt:
      "Marketplace search engines rank products, not pages. Here's how the three big ones think — and what that means for your listings.",
    date: "2026-09-20",
    readingTime: "8 min read",
    author: "Boost360 Team",
    metaDescription:
      "How eBay Cassini, Etsy search and Amazon search rank products — and what sellers should optimize in every listing.",
    sections: [
      {
        h2: "Marketplace search is not Google search",
        paragraphs: [
          "Google ranks pages for informational intent. Marketplace search engines rank products for buying intent — and they weigh completely different signals. Sales history, listing completeness, seller performance and buyer behavior all feed the ranking, alongside text relevance.",
          "This is why Google SEO tactics transplanted onto marketplaces usually fail. Each marketplace is its own search engine with its own rules, and optimizing means learning the specific engine you're selling on.",
        ],
      },
      {
        h2: "eBay: Cassini rewards completeness",
        paragraphs: [
          "eBay's search engine, Cassini, reads your 80-character title, your item specifics, your category choice and your seller signals. Listings with fully completed specifics get filter visibility that half-finished listings never see.",
          "The practical takeaway: research the exact terms buyers type, front-load your title, fill every relevant specific, and keep your seller dashboard healthy. Cassini notices all of it.",
        ],
        bullets: [
          "80-character keyword-led titles — no wasted filler words",
          "Every relevant item specific completed",
          "Correct, specific category selection",
          "Strong seller performance metrics",
        ],
      },
      {
        h2: "Etsy: tags, titles and attributes",
        paragraphs: [
          "Etsy's search leans heavily on your 13 tags, your title and your attributes. Tags work best as multi-word buyer phrases — 'bridal shower gift' beats 'gift' every time. Your title's first 55 characters carry the most weight, so the primary keyword goes first.",
          "Etsy also factors in listing and shop performance signals. New shops aren't penalized forever, but established shops with good histories have an edge — which is why starting with correct structure matters so much.",
        ],
        bullets: [
          "13 tags, all used, as buyer phrases — no single-word filler",
          "Primary keyword in the first 55 characters of the title",
          "Materials, attributes and variations fully completed",
        ],
      },
      {
        h2: "Amazon: structured data wins",
        paragraphs: [
          "Amazon's A9/A10-style ranking blends text relevance with performance: sales velocity, conversion rate and review standing matter enormously. But the foundation is structured data — correct browse nodes, complete attributes, backend search terms and clean variation families.",
          "Suppressed listings get zero visibility regardless of how good the product is. Catalog hygiene isn't optional on Amazon; it's the price of admission.",
        ],
        bullets: [
          "Correct browse-node placement for every product",
          "Backend search terms completed (no repeats of front-end copy)",
          "Clean variation families with proper parent-child structure",
          "Zero suppressed listings — fix causes, don't ignore them",
        ],
      },
      {
        h2: "The common thread",
        paragraphs: [
          "Across all three marketplaces, the pattern is the same: complete, relevant, well-structured listings from healthy seller accounts win. There are no tricks — just thorough execution of the fundamentals, marketplace by marketplace.",
          "Start with keyword research from marketplace-native sources, map every keyword to the field where it counts, and keep your account standing strong. That's marketplace SEO.",
        ],
      },
    ],
  },
  {
    slug: "listing-optimization-checklist",
    title: "The Listing Optimization Checklist: Titles, Images and Attributes",
    category: "Seller Guides",
    excerpt:
      "A practical checklist for auditing any marketplace listing — the same one we use before rewriting a single word.",
    date: "2026-09-12",
    readingTime: "6 min read",
    author: "Boost360 Team",
    metaDescription:
      "A practical listing optimization checklist covering titles, images, attributes and descriptions for marketplace sellers.",
    sections: [
      {
        h2: "Why checklists beat inspiration",
        paragraphs: [
          "Listing quality fails in predictable ways: weak titles, thin descriptions, missing attributes, poor image order. A checklist turns 'make it better' into specific, verifiable fixes — and makes quality consistent across hundreds of listings.",
        ],
      },
      {
        h2: "Title check",
        paragraphs: [
          "Your title is the hardest-working field in the listing. It drives both search relevance and the click.",
        ],
        bullets: [
          "Primary buyer keyword appears near the front",
          "No wasted characters on filler ('HOT!', 'NEW!!!', 'L@@K')",
          "Brand, product type and key attributes included",
          "Within the marketplace's character limit (80 on eBay)",
          "Reads naturally — no keyword stuffing",
        ],
      },
      {
        h2: "Image check",
        paragraphs: [
          "Buyers decide in seconds from the search results page. Your image stack has one job: win the click, then answer questions.",
        ],
        bullets: [
          "Main image is clean, high-contrast and readable at thumbnail size",
          "Images follow a logical order: hero, angles, scale, details, lifestyle",
          "No blurry, stretched or watermarked images",
          "Image count meets or exceeds category norms",
        ],
      },
      {
        h2: "Attributes check",
        paragraphs: [
          "Attributes and item specifics drive filter traffic — the buyers who know exactly what they want. Empty attributes mean invisible listings.",
        ],
        bullets: [
          "Every relevant attribute field is completed",
          "Values are accurate (wrong data is worse than missing data)",
          "Category and browse path are correct and specific",
          "Variations are structured properly where applicable",
        ],
      },
      {
        h2: "Description check",
        paragraphs: [
          "Most buyers skim. Structure your description for skimmers first, readers second.",
        ],
        bullets: [
          "Key information in the first two lines",
          "Short paragraphs and bullet points — mobile-friendly",
          "Benefits before features",
          "Specs, sizing and what's-in-the-box clearly stated",
          "No walls of unformatted text",
        ],
      },
    ],
  },
  {
    slug: "amazon-account-health-guide",
    title: "Amazon Account Health: What Sellers Should Actually Monitor",
    category: "Amazon",
    excerpt:
      "Suppressed listings, policy warnings and defect rates build up quietly. Here's a monitoring routine that catches them early.",
    date: "2026-09-05",
    readingTime: "7 min read",
    author: "Boost360 Team",
    metaDescription:
      "A practical Amazon account health monitoring routine: listing status, policy notifications and performance metrics.",
    sections: [
      {
        h2: "Problems build up quietly",
        paragraphs: [
          "Account health issues rarely arrive as a single dramatic event. They accumulate: a suppressed listing here, a policy warning there, a slow drift in defect rates. Sellers who check routinely catch these early; sellers who don't discover them during a crisis.",
        ],
      },
      {
        h2: "What to check weekly",
        paragraphs: [
          "A short weekly routine covers most risks. It takes less time than fixing one suppression.",
        ],
        bullets: [
          "Account Health dashboard: any new warnings or notifications",
          "Stranded inventory and suppressed listings reports",
          "Order defect rate, late shipment rate and cancellation rate trends",
          "Customer messages requiring response",
          "Any IP or authenticity complaints",
        ],
      },
      {
        h2: "What to check monthly",
        paragraphs: [
          "Monthly checks go deeper into structural health.",
        ],
        bullets: [
          "Full catalog scan for suppressed or inactive listings",
          "Variation family integrity",
          "Policy changes announced by Amazon that affect your categories",
          "Review patterns for emerging product issues",
          "Fee and cost changes affecting margins",
        ],
      },
      {
        h2: "When you get a warning",
        paragraphs: [
          "Read it fully before reacting. Identify the specific ASINs and the specific policy cited. Fix the root cause across your catalog — not just the flagged listing — then respond through the proper channel with a clear, factual plan of action.",
          "What not to do: fire off an emotional appeal, blame Amazon, or fix one listing while leaving ten identical violations live.",
        ],
      },
    ],
  },
  {
    slug: "etsy-tags-titles-attributes-guide",
    title: "Etsy SEO: Tags, Titles and Attributes Explained",
    category: "Etsy",
    excerpt:
      "Etsy gives you 13 tags, one title and a set of attributes. Most shops waste all three. Here's how to use them properly.",
    date: "2026-08-28",
    readingTime: "6 min read",
    author: "Boost360 Team",
    metaDescription:
      "How to use Etsy's 13 tags, titles and attributes for search visibility — a practical guide for Etsy sellers.",
    sections: [
      {
        h2: "The 13 tags: phrases, not words",
        paragraphs: [
          "Etsy allows 13 tags of up to 20 characters each. The most common mistake is filling them with single words: 'gift', 'candle', 'handmade'. Etsy's search matches phrases, so your tags should be the phrases buyers type.",
          "'Soy candle gift for her' will do more work than 'candle' ever could. Use all 13, never repeat the same phrase, and don't waste characters restating words already in your title — Etsy reads title and tags together.",
        ],
        bullets: [
          "Multi-word buyer phrases, not single words",
          "All 13 tags used on every listing",
          "No exact repeats across tags",
          "Long-tail variations included ('bridal shower favor candle')",
        ],
      },
      {
        h2: "Titles: front-load the keyword",
        paragraphs: [
          "Etsy titles can be long, but the first 55 characters carry the most ranking weight — and they're what buyers see in search results. Put your primary keyword phrase first, then supporting descriptors.",
          "Write for the buyer who sees it in a results page: 'Hand-poured soy candle, bridal shower favor, vanilla scented' beats 'Beautiful amazing candle gift idea!!!' on every measure.",
        ],
      },
      {
        h2: "Attributes: the invisible traffic",
        paragraphs: [
          "Materials, colors, sizes, occasions — Etsy's attribute fields feed its filters. Buyers who filter are buyers who know what they want, and they convert well. Every empty attribute is a filter you don't appear in.",
          "Be accurate: wrong attributes create returns and bad reviews, which hurt far more than the filter traffic was worth.",
        ],
      },
      {
        h2: "Putting it together",
        paragraphs: [
          "Research first: use Etsy's own search bar suggestions to find real buyer language for your products. Then write tags, titles and attributes from that research — not from guesswork. Repeat for every listing, and keep a record of what you targeted so you can refine over time.",
        ],
      },
    ],
  },
];

export const INSIGHT_CATEGORIES = [
  "Amazon",
  "Walmart",
  "eBay",
  "Etsy",
  "Shopify",
  "TikTok Shop",
  "Marketplace SEO",
  "Advertising",
  "Seller Guides",
  "E-Commerce Growth",
] as const;

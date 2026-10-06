import type { Metadata } from "next";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://boost360-website.vercel.app";
export const whatsapp = (
  message = "Hi Boost360Pro, I would like a free 10-point store audit.",
) => `https://wa.me/923422625439?text=${encodeURIComponent(message)}`;
export function meta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Boost360Pro`,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Boost360Pro — Complete E-Commerce Growth",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
export const services = [
  {
    slug: "marketplace-management",
    name: "Marketplace Account Management",
    short: "Marketplace management",
    intro: "A clearer operation. A store you can stay on top of.",
    description:
      "Bring listings, catalog updates and day-to-day marketplace tasks into one coordinated workflow.",
    deliverables: [
      "Review account structure and current operations",
      "Organize catalog updates and task priorities",
      "Document approved changes and outstanding issues",
      "Create a practical handover and next-step checklist",
    ],
    needs:
      "Your marketplace, store URL, current task list and the access permissions available.",
    outcome:
      "An organized working plan and a record of what changed, so your store is easier to manage.",
  },
  {
    slug: "product-research",
    name: "Product Research",
    short: "Product research",
    intro: "Choose your next product with better questions.",
    description:
      "Evaluate demand signals, competition and commercial fit before committing to a product.",
    deliverables: [
      "Define your category, budget and sourcing constraints",
      "Review available demand and competitor information",
      "Compare product positioning and pricing",
      "Summarize assumptions, risks and research findings",
    ],
    needs:
      "Your target marketplace, categories, sourcing options and cost assumptions.",
    outcome:
      "A reasoned shortlist with visible assumptions. Research supports a decision; it does not guarantee sales.",
  },
  {
    slug: "listing-optimization",
    name: "Listing Optimization",
    short: "Listing optimization",
    intro: "Turn product details into a clearer buying decision.",
    description:
      "Improve titles, descriptions, image direction and attributes with a structured, buyer-focused approach.",
    deliverables: [
      "Review 10 listings in the $40 optimization pack",
      "Refine titles and descriptions using accurate product facts",
      "Check relevant attributes and keyword placement",
      "Provide image recommendations and a change summary",
    ],
    needs:
      "Up to 10 listing URLs, accurate specifications, product images and your target marketplace.",
    outcome:
      "More complete, consistent listings that help buyers understand what they are purchasing.",
  },
  {
    slug: "ecommerce-seo",
    name: "E-Commerce SEO",
    short: "E-commerce SEO",
    intro: "Make the right product easier to understand and find.",
    description:
      "Connect relevant search language with accurate titles, attributes and product content.",
    deliverables: [
      "Review existing search terms and listing structure",
      "Map relevant keywords to product intent",
      "Improve titles, attributes and descriptions",
      "Define a review plan using available search data",
    ],
    needs:
      "Your listing URLs, product facts and any available search or traffic reports.",
    outcome:
      "A documented keyword and content plan. Search placement depends on many factors and is not guaranteed.",
  },
  {
    slug: "ppc-advertising",
    name: "PPC & Advertising Management",
    short: "PPC & advertising",
    intro: "Give every advertising decision a clear reason.",
    description:
      "Structure campaigns around your products, available data and agreed spending limits.",
    deliverables: [
      "Review campaign structure and available reports",
      "Agree objectives, budget and measurement approach",
      "Prepare keyword, targeting and campaign recommendations",
      "Document approved changes and review priorities",
    ],
    needs:
      "Your advertising platform, campaign reports, product margins and approved budget.",
    outcome:
      "A more deliberate campaign structure and clear review priorities. Ad spend is separate from service fees.",
  },
  {
    slug: "store-setup",
    name: "Store Setup & Launch",
    short: "Store setup & launch",
    intro: "Build a store with the essentials in place.",
    description:
      "Prepare your storefront, product structure and operational settings for a considered launch.",
    deliverables: [
      "Confirm platform, catalog and setup scope",
      "Configure agreed store settings and structure",
      "Prepare agreed product pages and navigation",
      "Review launch readiness and provide a handover",
    ],
    needs:
      "Your chosen platform, brand assets, product information and required business details.",
    outcome:
      "An agreed store setup and launch checklist for $150 one-time. Platform charges and third-party costs are separate.",
  },
  {
    slug: "account-health",
    name: "Account Health Support",
    short: "Account health support",
    intro: "Understand the issue. Take the next practical step.",
    description:
      "Review listing issues, account warnings and operational risks with a documented action plan.",
    deliverables: [
      "Review notices and affected listings",
      "Identify missing information and possible causes",
      "Prepare a prioritized corrective-action checklist",
      "Support clear documentation for your next steps",
    ],
    needs:
      "The exact marketplace notice, affected listings and relevant account history. Never send passwords.",
    outcome:
      "A clearer view of the issue and possible next steps. Marketplace decisions and reinstatement cannot be guaranteed.",
  },
  {
    slug: "multi-channel-management",
    name: "Multi-Channel Management",
    short: "Multi-channel management",
    intro: "More channels. A more consistent operation.",
    description:
      "Coordinate core product information and store tasks across marketplaces without losing platform-specific detail.",
    deliverables: [
      "Map products and identifiers across channels",
      "Review content and attribute inconsistencies",
      "Create a shared product-information workflow",
      "Document platform-specific updates and ownership",
    ],
    needs:
      "Your active channels, catalog exports and current process for inventory and product updates.",
    outcome:
      "A clearer source of product information and a coordinated update plan across your selected channels.",
  },
];
export const marketplaces = [
  "Amazon",
  "Walmart",
  "eBay",
  "Etsy",
  "Shopify",
  "TikTok Shop",
];
export const slugify = (text: string) =>
  text.toLowerCase().replaceAll(" ", "-");
export const steps = [
  [
    "Discover & audit",
    "Start with the store you have.",
    "We review your marketplace, products and priorities. A 10-point audit gives the conversation a concrete starting point.",
    "Store review · Product context · Clear priorities",
  ],
  [
    "Plan & prepare",
    "Know what happens next.",
    "We agree the scope, deliverables and one-time price before work begins. You know which problems we are addressing and why.",
    "Defined scope · Agreed deliverables · Your approval",
  ],
  [
    "Build & optimize",
    "Make the details work together.",
    "From listing structure to store settings, we implement approved improvements and keep a clear record of the work.",
    "Careful execution · Documented changes · Quality review",
  ],
  [
    "Review & hand over",
    "Leave with clarity, not a black box.",
    "We explain what changed, review available evidence and outline practical next steps. Your store and assets remain yours.",
    "Plain-language handover · Ownership · Next steps",
  ],
];
export const faqs = [
  [
    "What does the free audit include?",
    "The free 10-point audit reviews listing titles, descriptions, images, attributes, keyword relevance, catalog consistency, store presentation, pricing clarity, visible account issues and next-step priorities. Findings depend on the information you share.",
  ],
  [
    "What does the $40 pack cover?",
    "The Listing Optimization Pack covers 10 listings for a one-time $40 fee. We review titles, descriptions, attributes and keyword structure, and provide image recommendations. Confirm your marketplace and exact scope with us before work begins.",
  ],
  [
    "What is included in the $150 setup?",
    "Full Store Setup is a one-time $150 service. We agree your platform, catalog scope, store structure, settings and handover before starting. Platform subscriptions, advertising spend and third-party charges are separate.",
  ],
  [
    "Can you guarantee more sales or higher rankings?",
    "No. Sales and rankings depend on products, pricing, competition, demand and marketplace decisions. We commit to the agreed work and explain our recommendations without promising a particular result.",
  ],
  [
    "Will I need to share my password?",
    "No. Where account access is necessary, use the platform’s delegated-user permissions and grant only the access needed. Keep control of your account and revoke access when the work is complete.",
  ],
  [
    "How long will my project take?",
    "Timing depends on scope, catalog complexity and the information available. Send your store URL and requirements on WhatsApp; we will agree a timeline before starting.",
  ],
];
export const examples = [
  {
    slug: "clearer-product-listings",
    title: "From scattered details to a clearer product listing.",
    category: "Listing optimization",
    problem:
      "A hypothetical home-goods listing has a vague title, missing dimensions and a description that is difficult to scan.",
    approach:
      "Verify the product facts, lead with the product type, complete relevant attributes and organize the description around buyer questions.",
    deliverable:
      "A rewritten listing and a checklist of missing product information. This is a process demonstration, not a client result.",
  },
  {
    slug: "connected-product-catalog",
    title: "One product story. Consistent across channels.",
    category: "Multi-channel management",
    problem:
      "A hypothetical seller has different product descriptions and identifiers across several storefronts.",
    approach:
      "Build a source-of-truth product sheet, map platform-specific fields and document an update workflow.",
    deliverable:
      "A catalog map and coordinated content plan. This example makes no claim about sales or efficiency gains.",
  },
  {
    slug: "catalog-health-review",
    title: "A practical route through catalog issues.",
    category: "Account health support",
    problem:
      "A hypothetical catalog contains incomplete attributes and listings that need further review.",
    approach:
      "Group the issues, check notices and product information, then prioritize documented corrections.",
    deliverable:
      "An issue log and a review checklist. Marketplace outcomes depend on the platform and the individual case.",
  },
];
export const articles = [
  {
    slug: "marketplace-seo-basics-ebay-etsy-amazon",
    title: "A clearer starting point for marketplace SEO.",
    category: "Marketplace SEO",
    excerpt:
      "Start with accurate product information and the words a buyer would use.",
    sections: [
      [
        "Start with the product",
        "Write down the product type, material, dimensions, intended use and genuine distinguishing features. This gives keyword research an accurate foundation. Never add an attribute just because it is a popular search term.",
      ],
      [
        "Match language to buyer intent",
        "Review the vocabulary used by relevant shoppers and comparable listings. Use only terms that describe your product. Keep the title readable, and use the platform’s available attribute fields.",
      ],
      [
        "Review what you can measure",
        "Record when content changes are made. Where the platform provides search and traffic reports, review them alongside pricing, stock and other changes. A change in performance alone does not establish its cause.",
      ],
    ],
  },
  {
    slug: "listing-optimization-checklist",
    title: "The listing checklist worth keeping close.",
    category: "Seller guides",
    excerpt:
      "A practical review of titles, images, attributes and buyer questions.",
    sections: [
      [
        "Check the essentials",
        "Does the title identify the product? Are dimensions, materials, quantities and compatibility clear? Do the images show the actual item? Check every claim against the supplied product information.",
      ],
      [
        "Remove buyer uncertainty",
        "Organize the description so buyers can find what is included, how the product is used and any relevant limitations. Make sure text, images and attribute fields tell the same story.",
      ],
      [
        "Keep a change record",
        "Save the original copy and note what was updated. Review the live listing after publishing, including its appearance on a phone. A simple change record makes later decisions easier.",
      ],
    ],
  },
  {
    slug: "amazon-account-health-guide",
    title: "Make account reviews part of your routine.",
    category: "Store operations",
    excerpt: "Use a simple issue log to keep notices and next steps visible.",
    sections: [
      [
        "Read the original notice",
        "Start with the exact message in your seller account. Record the affected item, the requested action and any stated deadline. Use current guidance available inside the marketplace account for policy requirements.",
      ],
      [
        "Create an issue log",
        "Track the notice, responsible person, evidence required and current status. Keep supporting records together, and avoid changing unrelated settings while trying to understand a specific issue.",
      ],
      [
        "Confirm the next step",
        "Check whether the marketplace asks for a correction, supporting documents or a response. Be accurate and specific. No outside service can guarantee the marketplace’s decision.",
      ],
    ],
  },
];

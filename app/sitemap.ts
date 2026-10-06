import type { MetadataRoute } from "next";
import {
  siteUrl,
  services,
  examples,
  articles,
  marketplaces,
  slugify,
} from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/services",
    "/about",
    "/pricing",
    "/contact",
    "/get-a-quote",
    "/case-studies",
    "/insights",
    "/marketplaces",
    ...services.map((x) => `/services/${x.slug}`),
    ...examples.map((x) => `/case-studies/${x.slug}`),
    ...articles.map((x) => `/insights/${x.slug}`),
    ...marketplaces.map((x) => `/marketplaces/${slugify(x)}`),
  ].map((path) => ({ url: siteUrl + path }));
}

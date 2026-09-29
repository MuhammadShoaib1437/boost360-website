import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICES } from "@/lib/data-services";
import { MARKETPLACES } from "@/lib/data-marketplaces";
import { INSIGHT_POSTS } from "@/lib/data-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: string[] = [
    "/",
    "/services",
    ...SERVICES.map((s) => `/services/${s.slug}`),
    "/marketplaces",
    ...MARKETPLACES.map((m) => `/marketplaces/${m.slug}`),
    "/case-studies",
    "/about",
    "/insights",
    ...INSIGHT_POSTS.map((p) => `/insights/${p.slug}`),
    "/contact",
    "/get-a-quote",
    "/privacy",
    "/terms",
  ];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }));
}

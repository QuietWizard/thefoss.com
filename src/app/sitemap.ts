import type { MetadataRoute } from "next";

const routes = ["", "/work", "/work/zymo-research", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://thefoss.com${route}`,
    lastModified: new Date(),
  }));
}

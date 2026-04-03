import type { MetadataRoute } from "next";

const siteUrl = "https://saferplast.saidashev-kirill2004.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

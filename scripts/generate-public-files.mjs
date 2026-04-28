import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import siteConfig from "../site.config.json" with { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

const routes = [
  "/",
  "/karaganda",
  "/temirtau",
  "/shakhtinsk",
  "/saran",
  "/abay",
  "/karaganda/maykuduk-prishakhtinsk",
  "/privacy",
  "/data-processing-policy",
];

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");
const siteHost = new URL(siteUrl).host;
const wwwHost = `www.${siteHost}`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`}</loc>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const redirects = `https://${wwwHost}/* ${siteUrl}/:splat 301!
`;

await mkdir(publicDir, { recursive: true });
await writeFile(path.join(publicDir, "robots.txt"), robotsTxt);
await writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml);
await writeFile(path.join(publicDir, "_redirects"), redirects);

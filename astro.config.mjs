import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const siteConfig = JSON.parse(readFileSync(path.join(projectRoot, "site.config.json"), "utf8"));

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: "never",
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});

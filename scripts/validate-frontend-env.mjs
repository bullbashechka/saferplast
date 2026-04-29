import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

function parseEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return {};
  }

  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .reduce((accumulator, line) => {
      const trimmedLine = line.trim();

      if (!trimmedLine || trimmedLine.startsWith("#")) {
        return accumulator;
      }

      const separatorIndex = trimmedLine.indexOf("=");
      if (separatorIndex === -1) {
        return accumulator;
      }

      const key = trimmedLine.slice(0, separatorIndex).trim();
      const value = trimmedLine.slice(separatorIndex + 1).trim();
      accumulator[key] = value;
      return accumulator;
    }, {});
}

function getEnvValue(key) {
  const envFiles = [".env", ".env.local"].map((fileName) => path.join(rootDir, fileName));

  for (const filePath of envFiles) {
    const parsed = parseEnvFile(filePath);
    if (parsed[key]) {
      return parsed[key];
    }
  }

  return process.env[key];
}

function validatePublicUrl(name, value) {
  if (!value) {
    return `${name} is required for production builds.`;
  }

  let url;

  try {
    url = new URL(value);
  } catch {
    return `${name} must be a valid absolute URL.`;
  }

  if (url.protocol !== "https:") {
    return `${name} must use https.`;
  }

  if (!url.pathname.endsWith("/api/lead")) {
    return `${name} must end with /api/lead.`;
  }

  if (/(example|placeholder)/i.test(url.hostname)) {
    return `${name} cannot point at an example or placeholder host.`;
  }

  return null;
}

function validateTurnstileSiteKey(name, value) {
  if (!value) {
    return `${name} is required for production builds.`;
  }

  if (/example|placeholder/i.test(value)) {
    return `${name} cannot use a placeholder value.`;
  }

  return null;
}

const errors = [
  validatePublicUrl("PUBLIC_LEAD_API_URL", getEnvValue("PUBLIC_LEAD_API_URL")),
  validateTurnstileSiteKey("PUBLIC_TURNSTILE_SITE_KEY", getEnvValue("PUBLIC_TURNSTILE_SITE_KEY")),
].filter(Boolean);

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Frontend environment validation passed.");

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const target = process.argv[2] ?? "all";

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

function readEnv(key, fileNames) {
  for (const fileName of fileNames) {
    const value = parseEnvFile(path.join(rootDir, fileName))[key];
    if (value) {
      return value;
    }
  }

  return process.env[key];
}

function requireValue(label, value, errors) {
  if (!value) {
    errors.push(`${label} is required.`);
  }
}

function validatePages(errors) {
  requireValue("PUBLIC_LEAD_API_URL", readEnv("PUBLIC_LEAD_API_URL", [".env", ".env.local"]), errors);
  requireValue("PUBLIC_TURNSTILE_SITE_KEY", readEnv("PUBLIC_TURNSTILE_SITE_KEY", [".env", ".env.local"]), errors);
}

function validateWorker(errors) {
  requireValue("TELEGRAM_BOT_TOKEN", readEnv("TELEGRAM_BOT_TOKEN", [".dev.vars", ".env"]), errors);
  requireValue("TELEGRAM_CHAT_ID", readEnv("TELEGRAM_CHAT_ID", [".dev.vars", ".env"]), errors);
  requireValue("TURNSTILE_SECRET_KEY", readEnv("TURNSTILE_SECRET_KEY", [".dev.vars", ".env"]), errors);
  requireValue("ALLOWED_ORIGINS", readEnv("ALLOWED_ORIGINS", [".dev.vars", ".env"]), errors);
  requireValue("TURNSTILE_EXPECTED_HOSTNAME", readEnv("TURNSTILE_EXPECTED_HOSTNAME", [".dev.vars", ".env"]), errors);

  const wranglerConfig = readFileSync(path.join(rootDir, "worker", "wrangler.jsonc"), "utf8");
  if (!wranglerConfig.includes('"binding": "RATE_LIMIT_KV"')) {
    errors.push("worker/wrangler.jsonc must define the RATE_LIMIT_KV binding.");
  }
}

const errors = [];

if (target === "all" || target === "pages") {
  validatePages(errors);
}

if (target === "all" || target === "worker") {
  validateWorker(errors);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Deploy preflight passed for ${target}.`);

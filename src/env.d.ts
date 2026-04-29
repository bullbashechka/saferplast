/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
  readonly PUBLIC_LEAD_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

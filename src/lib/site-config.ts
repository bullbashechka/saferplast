import siteConfig from "../../site.config.json";

type SiteConfig = {
  siteName: string;
  siteUrl: string;
  pagesProjectName: string;
  workerLeadApiUrl: string;
  workerAllowedOrigins: string[];
  turnstileExpectedHostname: string;
};

export const SITE_CONFIG = siteConfig as SiteConfig;
export const SITE_NAME = SITE_CONFIG.siteName;
export const SITE_URL = SITE_CONFIG.siteUrl;
export const PAGES_PROJECT_NAME = SITE_CONFIG.pagesProjectName;
export const DEFAULT_WORKER_LEAD_API_URL = SITE_CONFIG.workerLeadApiUrl;
export const WORKER_ALLOWED_ORIGINS = SITE_CONFIG.workerAllowedOrigins;
export const TURNSTILE_EXPECTED_HOSTNAME = SITE_CONFIG.turnstileExpectedHostname;

export function withSiteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

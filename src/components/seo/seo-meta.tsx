import { useEffect } from "react";

type SeoMetaProps = {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown> | null;
  ogImagePath?: string;
  ogImageAlt?: string;
  robots?: string;
};

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://saferplast-main.pages.dev").replace(/\/$/, "");
const TWITTER_CARD = "summary";
const DEFAULT_OG_IMAGE_PATH = "/images/original/logo.png";
const DEFAULT_OG_IMAGE_ALT = "Saferplast";
const DEFAULT_ROBOTS = "index,follow";

function upsertMetaByName(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function upsertJsonLd(jsonLd: Record<string, unknown>) {
  const scriptId = "seo-json-ld";
  let tag = document.head.querySelector<HTMLScriptElement>(`script#${scriptId}`);
  if (!tag) {
    tag = document.createElement("script");
    tag.id = scriptId;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(jsonLd);
}

function removeJsonLd() {
  const tag = document.head.querySelector<HTMLScriptElement>("script#seo-json-ld");
  if (tag) {
    tag.remove();
  }
}

export function SeoMeta({
  canonicalPath,
  description,
  jsonLd = null,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  ogImagePath = DEFAULT_OG_IMAGE_PATH,
  ogType = "website",
  robots = DEFAULT_ROBOTS,
  title,
}: SeoMetaProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const ogImageUrl = `${SITE_URL}${ogImagePath}`;

    document.title = title;

    upsertMetaByName("description", description);
    upsertMetaByName("robots", robots);
    upsertMetaByName("twitter:card", TWITTER_CARD);
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", ogImageUrl);

    upsertMetaByProperty("og:type", ogType);
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:url", canonicalUrl);
    upsertMetaByProperty("og:site_name", "Saferplast");
    upsertMetaByProperty("og:locale", "ru_RU");
    upsertMetaByProperty("og:image", ogImageUrl);
    upsertMetaByProperty("og:image:alt", ogImageAlt);

    upsertCanonical(canonicalUrl);

    if (jsonLd) {
      upsertJsonLd(jsonLd);
    } else {
      removeJsonLd();
    }
  }, [canonicalPath, description, jsonLd, ogImageAlt, ogImagePath, ogType, robots, title]);

  return null;
}

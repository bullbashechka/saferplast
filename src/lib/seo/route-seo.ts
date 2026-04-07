import type { GeoPage } from "@/features/seo/geo-pages-content";

export type RouteSeoConfig = {
  canonicalPath: string;
  description: string;
  jsonLd?: Record<string, unknown> | null;
  robots?: string;
  title: string;
};

const SITE_URL = (import.meta.env.VITE_SITE_URL ?? "https://saferplast.pages.dev").replace(/\/$/, "");

export const defaultOgImagePath = "/images/original/logo.png";

export const homeSeo: RouteSeoConfig = {
  canonicalPath: "/",
  description:
    "Окна ПВХ, остекление балконов и ремонт окон в Караганде и Карагандинской области. Замер, установка и сервис от Saferplast.",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Saferplast",
    url: `${SITE_URL}/`,
    telephone: "+77478041022",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KZ",
      addressRegion: "Карагандинская область",
      addressLocality: "Караганда",
      streetAddress: "мкр. Голубые пруды, 21",
    },
    areaServed: ["Караганда", "Темиртау", "Шахтинск", "Сарань", "Абай", "Майкудук", "Пришахтинск"],
    serviceType: ["Окна ПВХ", "Остекление балконов", "Ремонт окон"],
  },
  title: "Окна ПВХ в Караганде и области - замер, установка, ремонт | Saferplast",
};

export const legalSeoByPath: Record<"/privacy" | "/data-processing-policy" | "/public-offer", RouteSeoConfig> = {
  "/data-processing-policy": {
    canonicalPath: "/data-processing-policy",
    description:
      "Политика обработки персональных данных Saferplast: какие данные собираются, цели, сроки хранения и порядок удаления.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Политика обработки персональных данных | Saferplast",
      url: `${SITE_URL}/data-processing-policy`,
    },
    title: "Политика обработки персональных данных | Saferplast",
  },
  "/privacy": {
    canonicalPath: "/privacy",
    description:
      "Политика конфиденциальности Saferplast: обработка персональных данных, правовые основания и контакты оператора.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Политика конфиденциальности | Saferplast",
      url: `${SITE_URL}/privacy`,
    },
    title: "Политика конфиденциальности | Saferplast",
  },
  "/public-offer": {
    canonicalPath: "/public-offer",
    description:
      "Публичная оферта Saferplast на оказание услуг по изготовлению, монтажу и ремонту оконных и балконных конструкций.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Публичная оферта | Saferplast",
      url: `${SITE_URL}/public-offer`,
    },
    title: "Публичная оферта | Saferplast",
  },
};

export function getGeoPageSeo(page: GeoPage): RouteSeoConfig {
  return {
    canonicalPath: page.path,
    description: page.seoDescription,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Saferplast",
      url: `${SITE_URL}${page.path}`,
      telephone: "+77478041022",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KZ",
        addressLocality: "Караганда",
        streetAddress: "мкр. Голубые пруды, 21",
      },
      areaServed: page.areaServed.map((area) => ({
        "@type": "City",
        name: area,
      })),
      serviceType: ["Установка окон ПВХ", "Остекление балконов", "Ремонт окон"],
    },
    title: page.seoTitle,
  };
}

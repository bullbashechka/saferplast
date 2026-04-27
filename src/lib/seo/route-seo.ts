import { faqContent } from "@/features/landing/faq-content";
import { geoPages, type GeoPage } from "@/features/seo/geo-pages-content";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export type RouteSeoConfig = {
  path: string;
  title: string;
  description: string;
  robots?: string;
  changefreq: "weekly" | "monthly";
  priority: number;
  breadcrumbs?: readonly BreadcrumbItem[];
  jsonLd: readonly Record<string, unknown>[];
};

export const SITE_NAME = "Saferplast";
export const SITE_URL = "https://saferplast-main.pages.dev";
export const DEFAULT_OG_IMAGE_PATH = "/images/original/logo.png";
export const SEO_VERIFICATION = {
  google: "tdG4QVHfcG2jHfIgsfShdmo1RoTkNOquHik4yUl64gU",
  yandex: "2a81e26be875de69",
} as const;

export function withSiteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function createBreadcrumbList(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: withSiteUrl(item.path),
    })),
  };
}

function createServiceJsonLd(areaServed: readonly string[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Окна ПВХ, балконы и ремонт окон",
    serviceType: "Изготовление, монтаж и ремонт оконных и балконных конструкций",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: "+77478041022",
      url: `${SITE_URL}/`,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url,
  };
}

function createLocalBusinessJsonLd(url: string, areaServed: readonly string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url,
    telephone: "+77478041022",
    image: withSiteUrl(DEFAULT_OG_IMAGE_PATH),
    address: {
      "@type": "PostalAddress",
      addressCountry: "KZ",
      addressRegion: "Карагандинская область",
      addressLocality: "Караганда",
      streetAddress: "мкр. Голубые пруды, 21",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: ["Окна ПВХ", "Остекление балконов", "Ремонт окон"],
  };
}

export const homeSeo: RouteSeoConfig = {
  path: "/",
  title: "Окна ПВХ в Караганде и области - замер, установка, ремонт | Saferplast",
  description:
    "Окна ПВХ, остекление балконов и ремонт окон в Караганде и Карагандинской области. Замер, установка и сервис от Saferplast.",
  changefreq: "weekly",
  priority: 1,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: withSiteUrl("/"),
      logo: withSiteUrl("/images/versioned/logo.v2.webp"),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+77478041022",
        contactType: "customer service",
        areaServed: "KZ",
        availableLanguage: ["ru", "kk"],
      },
    },
    createLocalBusinessJsonLd(withSiteUrl("/"), [
      "Караганда",
      "Темиртау",
      "Шахтинск",
      "Сарань",
      "Абай",
      "Майкудук",
      "Пришахтинск",
    ]),
    createServiceJsonLd(
      ["Караганда", "Темиртау", "Шахтинск", "Сарань", "Абай", "Майкудук", "Пришахтинск"],
      withSiteUrl("/"),
    ),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqContent.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export const legalSeoByPath: Record<"/privacy" | "/data-processing-policy", RouteSeoConfig> = {
  "/data-processing-policy": {
    path: "/data-processing-policy",
    title: "Политика обработки персональных данных | Saferplast",
    description:
      "Политика обработки персональных данных Saferplast: какие данные собираются, цели, сроки хранения и порядок удаления.",
    changefreq: "monthly",
    priority: 0.5,
    breadcrumbs: [
      { name: "Главная", path: "/" },
      { name: "Политика обработки персональных данных", path: "/data-processing-policy" },
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Политика обработки персональных данных | Saferplast",
        url: withSiteUrl("/data-processing-policy"),
      },
      createBreadcrumbList([
        { name: "Главная", path: "/" },
        { name: "Политика обработки персональных данных", path: "/data-processing-policy" },
      ]),
    ],
  },
  "/privacy": {
    path: "/privacy",
    title: "Политика конфиденциальности | Saferplast",
    description:
      "Политика конфиденциальности Saferplast: обработка персональных данных, правовые основания и контакты оператора.",
    changefreq: "monthly",
    priority: 0.5,
    breadcrumbs: [
      { name: "Главная", path: "/" },
      { name: "Политика конфиденциальности", path: "/privacy" },
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Политика конфиденциальности | Saferplast",
        url: withSiteUrl("/privacy"),
      },
      createBreadcrumbList([
        { name: "Главная", path: "/" },
        { name: "Политика конфиденциальности", path: "/privacy" },
      ]),
    ],
  },
};

export function getGeoPageSeo(page: GeoPage): RouteSeoConfig {
  const breadcrumbs = [
    { name: "Главная", path: "/" },
    { name: page.cityLabel, path: page.path },
  ] as const;

  return {
    path: page.path,
    title: page.seoTitle,
    description: page.seoDescription,
    changefreq: "weekly",
    priority: page.path === "/karaganda" ? 0.9 : 0.8,
    breadcrumbs,
    jsonLd: [
      createLocalBusinessJsonLd(withSiteUrl(page.path), page.areaServed),
      createServiceJsonLd(page.areaServed, withSiteUrl(page.path)),
      createBreadcrumbList(breadcrumbs),
    ],
  };
}

export const allRouteSeo: readonly RouteSeoConfig[] = [
  homeSeo,
  ...geoPages.map((page) => getGeoPageSeo(page)),
  legalSeoByPath["/privacy"],
  legalSeoByPath["/data-processing-policy"],
];

import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const templatePath = path.join(distDir, "index.html");
const siteUrl = (process.env.VITE_SITE_URL ?? "https://saferplast-main.pages.dev").replace(/\/$/, "");
const ogImageUrl = `${siteUrl}/images/original/logo.png`;

const localBusinessJsonLd = (url) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Saferplast",
  url,
  telephone: "+77478041022",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KZ",
    addressLocality: "Караганда",
    streetAddress: "мкр. Голубые пруды, 21",
  },
});

const routes = [
  {
    path: "/",
    title: "Окна ПВХ в Караганде и области - замер, установка, ремонт | Saferplast",
    description:
      "Окна ПВХ, остекление балконов и ремонт окон в Караганде и Карагандинской области. Замер, установка и сервис от Saferplast.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Saferplast",
      url: `${siteUrl}/`,
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
  },
  {
    path: "/karaganda",
    title: "Пластиковые окна в Караганде - замер, установка и ремонт | Saferplast",
    description: "Установка пластиковых окон, остекление балконов и ремонт окон в Караганде.",
    jsonLd: localBusinessJsonLd(`${siteUrl}/karaganda`),
  },
  {
    path: "/temirtau",
    title: "Пластиковые окна в Темиртау - установка и ремонт | Saferplast",
    description: "Замер, установка и ремонт пластиковых окон в Темиртау от Saferplast.",
    jsonLd: localBusinessJsonLd(`${siteUrl}/temirtau`),
  },
  {
    path: "/shakhtinsk",
    title: "Окна ПВХ в Шахтинске - монтаж и ремонт | Saferplast",
    description: "Окна, балконы и сервис оконных конструкций в Шахтинске.",
    jsonLd: localBusinessJsonLd(`${siteUrl}/shakhtinsk`),
  },
  {
    path: "/saran",
    title: "Пластиковые окна в Сарани - установка и обслуживание | Saferplast",
    description: "Окна ПВХ в Сарани: замер, монтаж, регулировка и ремонт.",
    jsonLd: localBusinessJsonLd(`${siteUrl}/saran`),
  },
  {
    path: "/abay",
    title: "Окна в Абае - монтаж, ремонт, остекление балконов | Saferplast",
    description: "Изготовление, установка и ремонт оконных конструкций в Абае.",
    jsonLd: localBusinessJsonLd(`${siteUrl}/abay`),
  },
  {
    path: "/karaganda/maykuduk-prishakhtinsk",
    title: "Окна ПВХ в Майкудуке и Пришахтинске - замер и монтаж | Saferplast",
    description: "Установка, ремонт и обслуживание окон в Майкудуке и Пришахтинске.",
    jsonLd: localBusinessJsonLd(`${siteUrl}/karaganda/maykuduk-prishakhtinsk`),
  },
  {
    path: "/privacy",
    title: "Политика конфиденциальности | Saferplast",
    description:
      "Политика конфиденциальности Saferplast: обработка персональных данных, правовые основания и контакты оператора.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Политика конфиденциальности | Saferplast",
      url: `${siteUrl}/privacy`,
    },
  },
  {
    path: "/data-processing-policy",
    title: "Политика обработки персональных данных | Saferplast",
    description:
      "Политика обработки персональных данных Saferplast: какие данные собираются, цели, сроки хранения и порядок удаления.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Политика обработки персональных данных | Saferplast",
      url: `${siteUrl}/data-processing-policy`,
    },
  },
];

function replaceMetaByName(html, name, value) {
  const pattern = new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["'][^"']*["']\\s*\\/?>`, "i");
  return pattern.test(html)
    ? html.replace(pattern, `<meta name="${name}" content="${value}" />`)
    : html.replace("</head>", `    <meta name="${name}" content="${value}" />\n  </head>`);
}

function replaceMetaByProperty(html, property, value) {
  const pattern = new RegExp(`<meta\\s+property=["']${property}["']\\s+content=["'][^"']*["']\\s*\\/?>`, "i");
  return pattern.test(html)
    ? html.replace(pattern, `<meta property="${property}" content="${value}" />`)
    : html.replace("</head>", `    <meta property="${property}" content="${value}" />\n  </head>`);
}

function replaceCanonical(html, href) {
  const pattern = /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i;
  return pattern.test(html)
    ? html.replace(pattern, `<link rel="canonical" href="${href}" />`)
    : html.replace("</head>", `    <link rel="canonical" href="${href}" />\n  </head>`);
}

function replaceTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
}

function replaceJsonLd(html, jsonLd) {
  const content = jsonLd ? JSON.stringify(jsonLd) : "";
  const scriptPattern = /<script(?:\s+id=["']seo-json-ld["'])?\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/i;

  if (!jsonLd) {
    return html.replace(scriptPattern, "");
  }

  const nextScript = `<script id="seo-json-ld" type="application/ld+json">${content}</script>`;
  return scriptPattern.test(html)
    ? html.replace(scriptPattern, nextScript)
    : html.replace("</head>", `    ${nextScript}\n  </head>`);
}

function renderRouteHtml(templateHtml, route) {
  const canonicalUrl = `${siteUrl}${route.path}`;
  let html = templateHtml;

  html = replaceTitle(html, route.title);
  html = replaceMetaByName(html, "description", route.description);
  html = replaceMetaByName(html, "robots", "index,follow");
  html = replaceMetaByName(html, "twitter:title", route.title);
  html = replaceMetaByName(html, "twitter:description", route.description);
  html = replaceMetaByName(html, "twitter:image", ogImageUrl);

  html = replaceMetaByProperty(html, "og:type", "website");
  html = replaceMetaByProperty(html, "og:title", route.title);
  html = replaceMetaByProperty(html, "og:description", route.description);
  html = replaceMetaByProperty(html, "og:url", canonicalUrl);
  html = replaceMetaByProperty(html, "og:image", ogImageUrl);
  html = replaceMetaByProperty(html, "og:image:alt", "Saferplast");

  html = replaceCanonical(html, canonicalUrl);
  html = replaceJsonLd(html, route.jsonLd ?? null);

  return html;
}

function writeRouteFile(routePath, html) {
  if (routePath === "/") {
    fs.writeFileSync(templatePath, html, "utf8");
    return;
  }

  const routeDir = path.join(distDir, routePath.replace(/^\//, ""));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf8");
}

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html is missing. Run build first.");
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, "utf8");
for (const route of routes) {
  const html = renderRouteHtml(templateHtml, route);
  writeRouteFile(route.path, html);
}

console.log(`Prerendered ${routes.length} routes into dist/`);

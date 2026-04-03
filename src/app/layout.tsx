import type { Metadata } from "next";

import "@/styles/globals.css";

const siteUrl = new URL("https://saferplast.saidashev-kirill2004.workers.dev/");

export const metadata: Metadata = {
  title: "Saferplast",
  description: "Пластиковые окна с формой заявки и калькулятором стоимости.",
  metadataBase: siteUrl,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "a5j2wAbP42rURdiWwSKMibnavkTAwHjwq4tHpKBxWj8",
    yandex: "6ec04759d2316256",
  },
  openGraph: {
    title: "Saferplast",
    description: "Пластиковые окна с формой заявки и калькулятором стоимости.",
    url: siteUrl,
    siteName: "Saferplast",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Saferplast",
    description: "Пластиковые окна с формой заявки и калькулятором стоимости.",
  },
  icons: {
    icon: "/images/original/logo.png",
    shortcut: "/images/original/logo.png",
    apple: "/images/original/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="font-body">{children}</body>
    </html>
  );
}

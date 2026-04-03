import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Saferplast",
  description: "Пластиковые окна с формой заявки и калькулятором стоимости.",
  verification: {
    google: "a5j2wAbP42rURdiWwSKMibnavkTAwHjwq4tHpKBxWj8",
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

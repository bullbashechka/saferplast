import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Saferplast",
  description: "Пластиковые окна с формой заявки и калькулятором стоимости.",
  icons: {
    icon: "/images/original/logo.PNG",
    shortcut: "/images/original/logo.PNG",
    apple: "/images/original/logo.PNG",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="font-body">{children}</body>
    </html>
  );
}

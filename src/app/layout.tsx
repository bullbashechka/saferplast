import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Saferplast",
  description: "Пластиковые окна с формой заявки и калькулятором стоимости.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className="font-body">{children}</body>
    </html>
  );
}

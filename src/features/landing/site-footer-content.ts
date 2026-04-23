import { firstScreenContent } from "@/features/landing/first-screen-content";

export type SiteFooterLink = {
  href: string;
  label: string;
};

export type SiteFooterContent = {
  contactsDescription: string;
  contactsTitle: string;
  instagramHref: string;
  legalItems: readonly [string, string];
  navigationLinks: readonly SiteFooterLink[]; 
  phoneHref: string;
  phoneLabel: string;
  telegramHref: string;
  whatsappHref: string;
};

const { instagramHref, phoneHref, phoneLabel, telegramHref, whatsappHref } = firstScreenContent;

export const siteFooterContent: SiteFooterContent = {
  contactsTitle: "Контакты",
  contactsDescription: "Срочный заказ? Позвоните или напишите нам. Мы на связи с 09:00 до 18:00.",
  navigationLinks: [
    { href: "#top", label: "Главная" },
    { href: "#projects", label: "Наши работы" },
    { href: "#testimonials", label: "Отзывы" },
    { href: "#solution-matching", label: "Подобрать решение" },
    { href: "#contacts", label: "Контакты" },
  ],
  instagramHref,
  phoneHref,
  phoneLabel,
  telegramHref,
  whatsappHref,
  legalItems: ["Политика конфиденциальности", "Политика обработки данных"],
};

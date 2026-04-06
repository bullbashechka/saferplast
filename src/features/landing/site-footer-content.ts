import { firstScreenContent } from "@/features/landing/first-screen-content";

export type SiteFooterLink = {
  href: string;
  label: string;
};

export type SiteFooterContent = {
  contactsDescription: string;
  contactsTitle: string;
  instagramHref: string;
  legalItems: readonly [string, string, string];
  navigationLinks: readonly SiteFooterLink[];
  phoneHref: string;
  phoneLabel: string;
  telegramHref: string;
  whatsappHref: string;
};

const { instagramHref, phoneHref, phoneLabel, telegramHref, whatsappHref } = firstScreenContent;

export const siteFooterContent: SiteFooterContent = {
  contactsTitle: "Контакты",
  contactsDescription: "Срочный заказ? Позвоните или напишите нам. Мы на связи с 09:00 до 18:00",
  navigationLinks: [
    { href: "#top", label: "главная" },
    { href: "#projects", label: "наши работы" },
    { href: "#testimonials", label: "отзывы" },
    { href: "#solution-matching", label: "подобрать решение" },
    { href: "#contacts", label: "контакты" },
  ],
  instagramHref,
  phoneHref,
  phoneLabel,
  telegramHref,
  whatsappHref,
  legalItems: ["Политика конфиденциальности", "Политика обработки данных", "Публичная оферта"],
};

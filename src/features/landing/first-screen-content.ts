export type NavigationLink = {
  href: string;
  label: string;
};

export type FirstScreenContent = {
  headline: string;
  description: string;
  audienceLine: string;
  trustItems: [string, string, string, string];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  phoneHref: string;
  phoneLabel: string;
  cityLabel: string;
  whatsappHref: string;
  telegramHref: string;
  navigationLinks: NavigationLink[];
};

export const firstScreenContent: FirstScreenContent = {
  headline: "РћРєРЅР°, РґРІРµСЂРё Рё Р±Р°Р»РєРѕРЅС‹ РёР· РџР’РҐ Рё Р°Р»СЋРјРёРЅРёСЏ РЅР°РїСЂСЏРјСѓСЋ РѕС‚ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЏ",
  description:
    "РР·РіРѕС‚РѕРІР»РµРЅРёРµ, РјРѕРЅС‚Р°Р¶ Рё СЂРµРјРѕРЅС‚ РѕРєРѕРЅ, РґРІРµСЂРµР№ Рё Р±Р°Р»РєРѕРЅРѕРІ РІ РљР°СЂР°РіР°РЅРґРµ. Р‘РµСЃРїР»Р°С‚РЅС‹Р№ Р·Р°РјРµСЂ Рё РїСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ СЂР°СЃС‡РµС‚.",
  audienceLine: "Р”Р»СЏ РєРІР°СЂС‚РёСЂ, С‡Р°СЃС‚РЅС‹С… РґРѕРјРѕРІ, РѕС„РёСЃРѕРІ Рё РєРѕРјРјРµСЂС‡РµСЃРєРёС… РїРѕРјРµС‰РµРЅРёР№.",
  trustItems: [
    "РЎРѕР±СЃС‚РІРµРЅРЅРѕРµ РїСЂРѕРёР·РІРѕРґСЃС‚РІРѕ",
    "Р¦РµРЅС‹ Р±РµР· РїРѕСЃСЂРµРґРЅРёРєРѕРІ",
    "Р‘С‹СЃС‚СЂС‹Р№ РІС‹РµР·Рґ Рё СЂР°СЃС‡РµС‚",
    "Р“Р°СЂР°РЅС‚РёСЏ 1 РіРѕРґ",
  ],
  primaryCta: {
    label: "Р‘РµСЃРїР»Р°С‚РЅС‹Р№ Р·Р°РјРµСЂ",
    href: "#lead-form",
  },
  secondaryCta: {
    label: "РџРѕР»СѓС‡РёС‚СЊ СЂР°СЃС‡РµС‚",
    href: "#calculator",
  },
  phoneHref: "tel:+77079999999",
  phoneLabel: "+77079999999",
  cityLabel: "Рі. РљР°СЂР°РіР°РЅРґР°",
  whatsappHref: "https://wa.me/77079999999",
  telegramHref: "https://t.me/saferplast",
  navigationLinks: [
    { href: "#top", label: "РіР»Р°РІРЅР°СЏ" },
    { href: "#calculator", label: "СЂР°СЃСЃС‡РёС‚Р°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ" },
    { href: "#projects", label: "наши работы" },
    { href: "#contacts", label: "контакты" },
  ],
};


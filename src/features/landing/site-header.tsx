import Image from "next/image";
import Link from "next/link";

type NavigationLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  cityLabel: string;
  navigationLinks: NavigationLink[];
  phoneHref: string;
  phoneLabel: string;
  telegramHref: string;
  whatsappHref: string;
};

type MessengerLink = {
  href: string;
  iconSrc: string;
  label: string;
};

export function SiteHeader({
  cityLabel,
  navigationLinks,
  phoneHref,
  phoneLabel,
  telegramHref,
  whatsappHref,
}: SiteHeaderProps) {
  const messengerLinks: MessengerLink[] = [
    { href: whatsappHref, iconSrc: "/icons/whatsapp.svg", label: "WhatsApp" },
    { href: telegramHref, iconSrc: "/icons/telegram.svg", label: "Telegram" },
  ];

  return (
    <header className="flex flex-wrap items-center justify-between gap-[1rem] py-[0.25rem] lg:flex-nowrap lg:gap-[2rem]">
      <Link aria-label="Saferplast" className="block w-full max-w-[11.1875rem] shrink-0" href="/">
        <Image
          alt="Saferplast"
          className="h-auto w-full object-contain"
          height={92}
          priority
          src="/images/logo.png"
          width={179}
        />
      </Link>

      <nav aria-label="Основная навигация" className="hidden flex-1 justify-center lg:flex">
        <ul className="flex items-center gap-[1.5rem]">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="text-[1rem] font-normal leading-[1] text-ink transition-colors hover:text-brand-700"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-1 flex-wrap items-center justify-end gap-[0.75rem] sm:gap-[1rem]">
        <a
          className="flex h-[3rem] items-center gap-[0.75rem] rounded-[0.9375rem] bg-surface/90 px-[1rem] text-[1rem] font-medium leading-[1] text-black transition-colors hover:bg-surface sm:px-[1.375rem] sm:text-[1.125rem] lg:px-[1.625rem] lg:text-[1.25rem]"
          href={phoneHref}
        >
          <Image alt="" aria-hidden="true" height={16} src="/icons/phone.svg" width={16} />
          <span>{phoneLabel}</span>
        </a>

        <div className="flex h-[3rem] items-center gap-[0.75rem] rounded-[0.9375rem] bg-muted/90 px-[1rem] text-[0.9375rem] font-medium leading-[1] text-black sm:px-[1.375rem] sm:text-[1rem] lg:px-[1.625rem] lg:text-[1.125rem]">
          <Image alt="" aria-hidden="true" height={20} src="/icons/location.svg" width={16} />
          <span>{cityLabel}</span>
        </div>

        <div className="flex items-center gap-[0.5rem] rounded-[0.9375rem] bg-surface/70 p-[0.375rem]">
          {messengerLinks.map((link) => (
            <a
              key={link.label}
              aria-label={link.label}
              className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.75rem] bg-white/95 transition-colors hover:bg-white"
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <Image alt="" aria-hidden="true" height={16} src={link.iconSrc} width={16} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

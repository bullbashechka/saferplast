import { Image } from "@/components/ui/image";

import type { SiteFooterLink } from "@/features/landing/site-footer-content";
import { siteFooterContent } from "@/features/landing/site-footer-content";

const legalLinkHrefs = ["/privacy", "/data-processing-policy"] as const;

function LegalItem({ item, index }: { item: string; index: number }) {
  const href = legalLinkHrefs[index];

  if (!href) {
    return <>{item}</>;
  }

  return (
    <a className="transition-colors hover:text-[#004B62]" href={href}>
      {item}
    </a>
  );
}

export function SiteFooter({ navigationLinks = siteFooterContent.navigationLinks }: { navigationLinks?: readonly SiteFooterLink[] }) {
  const {
    contactsDescription,
    contactsTitle,
    instagramHref,
    legalItems,
    phoneHref,
    phoneLabel,
    telegramHref,
    whatsappHref,
  } = siteFooterContent;
  const visibleLegalItems = legalItems.slice(0, 2);

  return (
    <footer
      id="contacts"
      aria-label={contactsTitle}
      className="bg-[rgba(250,254,255,1)] px-[var(--landing-mobile-shell-x)] pb-10 pt-[20px] md:px-5 md:pb-12 md:pt-[20px] min-[1025px]:px-8"
    >
      <div className="landing-mobile-shell mx-auto md:max-w-[1201px]">
        <div className="md:hidden flex flex-col">
          <div className="order-1 mt-[24px] grid grid-cols-[1fr_auto] items-start gap-[16px]">
            <nav aria-label="Навигация в подвале">
              <ul className="grid gap-[1px]">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="font-body text-[12px] font-normal leading-[1] text-[#242424] transition-colors hover:text-[#004B62]"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a aria-label="Saferplast" className="block h-[78px] w-[111px]" href="#top">
              <Image
                alt="Saferplast"
                className="h-[78px] w-[111px] object-contain object-right"
                height={78}
                src="/images/versioned/logo.v2.webp"
                unoptimized
                width={111}
              />
            </a>
          </div>

          <div className="order-0">
            <h2 className="font-display text-[20px] font-normal leading-[1] text-[#004B62]">{contactsTitle}</h2>
            <p className="mt-[10px] max-w-[230px] font-body text-[12px] font-normal leading-[1.15] text-[#242424]">
              {contactsDescription}
            </p>
            <div className="mt-[14px] flex items-center justify-between gap-[12px]">
              <a
                className="inline-flex items-center gap-[11px] whitespace-nowrap font-body text-[14px] font-medium leading-[1] text-[#242424] transition-colors hover:text-[#004B62]"
                href={phoneHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image alt="" aria-hidden="true" className="h-4 w-4" height={16} src="/icons/phone.svg" width={16} />
                <span>{phoneLabel}</span>
              </a>

              <div className="flex items-center gap-[8px]">
                <a
                  aria-label="Telegram"
                  className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  href={telegramHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" className="h-[28px] w-[28px]" height={28} src="/icons/teleg.svg" width={28} />
                </a>
                <a
                  aria-label="Instagram"
                  className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  href={instagramHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" className="h-[28px] w-[28px]" height={28} src="/icons/instagram.svg" width={28} />
                </a>
                <a
                  aria-label="WhatsApp"
                  className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  href={whatsappHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" className="h-[28px] w-[28px]" height={28} src="/icons/whats.svg" width={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="order-2 mt-[22px] border-t border-[#d8e6eb] pt-[14px]">
            {visibleLegalItems.map((item, index) => (
              <p
                key={item}
                className={`text-center font-body text-[11px] font-normal leading-[1] text-[#242424] ${
                  index === 0 ? "" : "mt-[8px]"
                }`}
              >
                <LegalItem index={index} item={item} />
              </p>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid gap-8 md:grid-cols-[220px_minmax(10rem,12rem)_minmax(0,1fr)] min-[1025px]:gap-10 min-[1025px]:grid-cols-[263px_minmax(12rem,14rem)_minmax(0,1fr)] xl:gap-[9rem]">
            <a aria-label="Saferplast" className="block w-[220px] max-w-full min-[1025px]:w-[263px]" href="#top">
              <Image
                alt="Saferplast"
                className="h-auto w-full max-w-full object-contain"
                height={185}
                src="/images/versioned/logo.v2.webp"
                unoptimized
                width={263}
              />
            </a>

            <nav aria-label="Навигация в подвале" className="md:self-center md:justify-self-center">
              <ul className="grid gap-4 sm:grid-cols-2 sm:gap-x-[1px]">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="whitespace-nowrap font-body text-[0.9375rem] font-normal leading-[1] tracking-[0] text-[#242424] transition-colors hover:text-[#004B62] min-[1025px]:text-[1rem]"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-5 md:items-end md:text-right">
              <div>
                <h2 className="font-body text-[2.1875rem] font-medium leading-[1] tracking-[0] text-[#004B62] min-[1025px]:text-[2.25rem] xl:text-[40px]">
                  {contactsTitle}
                </h2>
                <p className="mt-4 max-w-[26.1875rem] font-body text-[0.9375rem] font-normal leading-[1.3] tracking-[0] text-[#242424] md:ml-auto min-[1025px]:text-[1rem]">
                  {contactsDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:justify-end">
                <a
                  className="inline-flex items-center gap-3 font-body text-[1.1875rem] font-medium leading-[1] tracking-[0] text-[#242424] transition-colors hover:text-[#004B62] min-[1025px]:text-[1.25rem]"
                  href={phoneHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" height={18} src="/icons/phone.svg" width={18} />
                  <span>{phoneLabel}</span>
                </a>

                <div className="flex items-center gap-3">
                  <a
                    aria-label="Telegram"
                    className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                    href={telegramHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image alt="" aria-hidden="true" height={38} src="/icons/teleg.svg" width={38} />
                  </a>
                  <a
                    aria-label="Instagram"
                    className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                    href={instagramHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image alt="" aria-hidden="true" height={38} src="/icons/instagram.svg" width={38} />
                  </a>
                  <a
                    aria-label="WhatsApp"
                    className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                    href={whatsappHref}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image alt="" aria-hidden="true" height={38} src="/icons/whats.svg" width={38} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#d8e6eb] pt-6 md:mt-9 min-[1025px]:mt-10">
            <div className="flex flex-nowrap items-center justify-center gap-8 text-center">
              {visibleLegalItems.map((item, index) => (
                <p key={item} className="font-body text-[0.9375rem] font-normal leading-[1] tracking-[0] text-[#242424] min-[1025px]:text-[1rem]">
                  <LegalItem index={index} item={item} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

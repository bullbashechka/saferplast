import Image from "next/image";

import { siteFooterContent } from "@/features/landing/site-footer-content";

export function SiteFooter() {
  const {
    contactsDescription,
    contactsTitle,
    instagramHref,
    legalItems,
    navigationLinks,
    phoneHref,
    phoneLabel,
    telegramHref,
    whatsappHref,
  } = siteFooterContent;

  return (
    <footer
      id="contacts"
      aria-label={contactsTitle}
      className="bg-[rgba(250,254,255,1)] px-[10px] pb-10 pt-14 lg:px-5 lg:pb-12 lg:pt-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[300px] lg:max-w-[1201px]">
        <div className="lg:hidden">
          <div className="grid grid-cols-[1fr_auto] items-start gap-[16px]">
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
                src="/images/original/logo.png"
                unoptimized
                width={111}
              />
            </a>
          </div>

          <div className="mt-[24px]">
            <h2 className="font-display text-[20px] font-normal leading-[1] text-[#004B62]">
              {contactsTitle}
            </h2>
            <p className="mt-[10px] max-w-[230px] font-body text-[12px] font-normal leading-[1.15] text-[#242424]">
              {contactsDescription}
            </p>
            <div className="mt-[14px] flex items-center justify-between gap-[12px]">
              <a
                className="inline-flex items-center gap-[11px] whitespace-nowrap font-body text-[14px] font-medium leading-[1] text-[#242424] transition-colors hover:text-[#004B62]"
                href={phoneHref}
              >
                <Image alt="" aria-hidden="true" className="h-4 w-4" height={16} src="/icons/phone.svg" width={16} />
                <span>{phoneLabel}</span>
              </a>

              <div className="flex items-center gap-[8px]">
                <a
                  aria-label="Telegram"
                  className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  href={telegramHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" className="h-[28px] w-[28px]" height={28} src="/icons/teleg.svg" width={28} />
                </a>
                <a
                  aria-label="Instagram"
                  className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  href={instagramHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" className="h-[28px] w-[28px]" height={28} src="/icons/instagram.svg" width={28} />
                </a>
                <a
                  aria-label="WhatsApp"
                  className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" className="h-[28px] w-[28px]" height={28} src="/icons/whats.svg" width={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-[22px] border-t border-[#d8e6eb] pt-[14px]">
            {legalItems.map((item, index) => (
              <p
                key={item}
                className={`text-center font-body text-[11px] font-normal leading-[1] text-[#242424] ${
                  index === 0 ? "" : "mt-[8px]"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="grid gap-10 lg:grid-cols-[220px_minmax(12rem,14rem)_minmax(0,1fr)] xl:grid-cols-[263px_minmax(12rem,14rem)_minmax(0,1fr)] xl:gap-[9rem]">
            <a aria-label="Saferplast" className="block w-[220px] max-w-full xl:w-[263px]" href="#top">
              <Image
                alt="Saferplast"
                className="h-auto w-full max-w-full object-contain"
                height={185}
                src="/images/original/logo.png"
                unoptimized
                width={263}
              />
            </a>

            <nav aria-label="Навигация в подвале" className="lg:self-center lg:justify-self-center">
              <ul className="grid gap-4 sm:grid-cols-2 sm:gap-x-[1px]">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className="whitespace-nowrap font-body text-[1rem] font-normal leading-[1] tracking-[0] text-[#242424] transition-colors hover:text-[#004B62]"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-5 lg:items-end lg:text-right">
              <div>
                <h2 className="font-body text-[2rem] font-medium leading-[1] tracking-[0] text-[#004B62] lg:text-[2.25rem] xl:text-[40px]">
                  {contactsTitle}
                </h2>
                <p className="mt-4 max-w-[26.1875rem] font-body text-[1rem] font-normal leading-[1.3] tracking-[0] text-[#242424] lg:ml-auto">
                  {contactsDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                <a
                  className="inline-flex items-center gap-3 font-body text-[1.125rem] font-medium leading-[1] tracking-[0] text-[#242424] transition-colors hover:text-[#004B62] sm:text-[1.25rem]"
                  href={phoneHref}
                >
                  <Image alt="" aria-hidden="true" height={18} src="/icons/phone.svg" width={18} />
                  <span>{phoneLabel}</span>
                </a>

                <div className="flex items-center gap-3">
                  <a
                    aria-label="Telegram"
                    className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                    href={telegramHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image alt="" aria-hidden="true" height={38} src="/icons/teleg.svg" width={38} />
                  </a>
                  <a
                    aria-label="Instagram"
                    className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                    href={instagramHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image alt="" aria-hidden="true" height={38} src="/icons/instagram.svg" width={38} />
                  </a>
                  <a
                    aria-label="WhatsApp"
                    className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image alt="" aria-hidden="true" height={38} src="/icons/whats.svg" width={38} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[#d8e6eb] pt-6 lg:mt-10">
            <div className="grid justify-center gap-3 text-center sm:grid-cols-2 sm:gap-8">
              {legalItems.map((item) => (
                <p key={item} className="font-body text-[1rem] font-normal leading-[1] tracking-[0] text-[#242424]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

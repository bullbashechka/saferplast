import Image from "next/image";

import { siteFooterContent } from "@/features/landing/site-footer-content";

export function SiteFooter() {
  const {
    contactsDescription,
    contactsTitle,
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
      aria-labelledby="footer-contacts-title"
      className="bg-[rgba(250,254,255,1)] px-6 pb-10 pt-14 lg:px-8 lg:pb-12 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-content lg:max-w-[1201px]">
        <div className="grid gap-10 lg:grid-cols-[263px_minmax(12rem,14rem)_minmax(0,1fr)] lg:gap-[9rem]">
          <a aria-label="Saferplast" className="block w-[263px] max-w-full" href="#top">
            <Image
              alt="Saferplast"
              className="h-[185px] w-[263px] max-w-full object-contain"
              height={185}
              src="/images/webp/logo.webp"
              width={263}
            />
          </a>

          <nav aria-label="Навигация в подвале" className="lg:self-center lg:justify-self-center">
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-x-8">
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
              <h2
                id="footer-contacts-title"
                className="font-body text-[2rem] font-medium leading-[1] tracking-[0] text-[#004B62] sm:text-[2.25rem] lg:text-[40px]"
              >
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
                  <Image alt="" aria-hidden="true" height={38} src="/icons/ic_baseline-telegram.svg" width={38} />
                </a>
                <a
                  aria-label="WhatsApp"
                  className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
                  href={whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image alt="" aria-hidden="true" height={38} src="/icons/ri_whatsapp-fill.svg" width={38} />
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
    </footer>
  );
}

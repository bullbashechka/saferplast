"use client";

import { useState } from "react";
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
};

export function SiteHeader({
  cityLabel,
  navigationLinks,
  phoneHref,
  phoneLabel,
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative py-[0.25rem] lg:flex lg:min-h-[5.75rem] lg:items-center lg:gap-[2rem] lg:px-[3rem] xl:px-[3.75rem]">
      <div className="flex items-center justify-between gap-3 lg:shrink-0">
        <Link
          aria-label="Saferplast"
          className="block w-full max-w-[11.1875rem] shrink-0 lg:h-[5.75rem] lg:w-[11.1875rem]"
          href="/"
        >
          <Image
            alt="Saferplast"
            className="h-auto w-full object-contain lg:h-[5.75rem] lg:w-[11.1875rem]"
            height={92}
            priority
            src="/images/original/logo.png"
            width={179}
          />
        </Link>

        <button
          aria-controls="mobile-header-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label="Открыть меню"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9375rem] bg-[rgba(250,254,255,0.36)] transition-colors hover:bg-[rgba(250,254,255,0.8)] lg:hidden"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          type="button"
        >
          <Image alt="" aria-hidden="true" height={22} src="/icons/gurger.svg" width={22} />
        </button>
      </div>

      <div className="hidden min-w-0 flex-1 items-center justify-between gap-[2rem] lg:flex">
        <nav aria-label="Основная навигация" className="min-w-0 flex-1">
          <ul className="flex items-center justify-center gap-[2.875rem]">
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

        <div className="flex shrink-0 items-center justify-end gap-[1.25rem]">
          <a
            className="liquid-glass-strong liquid-glass-soft flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] p-[15px] lg:h-[3rem] lg:w-[14.8125rem] lg:flex-nowrap lg:justify-start lg:gap-[0.875rem] lg:px-[1.875rem] lg:py-[0.875rem]"
            href={phoneHref}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="relative z-10"
              height={16}
              src="/icons/phone.svg"
              width={16}
            />
            <span className="relative z-10 hidden whitespace-nowrap font-body text-[1.25rem] font-medium leading-[1] tracking-[0] lg:inline">
              {phoneLabel}
            </span>
          </a>

          <div className="liquid-glass-strong liquid-glass-soft flex h-12 min-w-0 items-center gap-2 rounded-[15px] p-[15px] lg:h-[3rem] lg:w-[14.8125rem] lg:gap-[0.875rem] lg:px-[1.875rem] lg:py-[0.875rem]">
            <Image
              alt=""
              aria-hidden="true"
              className="relative z-10"
              height={16}
              src="/icons/location.svg"
              width={16}
            />
            <span className="relative z-10 truncate whitespace-nowrap font-body text-[0.9375rem] font-medium leading-[1] tracking-[0] sm:text-[1rem] lg:text-[1.25rem]">
              {cityLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-[0.625rem] sm:gap-[0.875rem] lg:hidden">
        <a
          className="liquid-glass-strong liquid-glass-soft flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] p-[15px]"
          href={phoneHref}
        >
          <Image alt="" aria-hidden="true" className="relative z-10" height={16} src="/icons/phone.svg" width={16} />
        </a>

        <div className="liquid-glass-strong liquid-glass-soft flex h-12 min-w-0 items-center gap-2 rounded-[15px] p-[15px]">
          <Image alt="" aria-hidden="true" className="relative z-10" height={16} src="/icons/location.svg" width={16} />
          <span className="relative z-10 truncate whitespace-nowrap font-body text-[0.9375rem] font-medium leading-[1] tracking-[0] sm:text-[1rem]">
            {cityLabel}
          </span>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <nav
          aria-label="Мобильная навигация"
          className="absolute left-0 right-0 top-full z-20 mt-2 rounded-[1rem] border border-[#D9E5EA] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)] lg:hidden"
          id="mobile-header-navigation"
        >
          <ul className="grid gap-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="block whitespace-nowrap font-body text-[1rem] font-normal leading-[1] tracking-[0] text-[#242424] transition-colors hover:text-[#004B62]"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

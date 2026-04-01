"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavigationLink = {
  href: string;
  label: string;
};

type HeaderNavigationColumns = {
  left: NavigationLink[];
  right: NavigationLink[];
};

type SiteHeaderProps = {
  cityLabel: string;
  desktopNavigationColumns: HeaderNavigationColumns;
  mobileNavigationLinks: NavigationLink[];
  phoneHref: string;
  phoneLabel: string;
};

export function SiteHeader({
  cityLabel,
  desktopNavigationColumns,
  mobileNavigationLinks,
  phoneHref,
  phoneLabel,
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopNavigationLinks = [
    desktopNavigationColumns.left[0],
    desktopNavigationColumns.right[0],
    desktopNavigationColumns.left[1],
    desktopNavigationColumns.right[1],
    desktopNavigationColumns.right[2],
  ].filter((link): link is NavigationLink => Boolean(link));

  return (
    <header className="relative py-[0.25rem] lg:grid lg:h-[5.75rem] lg:grid-cols-[minmax(11rem,12rem)_minmax(26rem,1fr)_auto] lg:items-center lg:gap-[1.5rem] lg:pl-[6.25rem] lg:pr-[7.5rem]">
      <div className="flex items-center justify-between gap-3">
        <Link aria-label="Saferplast" className="block w-full max-w-[11.1875rem] shrink-0 lg:h-[5.75rem] lg:w-[11.1875rem]" href="/">
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

      <nav aria-label="Основная навигация" className="hidden justify-center lg:flex">
        <ul className="grid w-[19.8125rem] grid-cols-2 gap-x-6 gap-y-6">
          {desktopNavigationLinks.map((link) => (
            <li key={link.href} className={link.label === "контакты" ? "col-start-2" : undefined}>
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

      <div className="mt-3 flex items-center justify-end gap-[0.625rem] sm:gap-[0.875rem] lg:mt-0 lg:gap-[1.25rem]">
        <a
          className="flex h-[3rem] w-[3rem] shrink-0 items-center justify-center rounded-[0.9375rem] bg-[rgba(250,254,255,0.36)] transition-colors hover:bg-[rgba(250,254,255,0.8)] lg:w-auto lg:flex-nowrap lg:justify-start lg:gap-[0.875rem] lg:px-[1.875rem]"
          href={phoneHref}
        >
          <Image alt="" aria-hidden="true" height={16} src="/icons/phone.svg" width={16} />
          <span className="hidden whitespace-nowrap font-body text-[1.25rem] font-medium leading-[1] tracking-[0] text-[#242424] lg:inline">
            {phoneLabel}
          </span>
        </a>

        <div className="flex h-[3rem] min-w-0 items-center gap-[0.875rem] rounded-[0.9375rem] bg-[rgba(242,244,245,0.4)] px-3 sm:px-4 lg:px-[1.875rem]">
          <Image alt="" aria-hidden="true" height={20} src="/icons/location.svg" width={16} />
          <span className="truncate whitespace-nowrap font-body text-[0.9375rem] font-medium leading-[1] tracking-[0] text-[#242424] sm:text-[1rem] lg:text-[1.25rem]">
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
            {mobileNavigationLinks.map((link) => (
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

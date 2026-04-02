"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

export type NavigationLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  cityLabel: string;
  navigationLinks: NavigationLink[];
  phoneHref: string;
  phoneLabel: string;
};

type DesktopHeaderBrandNavProps = {
  navigationLinks: NavigationLink[];
};

type DesktopHeaderContactActionsProps = {
  cityLabel: string;
  className?: string;
  phoneHref: string;
  phoneLabel: string;
};

function DesktopHeaderActionButton({
  children,
  className,
  href,
  isLink = true,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  isLink?: boolean;
}) {
  const baseClassName =
    "liquid-glass-strong liquid-glass-soft flex h-10 min-w-0 items-center rounded-[15px] px-3 py-3 lg:h-12 lg:px-5 lg:py-[0.875rem]";

  if (isLink && href) {
    return (
      <a className={cn(baseClassName, className)} href={href}>
        {children}
      </a>
    );
  }

  return <div className={cn(baseClassName, className)}>{children}</div>;
}

export function DesktopHeaderBrandNav({ navigationLinks }: DesktopHeaderBrandNavProps) {
  return (
    <div className="flex min-w-0 items-start gap-3 lg:gap-6 xl:gap-[clamp(1.5rem,3vw,3rem)]">
      <Link aria-label="Saferplast" className="block w-[6.75rem] shrink-0 lg:w-[9rem] xl:w-[10.5rem] 2xl:w-[11.1875rem]" href="/">
        <Image
          alt="Saferplast"
          className="h-auto w-full object-contain"
          height={92}
          priority
          src="/images/original/logo.PNG"
          width={179}
        />
      </Link>

      <nav aria-label="Основная навигация" className="ml-auto w-[15rem] shrink-0 pt-2 lg:w-[17rem] xl:w-[19.8125rem] xl:pt-[0.75rem]">
        <ul className="grid h-auto w-full grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 lg:gap-x-5 lg:gap-y-5 xl:h-[3.5rem] xl:gap-x-6 xl:gap-y-6">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="block whitespace-nowrap font-body text-[0.75rem] font-normal leading-[1] tracking-[0] text-[#242424] transition-colors hover:text-[#004B62] lg:text-[0.875rem] xl:text-[clamp(0.8125rem,0.95vw,1rem)]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export function DesktopHeaderContactActions({
  cityLabel,
  className,
  phoneHref,
  phoneLabel,
}: DesktopHeaderContactActionsProps) {
  return (
    <div className={cn("flex flex-wrap items-center justify-end gap-2 lg:gap-3 2xl:gap-5", className)}>
      <DesktopHeaderActionButton
        className="w-[8.75rem] justify-start gap-2 lg:w-[12rem] lg:gap-[0.875rem] xl:w-[clamp(12rem,16vw,14.8125rem)]"
        href={phoneHref}
      >
        <Image alt="" aria-hidden="true" className="relative z-10 shrink-0" height={16} src="/icons/phone.svg" width={16} />
        <span className="relative z-10 whitespace-nowrap font-body text-[0.8125rem] font-medium leading-[1] tracking-[0] lg:text-[1rem] xl:text-[clamp(0.9375rem,1vw,1.25rem)]">
          {phoneLabel}
        </span>
      </DesktopHeaderActionButton>

      <DesktopHeaderActionButton
        className="w-[8.75rem] justify-start gap-2 lg:w-[12rem] lg:gap-[0.875rem] xl:w-[clamp(12rem,16vw,14.8125rem)]"
        isLink={false}
      >
        <Image alt="" aria-hidden="true" className="relative z-10 shrink-0" height={16} src="/icons/location.svg" width={16} />
        <span className="relative z-10 truncate whitespace-nowrap font-body text-[0.8125rem] font-medium leading-[1] tracking-[0] lg:text-[1rem] xl:text-[clamp(0.9375rem,1vw,1.25rem)]">
          {cityLabel}
        </span>
      </DesktopHeaderActionButton>
    </div>
  );
}

export function SiteHeader({ cityLabel, navigationLinks, phoneHref }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative py-1">
      <div className="flex items-center justify-between gap-3">
        <Link aria-label="Saferplast" className="block h-[2.8125rem] w-[5.5rem] shrink-0" href="/">
          <Image
            alt="Saferplast"
            className="h-[2.8125rem] w-[5.5rem] object-contain"
            height={92}
            priority
            src="/images/original/logo.PNG"
            width={179}
          />
        </Link>

        <button
          aria-controls="mobile-header-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label="Открыть меню"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9375rem] bg-[rgba(250,254,255,0.36)] transition-colors hover:bg-[rgba(250,254,255,0.8)]"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          type="button"
        >
          <Image alt="" aria-hidden="true" height={22} src="/icons/gurger.svg" width={22} />
        </button>
      </div>

      <div className="mt-3 flex w-full items-center justify-start gap-[0.625rem] sm:gap-[0.875rem]">
        <a
          aria-label="Позвонить"
          className="liquid-glass-strong liquid-glass-soft flex h-[2.125rem] w-[2.125rem] shrink-0 items-center justify-center rounded-[15px] p-[0.5625rem] sm:h-12 sm:w-12 sm:p-[15px]"
          href={phoneHref}
        >
          <Image alt="" aria-hidden="true" className="relative z-10" height={14} src="/icons/phone.svg" width={14} />
        </a>

        <div className="liquid-glass-strong liquid-glass-soft flex h-[2.125rem] w-[7.5rem] shrink-0 items-center gap-1.5 rounded-[15px] px-[0.5625rem] py-[0.5625rem] sm:h-12 sm:w-auto sm:min-w-0 sm:gap-2 sm:p-[15px]">
          <Image alt="" aria-hidden="true" className="relative z-10 shrink-0" height={14} src="/icons/location.svg" width={14} />
          <span className="relative z-10 truncate whitespace-nowrap font-body text-[0.75rem] font-medium leading-[1] tracking-[0] sm:text-[1rem]">
            {cityLabel}
          </span>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <nav
          aria-label="Мобильная навигация"
          className="absolute left-0 right-0 top-full z-20 mt-2 rounded-[1rem] border border-[#D9E5EA] bg-white p-4 shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
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

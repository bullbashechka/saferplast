"use client";

import { Image } from "@/components/ui/image";
import { useEffect, useRef, useState } from "react";

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

type StickyDesktopHeaderProps = {
  cityLabel: string;
  navigationLinks: NavigationLink[];
  phoneHref: string;
};

const karagandaAddressLabel = "Караганда, Голубые пруды 21";
const karaganda2gisHref =
  "https://2gis.kz/karaganda/search/%D0%9A%D0%B0%D1%80%D0%B0%D0%B3%D0%B0%D0%BD%D0%B4%D0%B0%2C%20%D0%93%D0%BE%D0%BB%D1%83%D0%B1%D1%8B%D0%B5%20%D0%BF%D1%80%D1%83%D0%B4%D1%8B%2021/geo/11822584677057270/73.194027%2C49.835986?m=73.194956%2C49.836587%2F17.75%2Fr%2F-5.72";

function DesktopHeaderActionButton({
  children,
  className,
  href,
  isLink = true,
  openInNewTab = false,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  isLink?: boolean;
  openInNewTab?: boolean;
}) {
  const baseClassName =
    "liquid-glass-strong liquid-glass-soft flex h-10 min-w-0 items-center rounded-[15px] px-3 py-3 md:h-11 md:px-4 md:py-3 min-[1025px]:h-12 min-[1025px]:px-5 min-[1025px]:py-[0.875rem]";

  if (isLink && href) {
    return (
      <a
        className={cn(baseClassName, className)}
        href={href}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        target={openInNewTab ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return <div className={cn(baseClassName, className)}>{children}</div>;
}

export function DesktopHeaderBrandNav({ navigationLinks }: DesktopHeaderBrandNavProps) {
  return (
    <div className="flex min-w-0 items-center gap-2.5 md:gap-5 min-[1025px]:gap-[3rem]">
      <a aria-label="Saferplast" className="block w-[6rem] shrink-0 md:w-[9rem] min-[1025px]:w-[11.1875rem]" href="/">
        <Image
          alt="Saferplast"
          className="h-auto w-full object-contain"
          height={92}
          priority
          src="/images/versioned/logo.v2.webp"
          unoptimized
          width={179}
        />
      </a>

      <nav
        aria-label="Основная навигация"
        className="ml-auto mr-4 w-[10.25rem] shrink-0 pt-1 md:mr-0 md:w-[16rem] md:pt-[0.5rem] min-[1025px]:w-[19.8125rem] min-[1025px]:pt-[0.75rem]"
      >
        <ul className="grid h-auto w-full grid-cols-2 grid-rows-2 gap-x-2.5 gap-y-2.5 md:gap-x-4 md:gap-y-4 min-[1025px]:h-[3.5rem] min-[1025px]:gap-x-16 min-[1025px]:gap-y-6">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="block whitespace-nowrap font-body text-[0.6875rem] font-normal leading-[1] tracking-[0] text-[#004B62] transition-colors hover:text-[#242424] md:text-[0.875rem] min-[1025px]:text-[1rem]"
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
    <div className={cn("flex flex-wrap items-center justify-end gap-2 md:gap-3 min-[1025px]:gap-5", className)}>
      <DesktopHeaderActionButton
        className="w-[8.75rem] justify-start gap-2 md:w-[12rem] min-[1025px]:w-[14.8125rem]"
        href={phoneHref}
        openInNewTab
      >
        <Image alt="" aria-hidden="true" className="relative z-10 shrink-0" height={16} src="/icons/phone.svg" width={16} />
        <span className="relative z-10 whitespace-nowrap font-body text-[0.8125rem] font-medium leading-[1] tracking-[0] md:text-[1rem] min-[1025px]:text-[1.25rem]">
          {phoneLabel}
        </span>
      </DesktopHeaderActionButton>

      <DesktopHeaderActionButton
        className="w-[8.75rem] justify-start gap-2 md:w-[12rem] min-[1025px]:w-[14.8125rem]"
        href={karaganda2gisHref}
        openInNewTab
      >
        <Image alt="" aria-hidden="true" className="relative z-10 shrink-0" height={16} src="/icons/location.svg" width={16} />
        <span className="relative z-10 truncate whitespace-nowrap font-body text-[0.8125rem] font-medium leading-[1] tracking-[0] md:text-[1rem] min-[1025px]:text-[1.25rem]">
          {cityLabel}
        </span>
      </DesktopHeaderActionButton>
    </div>
  );
}

export function StickyDesktopHeader({
  cityLabel,
  navigationLinks,
  phoneHref,
}: StickyDesktopHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;

    const updateStickyHeaderState = () => {
      const viewportTop = Math.max(window.visualViewport?.offsetTop ?? 0, 0);
      root.style.setProperty("--sticky-header-top", `${Math.round(viewportTop)}px`);
      setIsVisible(window.scrollY > 8);
    };

    const scheduleViewportTopUpdate = () => {
      if (rafId) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateStickyHeaderState();
      });
    };

    updateStickyHeaderState();

    const visualViewport = window.visualViewport;
    window.addEventListener("scroll", scheduleViewportTopUpdate, { passive: true });
    window.addEventListener("resize", scheduleViewportTopUpdate);
    window.addEventListener("orientationchange", scheduleViewportTopUpdate);
    visualViewport?.addEventListener("resize", scheduleViewportTopUpdate);
    visualViewport?.addEventListener("scroll", scheduleViewportTopUpdate);

    const resizeObserver = new ResizeObserver(scheduleViewportTopUpdate);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", scheduleViewportTopUpdate);
      window.removeEventListener("resize", scheduleViewportTopUpdate);
      window.removeEventListener("orientationchange", scheduleViewportTopUpdate);
      visualViewport?.removeEventListener("resize", scheduleViewportTopUpdate);
      visualViewport?.removeEventListener("scroll", scheduleViewportTopUpdate);
      resizeObserver.disconnect();
      root.style.setProperty("--sticky-header-top", "0px");
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky z-40 hidden h-0 transition-all duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] md:block",
        isVisible
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-1 opacity-0",
      )}
      aria-hidden={!isVisible}
      ref={containerRef}
      style={{ top: "var(--sticky-header-top, 0px)" }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pt-3 md:px-4 min-[1025px]:px-[20px] min-[1025px]:pl-[21px]">
        <div className="liquid-glass-strong liquid-glass-soft flex h-[4.25rem] items-center justify-between overflow-hidden rounded-[1.25rem] border-[#88a8b3] bg-[rgba(164,194,205,0.9)] px-3 md:px-4 min-[1025px]:h-[4.5rem] min-[1025px]:px-6">
          <a aria-label="Saferplast" className="block w-[5.75rem] shrink-0 min-[1025px]:w-[8rem]" href="/">
            <Image
              alt="Saferplast"
              className="h-auto w-full object-contain"
              height={92}
              src="/images/versioned/logo.v2.webp"
              unoptimized
              width={179}
            />
          </a>

          <nav aria-label="Основная навигация" className="mx-2 min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max items-center justify-start gap-3 pr-1 min-[1025px]:justify-center min-[1025px]:gap-16">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="block whitespace-nowrap font-body text-[0.75rem] font-normal leading-[1] tracking-[0] text-[#004B62] transition-colors hover:text-[#242424] min-[1025px]:text-[1rem]"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 min-[1025px]:gap-3">
            <a
              aria-label="Позвонить"
              className="liquid-glass-strong liquid-glass-soft flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.875rem] min-[1025px]:h-10 min-[1025px]:w-10"
              href={phoneHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image alt="" aria-hidden="true" height={16} src="/icons/phone.svg" width={16} />
            </a>

            <a
              aria-label={cityLabel}
              className="liquid-glass-strong liquid-glass-soft flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.875rem] min-[1025px]:h-10 min-[1025px]:w-10"
              href={karaganda2gisHref}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image alt="" aria-hidden="true" height={16} src="/icons/location.svg" width={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ cityLabel, navigationLinks, phoneHref }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative py-1">
      <div className="flex items-center justify-between gap-3">
        <a aria-label="Saferplast" className="block h-[2.8125rem] w-[clamp(5.5rem,4.9286rem+2.8571vw,6.4375rem)] shrink-0" href="/">
          <Image
            alt="Saferplast"
            className="h-[2.8125rem] w-[clamp(5.5rem,4.9286rem+2.8571vw,6.4375rem)] object-contain"
            height={92}
            priority
            src="/images/versioned/logo.v2.webp"
            unoptimized
            width={179}
          />
        </a>

        <button
          aria-controls="mobile-header-navigation"
          aria-expanded={isMobileMenuOpen}
          aria-label="Открыть меню"
          className="flex h-[clamp(3rem,2.8095rem+0.9524vw,3.3125rem)] w-[clamp(3rem,2.8095rem+0.9524vw,3.3125rem)] shrink-0 items-center justify-center rounded-[0.9375rem] bg-[rgba(250,254,255,0.36)] transition-colors hover:bg-[rgba(250,254,255,0.8)]"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          type="button"
        >
          <Image alt="" aria-hidden="true" height={22} src="/icons/gurger.svg" width={22} />
        </button>
      </div>

      <div className="mt-3 flex w-full items-center justify-start gap-[0.625rem]">
        <a
          aria-label="Позвонить"
          className="liquid-glass-strong liquid-glass-soft flex h-[clamp(2.125rem,1.9345rem+0.9524vw,2.4375rem)] w-[clamp(2.125rem,1.9345rem+0.9524vw,2.4375rem)] shrink-0 items-center justify-center rounded-[15px] p-[0.5625rem]"
          href={phoneHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt="" aria-hidden="true" className="relative z-10" height={14} src="/icons/phone.svg" width={14} />
        </a>

        <a
          aria-label={karagandaAddressLabel}
          className="liquid-glass-strong liquid-glass-soft flex h-[clamp(2.125rem,1.9345rem+0.9524vw,2.4375rem)] w-[clamp(7.5rem,6.3571rem+5.7143vw,9.375rem)] shrink-0 items-center gap-1.5 rounded-[15px] px-[0.5625rem] py-[0.5625rem]"
          href={karaganda2gisHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt="" aria-hidden="true" className="relative z-10 shrink-0" height={14} src="/icons/location.svg" width={14} />
          <span className="relative z-10 truncate whitespace-nowrap font-body text-[0.75rem] font-medium leading-[1] tracking-[0]">
            {cityLabel}
          </span>
        </a>
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
                  className="block whitespace-nowrap font-body text-[1rem] font-normal leading-[1] tracking-[0] text-[#004B62] transition-colors hover:text-[#242424]"
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

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
  return (
    <header className="flex h-[5.75rem] flex-wrap items-center justify-between gap-[1rem] py-[0.25rem] lg:flex-nowrap lg:gap-[1.5rem] lg:px-[7.5rem]">
      <Link aria-label="Saferplast" className="block w-full max-w-[11.1875rem] shrink-0" href="/">
        <Image
          alt="Saferplast"
          className="h-auto w-full object-contain"
          height={92}
          priority
          src="/images/webp/logo.webp"
          width={179}
        />
      </Link>

      <nav aria-label="Основная навигация" className="hidden flex-1 justify-center lg:flex">
        <ul className="flex items-center gap-[1.5rem]">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="whitespace-nowrap font-body text-[1rem] font-normal leading-[1] tracking-[0] text-ink transition-colors hover:text-brand-700"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-1 items-center justify-end gap-[0.75rem] sm:gap-[1rem] lg:flex-nowrap lg:gap-[1.25rem]">
        <a
          className="flex h-[3rem] flex-nowrap items-center gap-[0.875rem] rounded-[0.9375rem] border border-[#E4EAED] bg-white px-[1rem] font-body text-[1rem] font-medium leading-[1] tracking-[0] text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-colors hover:bg-[#F9FCFD] sm:px-[1.375rem] sm:text-[1.125rem] lg:px-[1.875rem] lg:text-[1.25rem]"
          href={phoneHref}
        >
          <Image alt="" aria-hidden="true" height={16} src="/icons/phone.svg" width={16} />
          <span className="whitespace-nowrap">{phoneLabel}</span>
        </a>

        <div className="flex h-[3rem] flex-nowrap items-center gap-[0.875rem] rounded-[0.9375rem] border border-[#E4EAED] bg-white px-[1rem] font-body text-[0.9375rem] font-medium leading-[1] tracking-[0] text-black shadow-[0_2px_10px_rgba(0,0,0,0.03)] sm:px-[1.375rem] sm:text-[1rem] lg:px-[1.875rem] lg:text-[1.25rem]">
          <Image alt="" aria-hidden="true" height={20} src="/icons/location.svg" width={16} />
          <span className="whitespace-nowrap">{cityLabel}</span>
        </div>

      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

type NavigationLink = {
  href: string;
  label: string;
};

type SiteHeaderProps = {
  navigationLinks: NavigationLink[];
};

export function SiteHeader({ navigationLinks }: SiteHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-[2rem] py-[0.25rem]">
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

      <div className="hidden items-center gap-[1rem] lg:flex">
        <a
          className="flex h-[3rem] items-center gap-[0.875rem] rounded-[0.9375rem] bg-surface/90 px-[1.875rem] text-[1.25rem] font-medium leading-[1] text-black backdrop-blur-[1.5px]"
          href="tel:+77079999999"
        >
          <Image alt="" aria-hidden="true" height={16} src="/icons/phone.svg" width={16} />
          <span>+77079999999</span>
        </a>

        <div className="flex h-[3rem] items-center gap-[0.875rem] rounded-[0.9375rem] bg-muted/90 px-[1.875rem] text-[1.25rem] font-medium leading-[1] text-black backdrop-blur-[1.5px]">
          <Image alt="" aria-hidden="true" height={20} src="/icons/location.svg" width={16} />
          <span>г. Караганда</span>
        </div>
      </div>
    </header>
  );
}

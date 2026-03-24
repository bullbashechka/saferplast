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
    <header className="flex items-start justify-between px-[86px] pb-[28px] pt-3">
      <Link aria-label="Saferplast" className="shrink-0" href="/">
        <Image
          alt="Saferplast"
          className="block h-[92px] w-[179px] object-contain"
          height={92}
          priority
          src="/images/logo.png"
          width={179}
        />
      </Link>

      <nav aria-label="Основная навигация" className="pt-[20px]">
        <ul className="flex items-center gap-6">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="text-[16px] font-normal leading-none text-ink transition-colors hover:text-brand-700"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-5 pt-[22px]">
        <a
          className="flex h-12 items-center gap-3 rounded-[15px] bg-surface px-[30px] text-[20px] font-medium leading-none text-black shadow-[0_8px_20px_rgba(0,75,98,0.06)]"
          href="tel:+77079999999"
        >
          <Image alt="" aria-hidden="true" height={16} src="/icons/phone.svg" width={16} />
          <span>+77079999999</span>
        </a>

        <div className="flex h-12 items-center gap-3 rounded-[15px] bg-muted px-[30px] text-[20px] font-medium leading-none text-black shadow-[0_8px_20px_rgba(36,36,36,0.04)]">
          <Image alt="" aria-hidden="true" height={20} src="/icons/location.svg" width={16} />
          <span>г. Караганда</span>
        </div>
      </div>
    </header>
  );
}

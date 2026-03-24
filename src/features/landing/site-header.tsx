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
    <header className="relative h-[92px] w-full">
      <Link aria-label="Saferplast" className="absolute left-[106px] top-0 block" href="/">
        <Image
          alt="Saferplast"
          className="block h-[92px] w-[179px] object-contain"
          height={92}
          priority
          src="/images/logo.png"
          width={179}
        />
      </Link>

      <nav aria-label="Основная навигация" className="absolute left-[323px] top-[27px]">
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

      <div className="absolute left-[887px] top-[19px] flex items-center gap-5">
        <a
          className="flex h-12 w-[237px] items-center gap-[14px] rounded-[15px] bg-surface/90 px-[30px] py-[14px] text-[20px] font-medium leading-none text-black backdrop-blur-[1.5px]"
          href="tel:+77079999999"
        >
          <Image alt="" aria-hidden="true" height={16} src="/icons/phone.svg" width={16} />
          <span>+77079999999</span>
        </a>

        <div className="flex h-12 w-[221px] items-center gap-[14px] rounded-[15px] bg-muted/90 px-[30px] py-[14px] text-[20px] font-medium leading-none text-black backdrop-blur-[1.5px]">
          <Image alt="" aria-hidden="true" height={20} src="/icons/location.svg" width={16} />
          <span>г. Караганда</span>
        </div>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Writing', href: '/posts' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] h-[68px] w-full border-b border-border-color bg-[var(--header-background)] backdrop-blur-xl">
      <nav aria-label="주요 메뉴" className="mx-auto flex h-full max-w-[1180px] items-center justify-between px-5 lg:px-8">
        <Link href="/" className="font-semibold text-lg text-foreground link-hover">
          me0w2en.log
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold transition-colors sm:px-4 ${
                  isActive
                    ? 'bg-background-tertiary text-foreground'
                    : 'text-text-secondary hover:bg-background-tertiary hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

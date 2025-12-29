'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Posts', href: '/posts' },
  { name: 'Tags', href: '/tags' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[100] w-full h-[60px] bg-white dark:bg-[#1a1a1a] border-b border-border-color">
      <nav className="h-full max-w-[1024px] mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg text-foreground link-hover">
          me0w2en.log
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[16px] font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-foreground font-semibold'
                    : 'text-text-secondary hover:text-foreground'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="block h-[2px] bg-accent-blue mt-1 -mb-[2px]" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

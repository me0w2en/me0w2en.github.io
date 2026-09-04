import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#2b3641] bg-[#0a0e12] text-[#f4f7fa]">
      <div className="mx-auto max-w-[1180px] px-5 py-5 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <div className="flex min-w-0 flex-col gap-1 text-sm text-[#b7c1cb] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <p>© {new Date().getFullYear()} me0w2en</p>
            <span className="hidden text-[#596673] sm:inline" aria-hidden="true">·</span>
            <p>Digital Forensics · Incident Response · Security Research</p>
          </div>

          <nav className="flex flex-wrap items-center gap-1" aria-label="연락처">
            <Link href="mailto:sjna@outlook.kr" className="inline-flex min-h-11 items-center rounded-full px-3 font-semibold transition-colors hover:text-[#69b7ff]">
              Email
            </Link>
            <Link href="https://github.com/me0w2en" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-semibold text-[#b7c1cb] transition-colors hover:text-[#69b7ff]">
              GitHub <span aria-hidden="true">↗</span><span className="sr-only">(새 창)</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sojin-na" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-semibold text-[#b7c1cb] transition-colors hover:text-[#69b7ff]">
              LinkedIn <span aria-hidden="true">↗</span><span className="sr-only">(새 창)</span>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

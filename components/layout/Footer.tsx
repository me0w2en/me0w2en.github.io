import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] dark:bg-[#1a1a1a] border-t border-border-color">
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Links */}
          <div className="flex items-center gap-6 text-[14px]">
            <Link
              href="https://github.com/me0w2en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="mailto:sjna@outlook.kr"
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              Email
            </Link>
            <Link
              href="/about"
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              About
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-[14px] text-text-muted">
            © {new Date().getFullYear()} me0w2en. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

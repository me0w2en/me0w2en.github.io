import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import '@/styles/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://me0w2en.github.io'),
  title: 'me0w2en - Digital Forensics Portfolio',
  description: '디지털 포렌식, 침해사고 대응, AI 기반 분석 자동화 프로젝트와 기술 기록',
  authors: [{ name: 'me0w2en', url: 'https://me0w2en.github.io' }],
  creator: 'me0w2en',
  keywords: ['me0w2en', 'Digital Forensics', 'Incident Response', 'Security Research', 'Agentic AI', 'Portfolio'],
  openGraph: {
    title: 'me0w2en | Digital Forensics & Incident Response',
    description: 'DFIR, 보안 연구, AI 기반 분석 자동화 프로젝트와 기술 기록',
    url: 'https://me0w2en.github.io',
    siteName: 'me0w2en.log',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-sojin-na.png',
        width: 1200,
        height: 630,
        alt: 'Digital Forensics, Incident Response, AI Analysis Automation portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'me0w2en | Digital Forensics & Incident Response',
    description: 'DFIR, 보안 연구, AI 기반 분석 자동화 프로젝트와 기술 기록',
    images: ['/og-sojin-na.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={notoSansKR.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="site-shell" className="flex min-h-screen flex-col">
            <a href="#main-content" className="skip-link">본문 바로가기</a>
            <Header />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getAllSeriesWithInfo } from '@/lib/posts';
import { PostCard } from '@/components/post/PostCard';

export const metadata: Metadata = {
  title: 'me0w2en | Digital Forensics & Incident Response',
  description: '디지털 포렌식, 침해사고 대응, AI 기반 분석 자동화 프로젝트와 기록',
};

export default function Home() {
  const allPosts = getAllPosts();
  const allSeries = getAllSeriesWithInfo();

  return (
    <div className="min-h-screen bg-background">
      <section aria-label="블로그 배너">
        <div className="mx-auto max-w-[1024px] px-5 py-6">
          <div className="overflow-hidden rounded-xl bg-background-secondary">
            <Image
              src="/images/banner.png"
              alt="me0w2en 블로그 배너"
              width={3275}
              height={680}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10" aria-labelledby="recent-posts-title">
        <div className="mx-auto max-w-[1024px] px-5">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="min-w-0 flex-1">
              <div className="mb-6 flex items-center justify-between">
                <h1 id="recent-posts-title" className="text-[20px] font-semibold text-foreground">
                  최근 글
                </h1>
                <Link
                  href="/posts"
                  className="text-[14px] text-text-secondary transition-colors hover:text-accent-blue"
                >
                  전체보기 <span aria-hidden="true">→</span>
                </Link>
              </div>

              {allPosts.length === 0 ? (
                <div className="py-20 text-center text-text-muted">
                  아직 작성된 글이 없습니다.
                </div>
              ) : (
                <div className="space-y-4">
                  {allPosts.map((post, index) => (
                    <div
                      key={post.slug}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <PostCard post={post} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {allSeries.length > 0 && (
              <aside className="w-full shrink-0 lg:w-[280px]" aria-labelledby="series-title">
                <div className="lg:sticky lg:top-[80px]">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 id="series-title" className="text-[16px] font-semibold text-foreground">
                      시리즈
                    </h2>
                    <Link
                      href="/series"
                      className="text-[13px] text-text-secondary transition-colors hover:text-accent-blue"
                    >
                      전체보기 <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {allSeries.map((series, index) => (
                      <Link
                        key={series.name}
                        href={`/series/${encodeURIComponent(series.name)}`}
                        className="group block rounded-lg border border-border-color bg-background-secondary p-4 transition-all duration-200 hover:border-accent-blue animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <h3 className="text-[14px] font-medium text-foreground transition-colors group-hover:text-accent-blue">
                          {series.name}
                        </h3>
                        <p className="mt-1 text-[12px] text-text-muted">
                          {series.count}개의 포스트
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

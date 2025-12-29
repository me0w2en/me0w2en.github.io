import { getAllPosts, getAllSeriesWithInfo } from '@/lib/posts';
import { PostCard } from '@/components/post/PostCard';
import Link from 'next/link';

export default function Home() {
  const allPosts = getAllPosts();
  const allSeries = getAllSeriesWithInfo();

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <section>
        <div className="max-w-[1024px] mx-auto px-5 py-6">
          <div className="rounded-xl overflow-hidden bg-background-secondary">
            <img
              src="/images/banner.png"
              alt="Banner"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: '7/1' }}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="max-w-[1024px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Posts Section - Left */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[20px] font-semibold text-foreground">
                  최근 글
                </h2>
                <Link
                  href="/posts"
                  className="text-[14px] text-text-secondary hover:text-accent-blue transition-colors"
                >
                  전체보기 →
                </Link>
              </div>

              {allPosts.length === 0 ? (
                <div className="text-center py-20 text-text-muted">
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

            {/* Series Section - Right Sidebar */}
            {allSeries.length > 0 && (
              <aside className="w-full lg:w-[280px] flex-shrink-0">
                <div className="lg:sticky lg:top-[80px]">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[16px] font-semibold text-foreground">
                      시리즈
                    </h2>
                    <Link
                      href="/series"
                      className="text-[13px] text-text-secondary hover:text-accent-blue transition-colors"
                    >
                      전체보기 →
                    </Link>
                  </div>

                  <div className="space-y-3">
                    {allSeries.map((series, index) => (
                      <Link
                        key={series.name}
                        href={`/series/${encodeURIComponent(series.name)}`}
                        className="group block p-4 rounded-lg bg-background-secondary border border-border-color hover:border-accent-blue transition-all duration-200 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <h3 className="font-medium text-[14px] text-foreground group-hover:text-accent-blue transition-colors">
                          {series.name}
                        </h3>
                        <p className="text-[12px] text-text-muted mt-1">
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

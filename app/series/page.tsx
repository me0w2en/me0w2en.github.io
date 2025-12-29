import { getAllSeriesWithInfo } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Series | me0w2en',
  description: '모든 시리즈 목록',
};

export default function SeriesPage() {
  const allSeries = getAllSeriesWithInfo();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-foreground mb-2">
            Series
          </h1>
          <p className="text-[16px] text-text-secondary">
            주제별로 모아보는 시리즈 ({allSeries.length}개)
          </p>
        </div>

        {allSeries.length === 0 ? (
          <div className="text-center py-12 text-text-muted">
            시리즈가 없습니다.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allSeries.map((series, index) => (
              <Link
                key={series.name}
                href={`/series/${encodeURIComponent(series.name)}`}
                className="group p-5 rounded-xl bg-background-secondary border border-border-color hover:border-accent-blue hover:shadow-md transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-accent-blue transition-colors">
                      {series.name}
                    </h3>
                    <p className="text-[13px] text-text-muted mt-1">
                      {series.count}개의 포스트
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

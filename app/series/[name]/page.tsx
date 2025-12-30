import { getPostsBySeries, getAllSeries } from '@/lib/posts';
import { PostCard } from '@/components/post/PostCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  const series = getAllSeries();
  // 시리즈가 없으면 빈 배열 반환 시 빌드 오류 발생하므로 placeholder 반환
  if (series.length === 0) {
    return [{ name: '__placeholder__' }];
  }
  return series.map((name) => ({
    name: encodeURIComponent(name),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  return {
    title: `${decodedName} | me0w2en`,
    description: `${decodedName} 시리즈의 모든 포스트`,
  };
}

export default async function SeriesDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);
  const posts = getPostsBySeries(decodedName);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/series"
            className="inline-flex items-center gap-1 text-[14px] text-text-secondary hover:text-accent-blue transition-colors mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            시리즈 목록
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h1 className="text-[28px] font-bold text-foreground">
              {decodedName}
            </h1>
          </div>
          <p className="text-[16px] text-text-secondary">
            {posts.length}개의 포스트
          </p>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

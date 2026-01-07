import { getPostsByCategory } from '@/lib/posts';
import { PostList } from '@/components/post/PostList';
import { Category } from '@/lib/types';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { category: 'mogakco' },
    { category: 'forensics' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryLabel = category === 'mogakco' ? '모각코' : 'Forensics / IR';
  return {
    title: `${categoryLabel} | me0w2en`,
    description: `${categoryLabel} 카테고리의 모든 포스트`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryParam } = await params;
  const category = categoryParam as Category;

  if (category !== 'mogakco' && category !== 'forensics') {
    notFound();
  }

  const posts = getPostsByCategory(category);
  const categoryLabel = category === 'mogakco' ? '모각코' : 'Forensics / IR';
  const categoryDesc = category === 'mogakco'
    ? '모여서 각자 코딩하기 - 학습 및 프로젝트 기록'
    : '디지털 포렌식, 침해사고 대응(IR), 증거 분석에 관한 기록';

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-foreground mb-2">
            {categoryLabel}
          </h1>
          <p className="text-[16px] text-text-secondary">
            {categoryDesc} ({posts.length}개)
          </p>
        </div>

        <PostList posts={posts} emptyMessage={`${categoryLabel} 카테고리에 포스트가 없습니다.`} />
      </div>
    </div>
  );
}

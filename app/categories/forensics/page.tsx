import { getPostsByCategory } from '@/lib/posts';
import { PostList } from '@/components/post/PostList';

export const metadata = {
  title: 'Forensics / IR | me0w2en',
  description: '디지털 포렌식, 침해사고 대응(IR), 증거 분석에 관한 기록',
};

export default function ForensicsCategoryPage() {
  const posts = getPostsByCategory('forensics');

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1024px] px-5 py-10">
        <div className="mb-8">
          <h1 className="mb-2 text-[28px] font-bold text-foreground">
            Forensics / IR
          </h1>
          <p className="text-[16px] text-text-secondary">
            디지털 포렌식, 침해사고 대응(IR), 증거 분석에 관한 기록 ({posts.length}개)
          </p>
        </div>

        <PostList posts={posts} emptyMessage="Forensics / IR 카테고리에 포스트가 없습니다." />
      </div>
    </div>
  );
}

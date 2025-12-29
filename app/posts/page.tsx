import { getAllPosts } from '@/lib/posts';
import { CategoryFilter } from '@/components/post/CategoryFilter';

export const metadata = {
  title: 'All Posts | me0w2en',
  description: '모든 포스트 목록',
};

export default function AllPostsPage() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-foreground mb-2">
            All Posts
          </h1>
          <p className="text-[16px] text-text-secondary">
            모든 학습 기록
          </p>
        </div>

        <CategoryFilter posts={allPosts} />
      </div>
    </div>
  );
}

import { getPostsByTag, getAllTags } from '@/lib/posts';
import { PostList } from '@/components/post/PostList';

export const dynamicParams = false;

export async function generateStaticParams() {
  const tags = getAllTags();
  // 태그가 없으면 빈 배열 반환 시 빌드 오류 발생하므로 placeholder 반환
  if (tags.length === 0) {
    return [{ tag: '__placeholder__' }];
  }
  return tags.map(({ tag }) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  return {
    title: `#${tag} | me0w2en`,
    description: `${tag} 태그가 포함된 모든 포스트`,
  };
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1024px] px-5 py-10">
        <div className="mb-8">
          <h1 className="mb-2 text-[28px] font-bold text-foreground">
            #{tag}
          </h1>
          <p className="text-[16px] text-text-secondary">
            이 태그가 포함된 포스트 ({posts.length}개)
          </p>
        </div>

        <PostList posts={posts} emptyMessage={`"${tag}" 태그가 포함된 포스트가 없습니다.`} />
      </div>
    </div>
  );
}

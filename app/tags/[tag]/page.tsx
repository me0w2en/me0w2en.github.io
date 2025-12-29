import { getPostsByTag, getAllTags } from '@/lib/posts';
import { PostList } from '@/components/post/PostList';

export async function generateStaticParams() {
  const tags = getAllTags();
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            #{tag}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            이 태그가 포함된 포스트 ({posts.length}개)
          </p>
        </div>

        <PostList posts={posts} emptyMessage={`"${tag}" 태그가 포함된 포스트가 없습니다.`} />
      </div>
    </div>
  );
}

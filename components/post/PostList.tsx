import { PostMeta } from '@/lib/types';
import { PostCard } from './PostCard';

interface PostListProps {
  posts: PostMeta[];
  emptyMessage?: string;
}

export function PostList({ posts, emptyMessage = '포스트가 없습니다.' }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12 text-text-muted">
        {emptyMessage}
      </div>
    );
  }

  return (
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
  );
}

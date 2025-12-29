import { getAllTags } from '@/lib/posts';
import { TagBadge } from '@/components/ui/TagBadge';

export const metadata = {
  title: 'Tags | me0w2en',
  description: '모든 태그 목록',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1024px] mx-auto px-5 py-10">
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-foreground mb-2">
            Tags
          </h1>
          <p className="text-[16px] text-text-secondary">
            모든 포스트의 태그를 확인하세요 ({tags.length}개)
          </p>
        </div>

        {tags.length === 0 ? (
          <div className="text-center py-12 text-text-muted">
            태그가 없습니다.
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {tags.map(({ tag, count }) => (
              <TagBadge key={tag} tag={tag} count={count} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import Link from 'next/link';
import { PostMeta } from '@/lib/types';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface PostCardProps {
  post: PostMeta;
}

export function PostCard({ post }: PostCardProps) {
  const postUrl = post.category === 'mogakco'
    ? `/posts/${post.slug}`
    : `/forensics/${post.slug}`;

  return (
    <Link href={postUrl} className="block article-card group">
      <article className="flex items-start justify-between gap-6">
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          <h3 className="text-[20px] font-semibold text-foreground mb-2 group-hover:text-accent-blue transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          {/* Summary */}
          {post.summary && (
            <p className="text-[16px] text-text-secondary leading-[1.5] mb-3 line-clamp-2">
              {post.summary}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-2 text-[14px] text-text-muted">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'yyyy.MM.dd', { locale: ko })}
            </time>
            {post.tags.length > 0 && (
              <>
                <span>·</span>
                <span>{post.tags[0]}</span>
              </>
            )}
          </div>
        </div>

        {/* Thumbnail */}
        {post.image ? (
          <div className="w-[120px] h-[80px] sm:w-[160px] sm:h-[100px] rounded-lg overflow-hidden bg-background-secondary flex-shrink-0">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-[120px] h-[80px] sm:w-[160px] sm:h-[100px] rounded-lg bg-background-secondary flex-shrink-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        )}
      </article>
    </Link>
  );
}

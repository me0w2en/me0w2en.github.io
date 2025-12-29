import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import { TagBadge } from '@/components/ui/TagBadge';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts
    .filter((post) => post.category === 'forensics')
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'forensics');

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | me0w2en`,
    description: post.summary || post.title,
    keywords: post.tags,
  };
}

export default async function ForensicsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'forensics');

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border-color">
        <div className="max-w-[1024px] mx-auto px-5 py-10">
          {/* Category & Series */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/categories/forensics"
              className="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors"
            >
              Forensics
            </Link>
            {post.series && (
              <Link
                href={`/series/${post.series}`}
                className="inline-flex items-center px-3 py-1 rounded-full text-[13px] font-medium bg-background-secondary text-text-secondary hover:bg-background-tertiary transition-colors"
              >
                {post.series}
              </Link>
            )}
          </div>

          {/* Title */}
          <h1 className="text-[28px] md:text-[32px] font-bold text-foreground mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-[14px] text-text-muted mb-6">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'PPP', { locale: ko })}
            </time>
            {post.readingTime && (
              <span>{post.readingTime}분 읽기</span>
            )}
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <TagBadge key={tag} tag={tag} clickable={false} />
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <article className="max-w-[1024px] mx-auto px-5 py-10">
        <div
          className="prose prose-base dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* Footer Navigation */}
      <footer className="border-t border-border-color">
        <div className="max-w-[1024px] mx-auto px-5 py-8">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            모든 포스트
          </Link>
        </div>
      </footer>
    </div>
  );
}

import Link from 'next/link';

interface TagBadgeProps {
  tag: string;
  count?: number;
  clickable?: boolean;
}

export function TagBadge({ tag, count, clickable = true }: TagBadgeProps) {
  const className = `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-background-secondary text-text-secondary ${
    clickable ? 'hover:bg-accent-blue hover:text-white transition-all duration-200' : ''
  }`;

  if (!clickable) {
    return (
      <span className={className}>
        #{tag}
        {count !== undefined && (
          <span className="ml-1 opacity-70">({count})</span>
        )}
      </span>
    );
  }

  return (
    <Link href={`/tags/${tag}`} className={className}>
      #{tag}
      {count !== undefined && (
        <span className="ml-1 opacity-70">({count})</span>
      )}
    </Link>
  );
}

'use client';

import { useState } from 'react';
import { PostMeta, Category } from '@/lib/types';
import { PostList } from './PostList';

interface CategoryFilterProps {
  posts: PostMeta[];
}

export function CategoryFilter({ posts }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | Category>('all');

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const categories = [
    { id: 'all' as const, label: 'All', count: posts.length },
    { id: 'forensics' as const, label: 'Forensics', count: posts.filter(p => p.category === 'forensics').length },
    { id: 'mogakco' as const, label: '모각코', count: posts.filter(p => p.category === 'mogakco').length },
  ];

  return (
    <>
      {/* 카테고리 필터 */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-foreground text-background'
                : 'bg-background-secondary text-text-secondary hover:bg-background-tertiary'
            }`}
          >
            {category.label}
            <span className="ml-1.5 opacity-70">({category.count})</span>
          </button>
        ))}
      </div>

      <div className="mb-4 text-[14px] text-text-muted">
        {filteredPosts.length}개의 포스트
      </div>

      <PostList posts={filteredPosts} />
    </>
  );
}

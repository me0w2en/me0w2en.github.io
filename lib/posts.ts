import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostMeta, Category } from './types';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * 모든 포스트를 가져옵니다 (draft 제외)
 */
export function getAllPosts(): PostMeta[] {
  const categories: Category[] = ['mogakco', 'forensics'];
  const allPosts: PostMeta[] = [];

  categories.forEach((category) => {
    const categoryDir = path.join(contentDirectory, category);

    if (!fs.existsSync(categoryDir)) {
      return;
    }

    const files = fs.readdirSync(categoryDir);

    files.forEach((filename) => {
      if (filename.endsWith('.md') || filename.endsWith('.mdx')) {
        const slug = filename.replace(/\.mdx?$/, '');
        const fullPath = path.join(categoryDir, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        // draft는 제외
        if (data.draft) {
          return;
        }

        allPosts.push({
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          category: category,
          tags: data.tags || [],
          series: data.series,
          summary: data.summary,
          readingTime: data.readingTime,
          draft: data.draft || false,
          image: data.image,
        });
      }
    });
  });

  // 날짜 기준 내림차순 정렬, 날짜가 같으면 파일명(slug) 기준 내림차순 정렬
  return allPosts.sort((a, b) => {
    const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
    if (dateCompare !== 0) {
      return dateCompare;
    }
    return b.slug.localeCompare(a.slug);
  });
}

/**
 * 특정 slug의 포스트를 가져옵니다
 */
export function getPostBySlug(slug: string, category: Category): Post | null {
  const categoryDir = path.join(contentDirectory, category);
  const possibleExtensions = ['.md', '.mdx'];

  for (const ext of possibleExtensions) {
    const fullPath = path.join(categoryDir, `${slug}${ext}`);

    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        category,
        tags: data.tags || [],
        series: data.series,
        summary: data.summary,
        readingTime: data.readingTime,
        draft: data.draft || false,
        image: data.image,
        content,
      };
    }
  }

  return null;
}

/**
 * 카테고리별 포스트를 가져옵니다
 */
export function getPostsByCategory(category: Category): PostMeta[] {
  return getAllPosts().filter((post) => post.category === category);
}

/**
 * 특정 태그를 포함한 포스트를 가져옵니다
 */
export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

/**
 * 특정 시리즈의 포스트를 가져옵니다
 */
export function getPostsBySeries(series: string): PostMeta[] {
  return getAllPosts().filter((post) => post.series === series);
}

/**
 * 모든 태그와 사용 횟수를 가져옵니다
 */
export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagMap: Record<string, number> = {};

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });

  return Object.entries(tagMap)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 모든 시리즈를 가져옵니다
 */
export function getAllSeries(): string[] {
  const posts = getAllPosts();
  const seriesSet = new Set<string>();

  posts.forEach((post) => {
    if (post.series) {
      seriesSet.add(post.series);
    }
  });

  return Array.from(seriesSet);
}

/**
 * 모든 시리즈와 포스트 수, 최신 날짜를 가져옵니다
 */
export function getAllSeriesWithInfo(): { name: string; count: number; latestDate: string }[] {
  const posts = getAllPosts();
  const seriesMap: Record<string, { count: number; latestDate: string }> = {};

  posts.forEach((post) => {
    if (post.series) {
      if (!seriesMap[post.series]) {
        seriesMap[post.series] = { count: 0, latestDate: post.date };
      }
      seriesMap[post.series].count += 1;
      if (new Date(post.date) > new Date(seriesMap[post.series].latestDate)) {
        seriesMap[post.series].latestDate = post.date;
      }
    }
  });

  return Object.entries(seriesMap)
    .map(([name, info]) => ({ name, ...info }))
    .sort((a, b) => new Date(b.latestDate).getTime() - new Date(a.latestDate).getTime());
}

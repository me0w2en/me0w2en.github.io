export type Category = 'mogakco' | 'forensics';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: Category;
  tags: string[];
  series?: string;
  summary?: string;
  readingTime?: number;
  draft?: boolean;
  image?: string; // 카드 썸네일(선택)
}

export interface Post extends PostMeta {
  content: string; // MDX 원문 또는 렌더링 결과
}

export interface SeriesInfo {
  name: string;
  posts: PostMeta[];
}

export interface TagInfo {
  name: string;
  count: number;
}

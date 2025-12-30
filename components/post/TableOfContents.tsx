'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentHtml: string;
}

export function TableOfContents({ contentHtml }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Parse headings from HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentHtml, 'text/html');
    const elements = doc.querySelectorAll('h2, h3');

    const items: TocItem[] = [];
    elements.forEach((el) => {
      const id = el.id || el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
      items.push({
        id,
        text: el.textContent || '',
        level: parseInt(el.tagName[1]),
      });
    });

    setHeadings(items);
  }, [contentHtml]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] flex flex-col">
      <h4 className="text-sm font-semibold text-foreground mb-3 flex-shrink-0">목차</h4>
      <ul className="space-y-1 border-l border-border-color pl-4 overflow-y-auto flex-1 toc-scroll">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`toc-link ${heading.level === 3 ? 'toc-link-h3' : ''} ${activeId === heading.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(heading.id);
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'timeline', label: 'Timeline' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'awards', label: 'Awards' },
  { id: 'training', label: 'Training' },
  { id: 'activities', label: 'Activities' },
  { id: 'skills', label: 'Skills' },
];

export function AboutSectionNav() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    let frameId: number | undefined;

    const updateActiveSection = () => {
      frameId = undefined;
      const currentSection = sections
        .map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .filter((section) => section.getBoundingClientRect().top <= 160)
        .at(-1);

      setActiveId(currentSection?.id ?? sections[0].id);
    };

    const onScroll = () => {
      if (frameId === undefined) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <nav
      aria-label="About 섹션"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
        On this page
      </p>
      <ul className="border-l border-border-color">
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`relative -ml-px flex min-h-8 items-center border-l-2 pl-3 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? 'border-accent-blue text-foreground'
                    : 'border-transparent text-text-muted hover:border-border-color hover:text-text-secondary'
                }`}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

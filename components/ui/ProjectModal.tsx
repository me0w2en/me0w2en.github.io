'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export interface Project {
  title: string;
  period: string;
  context: string;
  role: string;
  actions: string[];
  outcomes: string[];
  learnings: string[];
  tech: string[];
  links?: { label: string; url: string }[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    const siteShell = document.getElementById('site-shell');
    const siteShellWasInert = siteShell?.hasAttribute('inert') ?? false;
    const previousAriaHidden = siteShell?.getAttribute('aria-hidden');

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialog) return;

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    siteShell?.setAttribute('inert', '');
    window.addEventListener('keydown', handleKeyDown);
    const focusFrame = requestAnimationFrame(() => {
      dialog?.querySelector<HTMLElement>('button')?.focus();
      siteShell?.setAttribute('aria-hidden', 'true');
    });

    return () => {
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      if (!siteShellWasInert) siteShell?.removeAttribute('inert');
      if (previousAriaHidden === null || previousAriaHidden === undefined) {
        siteShell?.removeAttribute('aria-hidden');
      } else {
        siteShell?.setAttribute('aria-hidden', previousAriaHidden);
      }
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border-color animate-modal-in"
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border-color px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <h2 id="project-dialog-title" className="text-[20px] font-bold text-foreground">{project.title}</h2>
            <p className="text-[13px] text-accent-blue mt-1">{project.period}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="프로젝트 상세 닫기"
            className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-background-secondary transition-colors text-text-muted hover:text-foreground"
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-6">
          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true"></span>
              문제
            </h3>
            <p className="text-[14px] text-text-secondary leading-relaxed pl-3.5">
              {project.context}
            </p>
          </div>

          {/* My Role */}
          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true"></span>
              나의 역할
            </h3>
            <p className="text-[14px] text-text-secondary pl-3.5">
              {project.role}
            </p>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true"></span>
              실행
            </h3>
            <ul className="space-y-2 pl-3.5">
              {project.actions.map((item, idx) => (
                <li key={idx} className="text-[14px] text-text-secondary flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true"></span>
              결과
            </h3>
            <ul className="space-y-2 pl-3.5">
              {project.outcomes.map((item, idx) => (
                <li key={idx} className="text-[14px] text-text-secondary flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true"></span>
              배운 점
            </h3>
            <ul className="space-y-2 pl-3.5">
              {project.learnings.map((item, idx) => (
                <li key={idx} className="text-[14px] text-text-secondary flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-blue" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true"></span>
              사용 기술
            </h3>
            <div className="flex flex-wrap gap-2 pl-3.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-[13px] font-medium bg-background-secondary text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div>
              <h3 className="text-[14px] font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true"></span>
                관련 자료
              </h3>
              <div className="flex flex-wrap gap-2 pl-3.5">
                {project.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.url.startsWith('http') ? `${link.label} 새 창에서 열기` : link.label}
                    className="inline-flex min-h-11 items-center gap-1.5 rounded-lg bg-accent-blue px-3 py-1.5 text-[13px] font-medium text-background transition-colors hover:bg-accent-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {link.label}
                    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.url.startsWith('http') ? 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' : 'M9 5l7 7-7 7'} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

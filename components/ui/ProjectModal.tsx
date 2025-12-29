'use client';

import { useEffect } from 'react';

export interface Project {
  title: string;
  period: string;
  summary: string;
  role: string;
  highlights: string[];
  tech: string[];
  links?: { label: string; url: string }[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border-color animate-modal-in">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border-color px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[20px] font-bold text-foreground">{project.title}</h2>
            <p className="text-[13px] text-accent-blue mt-1">{project.period}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-background-secondary transition-colors text-text-muted hover:text-foreground"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-6">
          {/* Summary */}
          <p className="text-[15px] text-text-secondary leading-relaxed">
            {project.summary}
          </p>

          {/* My Role */}
          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
              My Role
            </h3>
            <p className="text-[14px] text-text-secondary pl-3.5">
              {project.role}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
              Highlights
            </h3>
            <ul className="space-y-2 pl-3.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="text-[14px] text-text-secondary flex items-start gap-2">
                  <span className="text-accent-blue mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-[14px] font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
              Tech Stack
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
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                Links
              </h3>
              <div className="flex flex-wrap gap-2 pl-3.5">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium bg-accent-blue text-white hover:bg-accent-blue/90 transition-colors"
                  >
                    {link.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

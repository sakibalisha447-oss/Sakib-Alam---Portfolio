import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { CaseStudy } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onConnect: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onConnect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b0b0e] border border-white/20 rounded-xl overflow-y-auto flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header HUD */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0b0b0e]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400">
              CLIENT: {project.client.toUpperCase()} · {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Title & Subtitle */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-zinc-300 mt-2 font-sans max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Large Visual Showcase Mockup - Uncropped 4:5 Vertical Poster Gallery Frame */}
          <div className="w-full rounded-xl overflow-hidden border border-white/15 shadow-2xl flex justify-center bg-[#07070a] p-4 sm:p-8">
            <div className="w-full max-w-[440px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <ProjectMockup
                type={project.previewType}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-lg space-y-2">
              <div className="text-xs font-mono text-pink-400 uppercase tracking-wider">
                THE CHALLENGE
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-lg space-y-2">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                STRATEGIC SOLUTION
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Scope of Deliverables */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              SCOPE OF DELIVERABLES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded bg-white/5 border border-white/5 text-xs text-zinc-200 font-mono"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Execution Details */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">TECH STACK:</span>
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-zinc-300">
                  {tech} {i < project.techStack.length - 1 ? '·' : ''}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                onClose();
                onConnect();
              }}
              className="px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Initiate Project Commission</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

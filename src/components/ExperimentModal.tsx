import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PixelExperiment } from '../types';

interface ExperimentModalProps {
  experiment: PixelExperiment | null;
  onClose: () => void;
}

export const ExperimentModal: React.FC<ExperimentModalProps> = ({
  experiment,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (experiment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experiment, onClose]);

  if (!experiment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c0c0f] border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1 bg-white/[0.06] border border-white/15 backdrop-blur-md rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-white font-bold">
              {experiment.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close experiment preview"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Canvas Area */}
        <div className="relative w-full h-80 sm:h-96 bg-black flex items-center justify-center p-6 overflow-hidden">
          <img
            src={experiment.imagePath}
            alt={experiment.altText || experiment.title}
            className="max-h-full max-w-full object-contain drop-shadow-2xl rounded-lg"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </div>

        {/* Details Footer */}
        <div className="p-6 bg-[#0c0c0f] border-t border-white/10 space-y-4 font-mono">
          <div>
            <h3 className="text-xl font-bold text-white font-heading">{experiment.title}</h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">{experiment.tagline}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="p-2.5 bg-white/5 border border-white/5 rounded">
              <span className="text-[10px] text-zinc-500 block">AESTHETIC</span>
              <span className="text-zinc-200">{experiment.aesthetic}</span>
            </div>
            <div className="p-2.5 bg-white/5 border border-white/5 rounded">
              <span className="text-[10px] text-zinc-500 block">PALETTE</span>
              <span className="text-zinc-200">{experiment.colorScheme}</span>
            </div>
            <div className="p-2.5 bg-white/5 border border-white/5 rounded col-span-2 sm:col-span-1">
              <span className="text-[10px] text-zinc-500 block">EXPLORATION YEAR</span>
              <span className="text-emerald-400">{experiment.year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

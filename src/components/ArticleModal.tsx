import React, { useEffect } from 'react';
import { X, Clock, Calendar, Sparkles } from 'lucide-react';
import { InsightArticle } from '../types';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0c0c0e] border border-white/20 rounded-xl overflow-y-auto flex flex-col shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="text-white font-bold">{article.catalogNumber}</span>
            <span>/</span>
            <span className="text-zinc-300">{article.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close article"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight leading-snug">
            {article.title}
          </h2>

          <p className="text-sm font-sans text-zinc-400 leading-relaxed italic border-l-2 border-white/20 pl-3">
            {article.teaser}
          </p>
        </div>

        {/* Full Prose Content */}
        <div className="space-y-4 font-sans text-sm md:text-base text-zinc-300 leading-relaxed border-y border-white/10 py-6">
          {article.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Key Takeaway Callout */}
        <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
              KEY ARCHITECTURAL TAKEAWAY
            </div>
            <div className="text-xs sm:text-sm font-mono text-zinc-200 mt-1">
              "{article.keyTakeaway}"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

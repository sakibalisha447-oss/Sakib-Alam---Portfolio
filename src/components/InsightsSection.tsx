import React from 'react';
import { INSIGHTS_ARTICLES } from '../data/portfolioData';
import { InsightArticle } from '../types';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface InsightsSectionProps {
  onSelectArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="insights" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#070708] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header (Page 7 PDF Inspiration: "Latest Design Thoughts & Insights") */}
        <ScrollReveal direction="up" delay={0.05} distance={25}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                05 // THOUGHT LEADERSHIP & FRAMEWORKS
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                Latest Design Thoughts & Insights
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-400 max-w-sm">
              Critical perspectives on behavioral economics, design systems governance, and design tool automation.
            </div>
          </div>
        </ScrollReveal>

        {/* 4-Card Responsive Grid with Stagger Reveal */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSIGHTS_ARTICLES.map((article) => (
            <StaggerItem
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group bg-[#0b0b0e] border border-white/10 hover:border-white/30 rounded-xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-4">
                {/* Zero-Pill Clean Unboxed Metadata */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span className="text-white font-bold">{article.catalogNumber}</span>
                  <div className="flex items-center gap-1.5">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-white group-hover:text-emerald-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs font-sans text-zinc-400 leading-relaxed line-clamp-3">
                  {article.teaser}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Article</span>
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

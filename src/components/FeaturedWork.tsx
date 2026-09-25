import React from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight, Eye } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface FeaturedWorkProps {
  onSelectProject: (project: CaseStudy) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#070708] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} distance={25}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-8">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                CATALOG OF FLAGSHIP CASE STUDIES
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                Featured Work
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-400 max-w-sm">
              Selected commercial case studies spanning apparel branding, editorial print, 3D typography, and digital product design.
            </div>
          </div>
        </ScrollReveal>

        {/* Project Catalog Grid (2-Column Desktop Grid with Stagger Reveal) */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {CASE_STUDIES.map((project) => (
            <StaggerItem
              key={project.id}
              className="group relative flex flex-col bg-[#0b0b0e] border border-white/10 hover:border-white/30 rounded-xl overflow-hidden transition-all duration-300 shadow-xl"
            >
              {/* Corner Accents */}
              <span className="absolute top-2 left-2 text-[10px] text-zinc-700 font-mono z-20 pointer-events-none">
                +
              </span>
              <span className="absolute top-2 right-2 text-[10px] text-zinc-700 font-mono z-20 pointer-events-none">
                +
              </span>

              {/* Uncropped Vertical Poster Frame (Strict 4:5 Museum Display Proportion) */}
              <div className="relative border-b border-white/10 bg-[#060608] p-4 sm:p-6 flex items-center justify-center">
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative cursor-pointer w-full max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black group-hover:border-white/40 transition-colors"
                >
                  <ProjectMockup
                    type={project.previewType}
                    className="w-full h-full"
                  />

                  {/* Hover Quick Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs z-30 pointer-events-none">
                    <span className="px-4 py-2 bg-white text-black text-xs font-mono font-semibold rounded flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Examine Case Study</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Metadata & Information (Page 5 from PDF Inspiration) */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 font-mono">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="text-white font-bold tracking-wider">
                      {project.title}
                    </span>
                    <span className="text-zinc-500">{project.year}</span>
                  </div>

                  <p className="text-sm font-sans text-zinc-300 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Clean Unboxed Metadata & Category Tags */}
                <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.roles.map((role, idx) => (
                      <span key={idx} className="text-[11px] text-zinc-400">
                        {role} {idx < project.roles.length - 1 ? '·' : ''}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 text-xs text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Coming Soon Teaser Box */}
        <ScrollReveal direction="up" delay={0.2} distance={20}>
          <div className="p-8 bg-[#09090c] border border-dashed border-white/15 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="text-zinc-300 font-semibold tracking-wider uppercase">
                Next-Gen Spatial AI Interface · Under NDA
              </span>
            </div>
            <span className="px-3.5 py-1 bg-white/[0.04] border border-white/15 backdrop-blur-md rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-zinc-300">
              Scheduled Q3 Deployment
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

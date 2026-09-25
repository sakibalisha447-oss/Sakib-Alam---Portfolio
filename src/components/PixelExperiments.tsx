import React, { useRef } from 'react';
import { PIXEL_EXPERIMENTS } from '../data/portfolioData';
import { PixelExperiment } from '../types';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface PixelExperimentsProps {
  onSelectExperiment: (exp: PixelExperiment) => void;
}

export const PixelExperiments: React.FC<PixelExperimentsProps> = ({
  onSelectExperiment,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="experiments"
      className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#070708] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} distance={25}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                03 // LAB PLAYGROUND & EXPERIMENTAL R&D
              </div>
              <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-none">
                Pixel Experiments <br />
                <span className="text-zinc-500">Gone Wild</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                aria-label="Scroll left"
                className="p-2.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Scroll right"
                className="p-2.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Experimental Brand & 3D Lab Artifacts */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {PIXEL_EXPERIMENTS.map((exp) => (
            <StaggerItem
              key={exp.id}
              onClick={() => onSelectExperiment(exp)}
              className="group relative bg-[#0b0b0e] border border-white/10 hover:border-white/30 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-2xl select-none"
            >
              {/* Visual Preview Frame (Pure 1:1 Original File Display) */}
              <div className="relative h-72 sm:h-80 bg-[#050507] flex items-center justify-center p-4 border-b border-white/10 overflow-hidden">
                <img
                  src={exp.imagePath}
                  alt={exp.altText || exp.title}
                  className="max-h-full max-w-full object-contain pointer-events-none group-hover:scale-[1.03] transition-transform duration-500 drop-shadow-2xl"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle Hover Action Pill */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none backdrop-blur-xs">
                  <span className="px-3 py-1.5 bg-white text-black text-xs font-mono font-bold rounded flex items-center gap-1 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>Inspect Lab Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Metadata */}
              <div className="p-5 font-mono space-y-2.5 bg-[#0b0b0e]">
                <div className="flex items-center text-xs">
                  <span className="text-zinc-300 text-[11px] px-2.5 py-1 bg-white/[0.04] border border-white/15 backdrop-blur-md rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    {exp.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-white group-hover:text-emerald-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-zinc-400 font-sans line-clamp-2 leading-relaxed">
                  {exp.tagline}
                </p>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-500">
                  <span className="uppercase tracking-wider">{exp.aesthetic}</span>
                  <span className="text-zinc-400">{exp.year}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

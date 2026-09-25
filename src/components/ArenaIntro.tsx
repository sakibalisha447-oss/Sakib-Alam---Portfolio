import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Sparkles, Compass } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ArenaIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#070708] relative cyber-grid overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Manifesto Sub-block (Page 4 from inspiration PDF) */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-24">
          <StaggerItem className="md:col-span-5 space-y-3">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block">
              00 // ARTISTIC DIRECTION & PHILOSOPHY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
              I turn chaotic ideas into digital masterpieces.
            </h2>
          </StaggerItem>

          <StaggerItem className="md:col-span-7 space-y-4 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              My journey has been a thrilling ride, filled with the joys of turning chaotic ideas into sleek, functional designs. I research, strategize, design, and develop to create experiences that are meant to propel business growth.
            </p>
            <p className="text-zinc-300">
              So, let's make the digital world a little brighter, one pixel at a time!
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Massive Center Statement & Cyber Callout Box */}
        <div className="relative pt-8 pb-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal direction="up" delay={0.1} distance={30}>
              <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                Welcome to my digital arena! Here, you'll find a collection of my design adventures, where every pixel tells a story.
              </h3>
            </ScrollReveal>

            {/* Futuristic Brutalist Callout Box (Page 4 PDF inspiration) */}
            <ScrollReveal direction="up" delay={0.25} distance={35}>
              <div className="relative max-w-lg mx-auto p-6 sm:p-8 bg-[#0e0e12] border border-white/20 rounded-lg shadow-2xl text-left font-mono">
                {/* Corner Crosshairs */}
                <div className="absolute top-2 left-2 text-[10px] text-zinc-600 font-mono">+</div>
                <div className="absolute top-2 right-2 text-[10px] text-zinc-600 font-mono">+</div>
                <div className="absolute bottom-2 left-2 text-[10px] text-zinc-600 font-mono">+</div>
                <div className="absolute bottom-2 right-2 text-[10px] text-zinc-600 font-mono">+</div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-[10px] tracking-widest text-sky-400 uppercase">
                    MISSION PROTOCOL
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                  {DESIGNER_INFO.arenaCallout}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

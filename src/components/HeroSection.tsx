import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ArrowDownRight, Sparkles, Move3d, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { DigitalStylusBackground } from './DigitalStylusBackground';

interface HeroSectionProps {
  onOpenConnect: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConnect }) => {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 cyber-grid overflow-hidden">
      {/* Background Ambience & Cyber Grid Crosshairs */}
      <div className="absolute top-24 left-8 text-zinc-700 font-mono text-xs select-none">+</div>
      <div className="absolute top-24 right-8 text-zinc-700 font-mono text-xs select-none">+</div>
      <div className="absolute bottom-12 left-8 text-zinc-700 font-mono text-xs select-none">+</div>
      <div className="absolute bottom-12 right-8 text-zinc-700 font-mono text-xs select-none">+</div>

      {/* Dynamic Background Marquee Ribbon */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full overflow-hidden pointer-events-none opacity-30 z-0 select-none">
        <div className="animate-marquee whitespace-nowrap py-4">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold font-heading text-zinc-800/80 tracking-tight mx-4"
            >
              Graphic Designer • UI/UX Designer • Visual Technologist •
            </span>
          ))}
        </div>
      </div>

      {/* Centerpiece Typographic Display */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 my-auto py-12 sm:py-16 max-w-6xl mx-auto w-full text-center space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_4px_16px_rgba(0,0,0,0.3)] text-[11px] font-mono tracking-widest text-zinc-300 uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>PORTFOLIO ARCHITECTURE // SELECTED COMMISSIONS 2026</span>
        </motion.div>

        {/* Hero Title with Dynamic Digital Stylus in the Background */}
        <div className="relative py-2 sm:py-4 overflow-visible">
          <DigitalStylusBackground />

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-heading text-white tracking-tighter uppercase leading-[0.95] select-none"
          >
            Sakib Alam
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl font-light font-sans text-zinc-300 max-w-3xl mx-auto tracking-wide leading-relaxed"
        >
          Graphic Designer, UI/UX Architect & Visual Technologist
        </motion.p>

        {/* Feature Discipline Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-2.5 pt-2 text-xs font-mono text-zinc-300"
        >
          <span className="px-3.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/25 backdrop-blur-md rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all">
            BRAND IDENTITY
          </span>
          <span className="px-3.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/25 backdrop-blur-md rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all">
            PACKAGING SYSTEMS
          </span>
          <span className="px-3.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/25 backdrop-blur-md rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all">
            3D VISUALS
          </span>
          <span className="px-3.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/25 backdrop-blur-md rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all">
            PRODUCT UI/UX
          </span>
        </motion.div>

        {/* Quick jump to 3D Chrome Centerpiece */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="pt-4"
        >
          <a
            href="#chrome-lab"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400/60 px-4 py-1.5 rounded-full backdrop-blur-xs transition-all duration-300 hover:scale-105"
          >
            <Move3d className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
            <span>Interactive 3D Chrome Lab in Middle of Website ↓</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Lower Hero Content: Value Proposition & Direct CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85 }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
      >
        {/* Left Column: Value Proposition & Direct CTA */}
        <div className="md:col-span-7 space-y-6">
          <div className="max-w-md space-y-2">
            <p className="text-sm sm:text-base font-sans text-zinc-300 leading-relaxed font-normal">
              {DESIGNER_INFO.heroHeadline}
            </p>
            <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed">
              {DESIGNER_INFO.heroSubheadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-white bg-white/5 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded"
            >
              {/* Corner Brackets */}
              <span className="absolute -top-1 -left-1 text-[8px] text-zinc-500 group-hover:text-black font-mono">
                ┌
              </span>
              <span className="absolute -top-1 -right-1 text-[8px] text-zinc-500 group-hover:text-black font-mono">
                ┐
              </span>
              <span className="absolute -bottom-1 -left-1 text-[8px] text-zinc-500 group-hover:text-black font-mono">
                └
              </span>
              <span className="absolute -bottom-1 -right-1 text-[8px] text-zinc-500 group-hover:text-black font-mono">
                ┘
              </span>

              <span className="font-semibold tracking-wider uppercase">
                Explore my projects
              </span>
              <ArrowDownRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenConnect}
              className="px-4 py-2.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              Let's Discuss Opportunities →
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Inline Socials with Slash Accents */}
        <div className="md:col-span-5 flex flex-wrap md:justify-end items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
          {DESIGNER_INFO.socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors hover:underline underline-offset-4"
            >
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

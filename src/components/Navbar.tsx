import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Code2, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#070708]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Wordmark / Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white font-heading"
        >
          <span className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/20 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-center text-xs font-mono group-hover:border-white transition-colors">
            ✦
          </span>
          <span className="group-hover:text-zinc-200 transition-colors">
            {DESIGNER_INFO.name}
          </span>
        </a>

        {/* Zone 2: Frosted glass navigation pill labels */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.35)]">
          <a
            href="#work"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/25 backdrop-blur-md transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            WORK
          </a>
          <a
            href="#chrome-lab"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-emerald-400 hover:text-emerald-300 bg-emerald-500/[0.08] hover:bg-emerald-500/[0.16] border border-emerald-400/25 hover:border-emerald-400/40 backdrop-blur-md transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(16,185,129,0.2)] flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>3D CHROME</span>
          </a>
          <a
            href="#experiments"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/25 backdrop-blur-md transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            EXPERIMENTS
          </a>
          <a
            href="#process"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/25 backdrop-blur-md transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            PROCESS
          </a>
          <a
            href="#insights"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/25 backdrop-blur-md transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            INSIGHTS
          </a>
          <a
            href="#about"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/25 backdrop-blur-md transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            ABOUT
          </a>
        </nav>

        {/* Zone 3: Primary Action ("Let's Connect" Cyber Bracket Button) */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConnect}
            className="group relative px-4 py-2 text-xs font-mono text-white bg-transparent border border-white/25 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded"
          >
            {/* Cyber Corner Ticks */}
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
              Let's Connect
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Mail, Sparkles } from 'lucide-react';
import { ChromeCanvas } from './ChromeCanvas';
import { ScrollReveal } from './ScrollReveal';

interface FooterSectionProps {
  onOpenConnect: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onOpenConnect,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="relative bg-[#050506] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Giant Infinite Marquee Ticker (Page 8 PDF Inspiration) */}
      <div className="w-full overflow-hidden border-y border-white/10 py-6 bg-black/60 select-none cursor-pointer" onClick={onOpenConnect}>
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="text-4xl sm:text-6xl md:text-7xl font-black font-heading text-white tracking-tight hover:text-emerald-400 transition-colors mx-4"
            >
              Let's Connect • Let's Connect •
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <ScrollReveal direction="up" delay={0.1} distance={30}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Concluding Statement & Direct CTA (Page 8 PDF) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="max-w-md space-y-3">
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
                  {DESIGNER_INFO.footerHeadline}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed">
                  {DESIGNER_INFO.footerSubtext}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenConnect}
                  className="group relative px-6 py-3 text-xs font-mono text-white bg-white/5 border border-white/25 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded"
                >
                  {/* Corner Ticks */}
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

                  <span className="font-bold tracking-wider uppercase">
                    Let's Connect !
                  </span>
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-3 text-xs font-mono text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 rounded flex items-center gap-2 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Email Copied!' : 'Copy Direct Email //'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Social Directory & Mini Chrome Accent (Page 8 PDF) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-8">
              {/* Center Chrome Visual Mini Focal */}
              <div className="hidden sm:block">
                <ChromeCanvas size={220} interactive={true} className="opacity-90" />
              </div>

              {/* Direct Social Links with Editorial Slash Format */}
              <div className="space-y-2 text-xs font-mono text-zinc-400 text-left lg:text-right">
                <div>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    in LinkedIn //
                  </a>
                </div>
                <div>
                  <button
                    onClick={handleCopyEmail}
                    className="hover:text-white transition-colors flex items-center gap-1.5 lg:justify-end"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email ID // {DESIGNER_INFO.email}</span>
                  </button>
                </div>
                <div>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram //
                  </a>
                </div>
                <div>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Dribbble //
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Copyright & Sub-footer (Page 8 PDF) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            <span>{DESIGNER_INFO.name} © 2026 // All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

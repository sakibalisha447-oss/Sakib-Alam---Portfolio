import React, { useEffect, useState } from 'react';
import { X, Copy, Check, Terminal, FileText, Layout, Palette } from 'lucide-react';
import { ARCHITECTURE_SPECS, DESIGNER_INFO, CASE_STUDIES, PROCESS_STEPS } from '../data/portfolioData';

interface SpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SpecsModal: React.FC<SpecsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'deck' | 'specs' | 'tokens'>('deck');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyFullDeck = () => {
    const deckText = `
=== CREATIVE DIRECTOR COPYWRITING DECK ===
BRAND / DESIGNER: ${DESIGNER_INFO.name}
ROLE: ${DESIGNER_INFO.role}

HERO SECTION:
- Marquee: "${DESIGNER_INFO.heroMarquee}"
- Primary Headline: "${DESIGNER_INFO.heroHeadline}"
- Value Proposition: "${DESIGNER_INFO.heroSubheadline}"

DIGITAL ARENA MANIFESTO:
- Heading: "${DESIGNER_INFO.arenaHeadline}"
- Subheading: "${DESIGNER_INFO.arenaSubheadline}"
- Cyber Callout: "${DESIGNER_INFO.arenaCallout}"

FEATURED CASE STUDIES:
${CASE_STUDIES.map(
  (c) => `${c.title}
  Client: ${c.client} (${c.year})
  Roles: ${c.roles.join(', ')}
  Challenge: ${c.challenge}
  Solution: ${c.solution}
  Impact: ${c.impactMetric}
`
).join('\n')}

7-STEP DESIGN & DEV PROCESS:
${PROCESS_STEPS.map((p) => `0${p.stepNumber}. ${p.title} -> ${p.summary}`).join('\n')}

FOOTER CONVERSION:
- Headline: "${DESIGNER_INFO.footerHeadline}"
- Subtext: "${DESIGNER_INFO.footerSubtext}"
    `.trim();

    navigator.clipboard.writeText(deckText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[88vh] bg-[#0c0c0f] border border-white/20 rounded-xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header HUD */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white font-bold">
              DOCS // DELIVERABLES DECK
            </span>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Creative Direction & Architectural Blueprint
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyFullDeck}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Deck' : 'Copy All Copy'}</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-white/10 bg-black/20 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('deck')}
            className={`pb-3 px-3 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'deck'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>01 // Full Copywriting Deck</span>
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`pb-3 px-3 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'specs'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>02 // Component & Layout Blueprints</span>
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`pb-3 px-3 text-xs font-mono flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'tokens'
                ? 'border-white text-white font-semibold'
                : 'border-transparent text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>03 // Visual System & Tokens</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-zinc-300 font-sans text-sm">
          {activeTab === 'deck' && (
            <div className="space-y-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-2">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  SECTION 01: HERO POSITIONING & VALUE PROPOSITION
                </div>
                <div className="text-lg font-heading text-white font-bold">
                  "{DESIGNER_INFO.heroHeadline}"
                </div>
                <p className="text-zinc-300 font-sans leading-relaxed">
                  "{DESIGNER_INFO.heroSubheadline}"
                </p>
                <div className="text-xs font-mono text-zinc-400 pt-1">
                  TAGLINE MARQUEE: {DESIGNER_INFO.heroMarquee}
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-2">
                <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                  SECTION 02: DIGITAL ARENA CALLOUT & MANIFESTO
                </div>
                <div className="text-base font-heading text-white font-semibold">
                  "{DESIGNER_INFO.arenaHeadline}"
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  "{DESIGNER_INFO.arenaSubheadline}"
                </p>
                <div className="p-3 bg-black/40 border border-white/10 rounded text-xs font-mono text-zinc-300">
                  Callout Box: "{DESIGNER_INFO.arenaCallout}"
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  SECTION 03: CASE STUDY CATALOG SUMMARY
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {CASE_STUDIES.map((c) => (
                    <div key={c.id} className="p-3.5 bg-black/40 border border-white/10 rounded font-mono text-xs space-y-1">
                      <div className="text-white font-bold">{c.title}</div>
                      <div className="text-zinc-400">{c.subtitle}</div>
                      <div className="text-emerald-400 pt-1">{c.impactMetric}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-2">
                <div className="text-xs font-mono text-pink-400 uppercase tracking-wider">
                  SECTION 04: FOOTER CONVERSION & CLOSING
                </div>
                <div className="text-lg font-heading text-white font-bold">
                  "{DESIGNER_INFO.footerHeadline}"
                </div>
                <p className="text-zinc-300">
                  "{DESIGNER_INFO.footerSubtext}"
                </p>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-4 font-mono">
              <div className="text-xs text-zinc-400 uppercase tracking-wider">
                RESPONSIVE VIEWPORT BLUEPRINTS & FLEXBOX/GRID SPECIFICATIONS
              </div>

              <div className="space-y-3">
                {ARCHITECTURE_SPECS.layoutBlueprints.map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-2 text-xs">
                    <div className="text-white font-bold flex items-center justify-between">
                      <span>{item.section}</span>
                      <span className="text-[10px] text-zinc-500">ZONE {idx + 1}</span>
                    </div>
                    <div className="text-zinc-300">
                      <span className="text-zinc-500">LAYOUT:</span> {item.gridCols}
                    </div>
                    <div className="text-zinc-300">
                      <span className="text-zinc-500">PADDING:</span> {item.padding}
                    </div>
                    <div className="text-emerald-400">
                      <span className="text-zinc-500">BEHAVIOR:</span> {item.specs}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tokens' && (
            <div className="space-y-6 font-mono text-xs">
              <div className="space-y-2">
                <div className="text-zinc-400 uppercase tracking-wider">TYPOGRAPHY HIERARCHY</div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg space-y-2 text-zinc-200">
                  <div><span className="text-zinc-500">HEADINGS:</span> {ARCHITECTURE_SPECS.typography.headings}</div>
                  <div><span className="text-zinc-500">BODY TEXT:</span> {ARCHITECTURE_SPECS.typography.body}</div>
                  <div><span className="text-zinc-500">NUMERALS & CODE:</span> {ARCHITECTURE_SPECS.typography.code}</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-zinc-400 uppercase tracking-wider">60-30-10 COLOR DISTRIBUTION</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-[#070708] border border-white/20 rounded">
                    <span className="text-zinc-500 text-[10px] block">60% BASE CANVAS</span>
                    <span className="text-white font-bold">#070708 Void</span>
                  </div>
                  <div className="p-3 bg-[#0f0f12] border border-white/20 rounded">
                    <span className="text-zinc-500 text-[10px] block">30% SURFACES</span>
                    <span className="text-zinc-200 font-bold">#0F0F12 Hairline</span>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-emerald-400 via-sky-400 to-pink-400 p-[1px] rounded">
                    <div className="bg-black p-2.5 rounded h-full">
                      <span className="text-zinc-500 text-[10px] block">10% ACCENT BUDGET</span>
                      <span className="text-white font-bold">Liquid Chrome / Neon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

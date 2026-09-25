import React, { useState } from 'react';
import { Check, Copy, Layers, MousePointer, Terminal, Sparkles } from 'lucide-react';

interface ProcessMockupProps {
  step: number; // 1 to 7
}

export const ProcessMockup: React.FC<ProcessMockupProps> = ({ step }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [protoActive, setProtoActive] = useState(true);

  const handleCopy = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full h-full min-h-[420px] bg-[#0c0c0e] border border-white/10 rounded-lg overflow-hidden flex flex-col cyber-grid">
      {/* Studio HUD Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-mono text-zinc-400 ml-2">
            studio_vault // step_{step.toString().padStart(2, '0')}.fig
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-zinc-500 hidden sm:inline">
            WORKSPACE: FIGMA ENTERPRISE · 100% ZOOM
          </span>
          <span className="px-2 py-0.5 text-[9px] font-mono bg-white/10 text-white rounded">
            ACTIVE SPRINT
          </span>
        </div>
      </div>

      {/* Dynamic Visual Stage Based on Active Step */}
      <div className="relative flex-1 p-6 flex items-center justify-center overflow-hidden">
        {/* STEP 1: Discovery & Research (Sticky Wall & Telemetry Audit) */}
        {step === 1 && (
          <div className="w-full max-w-md space-y-4">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
              <span>QUALITATIVE USER TELEMETRY</span>
              <span className="text-emerald-400">N = 48 PARTICIPANTS</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-amber-200 transform -rotate-1 shadow-lg">
                <div className="text-[10px] font-mono text-amber-400/80 mb-1">
                  PAIN POINT #01
                </div>
                <div className="text-xs font-medium leading-relaxed">
                  "Too many competing metrics cause analysis paralysis in the first 30 seconds."
                </div>
              </div>

              <div className="p-3 bg-sky-500/10 border border-sky-500/30 rounded text-sky-200 transform rotate-2 shadow-lg">
                <div className="text-[10px] font-mono text-sky-400/80 mb-1">
                  PRIMARY MOTIVATION
                </div>
                <div className="text-xs font-medium leading-relaxed">
                  "I want instantaneous command access to triage critical system anomalies."
                </div>
              </div>

              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-200 transform rotate-1 shadow-lg">
                <div className="text-[10px] font-mono text-emerald-400/80 mb-1">
                  FEATURE DESIRE
                </div>
                <div className="text-xs font-medium leading-relaxed">
                  "Dark-mode high-contrast HUD that reduces eye fatigue across 10-hour shifts."
                </div>
              </div>

              <div className="p-3 bg-pink-500/10 border border-pink-500/30 rounded text-pink-200 transform -rotate-2 shadow-lg">
                <div className="text-[10px] font-mono text-pink-400/80 mb-1">
                  CONVERSION TARGET
                </div>
                <div className="text-xs font-medium leading-relaxed">
                  "Target: Reduce time-to-first-workflow from 14 mins to &lt; 90 seconds."
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: User Journey Mapping & Architecture */}
        {step === 2 && (
          <div className="w-full max-w-lg space-y-4">
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
                Zero-Friction Conversion Funnel Architecture
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="w-full sm:w-28 p-3 bg-white/5 border border-white/20 rounded text-center">
                <div className="text-zinc-400 text-[10px]">STAGE 01</div>
                <div className="text-white font-semibold mt-1">Arrival</div>
                <div className="text-[9px] text-zinc-500 mt-1">3D Value Hook</div>
              </div>

              <div className="text-zinc-600">→</div>

              <div className="w-full sm:w-32 p-3 bg-sky-500/10 border border-sky-500/40 rounded text-center">
                <div className="text-sky-400 text-[10px]">STAGE 02</div>
                <div className="text-sky-200 font-semibold mt-1">Contextual Proof</div>
                <div className="text-[9px] text-sky-400/70 mt-1">Telemetry Live</div>
              </div>

              <div className="text-zinc-600">→</div>

              <div className="w-full sm:w-28 p-3 bg-emerald-500/10 border border-emerald-500/40 rounded text-center">
                <div className="text-emerald-400 text-[10px]">STAGE 03</div>
                <div className="text-emerald-200 font-semibold mt-1">Conversion</div>
                <div className="text-[9px] text-emerald-400/70 mt-1">1-Click Booking</div>
              </div>
            </div>

            <div className="p-3 bg-white/[0.03] border border-dashed border-white/20 rounded text-xs text-zinc-300 font-mono text-center">
              DECISION FORK: Enterprise Lead vs. Developer Sandbox → Route in &lt; 200ms
            </div>
          </div>
        )}

        {/* STEP 3: Wireframing & Structural Systems */}
        {step === 3 && (
          <div className="w-full max-w-md bg-[#131316] border border-white/20 rounded-lg p-4 space-y-3 font-mono">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                <span>Auto-Layout Frame: #Desktop_1440px</span>
              </div>
              <span className="text-zinc-400">8pt Spatial Grid</span>
            </div>

            {/* Wireframe Mockup Bones */}
            <div className="h-6 w-1/3 bg-white/10 rounded" />
            <div className="h-3 w-3/4 bg-white/5 rounded" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-20 bg-white/5 border border-dashed border-white/15 rounded flex items-center justify-center text-[10px] text-zinc-500">
                [Slot_A]
              </div>
              <div className="h-20 bg-white/5 border border-dashed border-white/15 rounded flex items-center justify-center text-[10px] text-zinc-500">
                [Slot_B]
              </div>
              <div className="h-20 bg-white/5 border border-dashed border-white/15 rounded flex items-center justify-center text-[10px] text-zinc-500">
                [Slot_C]
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="h-7 w-24 bg-white/20 rounded" />
              <div className="text-[9px] text-zinc-500">WCAG AA Verified (7.2:1)</div>
            </div>
          </div>
        )}

        {/* STEP 4: Visual Identity & UI Design */}
        {step === 4 && (
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>DESIGN TOKENS & CHROME SHADERS</span>
              <span className="text-pink-400">HIGH-FIDELITY FIGMA</span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <div className="h-14 rounded bg-[#070708] border border-white/20 flex flex-col justify-end p-1.5">
                <span className="text-[9px] font-mono text-zinc-400">#070708</span>
              </div>
              <div className="h-14 rounded bg-gradient-to-tr from-sky-400 to-indigo-500 flex flex-col justify-end p-1.5">
                <span className="text-[9px] font-mono text-black font-bold">CYAN</span>
              </div>
              <div className="h-14 rounded bg-gradient-to-tr from-pink-400 to-purple-600 flex flex-col justify-end p-1.5">
                <span className="text-[9px] font-mono text-white font-bold">VIOLET</span>
              </div>
              <div className="h-14 rounded bg-gradient-to-tr from-amber-300 to-yellow-500 flex flex-col justify-end p-1.5">
                <span className="text-[9px] font-mono text-black font-bold">CHROME</span>
              </div>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <div className="text-xl font-black font-heading tracking-tight text-white">
                Syne Display Grotesque
              </div>
              <div className="text-xs text-zinc-400 font-mono mt-1">
                Paired with Space Grotesk (Body) & JetBrains Mono (Data)
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Interactive Prototyping */}
        {step === 5 && (
          <div className="w-full max-w-sm bg-black border border-white/20 rounded-xl p-4 shadow-2xl space-y-3 font-mono">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-[10px] text-zinc-400">SPRING PHYSICS PROTOTYPE</span>
              <span className="text-[9px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE PREVIEW
              </span>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center space-y-2">
              <div className="text-xs text-zinc-300">Click to test micro-interaction</div>
              <button
                onClick={() => setProtoActive(!protoActive)}
                className={`w-full py-2.5 px-4 text-xs font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2 ${
                  protoActive
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                }`}
              >
                <MousePointer className="w-3.5 h-3.5" />
                <span>{protoActive ? 'Trigger Spring Physics' : 'State: Expanded (Active)'}</span>
              </button>
            </div>

            <div className="text-[9px] text-zinc-500 text-center">
              Damping: 24 · Stiffness: 300 · Latency: 120ms
            </div>
          </div>
        )}

        {/* STEP 6: Feedback & Iterative Refinement */}
        {step === 6 && (
          <div className="w-full max-w-md space-y-3 font-mono">
            <div className="flex justify-between items-center text-xs text-zinc-400">
              <span>HEURISTIC AUDIT & REFINEMENT</span>
              <span className="text-emerald-400">ITERATION 04 (FINAL)</span>
            </div>

            <div className="p-3 bg-white/5 border border-white/10 rounded-lg space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-300">Task Completion Rate</span>
                <span className="text-emerald-400 font-bold tabular-nums">98.4% (+31%)</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[98.4%]" />
              </div>

              <div className="flex justify-between text-xs pt-1">
                <span className="text-zinc-300">Time-on-Task</span>
                <span className="text-sky-400 font-bold tabular-nums">48s (-62%)</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-sky-400 h-full w-[38%]" />
              </div>
            </div>

            <div className="text-[10px] text-zinc-400 bg-black/40 p-2.5 rounded border border-white/10">
              <span className="text-zinc-200 font-bold">CLIENT REVIEW:</span> "The dark brutalist aesthetic perfectly matches our technical brand while making workflows shockingly fast."
            </div>
          </div>
        )}

        {/* STEP 7: Development & Clean Handoff */}
        {step === 7 && (
          <div className="w-full max-w-md bg-black border border-white/20 rounded-lg p-4 font-mono text-xs space-y-3">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <div className="flex items-center gap-1.5 text-zinc-400">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Design System Tokens</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-white transition-colors"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <pre className="text-[11px] text-zinc-300 leading-relaxed overflow-x-auto p-2 bg-[#08080a] rounded border border-white/5">
              <code>{`:root {
  --color-cyber-void: #070708;
  --color-chrome-refract: #38bdf8;
  --font-display: 'Syne', sans-serif;
  --radius-hud: 8px;
}
/* Production-Ready Design Tokens & Vector Specs */`}</code>
            </pre>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Zero-technical-debt promise: Accessible, responsive, 100% semantic.</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="px-4 py-2.5 border-t border-white/10 bg-black/50 text-[10px] font-mono text-zinc-400 flex justify-between items-center">
        <span>DELIVERABLE SPECIFICATION</span>
        <span className="text-zinc-200 font-semibold">STAGE 0{step} OF 07</span>
      </div>
    </div>
  );
};

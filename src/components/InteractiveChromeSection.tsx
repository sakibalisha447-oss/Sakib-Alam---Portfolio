import React, { useState } from 'react';
import { ChromeCanvas, ChromeTheme, ChromeGeometry } from './ChromeCanvas';
import { Sparkles, Move3d, RotateCcw, Sliders, Eye, Gauge, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const InteractiveChromeSection: React.FC = () => {
  const [theme, setTheme] = useState<ChromeTheme>('chrome');
  const [geometry, setGeometry] = useState<ChromeGeometry>('interlocking');
  const [speed, setSpeed] = useState<number>(1);
  const [stats, setStats] = useState({
    x: 0,
    y: 0,
    fps: 60,
    angleX: 23,
    angleY: 48,
  });

  return (
    <section
      id="chrome-lab"
      className="relative py-28 px-6 md:px-12 border-t border-white/10 bg-[#060608] cyber-grid overflow-hidden"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-sky-500/5 via-fuchsia-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber Corner Markers */}
      <div className="absolute top-8 left-8 text-zinc-700 font-mono text-xs select-none">+</div>
      <div className="absolute top-8 right-8 text-zinc-700 font-mono text-xs select-none">+</div>
      <div className="absolute bottom-8 left-8 text-zinc-700 font-mono text-xs select-none">+</div>
      <div className="absolute bottom-8 right-8 text-zinc-700 font-mono text-xs select-none">+</div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05} distance={25}>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono tracking-widest text-emerald-400 uppercase backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CENTERPIECE // 3D INTERACTIVE CHROME LAB</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Liquid Metallic <br />
              <span className="text-chrome">Dimensions</span>
            </h2>

            <p className="text-sm sm:text-base font-sans text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Tactile 3D forms driven by real-time mathematical physics and gyroscopic inertia. Drag, rotate, and manipulate the metallic surfaces directly.
            </p>
          </div>
        </ScrollReveal>

        {/* Centerpiece Stage: Horizontally & Vertically Centered */}
        <ScrollReveal direction="up" delay={0.15} distance={35}>
          <div className="relative max-w-5xl mx-auto bg-[#0a0a0d]/90 border border-white/15 rounded-2xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col items-center justify-center">
            {/* Top Stage Telemetry Bar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold tracking-wider">[ 3D_CHROME_ARTIFACT ]</span>
                <span className="hidden sm:inline text-zinc-600">|</span>
                <span className="hidden sm:inline text-zinc-400">EULER: {stats.angleX}° / {stats.angleY}°</span>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 border border-white/10 rounded">
                  <Gauge className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">{stats.fps} FPS</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 border border-white/10 rounded">
                  <Move3d className="w-3 h-3 text-sky-400" />
                  <span>X:{stats.x > 0 ? `+${stats.x}` : stats.x} Y:{stats.y > 0 ? `+${stats.y}` : stats.y}</span>
                </div>
              </div>
            </div>

            {/* Centered Canvas Display */}
            <div className="relative my-2 sm:my-6 flex items-center justify-center">
              {/* Ambient Circular Halo Accent */}
              <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none scale-125 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10 pointer-events-none scale-110" />

              <ChromeCanvas
                size={500}
                theme={theme}
                geometry={geometry}
                speed={speed}
                onStatsUpdate={setStats}
                className="scale-90 sm:scale-100 md:scale-105"
              />

              {/* Instruction Overlay Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap">
                <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 uppercase bg-black/85 px-4 py-1.5 border border-white/20 rounded-full backdrop-blur-md shadow-2xl flex items-center gap-2">
                  <Move3d className="w-3 h-3 text-emerald-400 animate-spin" />
                  <span>Drag to Rotate · Mouse Tilt Active</span>
                </span>
              </div>
            </div>

            {/* Interactive Controls Hub */}
            <div className="w-full mt-10 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              {/* Control 1: Surface Finish / Theme */}
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-wider block flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-400" />
                  <span>Surface Material Finish</span>
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(
                    [
                      { id: 'chrome', label: 'Liquid Chrome' },
                      { id: 'iridescent', label: 'Cyber Prismatic' },
                      { id: 'gold', label: 'Imperial Gold' },
                      { id: 'obsidian', label: 'Dark Obsidian' },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setTheme(m.id)}
                      className={`px-3 py-1.5 rounded text-[11px] transition-all duration-200 text-left border ${
                        theme === m.id
                          ? 'bg-white text-black font-bold border-white shadow-lg'
                          : 'bg-white/5 text-zinc-400 hover:text-white border-white/10 hover:border-white/30'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 2: 3D Geometry Topology */}
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-wider block flex items-center gap-1">
                  <Move3d className="w-3 h-3 text-emerald-400" />
                  <span>Geometric Topology</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(
                    [
                      { id: 'interlocking', label: 'Interlock' },
                      { id: 'gyro', label: 'Gyroscope' },
                      { id: 'torus', label: 'Single Ring' },
                    ] as const
                  ).map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGeometry(g.id)}
                      className={`px-2.5 py-1.5 rounded text-[11px] transition-all duration-200 text-center border ${
                        geometry === g.id
                          ? 'bg-emerald-500 text-black font-bold border-emerald-400 shadow-lg'
                          : 'bg-white/5 text-zinc-400 hover:text-white border-white/10 hover:border-white/30'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Control 3: Speed & Reset */}
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 uppercase tracking-wider block flex items-center gap-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Rotation Dynamics</span>
                </label>
                <div className="flex items-center gap-2">
                  {[0.5, 1, 2].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSpeed(s)}
                      className={`flex-1 py-1.5 rounded text-[11px] transition-all duration-200 text-center border ${
                        speed === s
                          ? 'bg-amber-400 text-black font-bold border-amber-300'
                          : 'bg-white/5 text-zinc-400 hover:text-white border-white/10 hover:border-white/30'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setTheme('chrome');
                      setGeometry('interlocking');
                      setSpeed(1);
                    }}
                    className="p-1.5 bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white border border-white/10 rounded transition-colors"
                    title="Reset to default"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

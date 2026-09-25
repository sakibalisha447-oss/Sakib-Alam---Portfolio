import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ProcessMockup } from './ProcessMockup';
import { ChevronRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="process" className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#070708] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header (Page 2 & 6 PDF Inspiration: "My Design Process") */}
        <ScrollReveal direction="up" delay={0.05} distance={25}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">
                04 // METHODOLOGY & SYSTEM ARCHITECTURE
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
                My Design Process
              </h2>
            </div>
            <div className="text-xs font-mono text-zinc-400 max-w-sm">
              A rigorous 7-stage design engineering cycle that bridges initial stakeholder discovery to verified production handoff.
            </div>
          </div>
        </ScrollReveal>

        {/* 12-Column Split Stage: 6-Col Accordion List + 6-Col Synchronized Behind-the-Scenes Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Numbered Process Accordion List */}
          <StaggerContainer staggerDelay={0.08} className="lg:col-span-6 space-y-3">
            {PROCESS_STEPS.map((step) => {
              const isSelected = activeStep === step.stepNumber;
              return (
                <StaggerItem
                  key={step.stepNumber}
                  onClick={() => setActiveStep(step.stepNumber)}
                  onMouseEnter={() => setActiveStep(step.stepNumber)}
                  className={`group p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#101014] border-white/30 shadow-lg'
                      : 'bg-transparent border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold ${
                            isSelected ? 'text-emerald-400' : 'text-zinc-500'
                          }`}
                        >
                          {step.stepNumber.toString().padStart(2, '0')}.
                        </span>
                        <h3
                          className={`text-lg sm:text-xl font-bold font-heading transition-colors ${
                            isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                          }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed pl-6">
                        {step.summary}
                      </p>

                      {isSelected && (
                        <div className="pt-2 pl-6 space-y-2 animate-in fade-in duration-200">
                          <p className="text-xs font-sans text-zinc-300 leading-relaxed border-l border-white/20 pl-3">
                            {step.details}
                          </p>
                          <div className="text-[11px] font-mono text-emerald-400">
                            DELIVERABLE: {step.keyDeliverable}
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`p-1.5 rounded text-zinc-500 transition-transform duration-300 ${
                        isSelected ? 'rotate-90 text-white' : 'group-hover:translate-x-1'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Right Column: Synchronized Contextual Mockup Vault (Sticky on Desktop) */}
          <ScrollReveal direction="left" delay={0.2} distance={30} className="lg:col-span-6 lg:sticky lg:top-28">
            <ProcessMockup step={activeStep} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

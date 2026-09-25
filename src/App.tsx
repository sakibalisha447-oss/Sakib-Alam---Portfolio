import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ArenaIntro } from './components/ArenaIntro';
import { FeaturedWork } from './components/FeaturedWork';
import { InteractiveChromeSection } from './components/InteractiveChromeSection';
import { PixelExperiments } from './components/PixelExperiments';
import { ProcessSection } from './components/ProcessSection';
import { InsightsSection } from './components/InsightsSection';
import { FooterSection } from './components/FooterSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ExperimentModal } from './components/ExperimentModal';
import { ArticleModal } from './components/ArticleModal';
import { ContactModal } from './components/ContactModal';
import { CaseStudy, PixelExperiment, InsightArticle } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [selectedExperiment, setSelectedExperiment] = useState<PixelExperiment | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#070708] text-white flex flex-col selection:bg-white selection:text-black">
      {/* Fixed Cyber Navbar adhering to Top Bar Contract */}
      <Navbar
        onOpenConnect={() => setIsContactOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section with dynamic marquee & 3D liquid chrome canvas */}
        <HeroSection onOpenConnect={() => setIsContactOpen(true)} />

        {/* 2. Digital Arena Intro & Manifesto */}
        <ArenaIntro />

        {/* 3. Featured Work & Case Studies Grid */}
        <FeaturedWork onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 4. Centerpiece: 3D Interactive Chrome Laboratory (Middle of Website UI) */}
        <InteractiveChromeSection />

        {/* 5. Pixel Experiments Gone Wild */}
        <PixelExperiments onSelectExperiment={(exp) => setSelectedExperiment(exp)} />

        {/* 5. 7-Step Design & Development Process */}
        <ProcessSection />

        {/* 6. Insights, Articles & Resources */}
        <InsightsSection onSelectArticle={(art) => setSelectedArticle(art)} />
      </main>

      {/* 7. Footer & Conversion CTA */}
      <FooterSection
        onOpenConnect={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConnect={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      <ExperimentModal
        experiment={selectedExperiment}
        onClose={() => setSelectedExperiment(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

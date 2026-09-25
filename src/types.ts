export interface CaseStudy {
  id: string;
  catalogNumber?: string; // e.g., '[001]'
  title: string;
  subtitle: string;
  client: string;
  year: string;
  roles: string[];
  description: string;
  impactMetric: string;
  deliverables: string[];
  challenge: string;
  solution: string;
  accentColor: string; // e.g. emerald, cyan, amber
  techStack: string[];
  previewType: 'fleek' | 'fkg' | 'fleek-switch' | 'professional' | 'porsche' | 'eofy' | 'reach' | 'ankh' | 'mythos' | 'chronosync';
}

export interface PixelExperiment {
  id: string;
  catalogNumber?: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  aesthetic: string;
  colorScheme: string;
  type: 'fleek-fashion' | 'fkg-gaming' | 'fleek-switch' | 'choco' | 'avant' | 'coffee' | 'kinetic' | 'shinto';
  imagePath?: string;
  altText?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  summary: string;
  details: string;
  keyDeliverable: string;
  visualType: 'discovery' | 'journey' | 'wireframe' | 'visual' | 'prototype' | 'feedback' | 'handoff';
}

export interface InsightArticle {
  id: string;
  catalogNumber: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  teaser: string;
  content: string[];
  keyTakeaway: string;
  badgeAccent: string;
}

import { CaseStudy, PixelExperiment, ProcessStep, InsightArticle } from '../types';
import { EMBEDDED_ARTWORKS } from './embeddedArtworks';

export const DESIGNER_INFO = {
  name: 'Sakib Alam',
  role: 'Multidisciplinary Graphic & UI/UX Designer',
  monogram: 'SA',
  email: 'sakibalisha447@gmail.com',
  location: 'Remote // Worldwide',
  availability: 'Available for Select Projects & Brand Collaborations',
  heroMarquee: 'Graphic Designer • UI/UX Designer • Brand Strategist • Visual Technologist • Art Director • ',
  heroHeadline: 'I turn chaotic ideas into digital masterpieces.',
  heroSubheadline:
    'I research, strategize, design, and develop to create experiences that are meant to propel business growth.',
  arenaHeadline: 'Welcome to my digital arena!',
  arenaSubheadline:
    'Here, you\'ll find a collection of my design adventures, where every pixel tells a story.',
  arenaCallout:
    'Dive in and explore the magic I\'ve woven across various industries—one delightful project at a time. Enjoy the ride!',
  footerHeadline: "Let's build something incredible together.",
  footerSubtext:
    'Thank you for visiting my portfolio. If you enjoyed what you saw or have any questions, feel free to reach out. Open for collaboration and creative design commissions.',
  socials: [
    { label: 'LinkedIn //', url: 'https://linkedin.com/in/sakib-alam', handle: 'sakib-alam' },
    { label: 'Instagram //', url: 'https://instagram.com/sakib.designs', handle: '@sakib.designs' },
    { label: 'Email //', url: 'mailto:sakibalisha447@gmail.com', handle: 'sakibalisha447@gmail.com' },
    { label: 'Dribbble //', url: 'https://dribbble.com/sakibalam', handle: 'sakibalam' },
  ],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fleek-store',
    title: 'FLEEK CLOTHING STORE //',
    subtitle: 'Official Apparel Campaign & Heavyweight T-Shirt Identity',
    client: 'Fleek Clothing Store (@designsfleek)',
    year: '2026',
    roles: ['Apparel Design', 'Poster Typography', 'Lookbook Campaign', '3D Apparel Simulation'],
    description:
      'Monumental Swiss-grid editorial apparel poster featuring giant solid black "SALE" background typography, a hyper-detailed white crewneck t-shirt with signature fluid gradient emblem, and sleek promotional action pill.',
    impactMetric: 'Sold Out in 48 Hours · +210% Social Brand Engagement',
    deliverables: [
      'Master Campaign Poster (1:1 Print Ready)',
      'Crewneck T-Shirt Chest Graphic Application',
      'Fluid Gradient Organic Camo Vector System',
      'Social E-Commerce & Lookbook Application Specs',
    ],
    challenge:
      'Designing an apparel sale campaign that cuts through fast-fashion noise without relying on garish discount badges or generic templates.',
    solution:
      'Juxtaposed brutalist monumental typography ("SALE") at architectural scale with a realistic dimensional white garment and clean Swiss hierarchy, achieving immediate high-fashion prestige.',
    accentColor: '#09090b',
    techStack: ['Adobe Illustrator', 'Photoshop 3D', 'Editorial Typography', 'Apparel Design'],
    previewType: 'fleek',
  },
  {
    id: 'porsche-racing',
    title: 'PORSCHE 911 // \'WHEN PRO IS HERE\'',
    subtitle: 'Automotive Editorial Poster & Racing Heritage Provenance',
    client: 'Motorsport Editorial & Streetwear (@designsfleek)',
    year: '2026',
    roles: ['Automotive Editorial', '3D Typography', 'Poster Design', 'Motorsport Identity'],
    description:
      'High-contrast motorsport editorial poster celebrating Porsche endurance racing heritage. Overlapping vivid orange vertical color block, bold stacked condensed headline ("WHEN PRO IS HERE"), glossy Carmine Red Cayman GTS, and monumental 3D extruded "911" isometric numerals.',
    impactMetric: '120k+ Community Reach · Featured on Design Archives & Motorsport Feeds',
    deliverables: [
      'Master 3:4 High-Resolution Editorial Print Asset',
      '3D Isometric "911" Extruded Numeral Vector Suite',
      'Endurance Racing Provenance Editorial Typeset',
      'Screenprinted Streetwear Poster & Merchandising Separations',
    ],
    challenge:
      'Balancing raw motorsport speed and high-gloss automotive photography with dense Swiss-style historic typography.',
    solution:
      'Structured a rigid vertical grid anchored by an intense Porsche-orange stripe, offsetting the heavy condensed headline with a 3D metallic orange "911" and authentic 1970s Le Mans/Daytona provenance text.',
    accentColor: '#ff4d00',
    techStack: ['3D Extrusion', 'Adobe Illustrator', 'Editorial Layout', 'Automotive Photography'],
    previewType: 'porsche',
  },
  {
    id: 'eofy-fashion',
    title: 'EOFY DEALS // EDITORIAL CAMPAIGN',
    subtitle: 'Modern Fashion Campaign & Capsule Lookbook Carousel System',
    client: 'Contemporary Fashion Label (@designsfleek)',
    year: '2026',
    roles: ['Editorial Art Direction', 'Fashion Campaign', 'Typography System', 'Social Carousel'],
    description:
      'Sophisticated Autumn/Winter promotional poster on warm mocha taupe canvas. Features monumental white condensed headline ("EOFY DEALS"), a three-frame rounded pill portrait carousel showcasing curated apparel silhouettes, and a crisp white lower editorial signoff banner.',
    impactMetric: '4.8x Return on Ad Spend · +185% E-Commerce Carousel Conversion Rate',
    deliverables: [
      'Multi-Frame Carousel Art Direction & Grid System',
      'Warm Mocha & Cream Seasonal Color Palette',
      'Typography Hierarchy for High-End Retail Promotion',
      'Responsive Digital & Print Advertising Assets',
    ],
    challenge:
      'Translating end-of-financial-year commercial discounting into an upscale, editorial lookbook aesthetic that elevates the label.',
    solution:
      'Adopted an organic mocha background paired with crisp white framing and serene studio model poses, transforming a discount event into an exclusive designer exhibition.',
    accentColor: '#aa8874',
    techStack: ['Editorial Layout', 'Typography Direction', 'Fashion Photography', 'Vector Systems'],
    previewType: 'eofy',
  },
  {
    id: 'professional-kinetic',
    title: 'PROFESSIONAL //',
    subtitle: 'Liquid Kinetic Typographic Apparel & Streetwear Screenprint Direction',
    client: 'Experimental Streetwear Label (@designsfleek)',
    year: '2026',
    roles: ['Apparel Graphics', 'Experimental Typography', 'Screenprint Direction', 'Vector Distortion'],
    description:
      'A high-impact liquid kinetic typography graphic designed for oversized heavyweight streetwear. Features an 8-tier vertical repeat of "PROFESSIONAL" sliced by an organic, high-energy S-curve fluid wave distortion.',
    impactMetric: 'Sold Out 1st Drop (500 Units in 12m) · 95k+ Saves on Pinterest & Are.na',
    deliverables: [
      'Vector Screenprint Master Files (1:1 Print Ready)',
      'Front Chest & Back Oversized Print Specs',
      'Liquid Distortion Mesh Algorithms',
      'Streetwear Lookbook & Merchandising Layout',
    ],
    challenge:
      'Standard quote and wordmark streetwear graphics are easily commodified and quickly feel static or uninspired.',
    solution:
      'Engineered a custom liquid-wave envelope distortion that produces perceptual kinetic tension and elastic motion across the garment while remaining 100% screenprint-viable.',
    accentColor: '#ffffff',
    techStack: ['Adobe Illustrator', 'Liquid Vector Mesh', 'Screenprint Separation', 'Photoshop 3D Mockup'],
    previewType: 'professional',
  },
];

export const PIXEL_EXPERIMENTS: PixelExperiment[] = [
  {
    id: 'exp-fleek-clothings',
    title: 'FLEEK CLOTHINGS',
    tagline: 'Interlocking Serif Fashion Monogram & Luxury Identity',
    category: 'Fashion & Identity',
    year: '2026',
    aesthetic: 'High-Fashion Minimalist Contrast',
    colorScheme: 'Stark White, Obsidian & Radiant Coral Red',
    type: 'fleek-fashion',
    imagePath: EMBEDDED_ARTWORKS.fleekLogo,
    altText: 'FLEEK CLOTHINGS Fashion Brand Monogram Logo',
  },
  {
    id: 'exp-fkg-gaming',
    title: 'FAIZAN KHAN GAMERZ',
    tagline: 'Gilded Circular Esports Medallion with Distressed FKG Woodblock Monogram',
    category: 'Esports & Gaming Crest',
    year: '2026',
    aesthetic: 'Antique Gold Foil Texture & Monastic Typography',
    colorScheme: 'Antique Gold, Pure White & Matte Carbon',
    type: 'fkg-gaming',
    imagePath: EMBEDDED_ARTWORKS.fkgMonogram,
    altText: 'Faizan Khan Gamerz FKG Gaming Channel Circular Crest',
  },
  {
    id: 'exp-fleek-switch',
    title: 'FLEEK GAMING LAB',
    tagline: '3D Distressed Grunge Block Wordmark with Integrated Nintendo Switch & Arcade Controller',
    category: 'Pop Culture & 3D Typography',
    year: '2026',
    aesthetic: 'Arcade Grunge 3D Isometric Letterforms',
    colorScheme: 'Pitch Black, Concrete White, Neon Coral & Cyan',
    type: 'fleek-switch',
    imagePath: EMBEDDED_ARTWORKS.fleekGaming,
    altText: 'FLEEK 3D Distressed Gaming Logo with Nintendo Switch',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discovery & Research',
    summary:
      'I start by understanding the users, their needs, and the industry to craft user-focused solutions.',
    details:
      'Through quantitative telemetry audits, stakeholder interviews, and competitive landscape analysis, I distill ambiguities into measurable product targets and precise positioning vectors.',
    keyDeliverable: 'Design Brief & User Empathy Matrix',
    visualType: 'discovery',
  },
  {
    stepNumber: 2,
    title: 'User Journey Mapping & Architecture',
    summary:
      'I plan out how users will interact, ensuring a smooth and intuitive experience from start to finish.',
    details:
      'Mapping critical user flows, cognitive friction checkpoints, and multi-state system logic. This guarantees every customer click eliminates decision fatigue and moves directly toward conversion.',
    keyDeliverable: 'Interactive Information Architecture & Task Flow',
    visualType: 'journey',
  },
  {
    stepNumber: 3,
    title: 'Wireframing & Structural Systems',
    summary:
      'I structure the design with wireframes to ensure everything is clear and easy to navigate.',
    details:
      'Low-fidelity structural blueprints built on strict 8pt spatial scales. We validate visual hierarchy, spatial density, and responsive breakpoints before touching color or typography.',
    keyDeliverable: 'Responsive Structural Wireframe Kit',
    visualType: 'wireframe',
  },
  {
    stepNumber: 4,
    title: 'Visual Identity & UI Design',
    summary:
      'I bring the design to life, focusing on aesthetics and usability, making sure it looks great and works well.',
    details:
      'Crafting distinctive art direction, bespoke typography pairings, liquid chrome accents, and modular component design systems that feel tailored, modern, and memorable.',
    keyDeliverable: 'Figma High-Fidelity UI & Design System Token Library',
    visualType: 'visual',
  },
  {
    stepNumber: 5,
    title: 'Interactive Prototyping',
    summary:
      'I create prototypes to test the design\'s functionality and smoothness before development.',
    details:
      'Realistic prototypes with micro-interactions, spring physics, scroll-linked storytelling, and state transitions to simulate production behavior and run user testing sessions.',
    keyDeliverable: 'Dynamic Clickable Prototype & Micro-Motion Specs',
    visualType: 'prototype',
  },
  {
    stepNumber: 6,
    title: 'Feedback & Iterative Refinement',
    summary:
      'I continuously refine the design based on feedback, ensuring it aligns with both user and business goals.',
    details:
      'Running rigorous critique cycles with product teams, A/B qualitative tests, and accessibility contrast audits (WCAG AA standard) to eliminate usability blind spots.',
    keyDeliverable: 'Usability Audit Report & Refined Iterations',
    visualType: 'feedback',
  },
  {
    stepNumber: 7,
    title: 'Design Handoff & Production Delivery',
    summary:
      'I collaborate with developers and print production teams to ensure every pixel is reproduced with absolute precision.',
    details:
      'I supply engineering teams and print houses with pixel-perfect tokens, responsive CSS specifications, print-ready vector assets, and comprehensive interactive guidelines.',
    keyDeliverable: 'Production-Ready Design System & Asset Package',
    visualType: 'handoff',
  },
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: 'cognitive-bias-growth',
    catalogNumber: '[ART_01]',
    title: 'How to Leverage Cognitive Bias for Business Growth',
    category: 'UX Psychology',
    readTime: '6 min read',
    date: 'March 2026',
    teaser:
      'Deconstructing Hick’s Law, Von Restorff effect, and anchoring to architect frictionless checkout and high-retention onboarding flows.',
    content: [
      'In high-growth digital products, user friction is rarely caused by lacking features—it is born from cognitive overload. When users face too many competing focal points, cognitive paralysis sets in.',
      'By implementing Hick’s Law (reducing choices at pivotal decisions) and the Von Restorff effect (making key conversion points visually singular), we can direct attention without aggressive popups.',
      'Case study: In the R3ACH platform redesign, clustering 18 telemetry metrics into 3 primary cognitive tiers increased new user task completion from 41% to 89% in week one.',
    ],
    keyTakeaway:
      'Eliminate visual clutter before adding guidance. The cleanest UI is the one that asks the fewest questions.',
    badgeAccent: '#10b981',
  },
  {
    id: 'figma-plugins-speed',
    catalogNumber: '[ART_02]',
    title: 'Top Figma Plugins to Help You Design Faster and Better',
    category: 'Workflow Engineering',
    readTime: '5 min read',
    date: 'February 2026',
    teaser:
      'The exact automation stack I use to accelerate enterprise design systems from wireframe to verified tokenized tokens in half the time.',
    content: [
      'Speed in UI design isn’t about dragging rectangles faster; it’s about eradicating repetitive manual sync operations.',
      '1. Tokens Studio: Sync design tokens directly with Git repositories, ensuring dev and design speak the identical design language.',
      '2. Automator: Batch-generate responsive device viewports, rename layers according to BEM conventions, and format exports with 1 keystroke.',
      '3. Stark Accessibility: Live WCAG contrast verification and color-blindness simulation directly inside active artboards.',
    ],
    keyTakeaway:
      'Automate the mechanical chores so your cognitive energy remains focused on strategic art direction.',
    badgeAccent: '#38bdf8',
  },
  {
    id: 'supercharge-tools',
    catalogNumber: '[ART_03]',
    title: '3 Tools to Supercharge Your Design Projects',
    category: 'Creative Stack',
    readTime: '4 min read',
    date: 'January 2026',
    teaser:
      'Bridging the chasm between static 2D graphic frames and dynamic 3D visual experiences with Spline, Motion, and modern design tools.',
    content: [
      'The modern web has outgrown flat boxes. High-conversion modern portfolios and product landing sites demand spatial presence and dynamic interaction.',
      'Tool 1: Spline 3D — Real-time interactive WebGL exports that react to cursor physics without requiring heavy 3D pipelines.',
      'Tool 2: Figma Variables & Advanced Prototyping — Turning static visual designs into fluid, responsive component systems.',
      'Tool 3: Custom Shaders & CSS Transforms — Using GPU-accelerated backdrop filters and canvas refraction to create bespoke brand atmospheres.',
    ],
    keyTakeaway:
      'Mastering the bridge between visual aesthetics and interactive prototyping makes you 10x more valuable than a static mockup designer.',
    badgeAccent: '#f59e0b',
  },
  {
    id: 'detaching-components',
    catalogNumber: '[ART_04]',
    title: 'Why Detaching Components is Essential for Design System Agility',
    category: 'Design Systems',
    readTime: '7 min read',
    date: 'December 2025',
    teaser:
      'Contrarian perspectives on component dogmatism: when to follow the system and when to deliberately break it to invent the next generation.',
    content: [
      'Design systems are meant to serve user experience and team velocity—not become architectural prisons that stifle innovation.',
      'When every team member is terrified of detaching a component, products begin to look like generic boilerplate templates. Creative differentiation dies in the name of component purity.',
      'The Sandbox Rule: When exploring novel interaction patterns, designers must have permission to branch, detach, and stress-test in a dedicated sandbox before proposing tokens to the core library.',
    ],
    keyTakeaway:
      'Rigidity produces stagnation; controlled experimentation produces the breakthrough patterns of tomorrow.',
    badgeAccent: '#ec4899',
  },
];

export const ARCHITECTURE_SPECS = {
  theme: {
    baseColor: '#070708 (Deep Cyber Void)',
    surfaceDark: '#0f0f12 (Card Surface with 1px Hairline Border)',
    primaryText: '#FFFFFF (High Legibility Crisp White)',
    secondaryText: '#A1A1AA (Zinc 400 Neutral)',
    accents: ['#10B981 Emerald', '#38BDF8 Sky Hologram', '#F472B6 Neon Violet', '#F59E0B Warm Amber'],
  },
  typography: {
    headings: 'Syne / Monument Grotesque (Geometric, Extended Display)',
    body: 'Space Grotesk (Humanist Technical Sans)',
    code: 'JetBrains Mono (Tabular numerals, editorial indexes, brackets)',
  },
  layoutBlueprints: [
    {
      section: 'Navigation Bar (Fixed/Sticky)',
      gridCols: 'Flex row, justify-between, items-center',
      padding: 'px-6 py-4 md:px-12 (Max 1440px container)',
      specs: 'Adheres to 3-Zone Contract: [Brand Monogram] — [5 Nav Anchors] — [CTA Brackets]',
    },
    {
      section: 'Hero Section',
      gridCols: 'Single column with absolute overlay 3D Canvas center and continuous marquee ribbon',
      padding: 'pt-32 pb-24 px-6 md:px-12',
      specs: 'Interlocking 3D chrome toruses with mouse tilt, responsive typography with text-wrap: balance',
    },
    {
      section: 'Featured Work & Case Studies Grid',
      gridCols: '1 col on mobile, 2 cols on tablet/desktop with catalog indexes [001] to [004]',
      padding: 'py-24 px-6 md:px-12',
      specs: 'Hairline cyber borders, corner brackets, interactive mockup preview, full modal drawer',
    },
    {
      section: 'Pixel Experiments Showcase',
      gridCols: 'Horizontal scroll flex strip with snap-x and custom cyber drag controls',
      padding: 'py-20 px-6 md:px-12',
      specs: '5 unique visual studies: typography distortion, 3D fluid caramel, high-contrast monochrome',
    },
    {
      section: 'Design & Development Process',
      gridCols: 'Split 12-column grid: 5 cols interactive accordion list + 7 cols synchronized visual canvas',
      padding: 'py-24 px-6 md:px-12',
      specs: 'Interactive step selection swaps live mockups (Sticky wall, wireframes, code inspector)',
    },
    {
      section: 'Insights & Resources',
      gridCols: '4-column responsive card grid (1 col mobile, 2 col tablet, 4 col desktop)',
      padding: 'py-20 px-6 md:px-12',
      specs: 'Clean unboxed metadata, zero-pill discipline, full modal article reader',
    },
    {
      section: 'Footer & Conversion Marquee',
      gridCols: 'Full-width marquee ribbon, centered 3D focal object, interactive project booking drawer',
      padding: 'pt-20 pb-16 px-6 md:px-12',
      specs: 'Instant email clipboard copy with toast feedback, direct social directory',
    },
  ],
};

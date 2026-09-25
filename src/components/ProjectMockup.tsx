import React from 'react';
import { EMBEDDED_ARTWORKS } from '../data/embeddedArtworks';

interface ProjectMockupProps {
  type: 'fleek' | 'porsche' | 'eofy' | 'professional' | 'fkg' | 'fleek-switch' | string;
  className?: string;
  interactive?: boolean;
}

const DEFAULT_ORIGINAL_MAP: Record<string, { src: string; alt: string; bg: string }> = {
  fleek: {
    src: EMBEDDED_ARTWORKS.fleekSale,
    alt: 'FLEEK CLOTHING STORE Official T-Shirt Apparel Campaign Poster',
    bg: '#e8e8e8',
  },
  porsche: {
    src: EMBEDDED_ARTWORKS.porsche911,
    alt: 'PORSCHE 911 "WHEN PRO IS HERE" Automotive Editorial Poster',
    bg: '#000000',
  },
  eofy: {
    src: EMBEDDED_ARTWORKS.eofyDeals,
    alt: 'EOFY DEALS Modern Fashion Editorial Campaign Carousel Poster',
    bg: '#aa8876',
  },
  professional: {
    src: EMBEDDED_ARTWORKS.professionalTshirt,
    alt: 'PROFESSIONAL Liquid Kinetic Typographic Apparel T-Shirt Graphic',
    bg: '#0b0b0e',
  },
  fkg: {
    src: EMBEDDED_ARTWORKS.fkgMonogram,
    alt: 'FAIZAN KHAN GAMERZ Gilded Circular Medallion Crest',
    bg: '#c49d6c',
  },
  'fleek-switch': {
    src: EMBEDDED_ARTWORKS.fleekGaming,
    alt: 'FLEEK GAMING LAB 3D Distressed Grunge Console Wordmark',
    bg: '#000000',
  },
};

export const ProjectMockup: React.FC<ProjectMockupProps> = ({
  type,
  className = '',
}) => {
  const item = DEFAULT_ORIGINAL_MAP[type] || {
    src: EMBEDDED_ARTWORKS.fleekSale,
    alt: `${type} Artwork`,
    bg: '#09090b',
  };

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden select-none transition-all duration-300 ${className}`}
      style={{ backgroundColor: item.bg }}
    >
      {/* 1:1 Original Untouched Artwork Display */}
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-contain pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};

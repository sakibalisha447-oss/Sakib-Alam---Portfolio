// Persistent storage and state management for Sakib Alam's original 1:1 high-resolution artwork files
import { EMBEDDED_ARTWORKS } from '../data/embeddedArtworks';

const STORAGE_KEY = 'sakib_portfolio_artworks_v1';

export interface ArtworkData {
  id: string; // 'fleek' | 'porsche' | 'eofy' | 'professional' | experiment ids
  fileName: string;
  dataUrl: string;
  timestamp: number;
}

const DEFAULT_ARTWORKS: Record<string, ArtworkData> = {
  'exp-fleek-clothings': {
    id: 'exp-fleek-clothings',
    fileName: 'fleek-logo.png',
    dataUrl: EMBEDDED_ARTWORKS.fleekLogo,
    timestamp: 0,
  },
  'exp-fkg-gaming': {
    id: 'exp-fkg-gaming',
    fileName: 'fkg-monogram.png',
    dataUrl: EMBEDDED_ARTWORKS.fkgMonogram,
    timestamp: 0,
  },
  'exp-fleek-switch': {
    id: 'exp-fleek-switch',
    fileName: 'fleek-gaming-3d.png',
    dataUrl: EMBEDDED_ARTWORKS.fleekGaming,
    timestamp: 0,
  },
  'exp-professional-kinetic': {
    id: 'exp-professional-kinetic',
    fileName: 'professional-tshirt.png',
    dataUrl: EMBEDDED_ARTWORKS.professionalTshirt,
    timestamp: 0,
  },
  'professional': {
    id: 'professional',
    fileName: 'professional-tshirt.png',
    dataUrl: EMBEDDED_ARTWORKS.professionalTshirt,
    timestamp: 0,
  },
};

export function getStoredArtworks(): Record<string, ArtworkData> {
  const result: Record<string, ArtworkData> = { ...DEFAULT_ARTWORKS };
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.assign(result, parsed);
    }
  } catch (e) {
    console.warn('LocalStorage unavailable or disabled, using defaults', e);
  }
  return result;
}

export function saveArtwork(id: string, fileName: string, dataUrl: string): void {
  try {
    const current = getStoredArtworks();
    current[id] = {
      id,
      fileName,
      dataUrl,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (storageErr) {
      console.warn('LocalStorage quota exceeded; keeping in memory for current session', storageErr);
    }
    window.dispatchEvent(new CustomEvent('artwork-updated', { detail: { id, dataUrl } }));
  } catch (e) {
    console.error('Failed to save artwork', e);
  }
}

export function removeArtwork(id: string): void {
  try {
    const current = getStoredArtworks();
    delete current[id];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      // ignore
    }
    const fallbackUrl = DEFAULT_ARTWORKS[id]?.dataUrl || null;
    window.dispatchEvent(new CustomEvent('artwork-updated', { detail: { id, dataUrl: fallbackUrl } }));
  } catch (e) {
    console.error('Failed to delete artwork', e);
  }
}


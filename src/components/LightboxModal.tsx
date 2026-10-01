import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';
import type { GalleryItem } from '../data/types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/95 backdrop-blur-2xl animate-fadeIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-charcoal-900/80 border border-white/10 text-ivory-soft hover:text-gold hover:border-gold transition-all"
        aria-label="Close Lightbox"
      >
        <X size={22} />
      </button>

      {/* Prev Button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 sm:left-8 z-40 p-3.5 rounded-full bg-charcoal-900/80 border border-white/10 text-ivory hover:text-gold hover:border-gold transition-all hover:scale-110"
        aria-label="Previous photo"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 sm:right-8 z-40 p-3.5 rounded-full bg-charcoal-900/80 border border-white/10 text-ivory hover:text-gold hover:border-gold transition-all hover:scale-110"
        aria-label="Next photo"
      >
        <ChevronRight size={24} />
      </button>

      {/* Center Image Container */}
      <div className="relative max-w-5xl max-h-[85vh] w-full px-4 sm:px-12 flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] max-h-[70vh] bg-charcoal-950 flex items-center justify-center">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto object-contain select-none"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="mt-4 p-4 rounded-xl glass-card border border-white/10 max-w-2xl w-full text-center space-y-1.5">
          <div className="flex items-center justify-between text-xs text-gold-300 font-semibold tracking-widest uppercase">
            <span className="px-2.5 py-0.5 rounded bg-gold/10 border border-gold/20">
              {currentItem.category}
            </span>
            <span>
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <h3 className="font-serif text-lg font-bold text-ivory">
            {currentItem.title}
          </h3>

          <p className="text-xs text-ivory-soft/85 font-light">
            {currentItem.caption}
          </p>

          <div className="pt-2 border-t border-white/10 flex items-center justify-around text-[11px] text-ivory-muted">
            {currentItem.location && (
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-gold" /> {currentItem.location}
              </span>
            )}
            {currentItem.photographerCredit && (
              <span className="flex items-center gap-1">
                <Camera size={12} className="text-gold" /> {currentItem.photographerCredit}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

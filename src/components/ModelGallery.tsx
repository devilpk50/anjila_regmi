import React, { useState } from 'react';
import { Eye, Camera } from 'lucide-react';
import { galleryData } from '../data/gallery';
import type { GalleryItem } from '../data/types';

interface ModelGalleryProps {
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
}

export const ModelGallery: React.FC<ModelGalleryProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', 'FASHION', 'PORTRAITS', 'EDITORIAL', 'TRADITIONAL', 'STAGE', 'BEHIND THE SCENES'];

  const filteredItems = selectedCategory === 'ALL'
    ? galleryData
    : galleryData.filter(
        item => item.category.toUpperCase() === selectedCategory.toUpperCase()
      );

  return (
    <section id="gallery" className="relative py-24 bg-charcoal-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Camera size={13} className="text-gold" />
            <span>FASHION & EDITORIAL</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            BEYOND THE <span className="text-gold-gradient italic font-cormorant">MUSIC</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Style. Presence. Expression.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gold text-charcoal-950 shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-105'
                  : 'glass-card text-ivory-soft hover:text-gold hover:border-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(filteredItems, idx)}
              className="relative rounded-2xl overflow-hidden glass-card border border-gold/15 group cursor-pointer shadow-xl hover:border-gold/50 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className={`relative w-full ${item.aspectRatio === 'landscape' ? 'aspect-[16/10]' : 'aspect-[3/4]'} bg-charcoal-900 overflow-hidden`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Permanent subtle category tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-charcoal-950/80 backdrop-blur-md text-[10px] uppercase tracking-widest text-gold-200 border border-white/10">
                  {item.category}
                </div>

                {/* Center View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold/90 text-charcoal-950 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye size={22} />
                  </div>
                </div>

                {/* Bottom Caption Overlay on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-300 font-semibold block mb-1">
                    {item.location || 'Official Editorial'}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-ivory line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-soft/80 line-clamp-2 mt-1 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

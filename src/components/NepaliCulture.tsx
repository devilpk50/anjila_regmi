import React from 'react';
import { Mountain, Sparkles, Feather, Compass } from 'lucide-react';
import { artistData } from '../data/artist';

export const NepaliCulture: React.FC = () => {
  return (
    <section id="culture" className="relative py-28 bg-charcoal-900 overflow-hidden border-y border-gold/15">
      {/* Background Dhaka / Mandala Pattern */}
      <div className="absolute inset-0 dhaka-pattern opacity-30 pointer-events-none" />

      {/* Subtle Himalayan Silhouette vector in background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-10 pointer-events-none flex items-end justify-center overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full text-gold fill-current preserve-3d" preserveAspectRatio="none">
          <path d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,165.3C960,139,1056,117,1152,133.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Cultural Philosophy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
                <Mountain size={13} className="text-gold" />
                <span>CULTURAL HERITAGE</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
                ROOTED IN <span className="text-gold-gradient italic font-cormorant">NEPAL</span>
              </h2>
              <div className="w-20 h-[2px] bg-gradient-to-r from-gold to-transparent" />
            </div>

            <blockquote className="font-cormorant text-2xl sm:text-3xl text-gold-100 font-light italic border-l-2 border-gold/40 pl-5 leading-relaxed">
              "Celebrating Nepali music, culture and creativity through a modern artistic voice."
            </blockquote>

            <p className="text-ivory-soft/85 text-sm sm:text-base leading-relaxed font-light">
              From the serene echoes of the Himalayas to the vibrant folk rhythms of regional festivals, Nepali traditions are woven into every melody. Anjila Regmi embraces classical folk aesthetics, Dhaka textures, and regional tales, bringing them onto modern stages and digital screens worldwide.
            </p>

            {/* Cultural Highlights Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-card border border-gold/20 flex items-start gap-3.5">
                <span className="p-2 rounded-lg bg-gold/15 text-gold shrink-0">
                  <Feather size={18} />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-ivory">Authentic Folk Rhythms</h4>
                  <p className="text-xs text-ivory-muted mt-0.5">
                    Infusing Lok Dohori charm, madal grooves, and regional lyrical richness.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-gold/20 flex items-start gap-3.5">
                <span className="p-2 rounded-lg bg-gold/15 text-gold shrink-0">
                  <Compass size={18} />
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-ivory">Modern Global Fusion</h4>
                  <p className="text-xs text-ivory-muted mt-0.5">
                    Presenting traditional aesthetics through sleek editorial visuals and modern sound design.
                  </p>
                </div>
              </div>
            </div>

            {/* Devanagari Callout */}
            <div className="p-4 rounded-xl bg-charcoal-950/70 border border-gold/20 flex items-center justify-between">
              <div>
                <span className="font-nepali text-lg sm:text-xl text-gold-200 font-semibold block">
                  नेपाली कला, संस्कृति र संगीतको पहिचान
                </span>
                <span className="text-[11px] text-ivory-muted">Art, Culture & Sonic Identity of Nepal</span>
              </div>
              <Sparkles size={18} className="text-gold shrink-0" />
            </div>

          </div>

          {/* Right Column: Cultural Portrait with Annapurna Backdrop */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gold/30 group">
              <img
                src={artistData.cultureImage}
                alt="Anjila Regmi - Rooted in Nepal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-gold/30">
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-bold block mb-1">
                  Heritage Editorial
                </span>
                <p className="font-serif text-sm font-bold text-ivory">
                  Traditional Silk & Himalayan Splendor
                </p>
                <p className="text-xs text-ivory-soft/80 mt-1 font-light">
                  Capturing the majestic harmony of Nepali tradition and contemporary elegance.
                </p>
              </div>
            </div>

            {/* Corner Decorative Golden Accents */}
            <div className="hidden sm:block absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-gold" />
            <div className="hidden sm:block absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-gold" />
          </div>

        </div>

      </div>
    </section>
  );
};

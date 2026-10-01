import React from 'react';
import { Mic2, Sparkles, Music, Video, UserCheck, Heart } from 'lucide-react';
import { artistData } from '../data/artist';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-charcoal-950 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-velvet-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Sparkles size={12} className="text-gold" />
            <span>MEET ANJILA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            THE <span className="text-gold-gradient italic font-cormorant">ARTIST</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gold/20 group">
              <img
                src={artistData.cultureImage}
                alt="Anjila Regmi Editorial Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              
              {/* Floating Quote Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card border border-gold/30">
                <p className="font-cormorant italic text-sm text-gold-100 leading-relaxed">
                  "Music is my bridge between timeless Nepali roots and contemporary stage expressions."
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[11px] text-ivory-muted uppercase tracking-wider">
                  <span className="text-gold font-semibold">Anjila Regmi</span>
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            {/* Decorative Offset Border Frame */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-2xl border border-gold/20 -z-10 pointer-events-none" />
          </div>

          {/* Right Column: Biography & Artist Facts */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory leading-snug">
                Harmonizing Voice, Charisma, and Passion across Nepali Music
              </h3>
              
              <div className="space-y-4 text-ivory-soft/85 text-sm sm:text-base leading-relaxed font-light">
                {artistData.aboutBio.map((paragraph, idx) => (
                  <p key={idx} className="tracking-wide">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Artist Facts Grid */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold mb-4 flex items-center gap-2">
                <UserCheck size={14} className="text-gold" />
                <span>Verified Artist Facts</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl glass-card border border-gold/15 flex items-start gap-3">
                  <Mic2 size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Discipline</span>
                    <span className="text-xs sm:text-sm font-semibold text-ivory">Nepali Singer</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-card border border-gold/15 flex items-start gap-3">
                  <Sparkles size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Presence</span>
                    <span className="text-xs sm:text-sm font-semibold text-ivory">Stage Performer</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-card border border-gold/15 flex items-start gap-3">
                  <Heart size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Visuals</span>
                    <span className="text-xs sm:text-sm font-semibold text-ivory">Fashion Model</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-card border border-gold/15 flex items-start gap-3">
                  <Video size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Digital</span>
                    <span className="text-xs sm:text-sm font-semibold text-ivory">YouTube Creator</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl glass-card border border-gold/15 flex items-start gap-3 sm:col-span-2">
                  <Music size={18} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Repertoire</span>
                    <span className="text-xs sm:text-sm font-semibold text-ivory">Modern Pop, Lok Dohori & Festive</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note regarding verified data integrity */}
            <div className="p-3 rounded-lg bg-charcoal-900 border border-white/5 text-[11px] text-ivory-muted flex items-center justify-between">
              <span>Verified Artist Portfolio & Profile</span>
              <span className="text-gold">Official Digital Identity</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

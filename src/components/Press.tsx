import React from 'react';
import { Newspaper, Sparkles, ExternalLink } from 'lucide-react';
import { pressData } from '../data/press';

export const Press: React.FC = () => {
  return (
    <section id="press" className="relative py-24 bg-charcoal-900 border-t border-gold/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Newspaper size={13} className="text-gold" />
            <span>MEDIA COVERAGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            IN THE <span className="text-gold-gradient italic font-cormorant">PRESS</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Verified music reviews, interviews, and editorial highlights.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Press Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pressData.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 border border-gold/15 group hover:border-gold/45 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between text-left"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-gold/10 text-gold text-[10px] uppercase tracking-widest font-bold border border-gold/20">
                    {item.tag}
                  </span>
                  <span className="text-xs text-ivory-muted">{item.date}</span>
                </div>

                <span className="text-xs uppercase tracking-wider text-gold-300 font-semibold block">
                  {item.publication}
                </span>

                <h3 className="font-serif text-lg font-bold text-ivory group-hover:text-gold transition-colors leading-snug">
                  "{item.headline}"
                </h3>

                <p className="text-xs text-ivory-soft/85 font-light leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gold font-medium">
                <span className="flex items-center gap-1 text-[11px] text-ivory-muted">
                  <Sparkles size={11} className="text-gold" /> Media Archive
                </span>
                <span className="group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                  Read Feature <ExternalLink size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

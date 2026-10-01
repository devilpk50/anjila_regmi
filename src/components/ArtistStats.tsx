import React from 'react';
import { artistStats } from '../data/artist';
import { Award, Music2, Mic, Globe, ShieldCheck } from 'lucide-react';

export const ArtistStats: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Award size={20} className="text-gold" />;
      case 1:
        return <Music2 size={20} className="text-gold" />;
      case 2:
        return <Mic size={20} className="text-gold" />;
      case 3:
      default:
        return <Globe size={20} className="text-gold" />;
    }
  };

  return (
    <section className="relative py-16 bg-charcoal-900 border-y border-gold/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {artistStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 text-center relative group hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gold/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {getIcon(idx)}
              </div>

              {/* Stat Value */}
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient tracking-tight mb-1">
                {stat.value}
              </div>

              {/* Label */}
              <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-ivory mb-2">
                {stat.label}
              </h4>

              {/* Subtitle description */}
              <p className="text-[11px] text-ivory-muted/90 line-clamp-2">
                {stat.description}
              </p>

              {/* Verified pill */}
              <div className="mt-3 inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                <ShieldCheck size={11} />
                <span>Verified Metric</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

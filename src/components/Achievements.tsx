import React, { useState } from 'react';
import { Award, Trophy, Film, Globe2, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { majorAwardsData, nominationsData, moviePlaybackData, internationalToursData } from '../data/achievements';

export const Achievements: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'awards' | 'movies' | 'tours' | 'nominations'>('awards');

  return (
    <section id="achievements" className="relative py-24 bg-charcoal-900 border-t border-gold/15 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-velvet-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Trophy size={13} className="text-gold" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            AWARDS & <span className="text-gold-gradient italic font-cormorant">ACHIEVEMENTS</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Verified musical accolades, blockbuster cinema playback songs, and global international concert tours.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'awards'
                ? 'bg-gold text-charcoal-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                : 'glass-card text-ivory-soft hover:text-gold hover:border-gold/40'
            }`}
          >
            <Trophy size={14} />
            <span>Major Awards ({majorAwardsData.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('movies')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'movies'
                ? 'bg-gold text-charcoal-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                : 'glass-card text-ivory-soft hover:text-gold hover:border-gold/40'
            }`}
          >
            <Film size={14} />
            <span>Movie Playback ({moviePlaybackData.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('tours')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'tours'
                ? 'bg-gold text-charcoal-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                : 'glass-card text-ivory-soft hover:text-gold hover:border-gold/40'
            }`}
          >
            <Globe2 size={14} />
            <span>Global Shows (7+ Nations)</span>
          </button>

          <button
            onClick={() => setActiveTab('nominations')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'nominations'
                ? 'bg-gold text-charcoal-950 shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                : 'glass-card text-ivory-soft hover:text-gold hover:border-gold/40'
            }`}
          >
            <Star size={14} />
            <span>Award Nominations ({nominationsData.length})</span>
          </button>
        </div>

        {/* Tab 1: Major Awards */}
        {activeTab === 'awards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {majorAwardsData.map((award) => (
              <div
                key={award.id}
                className="glass-card rounded-2xl p-6 border border-gold/25 group hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider border border-gold/30">
                      {award.year}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      <CheckCircle2 size={12} /> Winner
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gold/10 text-gold border border-gold/20 shrink-0 group-hover:scale-110 transition-transform">
                      <Award size={22} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-ivory group-hover:text-gold transition-colors leading-snug">
                        {award.awardName}
                      </h3>
                      <p className="text-xs text-gold-300 font-semibold tracking-wide uppercase mt-0.5">
                        {award.category}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-charcoal-950/70 border border-white/5 mb-3">
                    <span className="text-[10px] text-ivory-muted uppercase tracking-wider block">Awarded For Track</span>
                    <p className="font-serif text-sm font-bold text-ivory">"{award.songTitle}"</p>
                  </div>

                  {award.description && (
                    <p className="text-xs text-ivory-soft/80 font-light leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-ivory-muted">
                  <span className="flex items-center gap-1 text-gold">
                    <Sparkles size={12} /> Verified Trophy
                  </span>
                  <span>{award.organization}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Movie Playback Vocals */}
        {activeTab === 'movies' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {moviePlaybackData.map((movie) => (
              <div
                key={movie.id}
                className="glass-card rounded-2xl p-6 border border-gold/20 group hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-gold/15 text-gold text-xs font-semibold">
                      {movie.year}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gold-300 tracking-wider">
                      Nepali Cinema
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-gold/10 text-gold border border-gold/20 w-fit mb-3 group-hover:scale-110 transition-transform">
                    <Film size={24} />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                    {movie.movieTitle}
                  </h3>

                  <div className="mt-3 p-2.5 rounded-lg bg-charcoal-950/80 border border-white/5 space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Movie Track</span>
                    <p className="text-xs font-bold text-gold-200">"{movie.songTitle}"</p>
                  </div>

                  <p className="text-xs text-ivory-soft/80 font-light mt-3 leading-relaxed">
                    {movie.details}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-ivory-muted">
                  <span className="text-gold font-medium">{movie.role}</span>
                  <CheckCircle2 size={13} className="text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Global Shows & International Tours */}
        {activeTab === 'tours' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl glass-card border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold border border-gold/30 flex items-center justify-center shrink-0">
                  <Globe2 size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ivory">International Stage Footprint</h3>
                  <p className="text-xs text-ivory-muted">Headline concerts, diaspora celebrations, and cultural festivals worldwide.</p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                <CheckCircle2 size={14} /> 350+ Total Live Concerts
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {internationalToursData.map((tour, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-5 border border-gold/15 hover:border-gold/40 transition-all text-left group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">🌍</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-300 px-2 py-0.5 rounded bg-gold/10 border border-gold/20">
                      Live Tour
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-ivory group-hover:text-gold transition-colors">
                    {tour.country}
                  </h4>
                  <p className="text-xs text-gold-200/90 font-medium mb-2">{tour.city}</p>
                  <p className="text-xs text-ivory-muted font-light">{tour.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Award Nominations */}
        {activeTab === 'nominations' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fadeIn">
            {nominationsData.map((nom) => (
              <div
                key={nom.id}
                className="glass-card rounded-xl p-4 border border-white/10 hover:border-gold/30 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-gold uppercase px-2 py-0.5 rounded bg-gold/10">
                    {nom.year}
                  </span>
                  <span className="text-[10px] text-ivory-muted uppercase font-semibold">
                    Nominee
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-ivory leading-snug">
                  {nom.awardName}
                </h4>
                <p className="text-xs text-gold-300 font-medium mt-1">{nom.category}</p>
                <p className="text-xs text-ivory-muted font-light mt-1">Track: "{nom.songTitle}"</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

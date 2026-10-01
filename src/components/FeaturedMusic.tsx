import React, { useState } from 'react';
import { Play, Sparkles, Disc, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './Icons';
import { songsData } from '../data/songs';
import type { SongItem } from '../data/types';

interface FeaturedMusicProps {
  onOpenVideoModal: (video: { id: string; title: string; youtubeUrl: string; youtubeId: string; description: string }) => void;
}

export const FeaturedMusic: React.FC<FeaturedMusicProps> = ({ onOpenVideoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pop/Modern', 'Lok Dohori', 'Patriotic/Anthem', 'Festive/Folk'];

  const filteredSongs = selectedCategory === 'All'
    ? songsData
    : songsData.filter(s => s.category === selectedCategory);

  const handleOpenVideo = (song: SongItem) => {
    onOpenVideoModal({
      id: song.id,
      title: song.title,
      youtubeUrl: song.youtubeUrl,
      youtubeId: song.youtubeId || 'o_iRweZ-Cus',
      description: song.description,
    });
  };

  return (
    <section id="music" className="relative py-24 bg-charcoal-950 overflow-hidden">
      {/* Ambient background aura */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-red-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs uppercase tracking-[0.3em] font-semibold">
            <Disc size={13} className="text-red-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>OFFICIAL MUSIC VIDEOS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            FEATURED <span className="text-gold-gradient italic font-cormorant">MUSIC</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Watch and stream official releases directly from YouTube.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] scale-105'
                  : 'glass-card text-ivory-soft hover:text-white hover:border-red-500/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              onClick={() => handleOpenVideo(song)}
              className="glass-card rounded-2xl p-5 border border-gold/15 group hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Card Image Container */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-charcoal-900 shadow-inner">
                  <img
                    src={song.coverImage}
                    alt={song.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== '/images/A1.jpg') target.src = '/images/A1.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                  {/* Category and Year Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md glass-card border border-white/10 text-[10px] font-semibold text-gold-200 tracking-wider uppercase">
                    {song.category}
                  </div>
                  
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-charcoal-950/80 text-[10px] font-semibold text-ivory border border-white/10">
                    {song.year}
                  </div>

                  {/* Center YouTube Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.7)] transform group-hover:scale-110 active:scale-95 transition-transform">
                      <Play size={22} className="fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Title & Nepali Subtitle */}
                <div className="space-y-1 mb-3 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-ivory group-hover:text-gold transition-colors line-clamp-1">
                      {song.title}
                    </h3>
                    {song.isFeatured && (
                      <span className="p-1 rounded bg-gold/15 text-gold text-[10px]" title="Featured Track">
                        <Sparkles size={12} />
                      </span>
                    )}
                  </div>
                  {song.nepaliTitle && (
                    <p className="font-nepali text-sm text-gold-300/80">
                      {song.nepaliTitle}
                    </p>
                  )}
                  <p className="text-xs text-ivory-muted line-clamp-2 pt-1 font-light">
                    {song.description}
                  </p>
                </div>
              </div>

              {/* Single Prominent YouTube Play Button in Card Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenVideo(song);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all"
                >
                  <YoutubeIcon size={16} />
                  <span>PLAY ON YOUTUBE</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Listen on YouTube Channel Banner */}
        <div className="mt-16 p-6 rounded-2xl glass-card border border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center shrink-0">
              <YoutubeIcon size={24} />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-ivory">Want to explore all official video releases?</h4>
              <p className="text-xs text-ivory-muted">Subscribe to Anjila Regmi's official YouTube channel for all music premieres and live concerts.</p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/channel/UC-cp8JR-fh2j0AH4ZTl6gsg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] shrink-0 flex items-center gap-2"
          >
            <span>Open YouTube Channel</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};

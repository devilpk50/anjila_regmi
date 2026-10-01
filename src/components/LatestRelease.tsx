import React from 'react';
import { Play, Sparkles, Music, CheckCircle2 } from 'lucide-react';
import { YoutubeIcon } from './Icons';
import type { SongItem } from '../data/types';

interface LatestReleaseProps {
  song: SongItem;
  onPlaySong: (song: SongItem) => void;
  onOpenVideoModal: (video: { id: string; title: string; youtubeUrl: string; youtubeId: string; description: string }) => void;
  isPlaying: boolean;
}

export const LatestRelease: React.FC<LatestReleaseProps> = ({
  song,
  onPlaySong,
  onOpenVideoModal,
  isPlaying,
}) => {
  return (
    <section id="latest-release" className="relative py-16 bg-charcoal-900 border-y border-gold/10 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-gold/25 relative overflow-hidden shadow-2xl">
          
          {/* Top Decorative Banner */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-gold/15 text-gold border border-gold/30">
                <Sparkles size={18} />
              </span>
              <div>
                <span className="editorial-tag text-gold-300">Featured Premiere</span>
                <p className="text-xs text-ivory-muted">Official New Single & Music Video</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
              <CheckCircle2 size={13} />
              <span>Verified Release ({song.year})</span>
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Cover Image with Play Overlay */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-xl overflow-hidden shadow-2xl border border-gold/20">
                <img
                  src={song.coverImage}
                  alt={song.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== '/images/A1.jpg') target.src = '/images/A1.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/30 to-transparent" />
                
                {/* Center Hover Action */}
                <button
                  onClick={() => onPlaySong(song)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Play song preview"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/90 text-charcoal-950 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-110 active:scale-95 transition-transform">
                    {isPlaying ? (
                      <span className="w-4 h-4 bg-charcoal-950 rounded-sm"></span>
                    ) : (
                      <Play size={24} className="fill-charcoal-950 translate-x-0.5" />
                    )}
                  </div>
                </button>

                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md glass-card text-[11px] font-semibold text-gold-200 border border-gold/30">
                  {song.category}
                </div>
              </div>
            </div>

            {/* Song Details & CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
                  {song.singers.join(' • ')}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mt-1 mb-2">
                  {song.title}
                </h3>
                {song.nepaliTitle && (
                  <p className="font-nepali text-lg sm:text-xl text-gold-200 font-normal">
                    {song.nepaliTitle}
                  </p>
                )}
              </div>

              <p className="text-ivory-soft/85 text-sm sm:text-base leading-relaxed">
                {song.description}
              </p>

              {song.lyricsExcerpt && (
                <div className="p-4 rounded-xl bg-charcoal-950/60 border border-gold/15 italic text-sm text-gold-100 font-cormorant">
                  "{song.lyricsExcerpt}"
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onPlaySong(song)}
                  className={`px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-[0.15em] uppercase flex items-center gap-2 transition-all ${
                    isPlaying
                      ? 'bg-gold-light text-charcoal-950 shadow-[0_0_20px_rgba(212,175,55,0.6)]'
                      : 'bg-gold text-charcoal-950 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  }`}
                >
                  <Music size={16} />
                  <span>{isPlaying ? 'PAUSE PREVIEW' : 'LISTEN NOW'}</span>
                </button>

                <button
                  onClick={() =>
                    onOpenVideoModal({
                      id: song.id,
                      title: song.title,
                      youtubeUrl: song.youtubeUrl,
                      youtubeId: song.youtubeId || 'dQw4w9WgXcQ',
                      description: song.description,
                    })
                  }
                  className="px-6 py-3.5 rounded-full glass-card border border-red-500/40 text-ivory hover:text-red-400 hover:border-red-500 font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase flex items-center gap-2 transition-all"
                >
                  <YoutubeIcon size={16} className="text-red-500" />
                  <span>WATCH VIDEO</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

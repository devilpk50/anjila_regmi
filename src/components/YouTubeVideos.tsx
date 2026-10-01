import React, { useState } from 'react';
import { Play, Sparkles, Tv, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './Icons';
import { videosData, YOUTUBE_CHANNEL_URL, YOUTUBE_CHANNEL_ID } from '../data/videos';

interface YouTubeVideosProps {
  onOpenVideoModal: (video: { id: string; title: string; youtubeUrl: string; youtubeId: string; description: string }) => void;
}

export const YouTubeVideos: React.FC<YouTubeVideosProps> = ({ onOpenVideoModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Music Videos', 'Live Performances', 'Behind The Scenes', 'Vlogs', 'Special Moments'];

  const featuredVideo = videosData.find(v => v.featured) || videosData[0];

  const filteredVideos = activeCategory === 'All'
    ? videosData
    : videosData.filter(v => v.category === activeCategory);

  // Helper for image fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallback) {
      target.src = fallback;
    }
  };

  return (
    <section id="videos" className="relative py-24 bg-charcoal-900 border-t border-gold/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs uppercase tracking-[0.3em] font-semibold">
            <Tv size={13} className="text-red-500" />
            <span>OFFICIAL YOUTUBE CATALOG</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            LATEST <span className="text-gold-gradient italic font-cormorant">MUSIC VIDEOS</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Official 4K music releases, regional anthems, duets & live festival showcases.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Large Featured YouTube Spotlight Banner */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden glass-card border border-gold/30 group shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Video Thumbnail with big Play Button */}
              <div 
                className="lg:col-span-7 relative aspect-video bg-charcoal-950 overflow-hidden cursor-pointer"
                onClick={() => onOpenVideoModal(featuredVideo)}
              >
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  onError={(e) => handleImageError(e, '/images/A1.jpg')}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
                
                {/* Central Glowing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-[0_0_35px_rgba(220,38,38,0.7)] group-hover:scale-110 active:scale-95 transition-all">
                    <Play size={30} className="fill-white translate-x-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-charcoal-950/80 backdrop-blur-md text-xs font-semibold text-ivory border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>Featured Premiere</span>
                </div>

                {featuredVideo.duration && (
                  <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-charcoal-950/90 backdrop-blur-md text-xs font-semibold text-ivory border border-white/10">
                    {featuredVideo.duration}
                  </div>
                )}
              </div>

              {/* Text Info Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-5 text-left">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 font-semibold">
                  <Sparkles size={14} className="text-gold" />
                  <span>{featuredVideo.category} • {featuredVideo.year} Release</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory leading-tight group-hover:text-gold transition-colors">
                  {featuredVideo.title}
                </h3>

                <p className="text-ivory-soft/85 text-xs sm:text-sm leading-relaxed font-light">
                  {featuredVideo.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenVideoModal(featuredVideo)}
                    className="px-6 py-3 rounded-full bg-gold text-charcoal-950 font-bold text-xs tracking-widest uppercase hover:bg-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2"
                  >
                    <Play size={14} className="fill-charcoal-950" />
                    <span>Watch In Player</span>
                  </button>

                  <a
                    href={featuredVideo.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 hover:bg-red-600 hover:text-white font-semibold text-xs tracking-widest uppercase transition-all flex items-center gap-2"
                  >
                    <YoutubeIcon size={15} />
                    <span>YouTube Page</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const count = cat === 'All' ? videosData.length : videosData.filter(v => v.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] scale-105'
                    : 'glass-card text-ivory-soft hover:text-white hover:border-red-500/30'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === cat ? 'bg-black/30 text-white' : 'bg-white/10 text-ivory-muted'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onOpenVideoModal(video)}
              className="glass-card rounded-2xl overflow-hidden border border-gold/15 group hover:border-red-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-video bg-charcoal-950 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    onError={(e) => handleImageError(e, '/images/B.jpg')}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Play Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play size={18} className="fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  {video.duration && (
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-charcoal-950/90 text-[10px] font-semibold text-ivory border border-white/10">
                      {video.duration}
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-charcoal-950/80 text-[10px] font-medium text-gold-300 border border-white/10">
                    {video.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2 text-left">
                  <h4 className="font-serif text-base font-bold text-ivory group-hover:text-gold transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-xs text-ivory-muted line-clamp-2 font-light">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-xs text-red-400 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1 group-hover:text-gold transition-colors">
                  <Play size={11} className="fill-current" /> Watch Video
                </span>
                <span className="text-ivory-muted text-[10px]">{video.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Banner Callout */}
        <div className="mt-14 p-8 rounded-2xl glass-card border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-red-400 font-bold">Official Digital Channel</span>
            <h3 className="font-serif text-2xl font-bold text-ivory">
              Subscribe to Anjila Regmi on YouTube
            </h3>
            <p className="text-xs text-ivory-muted max-w-xl">
              Stay tuned for premiere music videos, acoustic live covers, tour diaries, and exclusive stage moments. Channel ID: {YOUTUBE_CHANNEL_ID}
            </p>
          </div>

          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-[0.2em] uppercase transition-all shadow-[0_0_25px_rgba(220,38,38,0.5)] flex items-center gap-2 shrink-0 hover:scale-105"
          >
            <YoutubeIcon size={18} />
            <span>SUBSCRIBE ON YOUTUBE</span>
          </a>
        </div>

      </div>
    </section>
  );
};

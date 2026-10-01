import React from 'react';
import { Play, Pause, ArrowDown, Sparkles, ExternalLink } from 'lucide-react';
import { artistData } from '../data/artist';
import { latestReleaseSong } from '../data/songs';
import type { SongItem } from '../data/types';

interface HeroProps {
  onExploreMusic: () => void;
  onPlayFeaturedSong: () => void;
  isPlayingAudio: boolean;
  featuredSong?: SongItem;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMusic,
  onPlayFeaturedSong,
  isPlayingAudio,
  featuredSong = latestReleaseSong,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal-950 pt-20 pb-16"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-velvet-900/25 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Nepali Mandala / Dhaka Pattern Overlay */}
      <div className="absolute inset-0 dhaka-pattern opacity-40 pointer-events-none" />

      {/* Decorative Sound Wave Visualizer in background */}
      <div className="absolute bottom-16 left-0 right-0 flex items-center justify-center gap-1.5 opacity-20 pointer-events-none h-16">
        {[40, 65, 80, 45, 90, 100, 70, 50, 85, 95, 60, 40, 75, 90, 55, 35, 65, 80, 45, 90, 100, 70, 50, 85, 95, 60, 40, 75, 90, 55].map((height, i) => (
          <div
            key={i}
            className="w-1 bg-gold rounded-full transition-all duration-300"
            style={{
              height: isPlayingAudio ? `${Math.sin(i + Date.now() / 200) * 30 + 40}px` : `${height * 0.4}px`,
              animation: isPlayingAudio ? `wave 1.${(i % 5) + 2}s ease-in-out infinite` : 'none',
              animationDelay: `${i * 0.05}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[82vh]">
        
        {/* Left / Center Text Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-gold/30 text-gold-200 text-xs sm:text-sm font-medium tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Sparkles size={14} className="text-gold animate-spin" style={{ animationDuration: '8s' }} />
            <span>Official Digital Portfolio</span>
            <span className="w-1 h-1 rounded-full bg-gold"></span>
            <span className="text-ivory-soft font-nepali tracking-normal text-xs">{artistData.nepaliName}</span>
          </div>

          {/* Main Editorial Title */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-ivory leading-[1.05]">
              ANJILA <br />
              <span className="text-gold-gradient italic font-cormorant font-normal tracking-wide">
                REGMI
              </span>
            </h1>
            
            <p className="font-cormorant text-xl sm:text-2xl md:text-3xl text-gold-300 tracking-widest font-light uppercase pt-1">
              Singer <span className="text-gold">•</span> Performer <span className="text-gold">•</span> Model
            </p>
          </div>

          {/* Tagline Quote */}
          <blockquote className="border-l-0 lg:border-l-2 border-gold/40 lg:pl-4 italic text-ivory-soft font-cormorant text-2xl sm:text-3xl font-light text-gold-100">
            "{artistData.tagline}"
          </blockquote>

          {/* Short Bio Description */}
          <p className="max-w-xl text-ivory-soft/85 text-sm sm:text-base leading-relaxed font-light">
            {artistData.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={onExploreMusic}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              <span>EXPLORE MUSIC</span>
              <Play size={15} className="fill-charcoal-950 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href={artistData.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full glass-card hover:border-gold/60 text-ivory font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:text-gold flex items-center gap-2"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink size={15} />
            </a>
          </div>

          {/* Quick Verified Attributes Pill */}
          <div className="pt-4 flex items-center gap-6 text-xs text-ivory-muted tracking-wider uppercase">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Bookings 2026</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>

        </div>

        {/* Right Column: Large Cinematic Portrait */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          
          {/* Subtle Outer Glowing Frame */}
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl p-2.5 bg-gradient-to-b from-gold/30 via-white/5 to-gold/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gold/25 group">
            
            {/* Background Aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-velvet-700/20 to-gold/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-full h-full rounded-xl overflow-hidden bg-charcoal-900">
              <img
                src={artistData.heroImage}
                alt="Anjila Regmi - Nepali Singer, Performer & Model"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-gold/20 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">Latest Release Spotlight</p>
                  <h2 className="text-sm font-serif font-bold text-ivory truncate">{featuredSong.title}</h2>
                </div>
                <button
                  onClick={onPlayFeaturedSong}
                  className="p-3 rounded-full bg-gold text-charcoal-950 hover:bg-gold-light hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] shrink-0"
                  title={isPlayingAudio ? "Pause Audio Preview" : "Play Track Preview"}
                >
                  {isPlayingAudio ? (
                    <Pause size={14} className="fill-charcoal-950" />
                  ) : (
                    <Play size={14} className="fill-charcoal-950 translate-x-0.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Corner Luxury Accent Marks */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gold" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold" />
          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-20">
        <a href="#latest-release" className="flex flex-col items-center gap-1">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-300 font-medium">Scroll to Discover</span>
          <div className="w-5 h-8 rounded-full border border-gold/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
          </div>
          <ArrowDown size={12} className="text-gold animate-pulse -mt-1" />
        </a>
      </div>
    </section>
  );
};

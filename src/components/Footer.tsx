import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { YoutubeIcon, FacebookIcon, InstagramIcon, SpotifyIcon } from './Icons';
import { artistData } from '../data/artist';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal-950 text-ivory border-t border-gold/20 pt-16 pb-12 overflow-hidden">
      {/* Background Dhaka pattern subtle */}
      <div className="absolute inset-0 dhaka-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-start">
          
          {/* Col 1: Large Brand Header */}
          <div className="md:col-span-6 space-y-4 text-left">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-gold-600 via-gold to-gold-light p-[1.5px] shadow-[0_0_15px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full rounded-full bg-charcoal-950 flex items-center justify-center">
                  <span className="font-cinzel text-sm font-black text-gold-gradient tracking-tighter">AR</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-[0.25em] text-ivory group-hover:text-gold transition-colors block leading-tight">
                  ANJILA REGMI
                </span>
                <span className="font-nepali text-gold-300 text-sm tracking-normal">
                  {artistData.nepaliName}
                </span>
              </div>
            </a>

            <p className="font-cormorant text-lg sm:text-xl text-gold-200 font-light tracking-widest uppercase">
              Singer • Performer • Model
            </p>

            <p className="text-xs text-ivory-muted max-w-md font-light leading-relaxed">
              Official digital home celebrating Nepali music, cultural artistry, and contemporary stage performances.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={artistData.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/10 text-ivory-soft hover:text-red-500 hover:border-red-500/50 flex items-center justify-center transition-all shadow-md"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href={artistData.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/10 text-ivory-soft hover:text-blue-400 hover:border-blue-400/50 flex items-center justify-center transition-all shadow-md"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={artistData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/10 text-ivory-soft hover:text-pink-400 hover:border-pink-400/50 flex items-center justify-center transition-all shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={artistData.socialLinks.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-900 border border-white/10 text-ivory-soft hover:text-emerald-400 hover:border-emerald-400/50 flex items-center justify-center transition-all shadow-md"
                aria-label="Spotify"
              >
                <SpotifyIcon size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (5 core links) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-300 font-bold border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.18em] text-ivory-soft/80">
              <li>
                <a href="#home" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About</a>
              </li>
              <li>
                <a href="#music" className="hover:text-gold transition-colors">Music</a>
              </li>
              <li>
                <a href="#videos" className="hover:text-gold transition-colors">Videos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Verification & Back to top */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-300 font-bold border-b border-white/10 pb-2">
              Official Portal
            </h4>
            
            <div className="p-4 rounded-xl glass-card border border-gold/20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold">
                <Sparkles size={14} />
                <span>Verified Artist Profile</span>
              </div>
              <p className="text-[11px] text-ivory-muted leading-relaxed">
                Kathmandu, Nepal • Global Touring & Studio Releases
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-3 rounded-xl bg-charcoal-900 hover:bg-gold/15 border border-white/10 hover:border-gold/40 text-xs uppercase tracking-widest text-ivory-soft hover:text-gold font-semibold transition-all flex items-center justify-center gap-2 group"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & developer credit row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-muted text-center md:text-left">
          <p>© 2026 Anjila Regmi. All Rights Reserved.</p>
          
          <div className="flex items-center gap-2 py-1 px-3.5 rounded-full bg-charcoal-900/80 border border-gold/20 shadow-sm">
            <span className="text-ivory-muted/80 text-[11px] uppercase tracking-wider">Developed by</span>
            <span className="font-semibold text-gold hover:text-gold-light transition-colors tracking-wide">
              Siram Technologies
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-gold/10 text-gold-300 text-[10px] uppercase font-bold tracking-wider border border-gold/20">
              Official Website
            </span>
            <span>Crafted for Nepali Music Excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

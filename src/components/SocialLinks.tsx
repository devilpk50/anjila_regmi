import React from 'react';
import { ExternalLink, Radio } from 'lucide-react';
import { YoutubeIcon, FacebookIcon, InstagramIcon } from './Icons';
import { artistData } from '../data/artist';

export const SocialLinks: React.FC = () => {
  return (
    <section className="relative py-20 bg-charcoal-950 border-t border-gold/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Radio size={13} className="text-gold" />
            <span>CONNECT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            FOLLOW THE <span className="text-gold-gradient italic font-cormorant">JOURNEY</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Stay connected with Anjila's music, performances and latest updates across official digital platforms.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* YouTube Card */}
          <a
            href={artistData.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-7 border border-red-500/25 group hover:border-red-500 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center justify-between shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[0_0_20px_rgba(220,38,38,0.2)]">
              <YoutubeIcon size={32} />
            </div>

            <div className="space-y-1 mb-4">
              <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-red-400 transition-colors">
                YouTube Channel
              </h3>
              <p className="text-xs text-ivory-muted font-light">
                Official Music Videos, Live Covers & Vlogs
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 group-hover:text-red-300">
              <span>Subscribe Channel</span>
              <ExternalLink size={13} />
            </span>
          </a>

          {/* Facebook Card */}
          <a
            href={artistData.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-7 border border-blue-500/25 group hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center justify-between shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <FacebookIcon size={32} />
            </div>

            <div className="space-y-1 mb-4">
              <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-blue-400 transition-colors">
                Facebook Page
              </h3>
              <p className="text-xs text-ivory-muted font-light">
                Daily Updates, Stage Announcements & Photos
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300">
              <span>Follow Official Page</span>
              <ExternalLink size={13} />
            </span>
          </a>

          {/* Instagram Card */}
          <a
            href={artistData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-7 border border-pink-500/25 group hover:border-pink-500 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center justify-between shadow-xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-yellow-500/15 via-pink-500/15 to-purple-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <InstagramIcon size={32} />
            </div>

            <div className="space-y-1 mb-4">
              <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-pink-400 transition-colors">
                Instagram Feed
              </h3>
              <p className="text-xs text-ivory-muted font-light">
                Fashion Editorial, Backstage & Reels
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-400 group-hover:text-pink-300">
              <span>View Profile</span>
              <ExternalLink size={13} />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Users, Sparkles, ExternalLink, Music } from 'lucide-react';
import { collaborationsData } from '../data/collaborations';

interface CollaborationsProps {
  onExploreArtistMusic: () => void;
}

export const Collaborations: React.FC<CollaborationsProps> = ({ onExploreArtistMusic }) => {
  return (
    <section id="collaborations" className="relative py-24 bg-charcoal-900 border-t border-gold/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Users size={13} className="text-gold" />
            <span>ARTISTIC ALLIANCES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            INDUSTRY <span className="text-gold-gradient italic font-cormorant">COLLABORATIONS</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Verified musical partnerships and collaborative releases across the Nepali music industry.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborationsData.map((collab) => (
            <div
              key={collab.id}
              className="glass-card rounded-2xl p-6 border border-gold/15 group hover:border-gold/45 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header with Artist Name & Role */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold block">
                      {collab.role}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-ivory group-hover:text-gold transition-colors">
                      {collab.artistName}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                    <Music size={16} />
                  </div>
                </div>

                {/* Project / Song Name */}
                <div>
                  <span className="text-[11px] text-ivory-muted uppercase tracking-wider block">
                    Collaboration Project:
                  </span>
                  <p className="text-sm font-semibold text-ivory-soft mt-0.5">
                    {collab.songTitle}
                  </p>
                </div>

                {/* Quote / Summary */}
                {collab.quote && (
                  <p className="text-xs text-ivory-muted/90 font-light italic leading-relaxed bg-charcoal-950/40 p-3 rounded-lg border border-white/5">
                    "{collab.quote}"
                  </p>
                )}
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <Sparkles size={11} /> Verified Credit
                </span>

                <button
                  onClick={onExploreArtistMusic}
                  className="text-xs font-semibold uppercase tracking-wider text-gold-300 hover:text-gold flex items-center gap-1 transition-colors"
                >
                  <span>Listen Tracks</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

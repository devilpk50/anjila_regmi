import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { journeyTimeline } from '../data/journey';

export const Journey: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(journeyTimeline[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="journey" className="relative py-24 bg-charcoal-950 overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Calendar size={13} className="text-gold" />
            <span>ARTISTIC PATHWAY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            THE <span className="text-gold-gradient italic font-cormorant">JOURNEY</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Verified milestones across vocal artistry, studio singles, and stage performances.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Central Golden Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {journeyTimeline.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = expandedId === milestone.id;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-charcoal-900 border-2 border-gold items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div
                      className={`glass-card rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                        isExpanded
                          ? 'border-gold/50 shadow-[0_10px_30px_rgba(212,175,55,0.15)] bg-charcoal-900/90'
                          : 'border-gold/20 hover:border-gold/35'
                      }`}
                    >
                      {/* Period Badge & Verification */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-gold/15 text-gold-200 text-xs font-semibold uppercase tracking-wider border border-gold/30">
                          {milestone.period}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                          <CheckCircle size={12} />
                          <span>Verified Era</span>
                        </div>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mb-1">
                        {milestone.title}
                      </h3>

                      <p className="text-xs uppercase tracking-widest text-gold-300 font-medium mb-3">
                        {milestone.subtitle}
                      </p>

                      <p className="text-ivory-soft/85 text-xs sm:text-sm font-light leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Expandable Highlights */}
                      {isExpanded && milestone.highlights && (
                        <div className="mt-4 pt-4 border-t border-white/10 space-y-2 animate-fadeIn">
                          <span className="text-[11px] uppercase tracking-wider text-gold-300 font-semibold block">
                            Key Highlights:
                          </span>
                          <ul className="space-y-1.5">
                            {milestone.highlights.map((hl, i) => (
                              <li key={i} className="text-xs text-ivory-soft flex items-start gap-2">
                                <Sparkles size={12} className="text-gold mt-0.5 shrink-0" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Toggle Button */}
                      <button
                        onClick={() => toggleExpand(milestone.id)}
                        className="mt-4 flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold uppercase tracking-wider font-semibold transition-colors"
                      >
                        <span>{isExpanded ? 'Show Less' : 'Explore Highlights'}</span>
                        {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Empty side for layout symmetry */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

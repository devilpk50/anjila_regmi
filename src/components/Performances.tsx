import React from 'react';
import { Mic2, MapPin, Calendar, Sparkles, Ticket } from 'lucide-react';
import { performancesData } from '../data/press';

interface PerformancesProps {
  onOpenBooking: () => void;
}

export const Performances: React.FC<PerformancesProps> = ({ onOpenBooking }) => {
  return (
    <section id="events" className="relative py-24 bg-charcoal-950 overflow-hidden">
      {/* Stage light visual glow beams */}
      <div className="absolute -top-10 left-1/4 w-72 h-[500px] bg-gradient-to-b from-gold/20 via-velvet-900/10 to-transparent rotate-12 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-1/4 w-72 h-[500px] bg-gradient-to-b from-red-600/15 via-gold/10 to-transparent -rotate-12 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Mic2 size={13} className="text-gold" />
            <span>LIVE EXPERIENCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            ON <span className="text-gold-gradient italic font-cormorant">STAGE</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide">
            Concerts, stadium anthems, cultural festivals and special appearances.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        {/* Live Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performancesData.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl overflow-hidden border border-gold/20 group hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Event Photo */}
                <div className="relative aspect-[16/9] bg-charcoal-900 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                  {/* Status badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider glass-card border border-gold/30 text-gold">
                    {event.category}
                  </div>

                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                    event.status === 'Upcoming'
                      ? 'bg-emerald-500 text-charcoal-950 shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                      : 'bg-charcoal-950/80 text-ivory-soft border border-white/10'
                  }`}>
                    {event.status}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-3 text-left">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-muted">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-gold" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-gold" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-ivory-soft/85 font-light leading-relaxed pt-1">
                    {event.highlight}
                  </p>
                </div>
              </div>

              {/* Event Bottom Callout */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gold-300 font-semibold flex items-center gap-1">
                  <Sparkles size={12} /> Stage Production
                </span>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-full bg-gold/15 hover:bg-gold text-gold hover:text-charcoal-950 border border-gold/30 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <Ticket size={13} />
                  <span>Book for Event</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

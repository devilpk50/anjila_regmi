import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './Icons';
import confetti from 'canvas-confetti';
import { artistData } from '../data/artist';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Live Performance',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Fire festive celebratory gold confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#f5e6be', '#ffffff', '#9b1c2e']
        });
      } catch {
        // fallback
      }
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-charcoal-950 overflow-hidden border-t border-gold/15">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-velvet-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-300 text-xs uppercase tracking-[0.3em] font-semibold">
            <Mail size={13} className="text-gold" />
            <span>BOOKINGS & INQUIRIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-ivory tracking-tight">
            LET'S CREATE <span className="text-gold-gradient italic font-cormorant">SOMETHING</span>
          </h2>
          <p className="text-ivory-soft/80 text-sm sm:text-base font-light tracking-wide max-w-xl mx-auto">
            Official contact desk for concert bookings, playback vocals, collaborations, and professional inquiries.
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Management Configuration Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glass-card rounded-2xl p-7 border border-gold/20 space-y-6 shadow-xl">
              <div>
                <span className="editorial-tag text-gold-300">Official Representation</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory mt-1">
                  Artist Direct Desk
                </h3>
                <p className="text-xs text-ivory-muted mt-1 leading-relaxed">
                  {artistData.contactConfig.note}
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10">
                
                {/* Official Phone Number */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/20 text-gold shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Direct Contact / Phone</span>
                    <a
                      href={`tel:${artistData.contactConfig.phone}`}
                      className="text-base font-bold text-gold hover:text-gold-light transition-colors"
                    >
                      {artistData.contactConfig.phone}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/20 text-gold shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Official Email</span>
                    <a
                      href={`mailto:${artistData.contactConfig.bookingEmail}`}
                      className="text-sm font-semibold text-ivory hover:text-gold transition-colors break-all"
                    >
                      {artistData.contactConfig.bookingEmail}
                    </a>
                  </div>
                </div>

                {/* Location & Hometown */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/20 text-gold shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Location / Hometown</span>
                    <p className="text-sm font-semibold text-ivory">
                      {artistData.contactConfig.location}
                    </p>
                  </div>
                </div>

                {/* Official Domain */}
                {artistData.contactConfig.website && (
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/20 text-gold shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-ivory-muted block">Official Website</span>
                      <a
                        href={artistData.contactConfig.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-ivory hover:text-gold transition-colors"
                      >
                        {artistData.contactConfig.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                )}

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-ivory-muted font-semibold">Official Socials:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={artistData.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-card border border-gold/20 text-ivory-soft hover:text-blue-400 hover:border-gold transition-all"
                    title="Facebook Profile"
                  >
                    <FacebookIcon size={16} />
                  </a>
                  <a
                    href={artistData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-card border border-gold/20 text-ivory-soft hover:text-pink-400 hover:border-gold transition-all"
                    title="Instagram Profile"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={artistData.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass-card border border-gold/20 text-ivory-soft hover:text-red-400 hover:border-red-500/50 transition-all"
                    title="YouTube Channel"
                  >
                    <YoutubeIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Verified Representation Note */}
              <div className="p-3 rounded-xl bg-charcoal-900 border border-white/5 flex items-center justify-between text-[11px] text-ivory-muted">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 size={12} /> Direct Response to Inquiries
                </span>
                <span className="text-gold">Verified Profile</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-gold/25 shadow-2xl relative text-left">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ivory">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm text-ivory-soft/80 max-w-md mx-auto">
                    Thank you, <span className="text-gold font-semibold">{formData.name}</span>. Anjila Regmi's desk has received your message regarding <span className="text-gold font-semibold">{formData.inquiryType}</span> and will get in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', inquiryType: 'Live Performance', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-charcoal-950 font-semibold text-xs tracking-wider uppercase transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                    <span className="text-xs uppercase tracking-widest text-gold-300 font-semibold">
                      Direct Inquiry Form
                    </span>
                    <span className="text-[11px] text-ivory-muted">Fields marked * required</span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-ivory-soft font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Shrestha"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold focus:outline-none text-sm text-ivory placeholder:text-ivory-muted/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-ivory-soft font-medium mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold focus:outline-none text-sm text-ivory placeholder:text-ivory-muted/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Inquiry Type Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-ivory-soft font-medium mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 98XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold focus:outline-none text-sm text-ivory placeholder:text-ivory-muted/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-ivory-soft font-medium mb-1.5">
                        Inquiry Type *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold focus:outline-none text-sm text-ivory transition-colors cursor-pointer"
                      >
                        <option value="Live Performance">Live Performance & Concert</option>
                        <option value="Movie Playback">Movie Playback Singing</option>
                        <option value="Music Collaboration">Music Collaboration / Duet</option>
                        <option value="International Tour">International Concert Tour</option>
                        <option value="Brand Collaboration">Brand Collaboration & Endorsement</option>
                        <option value="Modeling">Fashion & Video Modeling</option>
                        <option value="Media / Interview">Media & Press Interview</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-ivory-soft font-medium mb-1.5">
                      Message / Event Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your event date, location, project scope, or inquiry details..."
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 focus:border-gold focus:outline-none text-sm text-ivory placeholder:text-ivory-muted/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold via-gold-400 to-gold-600 hover:from-gold-light hover:to-gold text-charcoal-950 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles size={16} className="animate-spin" />
                        <span>SENDING INQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>SEND INQUIRY</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

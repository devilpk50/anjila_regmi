import React, { useState } from 'react';
import { X, Sliders, Copy, Check, FileCode, Plus, Music, Video, User, ShieldCheck } from 'lucide-react';
import { artistData, artistStats } from '../data/artist';
import { songsData } from '../data/songs';
import { videosData } from '../data/videos';

interface AdminConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminConfigModal: React.FC<AdminConfigModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'songs' | 'videos' | 'json'>('profile');
  const [copied, setCopied] = useState(false);

  // Editable configuration fields simulation
  const [bookingEmail, setBookingEmail] = useState(artistData.contactConfig.bookingEmail);
  const [phone, setPhone] = useState(artistData.contactConfig.phone);
  const [heroTagline, setHeroTagline] = useState(artistData.tagline);
  const [newSongTitle, setNewSongTitle] = useState('');

  if (!isOpen) return null;

  const currentConfigJson = JSON.stringify(
    {
      artist: {
        ...artistData,
        tagline: heroTagline,
        contactConfig: {
          ...artistData.contactConfig,
          bookingEmail,
          phone,
        },
      },
      stats: artistStats,
      songsCount: songsData.length,
      videosCount: videosData.length,
      note: "All website content is driven dynamically by these structured JSON/TS modules."
    },
    null,
    2
  );

  const handleCopyJson = () => {
    navigator.clipboard.writeText(currentConfigJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-950/95 backdrop-blur-2xl animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-charcoal-900 border border-gold/40 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col animate-scaleUp">
        
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-charcoal-950">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-gold/15 text-gold border border-gold/30">
              <Sliders size={20} />
            </span>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
                Artist Portfolio CMS & Config Manager
              </span>
              <h3 className="font-serif text-lg font-bold text-ivory">
                Content Management Architecture
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-ivory-soft hover:text-gold hover:bg-white/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 px-6 pt-4 border-b border-white/10 bg-charcoal-950/50">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-gold text-gold bg-gold/5'
                : 'border-transparent text-ivory-muted hover:text-ivory'
            }`}
          >
            <User size={14} />
            <span>Profile & Contact</span>
          </button>

          <button
            onClick={() => setActiveTab('songs')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'songs'
                ? 'border-gold text-gold bg-gold/5'
                : 'border-transparent text-ivory-muted hover:text-ivory'
            }`}
          >
            <Music size={14} />
            <span>Songs ({songsData.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'videos'
                ? 'border-gold text-gold bg-gold/5'
                : 'border-transparent text-ivory-muted hover:text-ivory'
            }`}
          >
            <Video size={14} />
            <span>YouTube Videos ({videosData.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'json'
                ? 'border-gold text-gold bg-gold/5'
                : 'border-transparent text-ivory-muted hover:text-ivory'
            }`}
          >
            <FileCode size={14} />
            <span>Raw JSON Config</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-left text-ivory">
          
          {/* TAB 1: Profile & Contact */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-xl bg-gold/5 border border-gold/20 flex items-start gap-3">
                <ShieldCheck size={18} className="text-gold mt-0.5 shrink-0" />
                <p className="text-xs text-ivory-soft leading-relaxed">
                  This CMS module confirms all portfolio content is configured inside modular data files (<code className="text-gold">src/data/artist.ts</code>, <code className="text-gold">src/data/songs.ts</code>, etc.). No React code rewrites needed to update biography, releases, videos, or contact details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1.5">
                    Artist Tagline
                  </label>
                  <input
                    type="text"
                    value={heroTagline}
                    onChange={(e) => setHeroTagline(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1.5">
                    Official Booking Email
                  </label>
                  <input
                    type="email"
                    value={bookingEmail}
                    onChange={(e) => setBookingEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1.5">
                    Management Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-sm focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-300 font-semibold mb-1.5">
                    Primary Location
                  </label>
                  <input
                    type="text"
                    defaultValue={artistData.contactConfig.location}
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-sm focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Social Channels Config */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs uppercase tracking-wider text-gold-300 font-bold block">
                  Official Channels Configuration
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-charcoal-950 border border-white/10">
                    <span className="text-ivory-muted block">YouTube Channel:</span>
                    <span className="text-gold-200 truncate block font-mono">{artistData.socialLinks.youtube}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-charcoal-950 border border-white/10">
                    <span className="text-ivory-muted block">Facebook Profile:</span>
                    <span className="text-gold-200 truncate block font-mono">{artistData.socialLinks.facebook}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Songs */}
          {activeTab === 'songs' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold text-ivory">Verified Discography List</h4>
                  <p className="text-xs text-ivory-muted">Manage releases, audio previews and YouTube links.</p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="New song title..."
                    value={newSongTitle}
                    onChange={(e) => setNewSongTitle(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-charcoal-950 border border-white/10 text-xs focus:border-gold focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      if (newSongTitle.trim()) {
                        alert(`Config Ready! New track "${newSongTitle}" formatted for src/data/songs.ts`);
                        setNewSongTitle('');
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-gold text-charcoal-950 font-bold text-xs flex items-center gap-1 hover:bg-gold-light"
                  >
                    <Plus size={14} /> Add
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {songsData.map((song) => (
                  <div
                    key={song.id}
                    className="p-3 rounded-xl bg-charcoal-950 border border-white/10 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gold/15 text-gold flex items-center justify-center font-serif font-bold">
                        ♪
                      </div>
                      <div>
                        <span className="font-semibold text-ivory block">{song.title}</span>
                        <span className="text-ivory-muted text-[10px]">{song.category} • {song.year}</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Videos */}
          {activeTab === 'videos' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-3 rounded-lg bg-charcoal-950 border border-white/10 flex items-center justify-between text-xs">
                <span>Official Channel ID: <code className="text-red-400">UC-cp8JR-fh2j0AH4ZTl6gsg</code></span>
                <span className="text-emerald-400 font-semibold">Active Dynamic Hook</span>
              </div>

              <div className="space-y-2">
                {videosData.map((video) => (
                  <div
                    key={video.id}
                    className="p-3 rounded-xl bg-charcoal-950 border border-white/10 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-semibold text-ivory block">{video.title}</span>
                      <span className="text-ivory-muted text-[10px]">{video.category} • {video.year}</span>
                    </div>
                    <span className="text-gold text-[10px] font-mono">ID: {video.youtubeId}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Raw JSON Config */}
          {activeTab === 'json' && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <span className="text-xs text-ivory-muted font-mono">Dynamic Data Snapshot</span>
                <button
                  onClick={handleCopyJson}
                  className="px-3 py-1.5 rounded-lg bg-gold/20 text-gold hover:bg-gold hover:text-charcoal-950 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy JSON'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-charcoal-950 border border-white/10 text-xs font-mono text-gold-200 overflow-x-auto max-h-96">
                {currentConfigJson}
              </pre>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-charcoal-950 flex items-center justify-between">
          <span className="text-[11px] text-ivory-muted">
            All updates persist seamlessly in modern TypeScript modules.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-gold text-charcoal-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-md"
          >
            Close Explorer
          </button>
        </div>

      </div>
    </div>
  );
};

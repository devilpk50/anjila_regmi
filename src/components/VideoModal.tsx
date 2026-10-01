import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles } from 'lucide-react';
import { YoutubeIcon } from './Icons';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    id: string;
    title: string;
    youtubeUrl: string;
    youtubeId?: string;
    description: string;
    artist?: string;
  } | null;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  const videoId = video.youtubeId || 'dQw4w9WgXcQ';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-charcoal-950/90 backdrop-blur-2xl animate-fadeIn">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-charcoal-900 border border-gold/30 rounded-2xl overflow-hidden shadow-2xl z-10 animate-scaleUp">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-charcoal-950/80">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
              <YoutubeIcon size={18} />
            </span>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300 font-semibold">
                Official YouTube Showcase
              </span>
              <h3 className="font-serif text-sm sm:text-base font-bold text-ivory line-clamp-1">
                {video.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-ivory-soft hover:text-gold hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Player Frame Container */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal Info Footer */}
        <div className="p-5 sm:p-6 bg-charcoal-950/90 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                  Anjila Regmi
                </span>
                <span className="text-xs text-ivory-muted">• Official Music Presentation</span>
              </div>
              <p className="text-xs sm:text-sm text-ivory-soft/80 max-w-2xl font-light leading-relaxed">
                {video.description}
              </p>
            </div>

            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 shrink-0 self-start sm:self-auto"
            >
              <span>Watch on YouTube</span>
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-ivory-muted">
            <span className="flex items-center gap-1">
              <Sparkles size={12} className="text-gold" />
              High Definition 4K Official Stream
            </span>
            <span>Channel ID: UC-cp8JR-fh2j0AH4ZTl6gsg</span>
          </div>
        </div>

      </div>
    </div>
  );
};

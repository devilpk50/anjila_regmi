import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, X, Disc } from 'lucide-react';
import { musicPlayer } from '../utils/audioPlayerService';
import type { SongItem } from '../data/types';

interface AudioPlayerBarProps {
  currentSong: SongItem | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextSong: () => void;
  onPrevSong: () => void;
  onClose: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentSong,
  isPlaying,
  onTogglePlay,
  onNextSong,
  onPrevSong,
  onClose,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('0:00');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);

  // Sync musicPlayer progress listener
  useEffect(() => {
    musicPlayer.setOnEnded(onNextSong);
    if (isPlaying && currentSong) {
      musicPlayer.play(currentSong, (prog, curTime) => {
        setProgress(prog);
        const mins = Math.floor(curTime / 60);
        const secs = Math.floor(curTime % 60);
        setCurrentTimeFormatted(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
      });
    } else {
      musicPlayer.pause();
    }
  }, [isPlaying, currentSong, onNextSong]);

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    setProgress(newProgress);
    musicPlayer.seek(newProgress);
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (isMuted) setIsMuted(false);
    musicPlayer.setVolume(newVol);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      musicPlayer.setVolume(volume);
    } else {
      setIsMuted(true);
      musicPlayer.setVolume(0);
    }
  };

  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 backdrop-blur-2xl border-t border-gold/30 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] py-3 px-4 sm:px-8 animate-slideUp">
      
      {/* Progress Bar Header */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 bg-charcoal-800 cursor-pointer group"
        onClick={handleSeek}
        title="Seek audio track"
      >
        <div
          className="h-full bg-gradient-to-r from-gold via-gold-300 to-gold transition-all duration-150 relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Track Details & Cover */}
        <div className="flex items-center gap-3 min-w-0 max-w-[40%] sm:max-w-xs">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-gold/30 bg-charcoal-900 shadow-md">
            <img
              src={currentSong.coverImage}
              alt={currentSong.title}
              className={`w-full h-full object-cover ${isPlaying ? 'scale-105' : ''} transition-transform`}
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-gold/15 flex items-center justify-center">
                <Disc size={18} className="text-gold animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            )}
          </div>

          <div className="min-w-0 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold truncate">
                {currentSong.category} • {currentSong.year}
              </span>
              <span className="text-[10px] text-ivory-muted font-mono">{currentTimeFormatted}</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-ivory truncate font-serif">
              {currentSong.title}
            </h4>
            <p className="text-[11px] text-ivory-muted truncate font-light">
              Anjila Regmi {currentSong.nepaliTitle ? `(${currentSong.nepaliTitle})` : ''}
            </p>
          </div>
        </div>

        {/* Center Controls & Waveform */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              onClick={onPrevSong}
              className="p-1.5 text-ivory-soft hover:text-gold transition-colors"
              title="Previous Track"
            >
              <SkipBack size={18} />
            </button>

            <button
              onClick={onTogglePlay}
              className="w-10 h-10 rounded-full bg-gold hover:bg-gold-light text-charcoal-950 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform hover:scale-105 active:scale-95"
              title={isPlaying ? 'Pause Audio' : 'Play Audio (Live Melody)'}
            >
              {isPlaying ? (
                <Pause size={18} className="fill-charcoal-950" />
              ) : (
                <Play size={18} className="fill-charcoal-950 translate-x-0.5" />
              )}
            </button>

            <button
              onClick={onNextSong}
              className="p-1.5 text-ivory-soft hover:text-gold transition-colors"
              title="Next Track"
            >
              <SkipForward size={18} />
            </button>
          </div>

          {/* Animated Mini Waveform Indicator */}
          <div className="hidden sm:flex items-center gap-1 h-3">
            {[30, 70, 90, 40, 80, 100, 60, 40, 85, 95, 50, 75, 90].map((_, i) => (
              <span
                key={i}
                className="w-0.5 bg-gold rounded-full transition-all"
                style={{
                  height: isPlaying ? `${Math.sin(i + progress / 4) * 6 + 7}px` : '3px',
                }}
              />
            ))}
          </div>
        </div>

        {/* Volume & Close */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="text-ivory-muted hover:text-gold transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="w-16 sm:w-20 h-1 bg-charcoal-700 rounded-lg appearance-none cursor-pointer accent-gold"
            />
          </div>

          <a
            href={currentSong.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-3 py-1 rounded-md bg-white/5 hover:bg-gold/15 text-gold text-[10px] uppercase font-semibold tracking-wider border border-gold/25 transition-colors"
          >
            Watch Video
          </a>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-ivory-muted hover:text-ivory hover:bg-white/10 transition-colors"
            title="Close Audio Bar"
          >
            <X size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};

// Audio player service supporting real MP3 audio files with Web Audio fallback
import type { SongItem } from '../data/types';

class MusicPlayerService {
  private audioElement: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private isPlayingAudio: boolean = false;
  private currentSongId: string | null = null;
  private onProgressCallback: ((progress: number, currentTime: number, duration: number) => void) | null = null;
  private onEndedCallback: (() => void) | null = null;
  private volumeLevel: number = 0.8;

  // Web Audio Synth Fallback
  private synthTimerId: number | null = null;
  private currentStep: number = 0;
  private masterGain: GainNode | null = null;
  private synthDuration: number = 180;
  private synthCurrentTime: number = 0;
  private isUsingSynthFallback: boolean = false;

  private melodies: Record<string, { tempo: number; notes: number[] }> = {
    'dhangadhi-pashchim-nepal-reprise': {
      tempo: 132,
      notes: [293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 523.25, 440.00, 392.00, 440.00, 523.25, 587.33]
    },
    'mero-desh-banchha-hai': {
      tempo: 118,
      notes: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63, 293.66, 261.63, 392.00]
    },
    'jhimikka-pareli': {
      tempo: 126,
      notes: [329.63, 369.99, 440.00, 493.88, 587.33, 659.25, 587.33, 493.88, 440.00, 369.99, 329.63, 440.00]
    },
    'hat-baijau-dhangadhi': {
      tempo: 138,
      notes: [293.66, 349.23, 392.00, 440.00, 523.25, 587.33, 659.25, 587.33, 523.25, 440.00, 392.00, 349.23]
    },
    'pyari-baini': {
      tempo: 96,
      notes: [261.63, 329.63, 392.00, 440.00, 523.25, 659.25, 523.25, 440.00, 392.00, 329.63, 261.63, 329.63]
    },
    'ladai-jhagada': {
      tempo: 124,
      notes: [293.66, 369.99, 440.00, 587.33, 659.25, 739.99, 659.25, 587.33, 440.00, 369.99, 293.66, 440.00]
    },
    'malai-timi-bhaye-pugchha': {
      tempo: 104,
      notes: [261.63, 293.66, 329.63, 392.00, 523.25, 440.00, 392.00, 329.63, 293.66, 261.63, 329.63, 392.00]
    },
    'golden-jhumka': {
      tempo: 130,
      notes: [329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 587.33, 523.25, 440.00, 392.00, 329.63, 440.00]
    },
    'default': {
      tempo: 115,
      notes: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63, 293.66]
    }
  };

  private getAudioElement(): HTMLAudioElement {
    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.preload = 'auto';

      this.audioElement.addEventListener('timeupdate', () => {
        if (!this.audioElement || this.isUsingSynthFallback) return;
        const cur = this.audioElement.currentTime;
        const dur = this.audioElement.duration || 180;
        const prog = (cur / dur) * 100;
        if (this.onProgressCallback) {
          this.onProgressCallback(prog, cur, dur);
        }
      });

      this.audioElement.addEventListener('ended', () => {
        this.isPlayingAudio = false;
        if (this.onEndedCallback) {
          this.onEndedCallback();
        }
      });

      this.audioElement.addEventListener('error', () => {
        console.warn('Audio file error, falling back to Web Audio acoustic synthesizer for:', this.currentSongId);
        this.startSynthFallback(this.currentSongId || 'default');
      });
    }
    return this.audioElement;
  }

  public setOnEnded(callback: () => void) {
    this.onEndedCallback = callback;
  }

  public play(
    songOrId: SongItem | string,
    onProgress?: (progress: number, currentTime: number, duration: number) => void
  ) {
    this.onProgressCallback = onProgress || null;
    const songId = typeof songOrId === 'string' ? songOrId : songOrId.id;
    const audioUrl = typeof songOrId === 'object' && songOrId.audioUrl 
      ? songOrId.audioUrl 
      : `/audio/${songId}.mp3`;

    this.stopSynth();
    this.currentSongId = songId;
    this.isPlayingAudio = true;
    this.isUsingSynthFallback = false;

    const audio = this.getAudioElement();
    audio.volume = this.volumeLevel;

    if (audio.src !== window.location.origin + audioUrl && !audio.src.endsWith(audioUrl)) {
      audio.src = audioUrl;
      audio.load();
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Autoplay or Audio file playback issue, starting Web Audio synth:', err);
        this.startSynthFallback(songId);
      });
    }
  }

  public pause() {
    this.isPlayingAudio = false;
    if (this.audioElement && !this.isUsingSynthFallback) {
      this.audioElement.pause();
    }
    this.stopSynth();
  }

  public resume() {
    if (!this.currentSongId) return;
    this.isPlayingAudio = true;

    if (this.isUsingSynthFallback) {
      this.startSynthFallback(this.currentSongId);
    } else if (this.audioElement) {
      this.audioElement.play().catch(() => {
        this.startSynthFallback(this.currentSongId!);
      });
    }
  }

  public stop() {
    this.isPlayingAudio = false;
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
    this.stopSynth();
  }

  public setVolume(vol: number) {
    const normalized = Math.max(0, Math.min(1, vol / 100));
    this.volumeLevel = normalized;
    if (this.audioElement) {
      this.audioElement.volume = normalized;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(normalized * 0.4, this.ctx.currentTime);
    }
  }

  public seek(percentage: number) {
    if (this.audioElement && !this.isUsingSynthFallback && this.audioElement.duration) {
      this.audioElement.currentTime = (percentage / 100) * this.audioElement.duration;
    } else {
      this.synthCurrentTime = (percentage / 100) * this.synthDuration;
    }
  }

  // Web Audio Synthesizer Fallback Methods
  private initSynthContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volumeLevel * 0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private startSynthFallback(songId: string) {
    this.isUsingSynthFallback = true;
    this.initSynthContext();
    this.stopSynth();

    this.currentStep = 0;
    this.synthCurrentTime = 0;

    const melodyData = this.melodies[songId] || this.melodies['default'];
    const noteDuration = (60 / melodyData.tempo) * 0.9;
    const intervalMs = (60 / melodyData.tempo) * 1000;

    const playNextNote = () => {
      if (!this.isPlayingAudio || !this.isUsingSynthFallback) return;

      const noteFreq = melodyData.notes[this.currentStep % melodyData.notes.length];
      this.playSynthTone(noteFreq, noteDuration);

      this.currentStep++;
      this.synthCurrentTime += intervalMs / 1000;
      if (this.synthCurrentTime >= this.synthDuration) {
        this.synthCurrentTime = 0;
      }

      if (this.onProgressCallback) {
        const prog = (this.synthCurrentTime / this.synthDuration) * 100;
        this.onProgressCallback(prog, this.synthCurrentTime, this.synthDuration);
      }

      this.synthTimerId = window.setTimeout(playNextNote, intervalMs);
    };

    playNextNote();
  }

  private playSynthTone(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(freq * 2, now);

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.2, now + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration - 0.04);

      osc1.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch {
      // ignore
    }
  }

  private stopSynth() {
    if (this.synthTimerId !== null) {
      clearTimeout(this.synthTimerId);
      this.synthTimerId = null;
    }
  }
}

export const musicPlayer = new MusicPlayerService();

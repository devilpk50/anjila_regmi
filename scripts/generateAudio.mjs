// Script to generate high quality melodic audio preview files for all matching songs
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public', 'audio');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to generate a clean PCM 16-bit WAV file buffer (standard playable audio format across all browsers)
function generateMelodicWav({ tempo = 120, notes = [], durationSec = 30, baseWave = 'folk' }) {
  const sampleRate = 44100;
  const numSamples = Math.floor(sampleRate * durationSec);
  const buffer = Buffer.alloc(44 + numSamples * 2);

  // WAV Header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // SubChunk1Size (16 for PCM)
  buffer.writeUInt16LE(1, 20); // AudioFormat (1 for PCM)
  buffer.writeUInt16LE(1, 22); // NumChannels (1 for mono)
  buffer.writeUInt32LE(sampleRate, 24); // SampleRate
  buffer.writeUInt32LE(sampleRate * 2, 28); // ByteRate
  buffer.writeUInt16LE(2, 32); // BlockAlign
  buffer.writeUInt16LE(16, 34); // BitsPerSample
  buffer.write('data', 36);
  buffer.writeUInt32LE(numSamples * 2, 40);

  const secondsPerBeat = 60 / tempo;
  const noteDuration = secondsPerBeat * 0.85;

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const beatIndex = Math.floor(t / secondsPerBeat);
    const noteFreq = notes[beatIndex % notes.length] || 440;
    const timeInNote = t % secondsPerBeat;

    let sample = 0;

    if (timeInNote < noteDuration) {
      // Gentle acoustic attack, decay, sustain, release envelope
      const attack = 0.04;
      const decay = 0.1;
      const sustain = 0.7;
      const release = noteDuration - 0.1;

      let env = 0;
      if (timeInNote < attack) {
        env = timeInNote / attack;
      } else if (timeInNote < attack + decay) {
        env = 1 - (1 - sustain) * ((timeInNote - attack) / decay);
      } else if (timeInNote < release) {
        env = sustain;
      } else {
        env = sustain * (1 - (timeInNote - release) / (noteDuration - release));
      }

      // Harmonic synthesis (Flute / Sarangi acoustic resonance)
      const f = noteFreq;
      const fundamental = Math.sin(2 * Math.PI * f * t);
      const harmonic2 = 0.45 * Math.sin(2 * Math.PI * f * 2 * t);
      const harmonic3 = 0.25 * Math.sin(2 * Math.PI * f * 3 * t);
      const harmonic4 = 0.12 * Math.sin(2 * Math.PI * f * 4 * t);
      const warmMod = 0.08 * Math.sin(2 * Math.PI * (f * 0.5) * t);

      // Subtle vibrato
      const vibrato = Math.sin(2 * Math.PI * 5.5 * t) * 0.015;

      sample = (fundamental + harmonic2 + harmonic3 + harmonic4 + warmMod) * (1 + vibrato) * env;

      // Add gentle percussion beat pulse (Madal/Dholak simulation)
      const beatProgress = (t % (secondsPerBeat * 0.5)) / (secondsPerBeat * 0.5);
      if (beatProgress < 0.15) {
        const kickEnv = Math.exp(-beatProgress * 30);
        const kickWave = Math.sin(2 * Math.PI * 65 * Math.exp(-beatProgress * 10) * t);
        sample += kickWave * kickEnv * 0.35;
      }
    }

    // Master volume clamp and 16-bit integer conversion
    const clamped = Math.max(-1, Math.min(1, sample * 0.5));
    const int16 = Math.floor(clamped * 32767);
    buffer.writeInt16LE(int16, offset);
    offset += 2;
  }

  return buffer;
}

const songAudioConfigs = [
  {
    filename: 'dhangadhi-pashchim-nepal-reprise.mp3',
    tempo: 132,
    durationSec: 45,
    notes: [293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 523.25, 440.00, 392.00, 440.00, 523.25, 587.33]
  },
  {
    filename: 'mero-desh-banchha-hai.mp3',
    tempo: 118,
    durationSec: 45,
    notes: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63, 293.66, 261.63, 392.00]
  },
  {
    filename: 'jhimikka-pareli.mp3',
    tempo: 126,
    durationSec: 45,
    notes: [329.63, 369.99, 440.00, 493.88, 587.33, 659.25, 587.33, 493.88, 440.00, 369.99, 329.63, 440.00]
  },
  {
    filename: 'hat-baijau-dhangadhi.mp3',
    tempo: 138,
    durationSec: 45,
    notes: [293.66, 349.23, 392.00, 440.00, 523.25, 587.33, 659.25, 587.33, 523.25, 440.00, 392.00, 349.23]
  },
  {
    filename: 'pyari-baini.mp3',
    tempo: 96,
    durationSec: 45,
    notes: [261.63, 329.63, 392.00, 440.00, 523.25, 659.25, 523.25, 440.00, 392.00, 329.63, 261.63, 329.63]
  },
  {
    filename: 'ladai-jhagada.mp3',
    tempo: 124,
    durationSec: 45,
    notes: [293.66, 369.99, 440.00, 587.33, 659.25, 739.99, 659.25, 587.33, 440.00, 369.99, 293.66, 440.00]
  },
  {
    filename: 'malai-timi-bhaye-pugchha.mp3',
    tempo: 104,
    durationSec: 45,
    notes: [261.63, 293.66, 329.63, 392.00, 523.25, 440.00, 392.00, 329.63, 293.66, 261.63, 329.63, 392.00]
  },
  {
    filename: 'golden-jhumka.mp3',
    tempo: 130,
    durationSec: 45,
    notes: [329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 587.33, 523.25, 440.00, 392.00, 329.63, 440.00]
  },
  {
    filename: 'akhai-gajala.mp3',
    tempo: 120,
    durationSec: 45,
    notes: [261.63, 293.66, 329.63, 392.00, 440.00, 392.00, 329.63, 293.66, 261.63, 329.63, 392.00, 440.00]
  },
  {
    filename: 'tamrai-maya.mp3',
    tempo: 112,
    durationSec: 45,
    notes: [293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63, 293.66, 392.00, 440.00, 523.25]
  }
];

console.log('Generating audio files matching music names...');
songAudioConfigs.forEach((cfg) => {
  const wavBuf = generateMelodicWav(cfg);
  const filePath = path.join(outDir, cfg.filename);
  fs.writeFileSync(filePath, wavBuf);
  console.log(`Generated: ${cfg.filename} (${(wavBuf.length / 1024).toFixed(1)} KB)`);
});

console.log('Audio generation complete!');

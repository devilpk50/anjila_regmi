import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LatestRelease } from './components/LatestRelease';
import { About } from './components/About';
import { ArtistStats } from './components/ArtistStats';
import { FeaturedMusic } from './components/FeaturedMusic';
import { YouTubeVideos } from './components/YouTubeVideos';
import { ModelGallery } from './components/ModelGallery';
import { NepaliCulture } from './components/NepaliCulture';
import { Journey } from './components/Journey';
import { Achievements } from './components/Achievements';
import { Collaborations } from './components/Collaborations';
import { Performances } from './components/Performances';
import { Press } from './components/Press';
import { SocialLinks } from './components/SocialLinks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { VideoModal } from './components/VideoModal';
import { LightboxModal } from './components/LightboxModal';
import { musicPlayer } from './utils/audioPlayerService';

import { songsData, latestReleaseSong } from './data/songs';
import type { SongItem, GalleryItem } from './data/types';

export function App() {
  // Audio playback state
  const [currentSong, setCurrentSong] = useState<SongItem | null>(latestReleaseSong);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [showAudioBar, setShowAudioBar] = useState<boolean>(true);

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
    youtubeUrl: string;
    youtubeId?: string;
    description: string;
  } | null>(null);

  // Lightbox modal state
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Handlers
  const handlePlaySong = (song: SongItem) => {
    if (currentSong?.id === song.id) {
      if (isPlayingAudio) {
        setIsPlayingAudio(false);
        musicPlayer.pause();
      } else {
        setIsPlayingAudio(true);
        musicPlayer.resume();
      }
    } else {
      setCurrentSong(song);
      setIsPlayingAudio(true);
      setShowAudioBar(true);
    }
  };

  const handleToggleAudio = () => {
    if (!currentSong) {
      setCurrentSong(latestReleaseSong);
      setIsPlayingAudio(true);
      setShowAudioBar(true);
    } else {
      if (isPlayingAudio) {
        setIsPlayingAudio(false);
        musicPlayer.pause();
      } else {
        setIsPlayingAudio(true);
        musicPlayer.resume();
        if (!showAudioBar) setShowAudioBar(true);
      }
    }
  };

  const handleNextSong = () => {
    if (!currentSong) return;
    const currentIndex = songsData.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songsData.length;
    setCurrentSong(songsData[nextIndex]);
    setIsPlayingAudio(true);
  };

  const handlePrevSong = () => {
    if (!currentSong) return;
    const currentIndex = songsData.findIndex((s) => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
    setCurrentSong(songsData[prevIndex]);
    setIsPlayingAudio(true);
  };

  const handleOpenVideoModal = (video: {
    id: string;
    title: string;
    youtubeUrl: string;
    youtubeId: string;
    description: string;
  }) => {
    // If audio is playing, pause it so video can be enjoyed
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      musicPlayer.pause();
    }
    setActiveVideo(video);
    setVideoModalOpen(true);
  };

  const handleOpenLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleScrollToMusic = () => {
    const el = document.getElementById('music');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-charcoal-950 text-ivory font-sans relative selection:bg-gold selection:text-charcoal-950">
      
      {/* Sticky Navigation */}
      <Navbar
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
      />

      {/* Hero Section */}
      <Hero
        onExploreMusic={handleScrollToMusic}
        onPlayFeaturedSong={() => handlePlaySong(latestReleaseSong)}
        isPlayingAudio={isPlayingAudio && currentSong?.id === latestReleaseSong.id}
        featuredSong={latestReleaseSong}
      />

      {/* Latest Release Spotlight Section */}
      <LatestRelease
        song={latestReleaseSong}
        onPlaySong={handlePlaySong}
        onOpenVideoModal={handleOpenVideoModal}
        isPlaying={isPlayingAudio && currentSong?.id === latestReleaseSong.id}
      />

      {/* Meet Anjila / About Section */}
      <About />

      {/* Artist Metrics / Statistics */}
      <ArtistStats />

      {/* Featured Music / Discography Section */}
      <FeaturedMusic onOpenVideoModal={handleOpenVideoModal} />

      {/* YouTube Videos Section */}
      <YouTubeVideos onOpenVideoModal={handleOpenVideoModal} />

      {/* Beyond the Music / Model & Fashion Gallery */}
      <ModelGallery onOpenLightbox={handleOpenLightbox} />

      {/* Rooted in Nepal / Cultural Connection */}
      <NepaliCulture />

      {/* The Journey / Interactive Timeline */}
      <Journey />

      {/* Honors, Major Awards & Movie Playback Achievements */}
      <Achievements />

      {/* Industry Collaborations */}
      <Collaborations onExploreArtistMusic={handleScrollToMusic} />

      {/* On Stage / Live Performances */}
      <Performances onOpenBooking={handleScrollToContact} />

      {/* In the Press / Media Section */}
      <Press />

      {/* Social Media Hub */}
      <SocialLinks />

      {/* Contact & Professional Booking */}
      <Contact />

      {/* Luxury Dark Footer */}
      <Footer />

      {/* Persistent Audio Player Bar */}
      {showAudioBar && currentSong && (
        <AudioPlayerBar
          currentSong={currentSong}
          isPlaying={isPlayingAudio}
          onTogglePlay={handleToggleAudio}
          onNextSong={handleNextSong}
          onPrevSong={handlePrevSong}
          onClose={() => {
            setIsPlayingAudio(false);
            musicPlayer.stop();
            setShowAudioBar(false);
          }}
        />
      )}

      {/* Video Modal Player */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        video={activeVideo}
      />

      {/* Photography Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

    </div>
  );
}

export default App;

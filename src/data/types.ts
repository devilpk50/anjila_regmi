export interface ArtistInfo {
  name: string;
  nepaliName: string;
  titles: string[];
  tagline: string;
  heroDescription: string;
  aboutIntro: string;
  aboutBio: string[];
  artistFacts: { label: string; value: string; isVerified: boolean }[];
  heroImage: string;
  aboutImage: string;
  cultureImage: string;
  stageImage: string;
  socialLinks: {
    youtube: string;
    facebook: string;
    instagram: string;
    spotify?: string;
    tiktok?: string;
  };
  contactConfig: {
    bookingEmail: string;
    managementEmail: string;
    phone: string;
    location: string;
    hometown?: string;
    managementCompany?: string;
    website?: string;
    note: string;
  };
}

export interface SongItem {
  id: string;
  title: string;
  nepaliTitle?: string;
  year: string;
  category: 'Pop/Modern' | 'Lok Dohori' | 'Patriotic/Anthem' | 'Festive/Folk';
  singers: string[];
  isFeatured?: boolean;
  isLatest?: boolean;
  coverImage: string;
  youtubeId?: string;
  youtubeUrl: string;
  audioUrl?: string;
  audioPreviewUrl?: string;
  audioFile?: string;
  description: string;
  collaborators?: string[];
  lyricsExcerpt?: string;
  isVerified: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Music Videos' | 'Live Performances' | 'Behind The Scenes' | 'Vlogs' | 'Special Moments';
  year: string;
  duration?: string;
  youtubeId: string;
  youtubeUrl: string;
  thumbnail: string;
  description: string;
  featured?: boolean;
  isVerified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Fashion' | 'Portraits' | 'Editorial' | 'Traditional' | 'Stage' | 'Behind The Scenes';
  imageUrl: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  caption: string;
  location?: string;
  photographerCredit?: string;
}

export interface TimelineMilestone {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  highlights?: string[];
  isVerified: boolean;
}

export interface CollaborationItem {
  id: string;
  artistName: string;
  role: string;
  songTitle: string;
  year: string;
  avatarUrl: string;
  youtubeUrl?: string;
  quote?: string;
  isVerified: boolean;
}

export interface PerformanceItem {
  id: string;
  title: string;
  location: string;
  venue: string;
  date: string;
  category: 'Concert Tour' | 'Cultural Festival' | 'Live Gala' | 'Cricket Anthem Launch';
  image: string;
  highlight: string;
  status: 'Completed' | 'Upcoming';
  ticketUrl?: string;
}

export interface PressItem {
  id: string;
  publication: string;
  headline: string;
  date: string;
  excerpt: string;
  articleUrl?: string;
  tag: string;
  isVerified: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  description: string;
  isVerified: boolean;
  note?: string;
}

export interface AchievementAward {
  id: string;
  year: string;
  awardName: string;
  category: string;
  songTitle: string;
  status: 'Winner' | 'Nominated';
  organization?: string;
  description?: string;
}

export interface MoviePlaybackProject {
  id: string;
  movieTitle: string;
  year: string;
  songTitle: string;
  role: string;
  details?: string;
}

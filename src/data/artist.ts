import type { ArtistInfo, StatItem } from './types';

export const artistData: ArtistInfo = {
  name: "Anjila Regmi",
  nepaliName: "अञ्जिला रेग्मी",
  titles: ["Nepali Singer", "Performer", "Model", "Playback Artist", "YouTube Creator"],
  tagline: "Where music meets expression.",
  heroDescription: "An artist whose voice, presence and personality bring Nepali music to life.",
  aboutIntro: "An artist whose voice, presence and personality bring Nepali music to life.",
  aboutBio: [
    "Anjila Regmi is an award-winning Nepali singer and performer known for her distinctive voice, energetic stage presence, and versatility across the Nepali music scene.",
    "First discovered as a child prodigy winning the Butwal Pardashani Idol in 2064 BS at the age of 9, Anjila launched her professional musical career with her debut song 'Yo Jeevan Ho' and has since graced prominent stages across 7+ countries including Qatar, Dubai, Bangkok, Japan, Australia, Korea, and India.",
    "With over 350+ live concerts, numerous hit music videos, major industry awards, and feature film playback vocals (such as 'Chakka Panja 3' and 'Gopi'), Anjila continues to inspire audiences in Nepal and worldwide."
  ],
  artistFacts: [
    { label: "Vocalist", value: "Award-Winning Nepali Singer", isVerified: true },
    { label: "Playback", value: "Movie Playback Vocalist (Chakka Panja 3, Gopi)", isVerified: true },
    { label: "Stage", value: "350+ Live Concerts & Tours", isVerified: true },
    { label: "Global Shows", value: "Qatar, Dubai, Japan, Australia, Korea, India, Bangkok", isVerified: true },
    { label: "Hometown", value: "Syangja, Jagatbhangyang, Nepal", isVerified: true },
  ],
  heroImage: "/images/A1.jpg",
  aboutImage: "/images/B.jpg",
  cultureImage: "/images/c.jpg",
  stageImage: "/images/d.jpg",
  socialLinks: {
    youtube: "https://www.youtube.com/channel/UC-cp8JR-fh2j0AH4ZTl6gsg",
    facebook: "https://www.facebook.com/anjilaregmiprofile",
    instagram: "https://www.instagram.com/anjila_regmi_official/",
    spotify: "https://open.spotify.com/search/Anjila%20Regmi",
    tiktok: "https://www.tiktok.com/@anjilaregmi"
  },
  contactConfig: {
    bookingEmail: "anjilaregmi277@gmail.com",
    managementEmail: "anjilaregmi277@gmail.com",
    phone: "9847010534",
    location: "Syangja, Jagatbhangyang / Kathmandu, Nepal",
    hometown: "Syangja, Jagatbhangyang",
    website: "https://anjilaregmi.com.np",
    managementCompany: "Anjila Regmi Official Desk",
    note: "Official direct inquiry desk for concert bookings, movie playback, corporate events, international tours, and musical collaborations."
  }
};

export const artistStats: StatItem[] = [
  {
    label: "Live Concerts",
    value: "350+",
    numericTarget: 350,
    suffix: "+",
    description: "Attended more than 350 concerts, cultural programs & festivals",
    isVerified: true
  },
  {
    label: "Global Tours",
    value: "7+ Nations",
    numericTarget: 7,
    suffix: "+",
    description: "Shows across Qatar, Dubai, Bangkok, Japan, Australia, Korea, India",
    isVerified: true
  },
  {
    label: "Industry Awards",
    value: "4+ Trophies",
    numericTarget: 4,
    suffix: "+",
    description: "Best Pop Singer awards from Music Khabar, Sagarmatha, Bstars & Music Video Awards",
    isVerified: true
  },
  {
    label: "Musical Journey",
    value: "Since 2064 BS",
    description: "Butwal Idol winner at age 9; continuous active music career",
    isVerified: true
  }
];

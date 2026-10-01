import type { AchievementAward, MoviePlaybackProject } from './types';

export const majorAwardsData: AchievementAward[] = [
  {
    id: "award-bstars-2080",
    year: "2080 BS (2023)",
    awardName: "Bstars Films Music Award",
    category: "Best Pop Singer Female",
    songTitle: "Chasma Lagauli",
    status: "Winner",
    organization: "Bstars Entertainment",
    description: "Awarded Best Pop Singer Female for the superhit dancing track 'Chasma Lagauli'."
  },
  {
    id: "award-sagarmatha-2017",
    year: "2074 BS (2017)",
    awardName: "Sagarmatha Music Award",
    category: "Best Pop Singer Female",
    songTitle: "Dilko Bhittaima",
    status: "Winner",
    organization: "Sagarmatha Music Foundation",
    description: "Honored with the prestigious trophy for Best Female Pop Vocalist for 'Dilko Bhittaima'."
  },
  {
    id: "award-music-video-2074",
    year: "2074 BS (2017)",
    awardName: "National Music Video Award",
    category: "Best Pop Singer Female",
    songTitle: "Kapuri Ka",
    status: "Winner",
    organization: "Music Video Association of Nepal",
    description: "Awarded Best Pop Singer Female for the blockbuster viral cultural hit 'Kapuri Ka'."
  },
  {
    id: "award-music-khabar-2073",
    year: "2073 BS (2016)",
    awardName: "Music Khabar Music Award",
    category: "Best Pop Singer of the Year",
    songTitle: "Piratiko Goli",
    status: "Winner",
    organization: "Music Khabar Nepal",
    description: "Clinched the Best Pop Singer of the Year award for the breakthrough chartbuster 'Piratiko Goli'."
  },
  {
    id: "award-butwal-idol-2064",
    year: "2064 BS (2007)",
    awardName: "Butwal Pardashani Idol",
    category: "Singing Idol Champion",
    songTitle: "Live Solo Showcase",
    status: "Winner",
    organization: "Butwal Chamber / Cultural Board",
    description: "Discovered as a musical child prodigy, winning the Idol championship title at the age of 9."
  }
];

export const nominationsData: AchievementAward[] = [
  {
    id: "nom-sagarmatha-2080",
    year: "2080 BS",
    awardName: "Sagarmatha Music Award",
    category: "Best Pop Singer Female",
    songTitle: "Chasma Lagauli",
    status: "Nominated"
  },
  {
    id: "nom-surya-2076",
    year: "2076 BS",
    awardName: "Surya International Award",
    category: "Best Pop Singer",
    songTitle: "Special Musical Releases",
    status: "Nominated"
  },
  {
    id: "nom-os-nepal",
    year: "2075 BS",
    awardName: "OS Nepal Music Award",
    category: "Best Pop Singer of the Year",
    songTitle: "Folk-Pop Singles",
    status: "Nominated"
  },
  {
    id: "nom-music-video-2075",
    year: "2075 BS",
    awardName: "Music Video Award",
    category: "Best Pop Singer",
    songTitle: "Dilko Bhittaima",
    status: "Nominated"
  },
  {
    id: "nom-sundara-devi-2074",
    year: "2074 BS",
    awardName: "Sundara Devi Music Award",
    category: "Best Vocalist",
    songTitle: "Kapuri Ka",
    status: "Nominated"
  },
  {
    id: "nom-music-khabar-2074",
    year: "2074 BS",
    awardName: "Music Khabar Music Award",
    category: "Best Pop Singer Female",
    songTitle: "Kapuri Ka",
    status: "Nominated"
  },
  {
    id: "nom-bindabasini-2073",
    year: "2073 BS",
    awardName: "Bindabasini Music Award",
    category: "Best Pop Singer",
    songTitle: "Pirati Ko Goli",
    status: "Nominated"
  },
  {
    id: "nom-music-khabar-2071",
    year: "2071 BS",
    awardName: "Music Khabar Music Award",
    category: "Best New Artist",
    songTitle: "Aaja Maile",
    status: "Nominated"
  }
];

export const moviePlaybackData: MoviePlaybackProject[] = [
  {
    id: "mov-chakka-panja-3",
    movieTitle: "Chakka Panja 3",
    year: "2077 BS (2020)",
    songTitle: "Pachi Umer Dhalkinxa",
    role: "Duet Playback Singer",
    details: "Superhit playback duet for Nepal's highest-grossing comedy cinema franchise."
  },
  {
    id: "mov-gopi",
    movieTitle: "Gopi",
    year: "2077 BS (2020)",
    songTitle: "Laxmi Kahile Kaali",
    role: "Duet Playback Singer",
    details: "Critically acclaimed cinema soundtrack featuring melodious traditional undertones."
  },
  {
    id: "mov-timrai-lagi-ho",
    movieTitle: "Timrai Lagi Ho",
    year: "2075 BS (2018)",
    songTitle: "Jale Rumal",
    role: "Playback Singer",
    details: "Energetic romantic soundtrack for the mainstream feature film."
  },
  {
    id: "mov-su-shree",
    movieTitle: "Su Shree",
    year: "2073 BS (2016)",
    songTitle: "Temporary Maya Lai",
    role: "Debut Movie Singer",
    details: "Official debut playback track marking entry into the Nepali film music industry."
  }
];

export const internationalToursData = [
  { country: "Qatar", city: "Doha", highlight: "Mega Cultural Stage Concert" },
  { country: "United Arab Emirates", city: "Dubai", highlight: "Nepali Grand Festive Night" },
  { country: "Thailand", city: "Bangkok", highlight: "International Music Showcase" },
  { country: "Japan", city: "Tokyo & Nagoya", highlight: "Diaspora Cultural Festival Tour" },
  { country: "Australia", city: "Sydney & Melbourne", highlight: "Live Concert Tour" },
  { country: "South Korea", city: "Seoul", highlight: "Himalayan Live Music Fest" },
  { country: "India", city: "Sikkim & Darjeeling", highlight: "Regional Folk & Pop Celebrations" }
];

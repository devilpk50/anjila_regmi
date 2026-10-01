import type { PressItem, PerformanceItem } from './types';

export const pressData: PressItem[] = [
  {
    id: "press-1",
    publication: "Nepali Music & Entertainment Digest",
    headline: "Anjila Regmi: Bridging Modern Pop Sensibilities with Authentic Nepali Folk Warmth",
    date: "2024",
    excerpt: "With a magnetic screen presence and a versatile vocal timbre, Anjila Regmi continues to distinguish herself as one of the most dynamic young artists on the Nepali music horizon.",
    tag: "Artist Spotlight",
    isVerified: true
  },
  {
    id: "press-2",
    publication: "Kathmandu Arts & Culture Review",
    headline: "'Mero Desh Banchha Hai' Resonates with Youth and Cultural Pride",
    date: "2024",
    excerpt: "The latest patriotic single by Anjila Regmi strikes a powerful emotional chord, combining visual grandeur with uplifting vocals that celebrate national unity.",
    tag: "Single Review",
    isVerified: true
  },
  {
    id: "press-3",
    publication: "Stage & Spotlight Nepal",
    headline: "High Energy, Crowd Connection, and Glamour: The Live Stage Presence of Anjila Regmi",
    date: "2023",
    excerpt: "From stadium anthem performances to festival headline slots, Anjila brings an undeniable glamour and vocal strength that gets audiences on their feet.",
    tag: "Live Feature",
    isVerified: true
  }
];

export const performancesData: PerformanceItem[] = [
  {
    id: "perf-1",
    title: "Lumbini Lions Cricket League Kickoff Gala",
    location: "Siddhartha Stadium / Kathmandu",
    venue: "Main Stage Arena",
    date: "Recent Tour",
    category: "Cricket Anthem Launch",
    image: "/images/d.jpg",
    highlight: "Electrifying live stadium rendition of the team anthem in front of thousands of roaring cricket fans.",
    status: "Completed"
  },
  {
    id: "perf-2",
    title: "Kathmandu Grand Musical Festival",
    location: "Kathmandu Valley",
    venue: "Open Air Pavilion",
    date: "Festival Season",
    category: "Cultural Festival",
    image: "/images/h.jpg",
    highlight: "Headline performance featuring a 6-song medley of folk-pop hits and live acoustic duets.",
    status: "Completed"
  },
  {
    id: "perf-3",
    title: "Himalayan Cultural & Music Gala",
    location: "Pokhara Lakeside",
    venue: "Cultural Amphitheatre",
    date: "Cultural Gala",
    category: "Live Gala",
    image: "/images/c.jpg",
    highlight: "Special celebration of Nepali songs blending traditional instruments with modern stage visuals.",
    status: "Completed"
  },
  {
    id: "perf-4",
    title: "Upcoming Stage Tour & Festive Concerts",
    location: "Nepal & International Stages",
    venue: "Official Concert Schedule",
    date: "Upcoming Season",
    category: "Concert Tour",
    image: "/images/A1.jpg",
    highlight: "Upcoming international live tour dates and festive season concerts. Booking open for organizers.",
    status: "Upcoming"
  }
];

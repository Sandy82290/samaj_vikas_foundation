/** Shared content interfaces used across the site. */

export interface NavLink {
  label: string;
  path: string;
  exact?: boolean;
}

export interface FocusArea {
  icon: string; // Font Awesome class, e.g. 'fa-graduation-cap'
  title: string;
  description: string;
  color: string; // accent color for the icon chip
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Program {
  image: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface GalleryItem {
  image: string;
  caption: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
}

export interface NewsItem {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Award {
  image: string;
  category: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
  /** Optional portrait photo; falls back to the initials avatar if absent or it fails to load. */
  image?: string;
  socials: { icon: string; url: string; label: string }[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

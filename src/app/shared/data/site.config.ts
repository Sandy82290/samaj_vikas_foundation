import { NavLink } from '../models/content.models';

/**
 * Central configuration for organisation-wide details. Update values here to
 * change them everywhere (header, footer, contact page, SEO).
 */
export const SITE = {
  name: 'Samaj Vikas Foundation',
  nameHindi: 'समाज विकास फाउंडेशन',
  tagline: 'Empowering Communities, Building Better Futures',
  email: 'info@samajvikasfoundation.org',
  phone: '+91 98765 43210',
  phoneHref: '+919876543210',
  whatsapp: '+91 98765 43210',
  address: {
    line1: '123, Community Center Road',
    line2: 'Civil Lines, New Delhi',
    city: 'Delhi',
    pincode: '110001',
    country: 'India',
  },
  workingHours: 'Mon – Sat: 9:00 AM – 6:00 PM',
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
  },
  // Google Maps embed (generic location — replace q= with the real address)
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Connaught%20Place%20New%20Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed',
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/', exact: true },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

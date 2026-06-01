import {
  CoreValue,
  TeamMember,
  TimelineEntry,
} from '../../shared/models/content.models';

export const CORE_VALUES: CoreValue[] = [
  {
    icon: 'fa-shield-halved',
    title: 'Integrity',
    description:
      'We act with honesty and uphold the highest ethical standards in all our work.',
  },
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'Transparency',
    description:
      'Every rupee and every decision is accountable to the communities we serve.',
  },
  {
    icon: 'fa-hand-holding-heart',
    title: 'Compassion',
    description:
      'We lead with empathy, treating every individual with dignity and respect.',
  },
  {
    icon: 'fa-people-roof',
    title: 'Community Service',
    description:
      'We put people first, building solutions together with the communities we support.',
  },
  {
    icon: 'fa-lightbulb',
    title: 'Leadership',
    description:
      'We empower local changemakers to lead sustainable progress from within.',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Ramesh Kumar',
    role: 'Founder & Chairman',
    bio: 'A social entrepreneur with 15+ years driving grassroots development across rural India.',
    initials: 'RK',
    color: '#0e6a7d',
    image: 'assets/images/ramesh.png',
    socials: [
      { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/', label: 'LinkedIn' },
      { icon: 'fa-x-twitter', url: 'https://x.com/', label: 'Twitter' },
    ],
  },
  {
    name: 'Indar Kumar',
    role: 'President',
    bio: 'Leads programme strategy and partnerships, driving our community development initiatives.',
    initials: 'IK',
    color: '#123a63',
    image: 'assets/images/indar.png',
    socials: [
      { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/', label: 'LinkedIn' },
      { icon: 'fa-envelope', url: 'mailto:info@samajvikasfoundation.org', label: 'Email' },
    ],
  },
  {
    name: 'Mohammed Irfan',
    role: 'Secretary',
    bio: 'Oversees operations and governance, ensuring transparency across all initiatives.',
    initials: 'MI',
    color: '#2e8b57',
    socials: [
      { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/', label: 'LinkedIn' },
      { icon: 'fa-envelope', url: 'mailto:info@samajvikasfoundation.org', label: 'Email' },
    ],
  },
  {
    name: 'Priya Nair',
    role: 'Volunteer Coordinator',
    bio: 'Mobilises and mentors our 200+ volunteers, the backbone of every field project.',
    initials: 'PN',
    color: '#7d3cf0',
    socials: [
      { icon: 'fa-linkedin-in', url: 'https://www.linkedin.com/', label: 'LinkedIn' },
      { icon: 'fa-instagram', url: 'https://www.instagram.com/', label: 'Instagram' },
    ],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    year: '2015',
    title: 'The Foundation is Established',
    description:
      'A small group of volunteers comes together with a vision to uplift underprivileged communities.',
  },
  {
    year: '2017',
    title: 'First Learning Centre Opens',
    description:
      'Our flagship child-education programme begins, enrolling 120 children in its first year.',
  },
  {
    year: '2019',
    title: 'Healthcare & Women Empowerment Launched',
    description:
      'Free health camps and women’s skill-development programmes expand our impact significantly.',
  },
  {
    year: '2022',
    title: 'Reaching 10+ Villages',
    description:
      'Programmes scale across multiple districts, supported by a growing volunteer network.',
  },
  {
    year: '2026',
    title: '5,000+ Lives Impacted',
    description:
      'Today we continue to grow, building self-reliant communities through sustainable development.',
  },
];

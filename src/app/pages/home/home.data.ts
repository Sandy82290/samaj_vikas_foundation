import {
  Award,
  FocusArea,
  GalleryItem,
  NewsItem,
  Program,
  Stat,
  Testimonial,
} from '../../shared/models/content.models';

export const FOCUS_AREAS: FocusArea[] = [
  {
    icon: 'fa-graduation-cap',
    title: 'Education',
    description:
      'Quality learning, scholarships and digital literacy for underprivileged children and youth.',
    color: '#0e6a7d',
  },
  {
    icon: 'fa-leaf',
    title: 'Environment',
    description:
      'Tree plantation drives, clean-water projects and community awareness on sustainability.',
    color: '#2e8b57',
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Healthcare',
    description:
      'Free health camps, check-ups, nutrition support and access to essential medicines.',
    color: '#c0392b',
  },
  {
    icon: 'fa-venus',
    title: 'Women Empowerment',
    description:
      'Skill training, self-help groups and financial independence for women in need.',
    color: '#7d3cf0',
  },
];

export const STATS: Stat[] = [
  { value: 5000, suffix: '+', label: 'Lives Impacted', icon: 'fa-hand-holding-heart' },
  { value: 200, suffix: '+', label: 'Active Volunteers', icon: 'fa-people-group' },
  { value: 50, suffix: '+', label: 'Projects Completed', icon: 'fa-diagram-project' },
  { value: 10, suffix: '+', label: 'Villages Served', icon: 'fa-house-chimney' },
];

export const PROGRAMS: Program[] = [
  {
    image: 'assets/images/education.svg',
    icon: 'fa-child-reaching',
    title: 'Child Education',
    description:
      'Free learning centres, study material and mentorship that keep children in school.',
    tag: 'Education',
  },
  {
    image: 'assets/images/skill-development.svg',
    icon: 'fa-screwdriver-wrench',
    title: 'Skill Development',
    description:
      'Vocational training in tailoring, computers and crafts to build sustainable livelihoods.',
    tag: 'Livelihood',
  },
  {
    image: 'assets/images/healthcare.svg',
    icon: 'fa-stethoscope',
    title: 'Health Camps',
    description:
      'Regular medical camps offering free check-ups, medicines and health awareness.',
    tag: 'Healthcare',
  },
  {
    image: 'assets/images/environment.svg',
    icon: 'fa-tree',
    title: 'Environmental Awareness',
    description:
      'Plantation drives, cleanliness campaigns and eco-education for greener communities.',
    tag: 'Environment',
  },
];

export const GALLERY: GalleryItem[] = [
  { image: 'assets/images/community.svg', caption: 'Community Outreach Day', category: 'Events' },
  { image: 'assets/images/education.svg', caption: 'Children at Learning Centre', category: 'Education' },
  { image: 'assets/images/healthcare.svg', caption: 'Free Medical Camp', category: 'Healthcare' },
  { image: 'assets/images/women-empowerment.svg', caption: 'Women Skill Workshop', category: 'Empowerment' },
  { image: 'assets/images/environment.svg', caption: 'Tree Plantation Drive', category: 'Environment' },
  { image: 'assets/images/skill-development.svg', caption: 'Vocational Training', category: 'Livelihood' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Because of the foundation’s learning centre, my daughter is the first in our family to attend school. I am forever grateful.',
    name: 'Sunita Devi',
    role: 'Beneficiary Parent',
    initials: 'SD',
    color: '#0e6a7d',
  },
  {
    quote:
      'Volunteering here changed my perspective on life. Every health camp we run reminds me why community service matters.',
    name: 'Rahul Mehta',
    role: 'Volunteer, 3 years',
    initials: 'RM',
    color: '#123a63',
  },
  {
    quote:
      'The women’s skill programme gave me the confidence and income to support my family independently.',
    name: 'Farida Khatun',
    role: 'Self-Help Group Member',
    initials: 'FK',
    color: '#7d3cf0',
  },
];

export const AWARDS: Award[] = [
  {
    image: 'assets/award.jpeg',
    category: 'Felicitation',
    title: 'Honouring Our Community Elders',
    description:
      'Felicitating respected elders and guardians whose blessings and guidance strengthen our mission at the grassroots.',
    featured: true,
  },
  {
    image: 'assets/images/prize.jpeg',
    category: 'Achievement',
    title: 'Student Excellence Awards',
    description:
      'Recognising outstanding students with medals and certificates for their hard work and academic achievement.',
  },
  {
    image: 'assets/images/prize1.jpeg',
    category: 'Education Drive',
    title: 'Books for Every Child',
    description:
      'Distributing study material and books to young learners across the villages we serve.',
  },
  {
    image: 'assets/images/prize2.jpeg',
    category: 'Ceremony',
    title: 'Annual Prize Distribution',
    description:
      'Celebrating young achievers and talented students at our annual community recognition event.',
  },
];

export const NEWS: NewsItem[] = [
  {
    date: '15 May 2026',
    category: 'Education',
    title: 'New Digital Learning Lab Inaugurated in Rampur Village',
    excerpt:
      'A fully equipped computer lab now serves over 150 children, bridging the digital divide in rural communities.',
    image: 'assets/images/education.svg',
  },
  {
    date: '28 Apr 2026',
    category: 'Healthcare',
    title: 'Mega Health Camp Reaches 800+ Villagers',
    excerpt:
      'Free check-ups, eye screening and medicine distribution were provided across five neighbouring villages.',
    image: 'assets/images/healthcare.svg',
  },
  {
    date: '05 Apr 2026',
    category: 'Environment',
    title: '2,000 Saplings Planted on World Earth Day',
    excerpt:
      'Volunteers and local students joined hands to green public spaces and raise climate awareness.',
    image: 'assets/images/environment.svg',
  },
];

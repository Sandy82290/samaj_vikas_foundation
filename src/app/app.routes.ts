import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Samaj Vikas Foundation | Empowering Communities',
    data: {
      description:
        'Samaj Vikas Foundation is a social welfare NGO working for Education, Environment, Women Empowerment and Social Welfare.',
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About Us | Samaj Vikas Foundation',
    data: {
      description:
        'Learn about Samaj Vikas Foundation — our history, vision, mission, core values, leadership team and journey.',
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
    title: 'Contact Us | Samaj Vikas Foundation',
    data: {
      description:
        'Get in touch with Samaj Vikas Foundation. Reach us by phone, email or visit our office. Send us a message using the contact form.',
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: 'Page Not Found | Samaj Vikas Foundation',
  },
];

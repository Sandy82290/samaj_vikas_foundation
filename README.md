# Samaj Vikas Foundation — समाज विकास फाउंडेशन

A production-ready, responsive **Social Welfare NGO website** built with **Angular 18** (standalone components, lazy-loaded routes). 

> **Tagline:** _Empowering Communities, Building Better Futures_

---

## ✨ Features

- **Angular 18** standalone components + lazy-loaded routes (`@defer`-friendly architecture)
- **SCSS design system** with CSS custom properties based on the brand/logo colors
- **Fully responsive** — mobile, tablet and desktop (custom breakpoints, sticky navbar with hamburger drawer)
- **Animations** — scroll-reveal (IntersectionObserver), animated stat counters, hover & fade effects, `prefers-reduced-motion` aware
- **SEO friendly** — per-route `<title>` & meta/Open Graph tags, JSON-LD structured data, `robots.txt`, `sitemap.xml`, canonical URL
- **Accessibility (WCAG-friendly)** — skip link, ARIA labels, keyboard navigation, visible focus states, semantic HTML
- **Performance** — lazy-loaded routes, lazy images, OnPush change detection, optimized SVG assets, production budgets
- **Angular Material** (azure-blue theme) used for the Contact FAQ accordion & snackbar feedback
- **Font Awesome 6** icons + **Google Fonts** (Poppins / Mukta)

## 🎨 Theme Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary (Teal) | `#0E6A7D` | Buttons, links, accents |
| Secondary (Dark Blue) | `#123A63` | Headings, footer, banners |
| Accent | `#F5F5F5` | Alternate section backgrounds |
| Gold Border | `#D4AF37` | Highlights, CTA, borders |
| Background | `#FFFFFF` | Page background |

All tokens live in [`src/styles.scss`](src/styles.scss) under `:root`.

---

## 📄 Pages

| Route | Page | Sections |
|-------|------|----------|
| `/` | **Home** | Hero, About preview, Mission (focus areas), Impact counters, Programs, Gallery, Testimonials, CTA band, Latest News |
| `/about` | **About Us** | Overview, Vision & Mission, Core Values, Leadership Team, Journey Timeline |
| `/contact` | **Contact Us** | Info cards, validated reactive form, Google Map, social links, FAQ |
| `**` | **404** | Friendly not-found page |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server  ->  http://localhost:4200
npm start

# 3. Production build  ->  dist/samaj-vikas-foundation
npm run build
```

Requires **Node.js 18.19+** and npm 10+.

---

## 🗂️ Project Structure

```
src/
├── index.html              # SEO meta, Open Graph, JSON-LD, fonts, Font Awesome
├── main.ts                 # Bootstrap (standalone)
├── styles.scss             # Global design system + tokens + animations
└── app/
    ├── app.component.ts     # Shell: header + <router-outlet> + footer + back-to-top
    ├── app.config.ts        # Providers: router, animations, scroll restoration
    ├── app.routes.ts        # Lazy-loaded routes with titles & meta
    ├── core/
    │   ├── components/
    │   │   ├── header/       # Sticky navbar + mobile drawer
    │   │   └── footer/       # Footer with quick links, programs, contact, social
    │   └── services/
    │       └── seo.service.ts  # Syncs meta/OG tags per route
    ├── shared/
    │   ├── components/       # section-heading, page-banner, back-to-top (reusable)
    │   ├── directives/       # scrollReveal, countUp
    │   ├── models/           # Typed content interfaces
    │   └── data/             # site.config.ts (org details, nav, social, map)
    └── pages/
        ├── home/             # home.component + /sections/* + home.data.ts
        ├── about/            # about.component + about.data.ts
        ├── contact/          # contact.component (reactive form + validation)
        └── not-found/

public/                      # Static assets (served at site root)
├── favicon.svg
├── manifest.webmanifest
├── robots.txt
├── sitemap.xml
└── assets/images/           # Logo + themed SVG illustrations
```

---

## 🔧 Customization Guide

- **Organisation details** (name, phone, email, address, social, map) → edit [`src/app/shared/data/site.config.ts`](src/app/shared/data/site.config.ts). They propagate to header, footer, contact page & SEO.
- **Home content** (focus areas, stats, programs, gallery, testimonials, news) → [`src/app/pages/home/home.data.ts`](src/app/pages/home/home.data.ts).
- **About content** (values, team, timeline) → [`src/app/pages/about/about.data.ts`](src/app/pages/about/about.data.ts).
- **Logo** → replace [`public/assets/images/logo.svg`](public/assets/images/logo.svg) (header/hero) and `logo-white.svg` (footer); favicon is `public/favicon.svg`.
- **Images** → the themed SVGs in `public/assets/images/` are lightweight placeholders. Swap them for real photographs (keep the same filenames, or update the `image:` paths in the data files).
- **Google Map** → set `mapEmbedUrl` in `site.config.ts` to your real location's embed URL.
- **Contact form submission** → currently a simulated async call in `contact.component.ts` (`onSubmit`). Wire it to your API / email service (e.g. `HttpClient`, Formspree, EmailJS).
- **Brand colors** → update the CSS variables in `:root` inside `src/styles.scss`.

---

## ♿ Accessibility & 🔍 SEO Notes

- Each route sets a unique document title and meta description (see `app.routes.ts` + `SeoService`).
- Update the production domain in `index.html` (`og:url`, canonical), `robots.txt` and `sitemap.xml` before going live.
- `manifest.webmanifest` enables installable PWA basics (icon, theme color).

---

## 🧱 Tech Stack

Angular 18 · TypeScript 5.5 · SCSS · Angular Material 18 · Angular Animations · RxJS · Font Awesome 6 · Google Fonts

---

© 2026 Samaj Vikas Foundation (समाज विकास फाउंडेशन). All rights reserved.

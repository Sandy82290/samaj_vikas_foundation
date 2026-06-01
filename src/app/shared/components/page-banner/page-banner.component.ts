import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Reusable inner-page hero banner with breadcrumb.
 */
@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="banner">
      <div class="banner__overlay" aria-hidden="true"></div>
      <div class="container banner__inner">
        <h1 class="banner__title">{{ title }}</h1>
        @if (subtitle) {
          <p class="banner__subtitle">{{ subtitle }}</p>
        }
        <nav class="banner__crumb" aria-label="Breadcrumb">
          <a routerLink="/">Home</a>
          <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
          <span aria-current="page">{{ current }}</span>
        </nav>
      </div>
      <div class="banner__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  `,
  styles: [
    `
      .banner {
        position: relative;
        isolation: isolate;
        padding-block: clamp(3.5rem, 9vw, 6rem) clamp(4rem, 9vw, 6.5rem);
        background: linear-gradient(120deg, var(--color-secondary), var(--color-primary));
        color: #fff;
        text-align: center;
        overflow: hidden;
      }

      .banner__overlay {
        position: absolute;
        inset: 0;
        z-index: -1;
        background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
        background-size: 24px 24px;
      }

      .banner__title {
        color: #fff;
        font-size: clamp(2rem, 5vw, 3rem);
        margin-bottom: 0.6rem;
        animation: fadeInUp 0.7s var(--ease) both;
      }

      .banner__subtitle {
        max-width: 640px;
        margin: 0 auto 1.25rem;
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.08rem;
      }

      .banner__crumb {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        font-family: var(--font-heading);
        font-weight: 500;
        font-size: 0.95rem;
      }

      .banner__crumb a {
        color: var(--color-gold-soft);
      }

      .banner__crumb a:hover {
        color: #fff;
      }

      .banner__crumb i {
        font-size: 0.75rem;
        opacity: 0.7;
      }

      .banner__crumb span {
        color: rgba(255, 255, 255, 0.85);
      }

      .banner__wave {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        line-height: 0;
      }

      .banner__wave svg {
        width: 100%;
        height: clamp(45px, 6vw, 80px);
      }
    `,
  ],
})
export class PageBannerComponent {
  @Input({ required: true }) title = '';
  @Input() subtitle = '';
  @Input({ required: true }) current = '';
}

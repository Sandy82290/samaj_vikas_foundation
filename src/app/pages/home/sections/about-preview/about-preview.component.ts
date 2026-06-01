import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section about">
      <div class="container about__grid">
        <div class="about__media" appScrollReveal="left">
          <img src="assets/images/community.svg" alt="Volunteers working with the community" class="about__img" loading="lazy" />
          <div class="about__badge">
            <span class="about__badge-num">10+</span>
            <span class="about__badge-text">Years of Service</span>
          </div>
        </div>

        <div class="about__content" appScrollReveal="right">
          <span class="section-head__eyebrow">
            <i class="fa-solid fa-seedling" aria-hidden="true"></i> Who We Are
          </span>
          <h2 class="about__title">
            A Movement for <span class="accent">Social Change</span> &amp; Community Welfare
          </h2>
          <p>
            Samaj Vikas Foundation (समाज विकास फाउंडेशन) is a non-profit
            organisation committed to uplifting underprivileged communities. We
            work at the grassroots to deliver education, healthcare, women
            empowerment and environmental programmes that create lasting impact.
          </p>
          <ul class="about__points">
            <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Transparent, community-driven projects</li>
            <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Dedicated volunteers across 10+ villages</li>
            <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Sustainable, long-term development focus</li>
          </ul>
          <a routerLink="/about" class="btn btn--primary">
            Read More <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: clamp(2rem, 5vw, 4rem);
        align-items: center;
      }

      .about__media {
        position: relative;
      }

      .about__img {
        width: 100%;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-md);
        border: 4px solid #fff;
      }

      .about__badge {
        position: absolute;
        right: -10px;
        bottom: -22px;
        background: var(--color-gold);
        color: #3a2e08;
        padding: 1rem 1.4rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-md);
        text-align: center;
        line-height: 1.1;
      }

      .about__badge-num {
        display: block;
        font-family: var(--font-heading);
        font-size: 1.8rem;
        font-weight: 800;
      }

      .about__badge-text {
        font-size: 0.8rem;
        font-weight: 600;
      }

      .about__title {
        font-size: clamp(1.6rem, 3.5vw, 2.4rem);
        margin-bottom: 1.1rem;
      }

      .about__title .accent {
        color: var(--color-primary);
      }

      .about__points {
        display: grid;
        gap: 0.7rem;
        margin: 1.5rem 0 2rem;
      }

      .about__points li {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        font-weight: 500;
        color: var(--color-text);
      }

      .about__points i {
        color: var(--color-primary);
      }

      @media (max-width: 860px) {
        .about__grid {
          grid-template-columns: 1fr;
        }
        .about__media {
          max-width: 520px;
          margin-inline: auto;
        }
      }
    `,
  ],
})
export class AboutPreviewComponent {}

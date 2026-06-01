import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DonateService } from '../../core/services/donate.service';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutPreviewComponent } from './sections/about-preview/about-preview.component';
import { MissionComponent } from './sections/mission/mission.component';
import { ImpactComponent } from './sections/impact/impact.component';
import { ProgramsComponent } from './sections/programs/programs.component';
import { GalleryPreviewComponent } from './sections/gallery-preview/gallery-preview.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { AwardsComponent } from './sections/awards/awards.component';
import { NewsComponent } from './sections/news/news.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    AboutPreviewComponent,
    MissionComponent,
    ImpactComponent,
    ProgramsComponent,
    GalleryPreviewComponent,
    TestimonialsComponent,
    AwardsComponent,
    NewsComponent,
    ScrollRevealDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-about-preview />
    <app-mission />
    <app-impact />
    <app-programs />
    <app-gallery-preview />
    <app-testimonials />
    <app-awards />

    <!-- Donation / Volunteer CTA band -->
    <section class="cta-band">
      <div class="container cta-band__inner" appScrollReveal="zoom">
        <div class="cta-band__text">
          <h2>Your Support Can Change a Life Today</h2>
          <p>
            Join hundreds of donors and volunteers building a brighter, more
            equitable future. Every contribution — big or small — makes a real
            difference.
          </p>
        </div>
        <div class="cta-band__actions">
          <button type="button" class="btn btn--gold btn--lg" (click)="donate.open()">
            <i class="fa-solid fa-heart" aria-hidden="true"></i> Donate Now
          </button>
          <a routerLink="/contact" class="btn btn--ghost-light btn--lg">
            <i class="fa-solid fa-hands-helping" aria-hidden="true"></i> Volunteer
          </a>
        </div>
      </div>
    </section>

    <app-news />
  `,
  styles: [
    `
      .cta-band {
        position: relative;
        padding-block: clamp(3rem, 7vw, 4.5rem);
        background: linear-gradient(120deg, var(--color-primary), var(--color-secondary));
        color: #fff;
        overflow: hidden;
      }

      .cta-band::before {
        content: '';
        position: absolute;
        top: -40%;
        right: -8%;
        width: 360px;
        height: 360px;
        border-radius: 50%;
        background: rgba(212, 175, 55, 0.18);
        filter: blur(10px);
      }

      .cta-band__inner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .cta-band__text {
        max-width: 640px;
      }

      .cta-band__text h2 {
        color: #fff;
        font-size: clamp(1.5rem, 3.5vw, 2.2rem);
        margin-bottom: 0.6rem;
      }

      .cta-band__text p {
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
      }

      .cta-band__actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      @media (max-width: 760px) {
        .cta-band__inner {
          flex-direction: column;
          text-align: center;
        }
        .cta-band__actions {
          justify-content: center;
        }
      }
    `,
  ],
})
export class HomeComponent {
  readonly donate = inject(DonateService);
}

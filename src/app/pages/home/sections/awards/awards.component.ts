import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { AWARDS } from '../../home.data';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt awards">
      <div class="container">
        <app-section-heading
          eyebrow="Awards & Recognition"
          icon="fa-trophy"
          title="Celebrating"
          accent="Achievements & Felicitations"
          subtitle="Moments of pride — honouring our students, volunteers and community elders for their dedication and accomplishments."
        />

        <div class="awards__grid">
          @for (award of awards; track award.title; let i = $index) {
            <figure
              class="awards__card"
              [class.awards__card--featured]="award.featured"
              appScrollReveal="zoom"
              [revealDelay]="(i % 4) + 1"
            >
              <div class="awards__media">
                <img [src]="award.image" [alt]="award.title" loading="lazy" />
                <span class="awards__badge" aria-hidden="true">
                  <i class="fa-solid fa-award"></i>
                </span>
                <span class="awards__cat">{{ award.category }}</span>
              </div>
              <figcaption class="awards__body">
                <h3 class="awards__title">{{ award.title }}</h3>
                <p class="awards__desc">{{ award.description }}</p>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .awards__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(1.25rem, 2.5vw, 1.75rem);
      }

      .awards__card {
        margin: 0;
        display: flex;
        flex-direction: column;
        background: var(--color-surface);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--color-border);
        transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease),
          border-color 0.3s var(--ease);
      }

      .awards__card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-lg);
        border-color: rgba(212, 175, 55, 0.55);
      }

      /* Featured card spans the full width with a side-by-side layout */
      .awards__card--featured {
        grid-column: 1 / -1;
        flex-direction: row;
      }

      .awards__media {
        position: relative;
        overflow: hidden;
        aspect-ratio: 16 / 10;
      }

      .awards__card--featured .awards__media {
        flex: 1 1 58%;
        aspect-ratio: auto;
        min-height: 340px;
      }

      .awards__media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s var(--ease);
      }

      .awards__card:hover .awards__media img {
        transform: scale(1.06);
      }

      .awards__badge {
        position: absolute;
        top: 0.85rem;
        right: 0.85rem;
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--color-gold);
        color: var(--color-secondary);
        font-size: 1.1rem;
        box-shadow: var(--shadow-sm);
      }

      .awards__cat {
        position: absolute;
        bottom: 0.85rem;
        left: 0.85rem;
        font-family: var(--font-heading);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #fff;
        background: rgba(18, 58, 99, 0.9);
        padding: 0.35rem 0.75rem;
        border-radius: var(--radius-pill);
      }

      .awards__body {
        padding: 1.4rem 1.4rem 1.6rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
      }

      .awards__card--featured .awards__body {
        flex: 1 1 42%;
        padding: clamp(1.5rem, 3vw, 2.5rem);
      }

      .awards__title {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      .awards__card--featured .awards__title {
        font-size: clamp(1.4rem, 2.5vw, 1.9rem);
      }

      .awards__desc {
        margin: 0;
        font-size: 0.95rem;
      }

      @media (max-width: 880px) {
        .awards__grid {
          grid-template-columns: 1fr 1fr;
        }
        .awards__card--featured {
          flex-direction: column;
        }
        .awards__card--featured .awards__media {
          flex: none;
          min-height: 0;
          aspect-ratio: 16 / 10;
        }
      }

      @media (max-width: 560px) {
        .awards__grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AwardsComponent {
  readonly awards = AWARDS;
}

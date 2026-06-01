import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { TESTIMONIALS } from '../../home.data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container">
        <app-section-heading
          eyebrow="Testimonials"
          icon="fa-quote-left"
          title="Voices of"
          accent="Hope & Change"
          subtitle="Stories from the volunteers and beneficiaries who are at the heart of everything we do."
        />

        <div class="testi__grid">
          @for (t of testimonials; track t.name; let i = $index) {
            <figure class="card testi__card" appScrollReveal [revealDelay]="(i % 3) + 1">
              <i class="fa-solid fa-quote-right testi__mark" aria-hidden="true"></i>
              <blockquote class="testi__quote">{{ t.quote }}</blockquote>
              <figcaption class="testi__person">
                <span class="testi__avatar" [style.background]="t.color">{{ t.initials }}</span>
                <span class="testi__meta">
                  <strong>{{ t.name }}</strong>
                  <small>{{ t.role }}</small>
                </span>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .testi__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(1.25rem, 2.5vw, 1.75rem);
      }

      .testi__card {
        position: relative;
        padding: 2.25rem 1.8rem 1.8rem;
        display: flex;
        flex-direction: column;
      }

      .testi__mark {
        position: absolute;
        top: 1.4rem;
        right: 1.6rem;
        font-size: 2.2rem;
        color: rgba(14, 106, 125, 0.12);
      }

      .testi__quote {
        margin: 0 0 1.5rem;
        font-size: 1.02rem;
        color: var(--color-text);
        font-style: italic;
        line-height: 1.7;
      }

      .testi__person {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        margin-top: auto;
      }

      .testi__avatar {
        display: grid;
        place-items: center;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        color: #fff;
        font-family: var(--font-heading);
        font-weight: 700;
        flex-shrink: 0;
      }

      .testi__meta {
        display: flex;
        flex-direction: column;
        line-height: 1.3;
      }

      .testi__meta strong {
        color: var(--color-secondary);
        font-family: var(--font-heading);
      }

      .testi__meta small {
        color: var(--color-text-muted);
      }

      @media (max-width: 900px) {
        .testi__grid {
          grid-template-columns: 1fr;
          max-width: 560px;
          margin-inline: auto;
        }
      }
    `,
  ],
})
export class TestimonialsComponent {
  readonly testimonials = TESTIMONIALS;
}

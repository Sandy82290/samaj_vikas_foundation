import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { PROGRAMS } from '../../home.data';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section">
      <div class="container">
        <app-section-heading
          eyebrow="What We Do"
          icon="fa-hand-holding-heart"
          title="Our Key"
          accent="Programs"
          subtitle="Practical, on-ground initiatives designed to deliver measurable change where it is needed the most."
        />

        <div class="programs__grid">
          @for (program of programs; track program.title; let i = $index) {
            <article class="card programs__card" appScrollReveal [revealDelay]="(i % 4) + 1">
              <div class="programs__media">
                <img [src]="program.image" [alt]="program.title" loading="lazy" />
                <span class="programs__tag">{{ program.tag }}</span>
                <span class="programs__icon"><i class="fa-solid {{ program.icon }}" aria-hidden="true"></i></span>
              </div>
              <div class="programs__body">
                <h3 class="programs__title">{{ program.title }}</h3>
                <p>{{ program.description }}</p>
                <a routerLink="/contact" class="programs__link">
                  Get Involved <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .programs__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: clamp(1.25rem, 2.5vw, 1.75rem);
      }

      .programs__card {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .programs__media {
        position: relative;
        aspect-ratio: 4 / 3;
        overflow: hidden;
      }

      .programs__media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s var(--ease);
      }

      .programs__card:hover .programs__media img {
        transform: scale(1.07);
      }

      .programs__tag {
        position: absolute;
        top: 0.85rem;
        left: 0.85rem;
        background: rgba(255, 255, 255, 0.95);
        color: var(--color-primary);
        font-family: var(--font-heading);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding: 0.35rem 0.7rem;
        border-radius: var(--radius-pill);
      }

      .programs__icon {
        position: absolute;
        bottom: -22px;
        right: 1rem;
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border-radius: 14px;
        background: var(--color-gold);
        color: var(--color-secondary);
        font-size: 1.1rem;
        box-shadow: var(--shadow-sm);
      }

      .programs__body {
        padding: 1.75rem 1.4rem 1.6rem;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .programs__title {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      .programs__link {
        margin-top: auto;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--font-heading);
        font-weight: 600;
        color: var(--color-primary);
      }

      .programs__link i {
        transition: transform 0.25s var(--ease);
      }

      .programs__link:hover i {
        transform: translateX(4px);
      }

      @media (max-width: 980px) {
        .programs__grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 520px) {
        .programs__grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ProgramsComponent {
  readonly programs = PROGRAMS;
}

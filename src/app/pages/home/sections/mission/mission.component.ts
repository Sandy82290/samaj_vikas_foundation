import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { FOCUS_AREAS } from '../../home.data';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="container">
        <app-section-heading
          eyebrow="Our Mission"
          icon="fa-bullseye"
          title="Focused on the Causes That"
          accent="Matter Most"
          subtitle="We channel our energy into four core areas that together build healthier, educated and self-reliant communities."
        />

        <div class="mission__grid">
          @for (area of focusAreas; track area.title; let i = $index) {
            <article class="card mission__card" appScrollReveal="zoom" [revealDelay]="(i % 4) + 1">
              <span class="mission__icon" [style.--chip]="area.color">
                <i class="fa-solid {{ area.icon }}" aria-hidden="true"></i>
              </span>
              <h3 class="mission__card-title">{{ area.title }}</h3>
              <p>{{ area.description }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .mission__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: clamp(1.25rem, 2.5vw, 1.75rem);
      }

      .mission__card {
        padding: 2rem 1.6rem;
        text-align: center;
      }

      .mission__icon {
        display: grid;
        place-items: center;
        width: 72px;
        height: 72px;
        margin: 0 auto 1.25rem;
        border-radius: 20px;
        font-size: 1.7rem;
        color: var(--chip, var(--color-primary));
        background: color-mix(in srgb, var(--chip, #0e6a7d) 12%, #fff);
        transition: transform 0.3s var(--ease), background 0.3s var(--ease),
          color 0.3s var(--ease);
      }

      .mission__card:hover .mission__icon {
        transform: rotate(-6deg) scale(1.08);
        background: var(--chip, var(--color-primary));
        color: #fff;
      }

      .mission__card-title {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      @media (max-width: 980px) {
        .mission__grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 520px) {
        .mission__grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class MissionComponent {
  readonly focusAreas = FOCUS_AREAS;
}

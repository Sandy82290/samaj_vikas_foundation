import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { STATS } from '../../home.data';

@Component({
  selector: 'app-impact',
  standalone: true,
  imports: [CountUpDirective, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="impact">
      <div class="container">
        <div class="impact__head" appScrollReveal>
          <h2 class="impact__title">Our Impact in Numbers</h2>
          <p class="impact__subtitle">
            Every figure represents a life touched and a community strengthened.
          </p>
        </div>

        <div class="impact__grid">
          @for (stat of stats; track stat.label; let i = $index) {
            <div class="impact__item" appScrollReveal [revealDelay]="(i % 4) + 1">
              <span class="impact__icon"><i class="fa-solid {{ stat.icon }}" aria-hidden="true"></i></span>
              <span class="impact__value">
                <span [appCountUp]="stat.value" [suffix]="stat.suffix">0</span>
              </span>
              <span class="impact__label">{{ stat.label }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .impact {
        position: relative;
        padding-block: clamp(3.5rem, 8vw, 5.5rem);
        background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
        color: #fff;
        overflow: hidden;
      }

      .impact::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
        background-size: 22px 22px;
        opacity: 0.6;
        pointer-events: none;
      }

      .impact__head {
        text-align: center;
        max-width: 620px;
        margin: 0 auto 3rem;
        position: relative;
      }

      .impact__title {
        color: #fff;
        font-size: clamp(1.7rem, 4vw, 2.4rem);
      }

      .impact__subtitle {
        color: rgba(255, 255, 255, 0.85);
        margin: 0;
      }

      .impact__grid {
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: clamp(1.5rem, 3vw, 2.5rem);
        text-align: center;
      }

      .impact__item {
        padding: 1.5rem 1rem;
        border-radius: var(--radius-lg);
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.16);
        transition: transform 0.3s var(--ease), background 0.3s var(--ease);
      }

      .impact__item:hover {
        transform: translateY(-6px);
        background: rgba(255, 255, 255, 0.14);
      }

      .impact__icon {
        display: grid;
        place-items: center;
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
        border-radius: 50%;
        background: var(--color-gold);
        color: var(--color-secondary);
        font-size: 1.4rem;
      }

      .impact__value {
        display: block;
        font-family: var(--font-heading);
        font-size: clamp(2rem, 5vw, 3rem);
        font-weight: 800;
        color: var(--color-gold-soft);
        line-height: 1;
      }

      .impact__label {
        display: block;
        margin-top: 0.5rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.9);
      }

      @media (max-width: 860px) {
        .impact__grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `,
  ],
})
export class ImpactComponent {
  readonly stats = STATS;
}

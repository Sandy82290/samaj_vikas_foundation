import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { NEWS } from '../../home.data';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="container">
        <app-section-heading
          eyebrow="Latest News & Events"
          icon="fa-newspaper"
          title="Recent"
          accent="Activities"
          subtitle="Stay updated with our latest initiatives, events and milestones from the field."
        />

        <div class="news__grid">
          @for (item of news; track item.title; let i = $index) {
            <article class="card news__card" appScrollReveal [revealDelay]="(i % 3) + 1">
              <div class="news__media">
                <img [src]="item.image" [alt]="item.title" loading="lazy" />
                <span class="news__date">
                  <i class="fa-regular fa-calendar" aria-hidden="true"></i> {{ item.date }}
                </span>
              </div>
              <div class="news__body">
                <span class="news__cat">{{ item.category }}</span>
                <h3 class="news__title">{{ item.title }}</h3>
                <p>{{ item.excerpt }}</p>
                <a routerLink="/contact" class="news__link">
                  Read More <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </article>
          }
        </div>

        <div class="news__cta">
          <a routerLink="/contact" class="btn btn--outline">
            <i class="fa-solid fa-bell" aria-hidden="true"></i> Subscribe for Updates
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .news__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(1.25rem, 2.5vw, 1.75rem);
      }

      .news__card {
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .news__media {
        position: relative;
        aspect-ratio: 16 / 10;
        overflow: hidden;
      }

      .news__media img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s var(--ease);
      }

      .news__card:hover .news__media img {
        transform: scale(1.06);
      }

      .news__date {
        position: absolute;
        bottom: 0.75rem;
        left: 0.75rem;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: rgba(18, 58, 99, 0.9);
        color: #fff;
        font-size: 0.78rem;
        font-weight: 500;
        padding: 0.35rem 0.7rem;
        border-radius: var(--radius-pill);
      }

      .news__body {
        padding: 1.5rem 1.4rem 1.4rem;
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .news__cat {
        align-self: flex-start;
        font-family: var(--font-heading);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--color-primary);
        background: rgba(14, 106, 125, 0.1);
        padding: 0.25rem 0.65rem;
        border-radius: var(--radius-pill);
        margin-bottom: 0.85rem;
      }

      .news__title {
        font-size: 1.15rem;
        margin-bottom: 0.6rem;
        line-height: 1.3;
      }

      .news__link {
        margin-top: auto;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-family: var(--font-heading);
        font-weight: 600;
        color: var(--color-primary);
      }

      .news__link i {
        transition: transform 0.25s var(--ease);
      }

      .news__link:hover i {
        transform: translateX(4px);
      }

      .news__cta {
        text-align: center;
        margin-top: 2.5rem;
      }

      @media (max-width: 900px) {
        .news__grid {
          grid-template-columns: 1fr;
          max-width: 560px;
          margin-inline: auto;
        }
      }
    `,
  ],
})
export class NewsComponent {
  readonly news = NEWS;
}

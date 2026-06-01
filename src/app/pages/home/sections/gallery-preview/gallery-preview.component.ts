import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';
import { GALLERY } from '../../home.data';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--alt">
      <div class="container">
        <app-section-heading
          eyebrow="Gallery"
          icon="fa-camera"
          title="Moments From Our"
          accent="Work in the Field"
          subtitle="Glimpses of community events, social work activities and the people whose lives we touch every day."
        />

        <div class="gallery__grid">
          @for (item of gallery; track item.caption; let i = $index) {
            <figure class="gallery__item" appScrollReveal="zoom" [revealDelay]="(i % 4) + 1">
              <img [src]="item.image" [alt]="item.caption" loading="lazy" />
              <figcaption class="gallery__caption">
                <span class="gallery__cat">{{ item.category }}</span>
                <span class="gallery__title">{{ item.caption }}</span>
              </figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .gallery__grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: clamp(1rem, 2vw, 1.5rem);
      }

      .gallery__item {
        position: relative;
        margin: 0;
        border-radius: var(--radius-md);
        overflow: hidden;
        aspect-ratio: 4 / 3;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
      }

      .gallery__item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s var(--ease);
      }

      .gallery__item:hover img {
        transform: scale(1.08);
      }

      .gallery__caption {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0.2rem;
        padding: 1.1rem;
        color: #fff;
        background: linear-gradient(
          to top,
          rgba(18, 58, 99, 0.85) 0%,
          rgba(18, 58, 99, 0.1) 55%,
          transparent 100%
        );
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
      }

      .gallery__item:hover .gallery__caption {
        opacity: 1;
        transform: none;
      }

      .gallery__cat {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--color-gold-soft);
      }

      .gallery__title {
        font-family: var(--font-heading);
        font-weight: 600;
        font-size: 1.05rem;
      }

      @media (max-width: 760px) {
        .gallery__grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 460px) {
        .gallery__grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class GalleryPreviewComponent {
  readonly gallery = GALLERY;
}

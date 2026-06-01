import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  viewChild,
} from '@angular/core';
import { DonateService } from '../../../core/services/donate.service';
import { SITE } from '../../data/site.config';

/**
 * Global donation popup. Shows the UPI / Google Pay QR image so visitors can
 * scan & pay. Opened via DonateService.open().
 */
@Component({
  selector: 'app-donate-modal',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (donate.isOpen()) {
      <div
        class="dm__overlay"
        (click)="onBackdrop($event)"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dm-title"
      >
        <div class="dm__card">
          <button
            #closeBtn
            type="button"
            class="dm__close"
            (click)="donate.close()"
            aria-label="Close donation popup"
          >
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>

          <div class="dm__head">
            <span class="dm__badge"><i class="fa-solid fa-heart" aria-hidden="true"></i></span>
            <h2 id="dm-title" class="dm__title">Support Our Cause</h2>
            <p class="dm__subtitle">
              Scan the QR code below with any UPI app to make your donation.
              Every contribution helps us build a better society.
            </p>
          </div>

          <figure class="dm__qr">
            <img src="assets/images/donate.png" alt="Donate to Samaj Vikas Foundation — UPI QR code" />
          </figure>

          <ul class="dm__apps" aria-label="Supported payment apps">
            <li><i class="fa-brands fa-google-pay" aria-hidden="true"></i></li>
            <li><span class="dm__app-tag">UPI</span></li>
            <li><i class="fa-solid fa-mobile-screen" aria-hidden="true"></i></li>
          </ul>

          <div class="dm__contact">
            <p>Prefer another way? Reach us at</p>
            <a [href]="'mailto:' + site.email">{{ site.email }}</a>
            <span>•</span>
            <a [href]="'tel:' + site.phoneHref">{{ site.phone }}</a>
          </div>

          <button type="button" class="btn btn--gold dm__done" (click)="donate.close()">
            <i class="fa-solid fa-check" aria-hidden="true"></i> Done
          </button>
        </div>
      </div>
    }
  `,
  styles: [
    `
      .dm__overlay {
        position: fixed;
        inset: 0;
        z-index: 2000;
        display: grid;
        place-items: center;
        padding: 1.25rem;
        background: rgba(18, 58, 99, 0.6);
        backdrop-filter: blur(4px);
        animation: dmFade 0.25s var(--ease);
      }

      .dm__card {
        position: relative;
        width: 100%;
        max-width: 420px;
        max-height: 92vh;
        overflow-y: auto;
        background: #fff;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        border: 1px solid var(--color-border);
        padding: clamp(1.5rem, 4vw, 2.25rem);
        text-align: center;
        animation: dmPop 0.3s var(--ease);
      }

      .dm__close {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        width: 38px;
        height: 38px;
        border: none;
        border-radius: 50%;
        background: var(--color-surface-alt);
        color: var(--color-secondary);
        font-size: 1.1rem;
        transition: background 0.2s var(--ease), color 0.2s var(--ease), transform 0.2s var(--ease);
      }

      .dm__close:hover {
        background: var(--color-secondary);
        color: #fff;
        transform: rotate(90deg);
      }

      .dm__badge {
        display: grid;
        place-items: center;
        width: 58px;
        height: 58px;
        margin: 0 auto 0.85rem;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
        color: var(--color-gold);
        font-size: 1.4rem;
      }

      .dm__title {
        font-size: 1.5rem;
        margin-bottom: 0.4rem;
      }

      .dm__subtitle {
        font-size: 0.92rem;
        margin: 0 auto 1.25rem;
        max-width: 320px;
      }

      .dm__qr {
        margin: 0 auto 1rem;
        width: min(280px, 80%);
        padding: 0.6rem;
        border-radius: var(--radius-md);
        background: #fff;
        border: 2px dashed var(--color-gold);
      }

      .dm__qr img {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }

      .dm__apps {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 0 0 1.25rem;
        color: var(--color-text-muted);
        font-size: 1.6rem;
      }

      .dm__app-tag {
        font-family: var(--font-heading);
        font-weight: 800;
        font-size: 1rem;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 6px;
        padding: 0.05rem 0.4rem;
      }

      .dm__contact {
        font-size: 0.88rem;
        color: var(--color-text-muted);
        margin-bottom: 1.25rem;
      }

      .dm__contact p {
        margin: 0 0 0.25rem;
      }

      .dm__contact a {
        font-weight: 600;
      }

      .dm__contact span {
        margin: 0 0.4rem;
        color: var(--color-border);
      }

      .dm__done {
        width: 100%;
      }

      @keyframes dmFade {
        from {
          opacity: 0;
        }
      }

      @keyframes dmPop {
        from {
          opacity: 0;
          transform: translateY(18px) scale(0.96);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .dm__overlay,
        .dm__card {
          animation: none;
        }
      }
    `,
  ],
})
export class DonateModalComponent {
  readonly donate = inject(DonateService);
  readonly site = SITE;

  private readonly closeBtn = viewChild<ElementRef<HTMLButtonElement>>('closeBtn');

  constructor() {
    effect(() => {
      const open = this.donate.isOpen();
      // Lock background scroll while the popup is open.
      document.body.style.overflow = open ? 'hidden' : '';
      if (open) {
        // Move focus into the dialog for accessibility.
        setTimeout(() => this.closeBtn()?.nativeElement.focus(), 0);
      }
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.donate.close();
  }

  onBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.donate.close();
    }
  }
}

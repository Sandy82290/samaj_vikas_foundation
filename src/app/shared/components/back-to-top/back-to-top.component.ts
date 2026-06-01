import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="back-to-top"
      [class.is-visible]="visible()"
      (click)="scrollTop()"
      aria-label="Back to top"
    >
      <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  `,
  styles: [
    `
      .back-to-top {
        position: fixed;
        right: clamp(1rem, 3vw, 2rem);
        bottom: clamp(1rem, 3vw, 2rem);
        width: 48px;
        height: 48px;
        border: none;
        border-radius: 50%;
        background: var(--color-primary);
        color: #fff;
        font-size: 1.1rem;
        box-shadow: var(--shadow-md);
        opacity: 0;
        transform: translateY(20px) scale(0.8);
        pointer-events: none;
        transition: opacity 0.3s var(--ease), transform 0.3s var(--ease),
          background 0.3s var(--ease);
        z-index: 900;
      }

      .back-to-top.is-visible {
        opacity: 1;
        transform: none;
        pointer-events: auto;
      }

      .back-to-top:hover {
        background: var(--color-secondary);
        transform: translateY(-3px);
      }
    `,
  ],
})
export class BackToTopComponent {
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 500);
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

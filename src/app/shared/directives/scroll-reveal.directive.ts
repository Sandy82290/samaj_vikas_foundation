import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Adds the `reveal` class on init and toggles `is-visible` when the element
 * scrolls into view, producing a fade/slide-in effect. Falls back to visible
 * when IntersectionObserver is unavailable.
 *
 * Usage: <div appScrollReveal="left" [revealDelay]="2"> ... </div>
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  /** Optional variant: '' | 'left' | 'right' | 'zoom' */
  @Input('appScrollReveal') variant: '' | 'left' | 'right' | 'zoom' = '';
  /** Stagger index 1-4 -> transition-delay (values outside 1-4 are ignored) */
  @Input() revealDelay?: number;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    if (this.variant) {
      node.classList.add(`reveal--${this.variant}`);
    }
    if (this.revealDelay) {
      node.setAttribute('data-delay', String(this.revealDelay));
    }

    if (
      !isPlatformBrowser(this.platformId) ||
      typeof IntersectionObserver === 'undefined'
    ) {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

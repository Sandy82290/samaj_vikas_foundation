import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Animates a numeric counter from 0 to [appCountUp] when it scrolls into view.
 * Supports an optional suffix/prefix and duration.
 *
 * Usage: <span [appCountUp]="5000" suffix="+">0</span>
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input('appCountUp') end = 0;
  @Input() duration = 2000;
  @Input() prefix = '';
  @Input() suffix = '';

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private rafId?: number;
  private started = false;

  ngAfterViewInit(): void {
    this.render(0);

    if (
      !isPlatformBrowser(this.platformId) ||
      typeof IntersectionObserver === 'undefined'
    ) {
      this.render(this.end);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.started) {
            this.started = true;
            this.observer?.unobserve(entry.target);
            this.animate();
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    this.zone.runOutsideAngular(() => {
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / this.duration, 1);
        // easeOutQuart for a lively settle
        const eased = 1 - Math.pow(1 - progress, 4);
        this.render(Math.round(eased * this.end));
        if (progress < 1) {
          this.rafId = requestAnimationFrame(step);
        }
      };
      this.rafId = requestAnimationFrame(step);
    });
  }

  private render(value: number): void {
    this.el.nativeElement.textContent = `${this.prefix}${value.toLocaleString(
      'en-IN'
    )}${this.suffix}`;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}

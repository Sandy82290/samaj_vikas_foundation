import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

/**
 * Reusable centered section heading: eyebrow label + title (with optional
 * highlighted accent word) + subtitle.
 */
@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-head" appScrollReveal>
      @if (eyebrow) {
        <span class="section-head__eyebrow">
          @if (icon) {
            <i class="fa-solid {{ icon }}" aria-hidden="true"></i>
          }
          {{ eyebrow }}
        </span>
      }
      <h2 class="section-head__title">
        {{ title }} @if (accent) {<span class="accent">{{ accent }}</span>}
      </h2>
      @if (subtitle) {
        <p class="section-head__subtitle">{{ subtitle }}</p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input() icon = '';
  @Input({ required: true }) title = '';
  @Input() accent = '';
  @Input() subtitle = '';
}

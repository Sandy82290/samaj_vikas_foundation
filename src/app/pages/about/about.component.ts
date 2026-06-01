import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { CORE_VALUES, TEAM, TIMELINE } from './about.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    PageBannerComponent,
    SectionHeadingComponent,
    ScrollRevealDirective,
    CountUpDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly coreValues = CORE_VALUES;
  readonly team = TEAM;
  readonly timeline = TIMELINE;

  /** Hide a broken portrait so the initials avatar shows through. */
  onPhotoError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}

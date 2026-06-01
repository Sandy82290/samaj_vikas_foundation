import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpDirective } from '../../../../shared/directives/count-up.directive';
import { DonateService } from '../../../../core/services/donate.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CountUpDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly donate = inject(DonateService);
}

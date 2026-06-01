import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS, SITE } from '../../../shared/data/site.config';
import { DonateService } from '../../services/donate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly site = SITE;
  readonly donate = inject(DonateService);
  readonly navLinks = NAV_LINKS;
  readonly year = 2026;

  readonly socialLinks = [
    { icon: 'fa-facebook-f', url: SITE.social.facebook, label: 'Facebook' },
    { icon: 'fa-instagram', url: SITE.social.instagram, label: 'Instagram' },
    { icon: 'fa-linkedin-in', url: SITE.social.linkedin, label: 'LinkedIn' },
    { icon: 'fa-youtube', url: SITE.social.youtube, label: 'YouTube' },
  ];
}

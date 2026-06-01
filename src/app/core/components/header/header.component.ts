import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS, SITE } from '../../../shared/data/site.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly site = SITE;
  readonly navLinks = NAV_LINKS;

  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.lockBody(this.menuOpen());
  }

  closeMenu(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.lockBody(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  private lockBody(lock: boolean): void {
    document.body.style.overflow = lock ? 'hidden' : '';
  }
}

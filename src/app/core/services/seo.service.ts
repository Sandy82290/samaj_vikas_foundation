import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { filter } from 'rxjs';

/**
 * Keeps document title, meta description and Open Graph tags in sync with the
 * active route's `title` and `data.description`.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  init(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        const snapshot = this.deepestRoute(this.router.routerState.snapshot.root);
        const description = snapshot.data?.['description'] as string | undefined;
        const pageTitle = this.title.getTitle();

        if (description) {
          this.meta.updateTag({ name: 'description', content: description });
          this.meta.updateTag({
            property: 'og:description',
            content: description,
          });
        }
        this.meta.updateTag({ property: 'og:title', content: pageTitle });
        this.meta.updateTag({
          property: 'og:url',
          content: window.location.href,
        });
      });
  }

  private deepestRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }
}

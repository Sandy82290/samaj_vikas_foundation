import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="nf">
      <div class="container nf__inner">
        <span class="nf__code">404</span>
        <h1>Page Not Found</h1>
        <p>
          Oops! The page you are looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>
        <div class="nf__actions">
          <a routerLink="/" class="btn btn--primary btn--lg">
            <i class="fa-solid fa-house" aria-hidden="true"></i> Back to Home
          </a>
          <a routerLink="/contact" class="btn btn--outline btn--lg">
            <i class="fa-solid fa-envelope" aria-hidden="true"></i> Contact Us
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .nf {
        min-height: 70vh;
        display: grid;
        place-items: center;
        text-align: center;
        padding-block: 4rem;
        background: var(--color-surface-alt);
      }

      .nf__code {
        display: block;
        font-family: var(--font-heading);
        font-size: clamp(5rem, 18vw, 9rem);
        font-weight: 800;
        line-height: 1;
        background: linear-gradient(120deg, var(--color-primary), var(--color-gold));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }

      .nf h1 {
        font-size: clamp(1.5rem, 4vw, 2.2rem);
        margin-bottom: 0.6rem;
      }

      .nf p {
        max-width: 480px;
        margin: 0 auto 2rem;
      }

      .nf__actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class NotFoundComponent {}

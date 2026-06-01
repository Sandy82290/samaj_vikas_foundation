import { Injectable, signal } from '@angular/core';

/**
 * Controls the global Donate popup. Inject anywhere and call `open()` from a
 * Donate button; the <app-donate-modal> in the app shell reacts to the signal.
 */
@Injectable({ providedIn: 'root' })
export class DonateService {
  readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }
}

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { PageBannerComponent } from '../../shared/components/page-banner/page-banner.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE } from '../../shared/data/site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatExpansionModule,
    PageBannerComponent,
    SectionHeadingComponent,
    ScrollRevealDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);
  private readonly sanitizer = inject(DomSanitizer);

  readonly site = SITE;
  readonly submitting = signal(false);

  readonly mapUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(SITE.mapEmbedUrl);

  readonly socialLinks = [
    { icon: 'fa-facebook-f', url: SITE.social.facebook, label: 'Facebook', cls: 'fb' },
    { icon: 'fa-instagram', url: SITE.social.instagram, label: 'Instagram', cls: 'ig' },
    { icon: 'fa-linkedin-in', url: SITE.social.linkedin, label: 'LinkedIn', cls: 'in' },
    { icon: 'fa-youtube', url: SITE.social.youtube, label: 'YouTube', cls: 'yt' },
  ];

  readonly faqs = [
    {
      q: 'How can I donate to Samaj Vikas Foundation?',
      a: 'You can donate using the “Donate Now” button, via bank transfer, or by contacting us directly. Every contribution is acknowledged with a receipt.',
    },
    {
      q: 'Can I volunteer with the foundation?',
      a: 'Absolutely! We welcome volunteers for our education, health and environment programmes. Fill out the contact form mentioning “Volunteer” and our coordinator will reach out.',
    },
    {
      q: 'Are donations tax-deductible?',
      a: 'Yes, donations are eligible for tax exemption under applicable sections. A valid receipt is provided for all contributions.',
    },
    {
      q: 'How is my contribution utilised?',
      a: 'We maintain full transparency. Funds are channelled directly into our field programmes, and annual impact reports are shared with our donors.',
    },
  ];

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^[+]?[0-9\s-]{10,15}$/)],
    ],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  /** Convenience accessor for template validation. */
  invalid(control: keyof typeof this.form.controls): boolean {
    const c = this.form.controls[control];
    return c.invalid && (c.touched || c.dirty);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackBar.open('Please fix the highlighted fields.', 'Close', {
        duration: 4000,
        panelClass: 'svf-snackbar',
      });
      return;
    }

    this.submitting.set(true);

    // Simulated async submission. Replace with a real HTTP call / email service.
    setTimeout(() => {
      this.submitting.set(false);
      this.form.reset();
      this.snackBar.open(
        'Thank you! Your message has been sent. We will get back to you soon.',
        'Close',
        { duration: 6000, panelClass: 'svf-snackbar' }
      );
    }, 1200);
  }
}

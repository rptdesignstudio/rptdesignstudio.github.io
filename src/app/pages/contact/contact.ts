import {
  Component,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CONTACT_INFO } from '../../core/data/contact.data';
import { CONTACT_PAGE_TITLE } from '../../core/data/section-title.data';

import { Container } from '../../shared/ui/container/container';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    Container,
    SectionTitleComponent
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  private formBuilder = inject(FormBuilder);

  contactInfo = CONTACT_INFO;

  sectionTitle = CONTACT_PAGE_TITLE;

  submitted = false;

  contactForm = this.formBuilder.group({

    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    phone: [
      ''
    ],

    projectType: [
      '',
      Validators.required
    ],

    location: [
      ''
    ],

    message: [
      '',
      [
        Validators.required,
        Validators.minLength(20)
      ]
    ]

  });

  submit(): void {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;

    }

    console.log(
      'Contact Form:',
      this.contactForm.getRawValue()
    );

    this.submitted = true;

  }

  resetForm(): void {

    this.contactForm.reset();

    this.submitted = false;

  }

}
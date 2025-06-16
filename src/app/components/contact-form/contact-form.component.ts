import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact-form',
  imports: [MatButtonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  showGeneralError = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = this.fb.group({
      username: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+[0-9]{12}$/)]],
      email: [
        '',
        [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
      ],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactForm.reset();
      this.showGeneralError = false;
    } else {
      this.showGeneralError = true;
    }
  }
}

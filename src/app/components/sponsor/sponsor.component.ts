import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sponsor',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss',
})
export class SponsorComponent {
  sponsorForm!: FormGroup;
  showGeneralError = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.sponsorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^\+?[0-9\s\-\(\)]{10,}$/)],
      ],
      comment: ['', [Validators.maxLength(500)]],
    });
  }

  onSubmit() {
    if (this.sponsorForm.valid) {
      this.sponsorForm.reset();

      Object.keys(this.sponsorForm.controls).forEach((key) => {
        const control = this.sponsorForm.get(key);
        control?.markAsUntouched();
        control?.markAsPristine();
        control?.setErrors(null);
      });

      this.showGeneralError = false;
    } else {
      this.showGeneralError = true;
    }
  }
}

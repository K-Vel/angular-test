import { Component } from '@angular/core';
import { ContactFormComponent } from '../../contact-form/contact-form.component';

@Component({
  selector: 'app-contacts-section',
  imports: [ContactFormComponent],
  templateUrl: './contacts-section.component.html',
  styleUrl: './contacts-section.component.scss',
})
export class ContactsSectionComponent {}

import { Component } from '@angular/core';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { MapFrameComponent } from '../../map-frame/map-frame.component';

@Component({
  selector: 'app-contacts-section',
  imports: [ContactFormComponent, MapFrameComponent],
  templateUrl: './contacts-section.component.html',
  styleUrl: './contacts-section.component.scss',
})
export class ContactsSectionComponent {}

import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-callback-dialog',
  imports: [MatDialogModule, ContactFormComponent, MatIconModule],
  templateUrl: './callback-dialog.component.html',
  styleUrl: './callback-dialog.component.scss',
})
export class CallbackDialogComponent {}

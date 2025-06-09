import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CallbackDialogComponent } from '../../callback-dialog/callback-dialog.component';

@Component({
  selector: 'app-hero-section',
  imports: [MatButtonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(CallbackDialogComponent, {
      panelClass: 'custom-dialog-container',
    });
  }
}

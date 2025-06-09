import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidenavService } from '../../services/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { CallbackDialogComponent } from '../callback-dialog/callback-dialog.component';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly dialog = inject(MatDialog);

  constructor(private sidenavService: SidenavService) {}

  // To open the mobile menu
  toggle() {
    this.sidenavService.toggle();
  }

  // To open Callback-Dialog
  openDialog() {
    this.dialog.open(CallbackDialogComponent, {
      panelClass: 'custom-dialog-container',
    });
  }
}

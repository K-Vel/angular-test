import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  constructor(private sidenavService: SidenavService) {}

  // To close the mobile menu
  toggle() {
    this.sidenavService.toggle();
  }
}

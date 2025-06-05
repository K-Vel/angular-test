import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
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

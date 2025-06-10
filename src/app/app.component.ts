import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { SidenavService } from './services/sidenav.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    MatSidenavModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private sidenavService = inject(SidenavService);

  toggle() {
    this.sidenavService.toggle();
  }

  get drawerState() {
    return this.sidenavService.drawerState;
  }
}

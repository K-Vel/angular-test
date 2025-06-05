import { Component, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BenefitsSectionComponent } from './components/main/benefits-section/benefits-section.component';
import { ChefsSectionComponent } from './components/main/chefs-section/chefs-section.component';
import { ContactsSectionComponent } from './components/main/contacts-section/contacts-section.component';
import { FormatsSectionComponent } from './components/main/formats-section/formats-section.component';
import { HeroSectionComponent } from './components/main/hero-section/hero-section.component';
import { TraditionsSectionComponent } from './components/main/traditions-section/traditions-section.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { SidenavService } from './services/sidenav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    BenefitsSectionComponent,
    TraditionsSectionComponent,
    ChefsSectionComponent,
    FormatsSectionComponent,
    ContactsSectionComponent,
    MobileMenuComponent,
    MatSidenavModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnDestroy {
  @ViewChild('drawer') drawer!: MatSidenav;

  private subscription: Subscription;

  constructor(private sidenavService: SidenavService) {
    this.subscription = this.sidenavService.toggleDrawer$.subscribe(() => {
      this.drawer.toggle();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

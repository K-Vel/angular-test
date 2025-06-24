import { Component } from '@angular/core';
import { BenefitsSectionComponent } from '../benefits-section/benefits-section.component';
import { ChefsSectionComponent } from '../chefs-section/chefs-section.component';
import { ContactsSectionComponent } from '../contacts-section/contacts-section.component';
import { FormatsSectionComponent } from '../formats-section/formats-section.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { TraditionsSectionComponent } from '../traditions-section/traditions-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    BenefitsSectionComponent,
    TraditionsSectionComponent,
    ChefsSectionComponent,
    FormatsSectionComponent,
    ContactsSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

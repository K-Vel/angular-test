import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-benefits-section',
  imports: [MatListModule, MatButtonModule],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss',
})
export class BenefitsSectionComponent {}

import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chef',
  imports: [MatCardModule],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.scss',
})
export class ChefComponent {
  @Input() chef:
    | {
        name: string;
        image: string;
        image2x: string;
        alt: string;
        greeting: string;
        description: string[];
      }
    | undefined;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-format',
  imports: [],
  templateUrl: './format.component.html',
  styleUrl: './format.component.scss',
})
export class FormatComponent {
  @Input() type!: string;
  @Input() title!: string;
  @Input() formats!: string[];
}

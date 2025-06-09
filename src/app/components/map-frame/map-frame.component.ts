import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-map-frame',
  imports: [MatProgressSpinnerModule],
  templateUrl: './map-frame.component.html',
  styleUrl: './map-frame.component.scss',
})
export class MapFrameComponent implements AfterViewInit {
  @ViewChild('mapIframe') mapIframe!: ElementRef<HTMLIFrameElement>;

  isMapLoaded = false;

  ngAfterViewInit() {
    const iframe = this.mapIframe.nativeElement;

    iframe.addEventListener('load', () => {
      this.isMapLoaded = true;
    });
  }
}

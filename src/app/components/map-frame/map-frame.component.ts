import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-map-frame',
  imports: [SpinnerComponent],
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

import { Component, effect, ElementRef, viewChild } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-map-frame',
  imports: [SpinnerComponent],
  templateUrl: './map-frame.component.html',
  styleUrl: './map-frame.component.scss',
})
export class MapFrameComponent {
  mapIframe = viewChild<ElementRef>('mapIframe');
  isMapLoaded: boolean = false;

  constructor() {
    effect((onCleanup) => {
      const iframe = this.mapIframe();
      if (!iframe) return;

      const listener = () => (this.isMapLoaded = true);
      iframe.nativeElement.addEventListener('load', listener);

      onCleanup(() => {
        iframe.nativeElement.removeEventListener('load', listener);
      });
    });
  }
}

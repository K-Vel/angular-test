import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective implements OnInit, OnDestroy {
  private routerSub!: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkRoute();

    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.checkRoute());
  }

  private checkRoute(): void {
    if (this.router.url.includes('/sponsor')) {
      // if /sponsor
      this.renderer.setStyle(this.el.nativeElement, 'position', 'static');
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        '#31261a'
      );
    } else {
      // reset styles for other routes
      this.renderer.removeStyle(this.el.nativeElement, 'position');
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}

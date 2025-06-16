import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  isOpen = signal(false);

  drawerState = this.isOpen.asReadonly();

  toggle() {
    this.isOpen.update((state) => !state);
  }

  open() {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }
}

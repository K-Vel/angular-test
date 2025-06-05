import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private toggleDrawerSource = new Subject<void>();
  toggleDrawer$ = this.toggleDrawerSource.asObservable();

  toggle() {
    this.toggleDrawerSource.next();
  }
}

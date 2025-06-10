import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'sponsor',
    loadComponent: () =>
      import('./components/sponsor/sponsor.component').then(
        (m) => m.SponsorComponent
      ),
  },
  { path: '**', redirectTo: '' }, // 404 → Home];
];

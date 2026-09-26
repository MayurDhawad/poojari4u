import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home')
        .then(m => m.Home),
  },
  {
    path: 'poojaris',
    loadComponent: () =>
      import('./features/home/pages/poojaris/poojaris.component')
        .then(m => m.PoojarisComponent)
  },
  {
    path: 'bajanthri',
    loadComponent: () =>
      import('./features/home/pages/bajanthri/bajanthri.component')
        .then(m => m.BajanthriComponent)
  },
  {
    path: 'pooja-samagri',
    loadComponent: () =>
      import('./features/home/pages/pooja-samagri/pooja-samagri.component')
        .then(m => m.PoojaSamagriComponent)
  },
  {
    path: 'packages',
    loadComponent: () =>
      import('./features/home/pages/packages/packages.component')
        .then(m => m.PackagesComponent)
  },
  {
    path: 'my-bookings',
    loadComponent: () =>
      import('./features/home/pages/my-bookings/my-bookings.component')
        .then(m => m.MyBookingsComponent)
  },
  {
    path: '**',
    redirectTo: '',
  },
];
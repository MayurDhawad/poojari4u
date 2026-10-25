import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home')
        .then(m => m.Home),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/admin-dashboard/admin-dashboard.component')
        .then(m => m.AdminDashboardComponent)
  },
  {
    path: 'poojari-dashboard',
    loadComponent: () =>
      import('./dashboard/poojari-dashboard/poojari-dashboard.component')
        .then(m => m.PoojariDashboardComponent),
        children: [
      {
        path: '',
        redirectTo: 'my-dashboard',
        pathMatch: 'full',
      },
      {
        path: 'my-dashboard',
        loadComponent: () =>
          import('./dashboard/poojari-dashboard/my-dashboard/my-dashboard.component')
            .then(m => m.MyDashboardComponent),
      },
      {
        path: 'my-bookings',
        loadComponent: () =>
          import('./dashboard/poojari-dashboard/my-booking/my-booking.component')
            .then(m => m.MyBookingComponent),
      },
      {
        path: 'my-services',
        loadComponent: () =>
          import('./dashboard/poojari-dashboard/my-services/my-services.component')
            .then(m => m.MyServicesComponent),
      },
      {
        path: 'my-availability',
        loadComponent: () =>
          import('./dashboard/poojari-dashboard/my-availability/my-availability.component')
            .then(m => m.MyAvailabilityComponent),
      },
      {
        path: 'my-earnings',
        loadComponent: () =>
          import('./dashboard/poojari-dashboard/my-earnings/my-earnings.component')
            .then(m => m.MyEarningsComponent),
      },
      {
        path: 'my-profile',
        loadComponent: () =>
          import('./dashboard/poojari-dashboard/my-profile/my-profile.component')
            .then(m => m.MyProfileComponent),
      },
      {
        path: 'my-reviews',
        loadComponent: () =>
          import('./dashboard/poojari-dashboard/my-reviews/my-reviews.component')
            .then(m => m.MyReviewsComponent),
      },
    ],
  },
  {
    path: 'bajanthris-dashboard',
    loadComponent: () =>
      import('./dashboard/bajanthris-dashboard/bajanthris-dashboard.component')
        .then(m => m.BajanthrisDashboardComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./features/shared/payment-page/payment-page.component')
        .then(m => m.PaymentPageComponent)
  },
  {
    path: 'confirmation',
    loadComponent: () =>
      import('./features/shared/payment-confirmation-page/payment-confirmation-page.component')
        .then(m => m.PaymentConfirmationPageComponent)
  },
  {
    path: 'poojari-registration',
    loadComponent: () =>
      import('./features/home/pages/poojaris/poojari-registration-flow/poojari-registration-flow.component')
        .then(m => m.PoojariRegistrationFlowComponent)
  },
  {
    path: 'bajanthri-registration',
    loadComponent: () =>
      import('./features/home/pages/bajanthri/bajanthri-registration-flow/bajanthri-registration-flow.component')
        .then(m => m.BajanthriRegistrationFlowComponent)
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./features/home/pages/about-us/about-us.component')
        .then(m => m.AboutUsComponent)
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
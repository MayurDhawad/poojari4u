import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Poojaris', path: '/poojaris' },
    { label: 'Bajanthri', path: '/bajanthri' },
    { label: 'Puja Samagri', path: '/pooja-samagri' },
    { label: 'Packages', path: '/packages' },
    { label: 'My Bookings', path: '/my-bookings' },
  ];

}
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
    { label: 'Poojaris', path: '/poojaris1' },
    { label: 'Bajanthri', path: '/bajanthri1' },
    { label: 'Puja Samagri', path: '/pooja-samagri1' },
    { label: 'Packages', path: '/packages1' },
    { label: 'My Bookings', path: '/my-bookings1' },
  ];

}
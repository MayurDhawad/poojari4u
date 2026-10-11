import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DashboardBooking {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  customer: string;
  status: 'CONFIRMED' | 'PENDING';
}

interface DashboardStat {
  label: string;
  value: string;
  icon: string;
  iconClass: string;
}

interface DashboardService {
  name: string;
}

@Component({
  selector: 'app-poojari-dashboard',
  standalone: true,
  templateUrl: './poojari-dashboard.component.html',
  styleUrls: ['./poojari-dashboard.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class PoojariDashboardComponent {

  readonly poojariName = signal('Ravi Sharma');
  readonly initials = computed(() =>
    this.poojariName()
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase()
  );

  readonly isAvailable = signal(true);

  readonly availabilityText = computed(() =>
    this.isAvailable()
      ? 'Customers can currently book your services.'
      : 'Customers cannot book your services right now.'
  );

  readonly stats: DashboardStat[] = [
    {
      label: "Today's Bookings",
      value: '2',
      icon: '📅',
      iconClass: 'icon-orange'
    },
    {
      label: 'Upcoming Bookings',
      value: '5',
      icon: '🗓️',
      iconClass: 'icon-purple'
    },
    {
      label: 'This Month Earnings',
      value: '₹12,500',
      icon: '💰',
      iconClass: 'icon-green'
    },
    {
      label: 'Rating',
      value: '4.8',
      icon: '⭐',
      iconClass: 'icon-yellow'
    }
  ];

  readonly bookings: DashboardBooking[] = [
    {
      id: 1,
      title: 'Business Opening Pooja',
      date: '28 September 2026',
      time: '8:30 AM',
      location: 'Kondapur, Hyderabad',
      customer: 'Srinivas Reddy',
      status: 'CONFIRMED'
    },
    {
      id: 2,
      title: 'Satyanarayana Swamy Pooja',
      date: '30 September 2026',
      time: '10:00 AM',
      location: 'Gachibowli, Hyderabad',
      customer: 'Anil Kumar',
      status: 'CONFIRMED'
    }
  ];

  readonly services: DashboardService[] = [
    { name: 'Ganapathi Pooja' },
    { name: 'Gruhapravesham' },
    { name: 'Homam / Havan' },
    { name: 'Business Opening Pooja' }
  ];

  readonly navigation = [
    {
      label: 'Dashboard',
      icon: '⌂',
      route: '/poojari/dashboard'
    },
    {
      label: 'Bookings',
      icon: '▦',
      route: '/poojari/bookings'
    },
    {
      label: 'My Services',
      icon: '🪔',
      route: '/poojari/services'
    },
    {
      label: 'Availability',
      icon: '◷',
      route: '/poojari/availability'
    },
    {
      label: 'Earnings',
      icon: '₹',
      route: '/poojari/earnings'
    },
    {
      label: 'Reviews',
      icon: '☆',
      route: '/poojari/reviews'
    },
    {
      label: 'My Profile',
      icon: '♙',
      route: '/poojari/profile'
    },
    {
      label: 'Settings',
      icon: '⚙',
      route: '/poojari/settings'
    }
  ];

  toggleAvailability(): void {
    this.isAvailable.update(value => !value);
  }
}
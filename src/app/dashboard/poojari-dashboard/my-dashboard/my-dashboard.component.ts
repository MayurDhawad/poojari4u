import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DashboardStat {
  label: string;
  value: string;
  icon: string;
  description: string;
  trend?: string;
}

interface Booking {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  customer: string;
  status: 'CONFIRMED' | 'PENDING' | 'COMPLETED';
}

type BookingStatus = 'NEW REQUEST' | 'BOOKING ACCEPTED' | 'BOOKING DECLINED';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class MyDashboardComponent {

  readonly isAvailable = signal(true);
  readonly mobileMenuOpen = signal(false);

    bookingStatus = signal<BookingStatus>('NEW REQUEST');
    showDeclineModal = signal(false);
  
    readonly profile = {
      name: 'Ravi Sharma',
      initials: 'RS',
      verified: true
    };
  
    readonly navigation = [
      { label: 'Dashboard', icon: '⌂', route: '/poojari/dashboard' },
      { label: 'Bookings', icon: '▦', route: '/poojari/bookings' },
      { label: 'My Services', icon: '🪔', route: '/poojari/services' },
      { label: 'Availability', icon: '◷', route: '/poojari/availability' },
      { label: 'Earnings', icon: '₹', route: '/poojari/earnings' },
      { label: 'Reviews', icon: '☆', route: '/poojari/reviews' },
      { label: 'My Profile', icon: '♙', route: '/poojari/profile' },
      { label: 'Settings', icon: '⚙', route: '/poojari/settings' }
    ];
  
    readonly stats: DashboardStat[] = [
      {
        label: "Today's Bookings",
        value: '2',
        icon: '▦',
        description: 'Bookings scheduled today'
      },
      {
        label: 'Upcoming Bookings',
        value: '5',
        icon: '◷',
        description: 'Your next scheduled poojas'
      },
      {
        label: 'This Month Earnings',
        value: '₹12,500',
        icon: '₹',
        description: 'Total earnings this month'
      },
      {
        label: 'Rating',
        value: '4.8',
        icon: '★',
        description: 'Customer satisfaction'
      }
    ];
  
    readonly bookings: Booking[] = [
      {
        id: 'BK001',
        title: 'Business Opening Pooja',
        date: '28 September 2026',
        time: '8:30 AM',
        location: 'Kondapur, Hyderabad',
        customer: 'Srinivas Reddy',
        status: 'CONFIRMED'
      },
      {
        id: 'BK002',
        title: 'Satyanarayana Swamy Pooja',
        date: '30 September 2026',
        time: '10:00 AM',
        location: 'Gachibowli, Hyderabad',
        customer: 'Anil Kumar',
        status: 'CONFIRMED'
      }
    ];
  
    readonly booking = {
      id: 'P4U-2026-00981',
      serviceName: 'Business Opening Pooja',
      date: '26 September 2026',
      time: '8:30 AM',
      businessType: 'New Restaurant Opening',
      guests: 'Approximately 25',
      duration: 'Approximately 2 Hours',
      materials: 'Customer Requested Materials',
      customerName: 'Srinivas Reddy',
      customerLocation: 'Kondapur, Hyderabad',
      fullAddress: 'Kondapur, Hyderabad, Telangana - 500084',
      serviceAmount: 1800,
      commission: 300,
      earnings: 1500
    };
  
    readonly services = [
      'Ganapathi Pooja',
      'Gruhapravesham',
      'Homam / Havan',
      'Business Opening Pooja'
    ];
  
    readonly quickActions = [
      {
        label: 'View Bookings',
        icon: '▦',
        route: '/poojari/bookings'
      },
      {
        label: 'Manage Services',
        icon: '🪔',
        route: '/poojari/services'
      },
      {
        label: 'Manage Availability',
        icon: '◷',
        route: '/poojari/availability'
      },
      {
        label: 'View Earnings',
        icon: '₹',
        route: '/poojari/earnings'
      }
    ];
  
    toggleAvailability(): void {
      this.isAvailable.update(value => !value);
    }
  
    toggleMobileMenu(): void {
      this.mobileMenuOpen.update(value => !value);
    }
  
    closeMobileMenu(): void {
      this.mobileMenuOpen.set(false);
    }
  }
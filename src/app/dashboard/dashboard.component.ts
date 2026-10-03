import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Booking {
  id: string;
  serviceName: string;
  poojariName: string;
  date: string;
  time: string;
  location: string;
  amount: number;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // User profile signal
  userName = signal<string>('Rajesh Sharma');
  userEmail = signal<string>('rajesh.sharma@example.com');
  userPhone = signal<string>('+91 98765 43210');

  // Dashboard Stats
  totalBookings = signal<number>(12);
  upcomingPoojas = signal<number>(2);
  activeRequests = signal<number>(1);
  rewardPoints = signal<number>(450);

  // Recent Bookings Data
  recentBookings = signal<Booking[]>([
    {
      id: 'BK-1082',
      serviceName: 'Satyanarayana Swamy Pooja',
      poojariName: 'Pt. Ramachandra Murthy',
      date: 'Oct 15, 2026',
      time: '09:00 AM',
      location: 'Kondapur, Hyderabad',
      amount: 3500,
      status: 'Confirmed'
    },
    {
      id: 'BK-1079',
      serviceName: 'Grihapravesham & Homam',
      poojariName: 'Pt. Shiva Sharma',
      date: 'Nov 02, 2026',
      time: '06:30 AM',
      location: 'Gachibowli, Hyderabad',
      amount: 8500,
      status: 'Pending'
    },
    {
      id: 'BK-1045',
      serviceName: 'Ganapathi Pooja & Bajanthri',
      poojariName: 'Pt. Venkatesh Shastri',
      date: 'Sep 10, 2026',
      time: '08:00 AM',
      location: 'Madhapur, Hyderabad',
      amount: 6200,
      status: 'Completed'
    }
  ]);

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'Confirmed': return 'bg-success-subtle text-success border-success';
      case 'Pending': return 'bg-warning-subtle text-warning-emphasis border-warning';
      case 'Completed': return 'bg-info-subtle text-info-emphasis border-info';
      case 'Cancelled': return 'bg-danger-subtle text-danger border-danger';
      default: return 'bg-secondary-subtle text-secondary';
    }
  }
}
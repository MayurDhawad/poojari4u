import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type BookingStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Completed'
  | 'Cancelled';

interface Booking {
  id: string;
  event: string;
  customer: string;
  date: string;
  location: string;
  amount: number;
  status: BookingStatus;
}

interface UpcomingEvent {
  title: string;
  location: string;
  date: string;
  status: BookingStatus;
}
@Component({
  selector: 'app-bajanthris-dashboard',
  standalone: true,
  templateUrl: './bajanthris-dashboard.component.html',
  styleUrls: ['./bajanthris-dashboard.component.scss'],
  imports: [CommonModule],
})
export class BajanthrisDashboardComponent {

  sidebarOpen = false;
  activeMenu = 'Dashboard';

  // Sample values: replace with API response data.
  profile = {
    name: 'Shree Ganesh Bajantri',
    type: 'Nadaswaram & Thavil',
    verificationStatus: 'Verified',
    available: true
  };

  stats = [
    {
      title: 'Total Bookings',
      value: '86',
      change: '+15%',
      icon: 'bi-calendar-check',
      color: '#2563eb',
      bg: '#dbeafe'
    },
    {
      title: 'Upcoming Events',
      value: '24',
      change: '+8%',
      icon: 'bi-calendar-event',
      color: '#059669',
      bg: '#d1fae5'
    },
    {
      title: 'Completed Events',
      value: '58',
      change: '+12%',
      icon: 'bi-check-circle',
      color: '#9333ea',
      bg: '#f3e8ff'
    },
    {
      title: 'Total Earnings',
      value: '₹2,48,500',
      change: '+22%',
      icon: 'bi-wallet2',
      color: '#ea580c',
      bg: '#ffedd5'
    }
  ];

  bookingTrend = [
    { label: 'Mon', value: 35 },
    { label: 'Tue', value: 55 },
    { label: 'Wed', value: 42 },
    { label: 'Thu', value: 72 },
    { label: 'Fri', value: 60 },
    { label: 'Sat', value: 78 },
    { label: 'Sun', value: 95 }
  ];

  instrumentTypes = [
    { name: 'Nadaswaram', count: 32, color: '#3b82f6' },
    { name: 'Thavil', count: 28, color: '#22c55e' },
    { name: 'Mridangam', count: 24, color: '#f59e0b' },
    { name: 'Veena', count: 18, color: '#a855f7' },
    { name: 'Flute', count: 14, color: '#f43f5e' },
    { name: 'Others', count: 12, color: '#06b6d4' }
  ];

  bookings: Booking[] = [
    {
      id: 'BJ1001',
      event: 'Temple Festival',
      customer: 'Amit Patil',
      date: '03 May 2026',
      location: 'Nagpur',
      amount: 15000,
      status: 'Confirmed'
    },
    {
      id: 'BJ1002',
      event: 'Wedding',
      customer: 'Priya Kulkarni',
      date: '30 Oct 2026',
      location: 'Wardha',
      amount: 12000,
      status: 'Confirmed'
    },
    {
      id: 'BJ1003',
      event: 'House Warming',
      customer: 'Rohan Deshmukh',
      date: '28 Oct 2026',
      location: 'Nagpur',
      amount: 8000,
      status: 'Pending'
    },
    {
      id: 'BJ1004',
      event: 'Temple Festival',
      customer: 'Sneha Joshi',
      date: '26 Oct 2026',
      location: 'Amravati',
      amount: 18000,
      status: 'Completed'
    },
    {
      id: 'BJ1005',
      event: 'Wedding',
      customer: 'Vijay Patil',
      date: '24 Oct 2026',
      location: 'Nagpur',
      amount: 10500,
      status: 'Completed'
    }
  ];

  upcomingEvents: UpcomingEvent[] = [
    {
      title: 'House Warming',
      location: 'Dharampeth, Nagpur',
      date: '28 Oct 2026',
      status: 'Pending'
    },
    {
      title: 'Wedding Ceremony',
      location: 'Wardha Road, Nagpur',
      date: '30 Oct 2026',
      status: 'Confirmed'
    },
    {
      title: 'Temple Festival',
      location: 'Ganesh Temple, Nagpur',
      date: '02 Nov 2026',
      status: 'Confirmed'
    },
    {
      title: 'Cultural Programme',
      location: 'Amravati, Maharashtra',
      date: '05 Nov 2026',
      status: 'Pending'
    }
  ];

  menuItems = [
    { label: 'Dashboard', icon: 'bi-grid-1x2' },
    { label: 'My Profile', icon: 'bi-person-circle' },
    { label: 'My Services', icon: 'bi-music-note-list' },
    { label: 'Bookings', icon: 'bi-calendar-check' },
    { label: 'Events Calendar', icon: 'bi-calendar3' },
    { label: 'Availability', icon: 'bi-clock-history' },
    { label: 'Earnings', icon: 'bi-wallet2' },
    { label: 'Reviews', icon: 'bi-star' },
    { label: 'Settings', icon: 'bi-gear' }
  ];

  get pendingCount(): number {
    return this.bookings.filter(
      booking => booking.status === 'Pending'
    ).length;
  }

  setActiveMenu(label: string): void {
    this.activeMenu = label;
    this.sidebarOpen = false;
  }

  setAvailability(available: boolean): void {
    this.profile.available = available;
  }

  updateBookingStatus(
    booking: Booking,
    status: BookingStatus
  ): void {
    booking.status = status;
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
}
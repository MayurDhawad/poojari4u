import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';

interface Booking {
  id: string;
  poojariName: string;
  poojariImage: string;
  service: string;
  date: string;
  time: string;
  location: string;
  amount: number;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  bookingDate: string;
}

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink, Header],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent {

  activeTab: 'all' | 'upcoming' | 'completed' | 'cancelled' = 'all';

  bookings: Booking[] = [
    {
      id: 'PUJ-2026-00125',
      poojariName: 'Pandit Rajesh Sharma',
      poojariImage: 'poojaris/poojari-1.jpg',
      service: 'Satyanarayan Puja',
      date: '28 Sep 2026',
      time: '10:00 AM - 12:00 PM',
      location: 'Dharampeth, Nagpur',
      amount: 1801,
      status: 'Upcoming',
      bookingDate: '25 Sep 2026'
    },
    {
      id: 'PUJ-2026-00118',
      poojariName: 'Pandit Amit Joshi',
      poojariImage: 'poojaris/poojari-2.jpg',
      service: 'Griha Pravesh Puja',
      date: '02 Oct 2026',
      time: '8:00 AM - 11:00 AM',
      location: 'Kharadi, Pune',
      amount: 2501,
      status: 'Upcoming',
      bookingDate: '24 Sep 2026'
    },
    {
      id: 'PUJ-2026-00094',
      poojariName: 'Pandit Suresh Shastri',
      poojariImage: 'poojaris/poojari-3.jpg',
      service: 'Ganesh Puja',
      date: '10 Sep 2026',
      time: '9:00 AM - 11:00 AM',
      location: 'Andheri, Mumbai',
      amount: 1501,
      status: 'Completed',
      bookingDate: '05 Sep 2026'
    },
    {
      id: 'PUJ-2026-00071',
      poojariName: 'Pandit Vinay Kulkarni',
      poojariImage: 'poojaris/poojari-4.jpg',
      service: 'Vastu Shanti Puja',
      date: '25 Aug 2026',
      time: '7:00 AM - 10:00 AM',
      location: 'Nashik, Maharashtra',
      amount: 2001,
      status: 'Completed',
      bookingDate: '20 Aug 2026'
    },
    {
      id: 'PUJ-2026-00062',
      poojariName: 'Pandit Rajesh Sharma',
      poojariImage: 'poojaris/poojari-1.jpg',
      service: 'Havan',
      date: '18 Aug 2026',
      time: '10:00 AM - 12:00 PM',
      location: 'Nagpur, Maharashtra',
      amount: 1201,
      status: 'Cancelled',
      bookingDate: '15 Aug 2026'
    }
  ];

  get filteredBookings(): Booking[] {

    if (this.activeTab === 'all') {
      return this.bookings;
    }

    const statusMap = {
      upcoming: 'Upcoming',
      completed: 'Completed',
      cancelled: 'Cancelled'
    };

    return this.bookings.filter(
      booking => booking.status === statusMap[
        this.activeTab as 'upcoming' | 'completed' | 'cancelled'
      ]
    );
  }

  get upcomingCount(): number {
    return this.bookings.filter(
      booking => booking.status === 'Upcoming'
    ).length;
  }

  get completedCount(): number {
    return this.bookings.filter(
      booking => booking.status === 'Completed'
    ).length;
  }

  get cancelledCount(): number {
    return this.bookings.filter(
      booking => booking.status === 'Cancelled'
    ).length;
  }

  setTab(tab: 'all' | 'upcoming' | 'completed' | 'cancelled') {
    this.activeTab = tab;
  }
}
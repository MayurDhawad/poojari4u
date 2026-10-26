import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DashboardStat {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
  bg: string;
}

interface Verification {
  name: string;
  role: string;
  document: string;
  date: string;
  initials: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
})
export class AdminDashboardComponent{
  sidebarOpen = false;

  activeMenu = 'Dashboard';

  stats: DashboardStat[] = [
    {
      title: 'Total Poojaris',
      value: '1,284',
      change: '+12.5%',
      icon: 'bi-people',
      color: '#EA580C',
      bg: '#FFF1E8'
    },
    {
      title: 'Bajantri Profiles',
      value: '356',
      change: '+8.2%',
      icon: 'bi-music-note-beamed',
      color: '#7C3AED',
      bg: '#F3E8FF'
    },
    {
      title: 'Total Bookings',
      value: '892',
      change: '+15.3%',
      icon: 'bi-calendar-check',
      color: '#2563EB',
      bg: '#DBEAFE'
    },
    {
      title: 'Pending Verifications',
      value: '24',
      change: 'Needs review',
      icon: 'bi-shield-check',
      color: '#D97706',
      bg: '#FEF3C7'
    }
  ];

  bookingMonths = [
    { month: 'May', value: 45 },
    { month: 'Jun', value: 62 },
    { month: 'Jul', value: 53 },
    { month: 'Aug', value: 78 },
    { month: 'Sep', value: 67 },
    { month: 'Oct', value: 92 },
    { month: 'Nov', value: 72 },
    { month: 'Dec', value: 85 }
  ];

  verifications: Verification[] = [
    {
      name: 'Rahul Sharma',
      role: 'Poojari',
      document: 'Government ID',
      date: '26 Oct 2026',
      initials: 'RS',
      status: 'Pending'
    },
    {
      name: 'Ganesh Joshi',
      role: 'Poojari',
      document: 'Vedic Qualification',
      date: '25 Oct 2026',
      initials: 'GJ',
      status: 'Pending'
    },
    {
      name: 'Shree Ganesh Bajantri',
      role: 'Bajantri',
      document: 'Profile Documents',
      date: '24 Oct 2026',
      initials: 'GB',
      status: 'Pending'
    },
    {
      name: 'Amit Deshmukh',
      role: 'Poojari',
      document: 'Address Proof',
      date: '23 Oct 2026',
      initials: 'AD',
      status: 'Approved'
    }
  ];

  recentBookings = [
    {
      id: 'BK1001',
      customer: 'Amit Patil',
      service: 'Satyanarayan Pooja',
      provider: 'Rahul Sharma',
      date: '28 Oct 2026',
      amount: '₹3,500',
      status: 'Confirmed'
    },
    {
      id: 'BK1002',
      customer: 'Priya Kulkarni',
      service: 'Griha Pravesh',
      provider: 'Ganesh Joshi',
      date: '29 Oct 2026',
      amount: '₹5,000',
      status: 'Pending'
    },
    {
      id: 'BK1003',
      customer: 'Rohan Patil',
      service: 'Wedding Ceremony',
      provider: 'Shree Ganesh Bajantri',
      date: '30 Oct 2026',
      amount: '₹8,500',
      status: 'Confirmed'
    }
  ];

  menuItems = [
    { label: 'Dashboard', icon: 'bi-grid-1x2' },
    { label: 'Poojaris', icon: 'bi-person-badge' },
    { label: 'Bajantris', icon: 'bi-music-note-list' },
    { label: 'Customers', icon: 'bi-people' },
    { label: 'Bookings', icon: 'bi-calendar2-check' },
    { label: 'Verifications', icon: 'bi-patch-check' },
    { label: 'Payments', icon: 'bi-wallet2' },
    { label: 'Reports', icon: 'bi-bar-chart-line' },
    { label: 'Settings', icon: 'bi-gear' }
  ];

  setActiveMenu(label: string): void {
    this.activeMenu = label;
    this.sidebarOpen = false;
  }

  setVerificationStatus(
    item: Verification,
    status: 'Approved' | 'Rejected'
  ): void {
    item.status = status;
  }
}
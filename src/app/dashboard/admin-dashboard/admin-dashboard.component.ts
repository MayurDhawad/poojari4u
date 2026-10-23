
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardService } from '../dashboard.service';

interface DashboardUser {
  name: string;
  email: string;
  role: 'poojari' | 'bajantri' | 'admin';
  status: 'Pending' | 'Approved' | 'Rejected';
  joined: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  imports: [CommonModule,FormsModule,RouterLink,RouterLinkActive],
})
export class AdminDashboardComponent implements OnInit{
  sidebarOpen = false;
  activePeriod = '7 days';

  constructor(private _dashboardService: DashboardService){}

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this._dashboardService.getUserData().subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err: Error) => {
        console.log(err)
      }
    })
  }

  stats = [
    {
      title: 'Total Users',
      value: 1248,
      change: '+12.5%',
      icon: '♙',
      color: 'blue',
      route: '/admin/users'
    },
    {
      title: 'Poojaris',
      value: 186,
      change: '+8.2%',
      icon: 'ॐ',
      color: 'green',
      route: '/admin/poojaris'
    },
    {
      title: 'Bajantris',
      value: 74,
      change: '+5.4%',
      icon: '♫',
      color: 'orange',
      route: '/admin/bajantris'
    },
    {
      title: 'Pending Reviews',
      value: 12,
      change: 'Needs attention',
      icon: '◷',
      color: 'purple',
      route: '/admin/reviews'
    }
  ];

  users: DashboardUser[] = [
    {
      name: 'Ravi Sharma',
      email: 'ravi@example.com',
      role: 'poojari',
      status: 'Pending',
      joined: '22 Oct 2026'
    },
    {
      name: 'Ganesh Bajantri Group',
      email: 'ganesh@example.com',
      role: 'bajantri',
      status: 'Approved',
      joined: '21 Oct 2026'
    },
    {
      name: 'Suresh Joshi',
      email: 'suresh@example.com',
      role: 'poojari',
      status: 'Approved',
      joined: '20 Oct 2026'
    },
    {
      name: 'Mahesh Bajantri',
      email: 'mahesh@example.com',
      role: 'bajantri',
      status: 'Pending',
      joined: '19 Oct 2026'
    },
    {
      name: 'Amit Kulkarni',
      email: 'amit@example.com',
      role: 'poojari',
      status: 'Rejected',
      joined: '18 Oct 2026'
    }
  ];

  searchTerm = '';
  selectedRole = 'all';
  selectedStatus = 'all';

  get filteredUsers(): DashboardUser[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.users.filter(user => {
      const matchesSearch =
        !term ||
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term);

      const matchesRole =
        this.selectedRole === 'all' ||
        user.role === this.selectedRole;

      const matchesStatus =
        this.selectedStatus === 'all' ||
        user.status.toLowerCase() === this.selectedStatus;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }

  setStatus(user: DashboardUser, status: DashboardUser['status']): void {
    user.status = status;
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}

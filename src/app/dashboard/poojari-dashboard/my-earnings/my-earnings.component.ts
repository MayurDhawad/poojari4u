import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

interface EarningTransaction {
  id: string;
  poojaName: string;
  clientName: string;
  date: string;
  amount: number;
  status: 'Completed' | 'Pending';
}

@Component({
  selector: 'app-my-earnings',
  standalone: true,
  templateUrl: './my-earnings.component.html',
  styleUrls: ['./my-earnings.component.scss'],
  imports: [CommonModule, CurrencyPipe],
})
export class MyEarningsComponent{

  // Using Angular signals for state management
  totalEarnings = signal<number>(12500);
  pendingPayout = signal<number>(2000);
  completedCount = signal<number>(14);

  transactions = signal<EarningTransaction[]>([
    { id: 'TXN001', poojaName: 'Business Opening Pooja', clientName: 'Srinivas Reddy', date: '28 Sep 2026', amount: 3500, status: 'Completed' },
    { id: 'TXN002', poojaName: 'Satyanarayana Swamy Pooja', clientName: 'Anil Kumar', date: '30 Sep 2026', amount: 4500, status: 'Completed' },
    { id: 'TXN003', poojaName: 'Ganapathi Pooja', clientName: 'Rahul Sharma', date: '05 Oct 2026', amount: 2500, status: 'Pending' },
    { id: 'TXN004', poojaName: 'Gruhapravesham', clientName: 'Priya Rao', date: '12 Oct 2026', amount: 4500, status: 'Completed' }
  ]);

  downloadStatement() {
    console.log('Downloading earnings statement...');
    // Add export logic here
  }
}

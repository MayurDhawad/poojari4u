import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type PaymentMethod = 'UPI' | 'CARD' | 'NETBANKING';

interface WizardStep {
  number: number;
  label: string;
  state: 'done' | 'active' | 'todo';
}
 

@Component({
  selector: 'app-payment-page',
  standalone: true,
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class PaymentPageComponent {

  constructor(private router: Router){}

  paymentMethod: PaymentMethod = 'UPI';

  upiId = '';
  upiVerified = false;
  upiError = false;

  isProcessing = false;
  paymentCompleted = false;

  transactionId = 'TXN-984201859';
  bookingId = 'P4U-BJ-8921';

  booking = {
    service: 'Sri Swara Nadaswaram',
    troupe: 'Sri Swara Nadaswaram Troupe',
    eventDate: '15 October 2026',
    eventTime: '06:00 AM',
    customerName: 'Ramesh Kumar',
    phone: '+91 98765 43210',
    address: 'Sri Rama Kalyana Mandapam, Banjara Hills, Hyderabad',
    baseFee: 15000,
    taxes: 800,
    total: 15800
  };

  selectPaymentMethod(method: PaymentMethod): void {
    this.paymentMethod = method;

    this.upiVerified = false;
    this.upiError = false;
  }

  verifyUpi(): void {
    const value = this.upiId.trim();

    if (value && value.includes('@')) {
      this.upiVerified = true;
      this.upiError = false;
    } else {
      this.upiVerified = false;
      this.upiError = true;
    }
  }

  processPayment(): void {
    if (this.isProcessing) {
      return;
    }

    this.isProcessing = true;

    setTimeout(() => {
      this.transactionId =
        'TXN-' + Math.floor(100000000 + Math.random() * 900000000);

      // this.isProcessing = false;
      // this.paymentCompleted = true;

      this.router.navigateByUrl('/confirmation')

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 1800);
  }

  printReceipt(): void {
    window.print();
  }

  returnHome(): void {
    this.paymentCompleted = false;
    this.paymentMethod = 'UPI';
    this.upiId = '';
    this.upiVerified = false;
    this.upiError = false;
  }
}
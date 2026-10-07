import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface ServiceAddon {
  title: string;
  price: number;
}

@Component({
  selector: 'app-payment-confirmation-page',
  standalone: true,
  templateUrl: './payment-confirmation-page.component.html',
  styleUrls: ['./payment-confirmation-page.component.scss'],
  imports: [CommonModule],
})
export class PaymentConfirmationPageComponent {

   booking = {
    id: 'P4U-2026-OCT15-9921',
    ceremony: 'Seetha Rama Kalyanam',
    date: '15 Oct 2026',
    time: '09:15 AM',
    priest: 'Pt. Raghunath Acharya',
    amount: '₹ 17,464',
    phone: '+91 98480 12345',
    availability: 'Available 7 AM - 9 PM'
  };

  callPriest(): void {
    window.location.href = `tel:${this.booking.phone.replace(/\s/g, '')}`;
  }

  addToCalendar(): void {
    // Replace this with your Google Calendar URL/API implementation.
    const title = encodeURIComponent(this.booking.ceremony);
    const details = encodeURIComponent(
      `Priest: ${this.booking.priest}\nBooking ID: ${this.booking.id}`
    );

    const start = '20261015T091500';
    const end = '20261015T101500';

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${title}` +
      `&dates=${start}/${end}` +
      `&details=${details}`;

    window.open(url, '_blank');
  }

  downloadInvoice(): void {
    // Connect your actual invoice endpoint here.
    console.log('Downloading invoice:', this.booking.id);
  }
}

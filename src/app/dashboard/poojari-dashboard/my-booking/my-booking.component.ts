import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

type BookingStatus = 'NEW REQUEST' | 'BOOKING ACCEPTED' | 'BOOKING DECLINED';

@Component({
  selector: 'app-my-booking',
  standalone: true,
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss'],
  imports: [CurrencyPipe]
})
export class MyBookingComponent{

  bookingStatus = signal<BookingStatus>('NEW REQUEST');
  showDeclineModal = signal(false);

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

  acceptBooking(): void {
    if (this.bookingStatus() !== 'NEW REQUEST') {
      return;
    }

    this.bookingStatus.set('BOOKING ACCEPTED');
  }

  openDeclineModal(): void {
    if (this.bookingStatus() === 'NEW REQUEST') {
      this.showDeclineModal.set(true);
    }
  }

  closeDeclineModal(): void {
    this.showDeclineModal.set(false);
  }

  declineBooking(): void {
    if (this.bookingStatus() !== 'NEW REQUEST') {
      return;
    }

    this.bookingStatus.set('BOOKING DECLINED');
    this.closeDeclineModal();
  }

  openLocation(): void {
    const address = encodeURIComponent(this.booking.fullAddress);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      '_blank',
      'noopener,noreferrer'
    );
  }
}

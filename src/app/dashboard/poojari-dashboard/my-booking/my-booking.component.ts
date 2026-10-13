import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

type BookingStatus = 'NEW REQUEST' | 'BOOKING ACCEPTED' | 'BOOKING DECLINED';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

@Component({
  selector: 'app-my-booking',
  standalone: true,
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss'],
  imports: [CommonModule, CurrencyPipe]
})
export class MyBookingComponent{

  bookingStatus = signal<BookingStatus>('NEW REQUEST');
  bookingId = signal<string>('P4U-2026-00981');
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

 currentStage = signal<number>(3); // 3 corresponds to 'Reach Location' as active in your reference layout

  steps = signal<TimelineStep[]>([
    { id: 1, title: 'Booking Requested', description: 'Customer requested your service', status: 'completed' },
    { id: 2, title: 'Booking Accepted', description: 'You accepted the booking', status: 'completed' },
    { id: 3, title: 'Reach Location', description: 'Mark yourself as arrived at the location', status: 'current' },
    { id: 4, title: 'Pooja Started', description: 'Start the pooja after customer confirmation', status: 'upcoming' },
    { id: 5, title: 'Pooja Completed', description: 'Complete the service and submit completion', status: 'upcoming' }
  ]);

  // Actions availability based on current stage
  canMarkReached = computed(() => this.currentStage() === 3);
  canStartPooja = computed(() => this.currentStage() === 4);
  canCompletePooja = computed(() => this.currentStage() === 5);

  updateStage(nextStage: number) {
    this.currentStage.set(nextStage);
    this.steps.update(currentSteps => 
      currentSteps.map(step => ({
        ...step,
        status: step.id < nextStage ? 'completed' : step.id === nextStage ? 'current' : 'upcoming'
      }))
    );
  }

  markAsReached() {
    this.updateStage(4);
  }

  startPooja() {
    this.updateStage(5);
  }

  completePooja() {
    // Finalize workflow state
    this.currentStage.set(6);
    this.steps.update(currentSteps =>
      currentSteps.map(step => ({ ...step, status: 'completed' }))
    );
  }

  // Review Status state signal ('waiting', 'received', etc.)
  reviewStatus = signal<'waiting' | 'completed'>('waiting');

  // Navigation actions
  backToDashboard() {
    console.log('Navigating back to dashboard...');
  }

  viewMyBookings() {
    console.log('Navigating to bookings...');
  }

  viewReceipt() {
    console.log('Opening receipt...');
  }
}

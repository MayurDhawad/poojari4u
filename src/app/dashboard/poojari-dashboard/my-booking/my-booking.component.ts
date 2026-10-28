
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { PoojariDashboardService } from '../poojariDashboard.service';

type BookingWorkflowStatus =
  | 'NEW REQUEST'
  | 'BOOKING ACCEPTED'
  | 'BOOKING DECLINED';

type BookingStatusTab =
  | 'pending'
  | 'accepted'
  | 'completed'
  | 'declined';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface PoojariBooking {
  _id: string;
  customerName: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  location: string;
  amount: number;
  status: BookingStatusTab;
}

@Component({
  selector: 'app-my-booking',
  standalone: true,
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss'],
  imports: [CommonModule, CurrencyPipe]
})
export class MyBookingComponent implements OnInit {

  private readonly bookingService = inject(PoojariDashboardService);

  // Existing booking details workflow
  bookingStatus = signal<BookingWorkflowStatus>('NEW REQUEST');
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

  // Booking timeline
  currentStage = signal<number>(3);

  steps = signal<TimelineStep[]>([
    {
      id: 1,
      title: 'Booking Requested',
      description: 'Customer requested your service',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Booking Accepted',
      description: 'You accepted the booking',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Reach Location',
      description: 'Mark yourself as arrived at the location',
      status: 'current'
    },
    {
      id: 4,
      title: 'Pooja Started',
      description: 'Start the pooja after customer confirmation',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Pooja Completed',
      description: 'Complete the service and submit completion',
      status: 'upcoming'
    }
  ]);

  canMarkReached = computed(() => this.currentStage() === 3);
  canStartPooja = computed(() => this.currentStage() === 4);
  canCompletePooja = computed(() => this.currentStage() === 5);

  updateStage(nextStage: number): void {
    this.currentStage.set(nextStage);

    this.steps.update(currentSteps =>
      currentSteps.map(step => ({
        ...step,
        status:
          step.id < nextStage
            ? 'completed'
            : step.id === nextStage
              ? 'current'
              : 'upcoming'
      }))
    );
  }

  markAsReached(): void {
    this.updateStage(4);
  }

  startPooja(): void {
    this.updateStage(5);
  }

  completePooja(): void {
    this.currentStage.set(6);

    this.steps.update(currentSteps =>
      currentSteps.map(step => ({
        ...step,
        status: 'completed'
      }))
    );
  }

  reviewStatus = signal<'waiting' | 'completed'>('waiting');

  backToDashboard(): void {
    console.log('Navigating back to dashboard...');
  }

  viewMyBookings(): void {
    console.log('Navigating to bookings...');
  }

  viewReceipt(): void {
    console.log('Opening receipt...');
  }

  // API-driven booking tabs
  activeTab: BookingStatusTab = 'pending';

  bookings: PoojariBooking[] = [];

  loading = false;
  updatingId: string | null = null;

  errorMessage = '';
  successMessage = '';

  ngOnInit(): void {
    this.loadBookings();
  }

  setActiveTab(tab: BookingStatusTab): void {
    this.activeTab = tab;
    this.errorMessage = '';
    this.successMessage = '';
  }

  get filteredBookings(): PoojariBooking[] {
    return this.bookings.filter(
      booking => booking.status === this.activeTab
    );
  }

  countBookings(status: BookingStatusTab): number {
    return this.bookings.filter(
      booking => booking.status === status
    ).length;
  }

  /**
   * Normalize legacy uppercase statuses and API statuses
   * into the lowercase values used by the tabs.
   */
  private normalizeStatus(status: unknown): BookingStatusTab {
    const value = String(status ?? '')
      .trim()
      .toLowerCase()
      .replace(/[\s_-]+/g, ' ');

    switch (value) {
      case 'new request':
      case 'pending':
        return 'pending';

      case 'booking accepted':
      case 'accepted':
        return 'accepted';

      case 'completed':
      case 'booking completed':
        return 'completed';

      case 'booking declined':
      case 'declined':
        return 'declined';

      default:
        return 'pending';
    }
  }

  loadBookings(): void {
    this.loading = true;
    this.errorMessage = '';

    this.bookingService.getBookings().subscribe({
      next: (response: any) => {
        const apiBookings = Array.isArray(response?.bookings)
          ? response.bookings
          : Array.isArray(response?.data)
            ? response.data
            : [];

        this.bookings = apiBookings.map((item: any) => ({
          ...item,
          _id: String(item._id ?? item.id ?? ''),
          customerName: item.customerName ?? item.customer?.name ?? '',
          serviceName: item.serviceName ?? item.service?.name ?? '',
          bookingDate: item.bookingDate ?? item.date ?? '',
          bookingTime: item.bookingTime ?? item.time ?? '',
          location: item.location ?? item.address ?? '',
          amount: Number(item.amount ?? item.serviceAmount ?? 0),
          status: this.normalizeStatus(item.status)
        }));

        this.loading = false;
      },
      error: (error: any) => {
        this.loading = false;
        this.errorMessage =
          error?.error?.message ?? 'Unable to load bookings.';
      }
    });
  }

  updateBookingStatus(
    booking: PoojariBooking,
    status: BookingStatusTab
  ): void {
    if (this.updatingId !== null) {
      return;
    }

    if (
      booking.status !== 'pending' &&
      !(booking.status === 'accepted' && status === 'completed')
    ) {
      return;
    }

    this.updatingId = booking._id;
    this.errorMessage = '';
    this.successMessage = '';

    this.bookingService
      .updateBookingStatus(booking._id, status)
      .subscribe({
        next: (response: any) => {
          const updatedBooking = response?.booking;

          this.bookings = this.bookings.map(item => {
            if (item._id !== booking._id) {
              return item;
            }

            return {
              ...item,
              ...(updatedBooking ?? {}),
              status: this.normalizeStatus(
                updatedBooking?.status ?? status
              )
            };
          });

          this.updatingId = null;
          this.successMessage =
            response?.message ?? `Booking ${status} successfully.`;
        },
        error: (error: any) => {
          this.updatingId = null;
          this.errorMessage =
            error?.error?.message ?? 'Unable to update booking status.';
        }
      });
  }
}

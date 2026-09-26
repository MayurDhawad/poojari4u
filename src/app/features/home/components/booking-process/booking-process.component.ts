import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Step {
  stepNumber: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-booking-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-process.component.html',
  styleUrls: ['./booking-process.component.scss']
})
export class BookingProcessComponent {

  steps = signal<Step[]>([
    {
      stepNumber: 1,
      title: 'Choose Service',
      description: 'Select Poojari, Bajanthri, Samagri or a package.'
    },
    {
      stepNumber: 2,
      title: 'Select Location',
      description: 'Enter your city or area for service availability.'
    },
    {
      stepNumber: 3,
      title: 'Select Date',
      description: 'Choose your preferred ceremony or delivery date.'
    },
    {
      stepNumber: 4,
      title: 'Confirm Booking',
      description: 'Review the request and continue to confirmation.'
    }
  ]);

}

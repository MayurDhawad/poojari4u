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
      description: 'Sathyanarayana Pooja, Griha Pravesham, Homam, wedding and more.'
    },
    {
      stepNumber: 2,
      title: 'Select Location & Date',
      description: 'Enter your preferred City and Ceremony Date for Service availability.'
    },
    {
      stepNumber: 3,
      title: 'Select verified Poojari',
      description: 'Choose your preferred poojari for the ceremony.'
    },
    {
      stepNumber: 4,
      title: 'Confirm Booking',
      description: 'Review the request and continue to confirmation.'
    }
  ]);

}

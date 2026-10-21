import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface DaySchedule {
  day: string;
  enabled: boolean;
  slots: { start: string; end: string }[];
}

@Component({
  selector: 'app-my-availability',
  standalone: true,
  templateUrl: './my-availability.component.html',
  styleUrls: ['./my-availability.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class MyAvailabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
// Region & Travel Settings
  serviceArea = signal({
    state: 'Maharashtra',
    city: 'Naveen Nagpur',
    area: 'Dharampeth',
    pincode: '440010',
    radiusKm: 25
  });

  // Booking Rules
  bookingRules = signal({
    advanceBooking: 'same-day', // 'same-day' | 'next-day'
    maxBookingDays: '7 Days',
    emergency: false
  });

  // Quick Status Controls
  isAvailableForInstant = signal(true);
  vacationMode = signal(false);

  // Weekly Schedule
  weeklySchedule = signal<DaySchedule[]>([
    { day: 'Monday', enabled: true, slots: [{ start: '08:00', end: '20:00' }] },
    { day: 'Tuesday', enabled: true, slots: [{ start: '08:00', end: '20:00' }] },
    { day: 'Wednesday', enabled: true, slots: [{ start: '08:00', end: '20:00' }] },
    { day: 'Thursday', enabled: true, slots: [{ start: '08:00', end: '20:00' }] },
    { day: 'Friday', enabled: true, slots: [{ start: '08:00', end: '20:00' }] },
    { day: 'Saturday', enabled: true, slots: [{ start: '08:00', end: '20:00' }] },
    { day: 'Sunday', enabled: true, slots: [{ start: '08:00', end: '20:00' }] }
  ]);

  addSlot(dayIndex: number) {
    const updated = [...this.weeklySchedule()];
    updated[dayIndex].slots.push({ start: '09:00', end: '17:00' });
    this.weeklySchedule.set(updated);
  }

  removeSlot(dayIndex: number, slotIndex: number) {
    const updated = [...this.weeklySchedule()];
    updated[dayIndex].slots.splice(slotIndex, 1);
    this.weeklySchedule.set(updated);
  }

  saveAvailability() {
    const payload = {
      success: true,
      availability: {
        ...this.serviceArea(),
        ...this.bookingRules(),
        availableDays: this.weeklySchedule().filter(d => d.enabled).map(d => d.day),
        sameDay: this.bookingRules().advanceBooking === 'same-day',
        emergency: this.bookingRules().emergency
      },
      isAvailable: !this.vacationMode()
    };
    console.log('Saving complete availability payload:', payload);
  }
}

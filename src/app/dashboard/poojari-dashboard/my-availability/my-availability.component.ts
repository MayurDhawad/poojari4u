import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoojariDashboardService } from '../poojariDashboard.service';

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

  constructor(private _poojariDashboardService : PoojariDashboardService) { }

  ngOnInit() {
    this.getPoojariAvailability();
  }

  getPoojariAvailability(){
    this._poojariDashboardService.getAvalibility().subscribe(
      (res: any) => {
        console.log(res.availability);
        let data = res.availability;
        this.serviceArea.set({
          state: data.state,
          city: data.city,
          area: data.area,
          pincode: data.pincode,
          radiusKm: data.radiusKm
        });
        this.bookingRules.set({
          advanceBooking: data.advanceBooking,
          maxBookingDays: data.maxBookingDays,
          sameDay: data.sameDay,
          emergency: data.emergency
        });
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }

// Region & Travel Settings
  serviceArea = signal({
    state: '',
    city: '',
    area: '',
    pincode: '',
    radiusKm: 0
  });

  // Booking Rules
  bookingRules = signal({
    advanceBooking: 'same-day', // 'same-day' | 'next-day'
    maxBookingDays: '7 Days',
    sameDay: false,
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
    // const payload = {
    //   success: true,
    //   availability: {
    //     ...this.serviceArea(),
    //     ...this.bookingRules(),
    //     availableDays: this.weeklySchedule().filter(d => d.enabled).map(d => d.day),
    //     sameDay: this.bookingRules().advanceBooking === 'same-day',
    //     emergency: this.bookingRules().emergency
    //   },
    //   isAvailable: !this.vacationMode()
    // };
    const payload = {
      state: this.serviceArea().state,
      city: this.serviceArea().city,
      area: this.serviceArea().area,
      pincode: this.serviceArea().pincode,
      radiusKm: this.serviceArea().radiusKm,
      advanceBooking: this.bookingRules().advanceBooking,
      maxBookingDays: this.bookingRules().maxBookingDays,
      sameDay: this.bookingRules().sameDay,
      emergency: this.bookingRules().emergency,
    }
    this._poojariDashboardService.patchAvalibility(payload).subscribe(
      (res: any) => {
        console.log(res);
       
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }
}

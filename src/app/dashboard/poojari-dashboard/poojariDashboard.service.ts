import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoojariDashboardService {

  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;
  private readonly tokenKey = 'auth_token';
  private readonly userKey = 'auth_user';

constructor() { }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getAvalibility(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/poojari/availability`)
  }

  patchAvalibility(body: any){
    return this.http.patch<any>(`${this.apiUrl}/poojari/availability`, body)
  }

  getProfileData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/poojari/profiledata`)
  }

   // Dummy bookings for testing
  private dummyBookings = [
    {
      _id: 'P4U-2026-001',
      customerName: 'Srinivas Reddy',
      serviceName: 'Business Opening Pooja',
      bookingDate: '2026-10-30',
      bookingTime: '08:30 AM',
      location: 'Kondapur, Hyderabad',
      amount: 1800,
      status: 'pending'
    },
    {
      _id: 'P4U-2026-002',
      customerName: 'Rahul Sharma',
      serviceName: 'Satyanarayan Pooja',
      bookingDate: '2026-10-31',
      bookingTime: '10:00 AM',
      location: 'Madhapur, Hyderabad',
      amount: 2500,
      status: 'pending'
    },
    {
      _id: 'P4U-2026-003',
      customerName: 'Priya Reddy',
      serviceName: 'Griha Pravesh Pooja',
      bookingDate: '2026-11-01',
      bookingTime: '07:00 AM',
      location: 'Gachibowli, Hyderabad',
      amount: 3500,
      status: 'accepted'
    },
    {
      _id: 'P4U-2026-004',
      customerName: 'Amit Patil',
      serviceName: 'Ganesh Pooja',
      bookingDate: '2026-10-25',
      bookingTime: '09:00 AM',
      location: 'Hitech City, Hyderabad',
      amount: 1500,
      status: 'completed'
    },
    {
      _id: 'P4U-2026-005',
      customerName: 'Sneha Joshi',
      serviceName: 'Vastu Shanti Pooja',
      bookingDate: '2026-10-24',
      bookingTime: '11:30 AM',
      location: 'Miyapur, Hyderabad',
      amount: 2800,
      status: 'declined'
    }
  ];

  // Return dummy data instead of calling the backend
  getBookings(): Observable<any> {
    return of({
      success: true,
      bookings: this.dummyBookings.map(booking => ({ ...booking }))
    });
  }

  // Update dummy booking status for testing
  updateBookingStatus(
    bookingId: string,
    status: 'pending' | 'accepted' | 'completed' | 'declined'
  ): Observable<any> {
    const booking = this.dummyBookings.find(
      item => item._id === bookingId
    );

    if (!booking) {
      throw new Error('Booking not found');
    }

    booking.status = status;

    return of({
      success: true,
      message: `Booking ${status} successfully`,
      booking: { ...booking }
    });
  }
}
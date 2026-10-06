import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfimBookingComponent } from './confim-booking/confim-booking.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-bookings',
  standalone: true,
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss',
  imports: [],
})
export class MyBookingsComponent implements OnInit{

  @Output() onChangePoojari = new EventEmitter<void>();
  @Output() onProceed = new EventEmitter<void>();

  constructor(
    public dialog : MatDialog,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  handleChangePoojari(): void {
    this.onChangePoojari.emit();
  }

  handleProceed(): void {
    this.router.navigateByUrl('/payment')
  }
}
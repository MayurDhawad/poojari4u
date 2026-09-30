import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfimBookingComponent } from './confim-booking/confim-booking.component';
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

  constructor(public dialog : MatDialog){}

  ngOnInit(): void {
    
  }

  handleChangePoojari(): void {
    this.onChangePoojari.emit();
  }

  handleProceed(): void {
    const dialogRef = this.dialog.open(
        ConfimBookingComponent,
        {
          maxWidth: '40vw',
          maxHeight: '80vh',
          // data: poojari
        }
      );
    
      dialogRef.afterClosed().subscribe(result => {
    
        if (result) {
          console.log('Reservation:', result);
        }
    
      });
  }
}
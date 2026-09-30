import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(){}

  ngOnInit(): void {
    
  }

  handleChangePoojari(): void {
    this.onChangePoojari.emit();
  }

  handleProceed(): void {
    this.onProceed.emit();
  }
}
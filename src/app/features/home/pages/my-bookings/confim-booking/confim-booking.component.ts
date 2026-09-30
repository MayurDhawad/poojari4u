import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confim-booking',
  standalone: true,
  templateUrl: './confim-booking.component.html',
  styleUrls: ['./confim-booking.component.scss'],
  imports: [CommonModule],
})
export class ConfimBookingComponent{

 @Input() orderReference: string = 'P4U-67170';
  
  @Input() customerName: string = 'Kalyan Ram';
  @Input() customerPhone: string = '+91 98490 12345';
  @Input() venueAddress: string = 'Villa 14, Lotus Palms Residency, Jubilee Hills, Hyderabad - 500033';
  
  @Input() purohitName: string = 'Pt. Sundara Rama Sastry';
  @Input() ceremonyType: string = 'Griha Pravesham';
  @Input() ceremonyDate: string = '2026-10-05';
  @Input() ceremonyTime: string = '06:00 AM - 08:30 AM (Brahma Muhurtham)';
  
  @Input() leadPurohitFee: number = 5000;
  @Input() samagriKitOption: string = 'I will arrange Samagri';
  @Input() samagriFee: number = 0;
  @Input() musicTeamOption: string = 'No Music Team';
  @Input() musicFee: number = 0;
  @Input() gstFee: number = 250;

  @Output() onClose = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  get totalAmount(): number {
    return this.leadPurohitFee + this.samagriFee + this.musicFee + this.gstFee;
  }

  closeModal(): void {
    this.onClose.emit();
  }

  confirmAndReturn(): void {
    this.onConfirm.emit();
  }

  printReceipt(): void {
    window.print();
  }
}

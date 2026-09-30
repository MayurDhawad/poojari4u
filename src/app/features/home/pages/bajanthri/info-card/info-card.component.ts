import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  imports: [CommonModule],
})
export class InfoCardComponent {

// Inputs matching the detailed layout
  @Input() troupeCategory: string = 'NADASWARAM';
  @Input() troupeName: string = 'Sri Swara Nadaswaram Troupe';
  @Input() leaderName: string = 'Vidwan M. Ramanathan';
  
  @Input() experience: string = '18+ Years';
  @Input() troupeSize: string = '5 Musicians';
  @Input() rating: number = 4.9;
  @Input() reviewsCount: number = 142;
  @Input() baseFee: number = 15000;

  @Input() ensembleLineup: string[] = [
    '2x Nadaswaram',
    '2x Thavil Percussion',
    '1x Sruti Box'
  ];

  @Input() audioTitle: string = 'Kalyana Melam Raga';
  @Input() audioSubtitle: string = 'Traditional Auspicious Composition';
  @Input() audioDuration: string = '0:30';

  @Input() clientName: string = 'Venkat R.';
  @Input() eventType: string = 'Vivaha Event';
  @Input() feedbackQuote: string = 'The Nadaswaram performance for our wedding was heavenly. On-time, immaculate traditional dress, and deeply soul-stirring ragas!';

  @Output() onClose = new EventEmitter<void>();
  @Output() onProceed = new EventEmitter<void>();

  isPlayingAudio: boolean = false;

  closeModal(): void {
    this.onClose.emit();
  }

  proceedToBooking(): void {
    this.onProceed.emit();
  }

  toggleAudio(): void {
    this.isPlayingAudio = !this.isPlayingAudio;
  }
}
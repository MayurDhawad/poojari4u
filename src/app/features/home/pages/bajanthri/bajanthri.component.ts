import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InfoCardComponent } from './info-card/info-card.component';

interface Troupe {
  id: number;
  category: string;
  badgeText: string;
  badgeClass: string;
  icon: string;
  title: string;
  leader: string;
  rating: number;
  reviews: number;
  experience: number;
  size: number;
  location: string;
  instruments: string;
  audioSample: string;
  price: number;
}
@Component({
  selector: 'app-bajanthri',
  standalone: true,
  templateUrl: './bajanthri.component.html',
  styleUrl: './bajanthri.component.scss',
  imports: [CommonModule, FormsModule],
})
export class BajanthriComponent {

  constructor(public dialog: MatDialog){}

  activeFilter: string = 'all';

  filters = [
    { id: 'all', label: 'All Instruments', icon: '✨' },
    { id: 'nadaswaram', label: 'Nadaswaram & Thavil', icon: '🎺' },
    { id: 'shehnai', label: 'Royal Shehnai & Dholak', icon: '🎷' },
    { id: 'panchavadyam', label: 'Panchavadyam & Chanda', icon: '🥁' },
    { id: 'saxophone', label: 'Classical Saxophone Band', icon: '🎷' }
  ];

  troupes: Troupe[] = [
    {
      id: 1,
      category: 'NADASWARAM',
      badgeText: 'Top Rated',
      badgeClass: 'bg-maroon-badge',
      icon: '🪈',
      title: 'Sri Swara Nadaswaram Troupe',
      leader: 'Vidwan M. Ramanathan',
      rating: 4.9,
      reviews: 142,
      experience: 18,
      size: 5,
      location: 'Hyderabad',
      instruments: '2x Nadaswaram, 2x Thavil Percussion, 1x Sruti Box',
      audioSample: 'Kalyana Melam Raga',
      price: 15000
    },
    {
      id: 2,
      category: 'SHEHNAI',
      badgeText: 'Verified',
      badgeClass: 'bg-dark-badge',
      icon: '🎷',
      title: 'Royal Shehnai Ensemble',
      leader: 'Ustad Pandit R. K. Sharma',
      rating: 4.8,
      reviews: 98,
      experience: 22,
      size: 6,
      location: 'Varanasi',
      instruments: '2x Master Shehnai, 2x Dholak / Tabla, 1x Harmonium, 1...',
      audioSample: 'Mangala Dhwani Raga',
      price: 18500
    },
    {
      id: 3,
      category: 'KERALA MELAM',
      badgeText: 'Express Booking',
      badgeClass: 'bg-express-badge',
      icon: '🥁',
      title: 'Thrissur Panchavadyam & Chanda Melam',
      leader: 'Asan K. V. Panicker',
      rating: 5,
      reviews: 86,
      experience: 15,
      size: 8,
      location: 'Kochi',
      instruments: '4x Chanda Drums, 2x Elathalam Cymbals, 1x Kombu Ho...',
      audioSample: 'Utsava Chanda Melam',
      price: 24000
    },
    {
      id: 4,
      category: 'Saxophone',
      badgeText: 'Top Rated',
      badgeClass: 'bg-maroon-badge',
      icon: '🪈',
      title: 'Sri Venugopala Saxophone Band',
      leader: 'Vidwan M. Ramanathan',
      rating: 4.9,
      reviews: 142,
      experience: 18,
      size: 5,
      location: 'Hyderabad',
      instruments: '2x Nadaswaram, 2x Thavil Percussion, 1x Sruti Box',
      audioSample: 'Kalyana Melam Raga',
      price: 15000
    },
    {
      id: 5,
      category: 'NADASWARAM',
      badgeText: 'Verified',
      badgeClass: 'bg-dark-badge',
      icon: '🎷',
      title: 'Saraswathi Mangala Melam',
      leader: 'Ustad Pandit R. K. Sharma',
      rating: 4.8,
      reviews: 98,
      experience: 22,
      size: 6,
      location: 'Varanasi',
      instruments: '2x Master Shehnai, 2x Dholak / Tabla, 1x Harmonium, 1...',
      audioSample: 'Mangala Dhwani Raga',
      price: 18500
    },
    {
      id: 6,
      category: 'NADASWARAM',
      badgeText: 'Express Booking',
      badgeClass: 'bg-express-badge',
      icon: '🥁',
      title: 'Amaravati Traditional Bajanthris',
      leader: 'Asan K. V. Panicker',
      rating: 5,
      reviews: 86,
      experience: 15,
      size: 8,
      location: 'Kochi',
      instruments: '4x Chanda Drums, 2x Elathalam Cymbals, 1x Kombu Ho...',
      audioSample: 'Utsava Chanda Melam',
      price: 24000
    }
  ];

  details(){
    const dialogRef = this.dialog.open(
        InfoCardComponent,
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
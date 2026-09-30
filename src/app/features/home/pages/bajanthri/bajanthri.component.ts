// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';
// import { InfoCardComponent } from './info-card/info-card.component';

// interface Troupe {
//   id: number;
//   category: string;
//   badgeText: string;
//   badgeClass: string;
//   icon: string;
//   title: string;
//   leader: string;
//   rating: number;
//   reviews: number;
//   experience: number;
//   size: number;
//   location: string;
//   instruments: string;
//   audioSample: string;
//   price: number;
// }
// @Component({
//   selector: 'app-bajanthri',
//   standalone: true,
//   templateUrl: './bajanthri.component.html',
//   styleUrl: './bajanthri.component.scss',
//   imports: [CommonModule, FormsModule],
// })
// export class BajanthriComponent {

//   constructor(public dialog: MatDialog){}

//   activeFilter: string = 'all';

//   filters = [
//     { id: 'all', label: 'All Instruments', icon: '✨' },
//     { id: 'nadaswaram', label: 'Nadaswaram & Thavil', icon: '🎺' },
//     { id: 'shehnai', label: 'Royal Shehnai & Dholak', icon: '🎷' },
//     { id: 'panchavadyam', label: 'Panchavadyam & Chanda', icon: '🥁' },
//     { id: 'saxophone', label: 'Classical Saxophone Band', icon: '🎷' }
//   ];

//   troupes: Troupe[] = [
//     {
//       id: 1,
//       category: 'NADASWARAM',
//       badgeText: 'Top Rated',
//       badgeClass: 'bg-maroon-badge',
//       icon: '🪈',
//       title: 'Sri Swara Nadaswaram Troupe',
//       leader: 'Vidwan M. Ramanathan',
//       rating: 4.9,
//       reviews: 142,
//       experience: 18,
//       size: 5,
//       location: 'Hyderabad',
//       instruments: '2x Nadaswaram, 2x Thavil Percussion, 1x Sruti Box',
//       audioSample: 'Kalyana Melam Raga',
//       price: 15000
//     },
//     {
//       id: 2,
//       category: 'SHEHNAI',
//       badgeText: 'Verified',
//       badgeClass: 'bg-dark-badge',
//       icon: '🎷',
//       title: 'Royal Shehnai Ensemble',
//       leader: 'Ustad Pandit R. K. Sharma',
//       rating: 4.8,
//       reviews: 98,
//       experience: 22,
//       size: 6,
//       location: 'Varanasi',
//       instruments: '2x Master Shehnai, 2x Dholak / Tabla, 1x Harmonium, 1...',
//       audioSample: 'Mangala Dhwani Raga',
//       price: 18500
//     },
//     {
//       id: 3,
//       category: 'KERALA MELAM',
//       badgeText: 'Express Booking',
//       badgeClass: 'bg-express-badge',
//       icon: '🥁',
//       title: 'Thrissur Panchavadyam & Chanda Melam',
//       leader: 'Asan K. V. Panicker',
//       rating: 5,
//       reviews: 86,
//       experience: 15,
//       size: 8,
//       location: 'Kochi',
//       instruments: '4x Chanda Drums, 2x Elathalam Cymbals, 1x Kombu Ho...',
//       audioSample: 'Utsava Chanda Melam',
//       price: 24000
//     },
//     {
//       id: 4,
//       category: 'Saxophone',
//       badgeText: 'Top Rated',
//       badgeClass: 'bg-maroon-badge',
//       icon: '🪈',
//       title: 'Sri Venugopala Saxophone Band',
//       leader: 'Vidwan M. Ramanathan',
//       rating: 4.9,
//       reviews: 142,
//       experience: 18,
//       size: 5,
//       location: 'Hyderabad',
//       instruments: '2x Nadaswaram, 2x Thavil Percussion, 1x Sruti Box',
//       audioSample: 'Kalyana Melam Raga',
//       price: 15000
//     },
//     {
//       id: 5,
//       category: 'NADASWARAM',
//       badgeText: 'Verified',
//       badgeClass: 'bg-dark-badge',
//       icon: '🎷',
//       title: 'Saraswathi Mangala Melam',
//       leader: 'Ustad Pandit R. K. Sharma',
//       rating: 4.8,
//       reviews: 98,
//       experience: 22,
//       size: 6,
//       location: 'Varanasi',
//       instruments: '2x Master Shehnai, 2x Dholak / Tabla, 1x Harmonium, 1...',
//       audioSample: 'Mangala Dhwani Raga',
//       price: 18500
//     },
//     {
//       id: 6,
//       category: 'NADASWARAM',
//       badgeText: 'Express Booking',
//       badgeClass: 'bg-express-badge',
//       icon: '🥁',
//       title: 'Amaravati Traditional Bajanthris',
//       leader: 'Asan K. V. Panicker',
//       rating: 5,
//       reviews: 86,
//       experience: 15,
//       size: 8,
//       location: 'Kochi',
//       instruments: '4x Chanda Drums, 2x Elathalam Cymbals, 1x Kombu Ho...',
//       audioSample: 'Utsava Chanda Melam',
//       price: 24000
//     }
//   ];

//   details(){
//     const dialogRef = this.dialog.open(
//         InfoCardComponent,
//         {
//           maxWidth: '40vw',
//           maxHeight: '80vh',
//           // data: poojari
//         }
//       );
    
//       dialogRef.afterClosed().subscribe(result => {
    
//         if (result) {
//           console.log('Reservation:', result);
//         }
    
//       });
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';

interface Bajanthri {
  id: number;
  name: string;
  location: string;
  specialty: string;
  instruments: string[];
  experience: number;
  rating: number;
  reviews: number;
  price: number;
  priceUnit: string;
  image: string;
  badge?: string;
  available: boolean;
}

@Component({
  selector: 'app-bajanthri',
  standalone: true,
  imports: [CommonModule, FormsModule, Header],
  templateUrl: './bajanthri.component.html',
  styleUrl: './bajanthri.component.scss'
})
export class BajanthriComponent {

  searchText = '';
  selectedSpecialty = 'All';
  selectedLocation = 'All';
  sortBy = 'popular';

  specialties = [
    'All',
    'Wedding',
    'Puja & Homam',
    'Griha Pravesh',
    'Procession',
    'Temple Events'
  ];

  locations = [
    'All',
    'Bengaluru',
    'Hyderabad',
    'Pune',
    'Mumbai',
    'Nagpur'
  ];

  bajanthris: Bajanthri[] = [
    {
      id: 1,
      name: 'Sri Lakshmi Bajanthri Group',
      location: 'Bengaluru',
      specialty: 'Wedding',
      instruments: ['Nadaswaram', 'Thavil'],
      experience: 18,
      rating: 4.9,
      reviews: 146,
      price: 6500,
      priceUnit: 'per event',
      image: 'bajanthris/bajanthri-1.jfif',
      badge: 'Top Rated',
      available: true
    },
    {
      id: 2,
      name: 'Sri Venkateshwara Bajanthri',
      location: 'Hyderabad',
      specialty: 'Wedding',
      instruments: ['Nadaswaram', 'Dhol'],
      experience: 15,
      rating: 4.8,
      reviews: 118,
      price: 5500,
      priceUnit: 'per event',
      image: 'bajanthris/bajanthri-2.jfif',
      badge: 'Popular',
      available: true
    },
    {
      id: 3,
      name: 'Sri Ganesh Traditional Band',
      location: 'Pune',
      specialty: 'Procession',
      instruments: ['Dhol', 'Tasha', 'Lezim'],
      experience: 12,
      rating: 4.7,
      reviews: 92,
      price: 4500,
      priceUnit: 'per event',
      image: 'bajanthris/bajanthri-3.jfif',
      badge: 'Popular',
      available: true
    },
    {
      id: 4,
      name: 'Sri Shiva Bajanthri Seva',
      location: 'Nagpur',
      specialty: 'Puja & Homam',
      instruments: ['Nadaswaram', 'Thavil'],
      experience: 20,
      rating: 4.9,
      reviews: 87,
      price: 4000,
      priceUnit: 'per event',
      image: 'bajanthris/bajanthri-2.jfif',
      badge: 'Experienced',
      available: true
    },
    {
      id: 5,
      name: 'Sri Anjaneya Mangala Vadya',
      location: 'Mumbai',
      specialty: 'Griha Pravesh',
      instruments: ['Nadaswaram', 'Dhol'],
      experience: 10,
      rating: 4.6,
      reviews: 65,
      price: 3500,
      priceUnit: 'per event',
      image: 'bajanthris/bajanthri-3.jfif',
      available: true
    },
    {
      id: 6,
      name: 'Sri Durga Traditional Music',
      location: 'Bengaluru',
      specialty: 'Temple Events',
      instruments: ['Nadaswaram', 'Thavil', 'Dhol'],
      experience: 16,
      rating: 4.8,
      reviews: 104,
      price: 5000,
      priceUnit: 'per event',
      image: 'bajanthris/bajanthri-1.jfif',
      badge: 'Verified',
      available: true
    }
  ];

  get filteredBajanthris(): Bajanthri[] {

    let result = this.bajanthris.filter(item => {

      const search = this.searchText
        .trim()
        .toLowerCase();

      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search) ||
        item.specialty.toLowerCase().includes(search) ||
        item.instruments.some(
          instrument =>
            instrument.toLowerCase().includes(search)
        );

      const matchesSpecialty =
        this.selectedSpecialty === 'All' ||
        item.specialty === this.selectedSpecialty;

      const matchesLocation =
        this.selectedLocation === 'All' ||
        item.location === this.selectedLocation;

      return (
        matchesSearch &&
        matchesSpecialty &&
        matchesLocation
      );
    });

    if (this.sortBy === 'rating') {
      result = [...result].sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (this.sortBy === 'price-low') {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (this.sortBy === 'price-high') {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    if (this.sortBy === 'experience') {
      result = [...result].sort(
        (a, b) => b.experience - a.experience
      );
    }

    return result;
  }

  selectSpecialty(specialty: string): void {
    this.selectedSpecialty = specialty;
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedSpecialty = 'All';
    this.selectedLocation = 'All';
    this.sortBy = 'popular';
  }

  bookNow(item: Bajanthri): void {
    console.log('Book Bajanthri:', item);
  }

  viewProfile(item: Bajanthri): void {
    console.log('View profile:', item);
  }
}
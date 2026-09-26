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
      image: 'assets/images/bajanthri-1.jpg',
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
      image: 'assets/images/bajanthri-2.jpg',
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
      image: 'assets/images/bajanthri-3.jpg',
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
      image: 'assets/images/bajanthri-4.jpg',
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
      image: 'assets/images/bajanthri-5.jpg',
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
      image: 'assets/images/bajanthri-6.jpg',
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
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InfoCardComponent } from './info-card/info-card.component';
import { HeroData, HeroFeature, HeroSectionComponent, HeroSlide } from '../../../shared/hero-section/hero-section/hero-section.component';
import { showSection } from '../../../shared/search-box/search-box';

export interface BajanthriTroupe {
  id: number;
  name: string;
  maestro: string;
  category: 'nadaswaram' | 'shehnai' | 'kerala-melam' | 'saxophone';
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  teamSize: number;
  location: string;
  instruments: string[];
  audioSample: string;
  basePrice: number;
  badge?: string;
}

export interface SearchCriteria {
  ceremony: string;
  location: string;
  date: string;
}

export interface FilterOptions {
  language: string;
  specialization: string;
  experience: string;
  goldCertifiedOnly: boolean;
  sortBy: string;
}

interface Slide {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-bajanthri',
  standalone: true,
  templateUrl: './bajanthri.component.html',
  styleUrl: './bajanthri.component.scss',
  imports: [CommonModule, FormsModule, HeroSectionComponent],
})
export class BajanthriComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  heroData: HeroData = {
    eyebrowIcon: 'bi-music-note-beamed',
    eyebrowText: 'TRADITIONAL MUSIC FOR AUSPICIOUS OCCASIONS',
    titleLine1: 'Book Verified &',
    titleHighlight: 'Professional Bajanthri Troups',
    description:'Bring tradition and auspicious music to your special moments with experienced Bajanthri groups for weddings, pujas, homams and ceremonies.',
  };

  showSection: showSection = {
    displaySearchBox: true,
    showLanguage: false,
    showCeremony: true,
    showLocation: true,
    showDate: true
  };

  features: HeroFeature[] = [
    { iconClass: 'bi-patch-check-fill', label: 'Verified Artists ' },
    { iconClass: 'bi-music-note-list', label: 'Traditional Instruments ' },
    { iconClass: 'bi-calendar-check', label: 'Easy Booking ' },
  ];

  slides: HeroSlide[] = [
    { id: 1, name: 'Pt. Ram Naresh', image: 'bajanthris/bajanthri-1.jfif' },
    { id: 2, name: 'Saanvi Sharma', image: 'bajanthris/bajanthri-2.jfif' },
    { id: 3, name: 'Acharya Prem', image: 'bajanthris/bajanthri-3.jfif' },
  ];

  categories = [
    { name: 'All Instruments', icon: '✨', active: true },
    { name: 'Nadaswaram & Thavil', icon: '🎷', active: false },
    { name: 'Royal Shehnai & Dholak', icon: '🎺', active: false },
    { name: 'Panchavadyam & Chanda', icon: '🥁', active: false },
    { name: 'Classical Saxophone Band', icon: '🎷', active: false },
  ];

  activeTab: string = 'all';

  troupes: BajanthriTroupe[] = [
    {
      id: 1,
      name: 'Sri Swara Nadaswaram Troupe',
      maestro: 'Vidwan M. Ramanathan',
      category: 'nadaswaram',
      rating: 4.9,
      reviewsCount: 142,
      experienceYears: 18,
      teamSize: 5,
      location: 'Hyderabad',
      instruments: ['2x Nadaswaram', '2x Thavil Percussion', '1x Sruti Box'],
      audioSample: 'Kalyana Melam Raga',
      basePrice: 15000,
      badge: 'Top Rated',
    },
    {
      id: 2,
      name: 'Royal Shehnai Ensemble',
      maestro: 'Ustad Pandit R. K. Sharma',
      category: 'shehnai',
      rating: 4.8,
      reviewsCount: 98,
      experienceYears: 22,
      teamSize: 6,
      location: 'Varanasi',
      instruments: ['2x Master Shehnai', '2x Dholak / Tabla', '1x Harmonium', '1x Brass Manjira'],
      audioSample: 'Mangala Dhwani Raga',
      basePrice: 18500,
      badge: 'Verified',
    },
    {
      id: 3,
      name: 'Thrissur Panchavadyam & Chanda Melam',
      maestro: 'Asan K. V. Panicker',
      category: 'kerala-melam',
      rating: 5.0,
      reviewsCount: 86,
      experienceYears: 15,
      teamSize: 8,
      location: 'Kochi',
      instruments: ['4x Chanda Drums', '2x Elathalam Cymbals', '1x Kombu Horn', '1x Timila'],
      audioSample: 'Utsava Chanda Melam',
      basePrice: 24000,
      badge: 'Express Booking',
    },
    {
      id: 4,
      name: 'Sri Venugopala Saxophone Band',
      maestro: 'Symphony G. Venkatesh',
      category: 'saxophone',
      rating: 4.7,
      reviewsCount: 110,
      experienceYears: 12,
      teamSize: 5,
      location: 'Bengaluru',
      instruments: [
        '2x Classical Saxophone',
        '1x Thavil Percussion',
        '1x Keyboard',
        '1x Pad Percussion',
      ],
      audioSample: 'Tyagaraja Sankeertanam',
      basePrice: 16500,
      badge: 'Verified',
    },
    {
      id: 5,
      name: 'Royal Shehnai Ensemble',
      maestro: 'Ustad Pandit R. K. Sharma',
      category: 'shehnai',
      rating: 4.8,
      reviewsCount: 98,
      experienceYears: 22,
      teamSize: 6,
      location: 'Varanasi',
      instruments: ['2x Master Shehnai', '2x Dholak / Tabla', '1x Harmonium', '1x Brass Manjira'],
      audioSample: 'Mangala Dhwani Raga',
      basePrice: 18500,
      badge: 'Verified',
    },
    {
      id: 6,
      name: 'Thrissur Panchavadyam & Chanda Melam',
      maestro: 'Asan K. V. Panicker',
      category: 'kerala-melam',
      rating: 5.0,
      reviewsCount: 86,
      experienceYears: 15,
      teamSize: 8,
      location: 'Kochi',
      instruments: ['4x Chanda Drums', '2x Elathalam Cymbals', '1x Kombu Horn', '1x Timila'],
      audioSample: 'Utsava Chanda Melam',
      basePrice: 24000,
      badge: 'Express Booking',
    },
  ];

  setTab(tabCategory: string): void {
    this.activeTab = tabCategory;
  }

  get filteredTroupes(): BajanthriTroupe[] {
    if (this.activeTab === 'all') {
      return this.troupes;
    }
    return this.troupes.filter((troupe) => troupe.category === this.activeTab);
  }

  onProfileClick(troupe: BajanthriTroupe): void {
    console.log('Opening profile:', troupe);

    const dialogRef = this.dialog.open(InfoCardComponent, {
      maxWidth: '40vw',
      maxHeight: '80vh',
      data: troupe
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Reservation:', result);
        this.router.navigate(['/my-bookings']);
        dialogRef.close();
      }
    });
  }
 
   onReserveClick(): void {
     this.router.navigate(['/my-bookings'], {
      queryParams: {
        type: 'bajantaris'
      }
     });
   }
}

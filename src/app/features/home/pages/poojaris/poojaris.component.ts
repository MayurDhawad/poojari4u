import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBox } from '../../../shared/search-box';
import { Poojari } from '../../../../models/poojari.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PoojariProfileCardComponent } from './profile-card/poojari-profile-card.component';
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
@Component({
  selector: 'app-poojaris',
  templateUrl: './poojaris.component.html',
  styleUrls: ['./poojaris.component.scss'],
  imports: [CommonModule, FormsModule, SearchBox]
})
export class PoojarisComponent implements OnInit {

  @Output() search = new EventEmitter<SearchCriteria>();
  @Output() filterChange = new EventEmitter<FilterOptions>();
  @Output() viewProfile = new EventEmitter<string>();
  @Output() reserveSlot = new EventEmitter<Poojari>();
  @Input() ceremonyName: string = 'Griha Pravesham';
  @Input() location: string = 'Hyderabad';
  @Input() date: string = '29 Sep 2026';
  @Input() totalAvailable: number = 6;
  @Input({ required: true }) poojari!: Poojari;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  poojarisList: Poojari[] = [
    {
      id: 'p1',
      name: 'Pt. Raghunath Acharya',
      tagline: 'Rig Veda Pathashala Alumnus',
      isGoldCertified: true,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      experienceYears: 18,
      rating: 4.9,
      reviewCount: 142,
      languages: ['Telugu', 'Sanskrit', 'Hindi'],
      description: 'Experienced in traditional Smartapath rituals, Griha Pravesham, and Homam ceremonies with 18+ years of dedicated service.',
      ceremonyFee: 5500
    },
    {
      id: 'p2',
      name: 'Pt. Venkatakrishnan Sharma',
      tagline: 'Yajur Veda Ghanapati',
      isGoldCertified: true,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
      experienceYears: 22,
      rating: 4.95,
      reviewCount: 210,
      languages: ['Telugu', 'Tamil', 'Sanskrit'],
      description: 'Ghanapati scholar trained in traditional Veda Vridhi setup. Expert in Vivah Sanskar and Vastu Homams.',
      ceremonyFee: 6500
    },
    {
      id: 'p3',
      name: 'Pt. Suresh Shastri',
      tagline: 'Sama Veda & Smartapath Specialist',
      isGoldCertified: false,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
      experienceYears: 12,
      rating: 4.8,
      reviewCount: 88,
      languages: ['Hindi', 'Telugu', 'Kannada'],
      description: 'Specializes in melodious Sama Veda chants and family Satyanarayan Vrats with simple explanations.',
      ceremonyFee: 4800
    },
    {
      id: 'p4',
      name: 'Pt. Anantharaman Dikshitar',
      tagline: 'Agama Shastra & Mahanyasa Expert',
      isGoldCertified: true,
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=250',
      experienceYears: 25,
      rating: 5.0,
      reviewCount: 320,
      languages: ['Tamil', 'Telugu', 'Sanskrit'],
      description: 'Senior Purohit specializing in Temple Kumbhabhishekam, Rudrabhishekam, and large family Mahayagnas.',
      ceremonyFee: 8000
    },
    {
      id: 'p5',
      name: 'Pt. Madhavan Joshi',
      tagline: 'Jyotish Ratna & Muhurtham Expert',
      isGoldCertified: false,
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250',
      experienceYears: 15,
      rating: 4.85,
      reviewCount: 115,
      languages: ['Hindi', 'Marathi', 'Sanskrit'],
      description: 'Accurate Muhurtham calculation combined with authentic Vedic rituals for Namakaran, Engagement, and Business openings.',
      ceremonyFee: 5000
    },
    {
      id: 'p6',
      name: 'Pt. Srikant Vidyalankar',
      tagline: 'Gurukul Trained Vedic Scholar',
      isGoldCertified: true,
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250',
      experienceYears: 10,
      rating: 4.78,
      reviewCount: 76,
      languages: ['Telugu', 'Hindi', 'English'],
      description: 'Fluency in English makes ceremonies easy to understand for young families and NRI households. Specialized in Ganapati Homam.',
      ceremonyFee: 4500
    }
  ];

  searchParams: SearchCriteria = {
    ceremony: 'Griha Pravesham (Housewarming)',
    location: 'Hyderabad',
    date: '2026-09-29'
  };

  filters: FilterOptions = {
    language: 'all',
    specialization: 'all',
    experience: 'all',
    goldCertifiedOnly: false,
    sortBy: 'rating_high'
  };

  onSearch(): void {
    this.search.emit({ ...this.searchParams });
  }

  onFilterUpdate(): void {
    this.filterChange.emit({ ...this.filters });
  }

onProfileClick(poojari: Poojari): void {

  console.log('Opening profile:', poojari);

  const dialogRef = this.dialog.open(
    PoojariProfileCardComponent,
    {
      width: '600px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      data: poojari
    }
  );

  dialogRef.afterClosed().subscribe(result => {

    if (result) {
      console.log('Reservation:', result);
    }

  });
}

  onReserveClick(): void {
    this.reserveSlot.emit(this.poojari);
  }
}

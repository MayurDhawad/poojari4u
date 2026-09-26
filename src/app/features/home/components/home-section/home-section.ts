import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SearchBox } from '../../../shared/search-box';


@Component({
  selector: 'app-home-section',
  imports: [
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
],
  templateUrl: './home-section.html',
  styleUrl: './home-section.scss',
})
export class HomeSection {

  selectedService = '';
  location = '';
  date: Date | null = null;

  services = [
    'Satyanarayana Swamy Puja',
    'Gruhapravesham',
    'Wedding',
    'Ganapathi Puja',
    'Homam',
    'Naming Ceremony',
    'Other Puja',
  ];

  search(): void {
    console.log({
      service: this.selectedService,
      location: this.location,
      date: this.date,
    });
  }

}
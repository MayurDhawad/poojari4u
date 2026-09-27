import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


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

  ceremonies = [
    {
      value: '',
      label: 'Select Service'
    },
    {
      value: 'ganapathi-pooja',
      label: 'Ganapathi Pooja'
    },
    {
      value: 'gruhapravesham',
      label: 'Gruhapravesham'
    },
    {
      value: 'homam-havan',
      label: 'Homam / Havan'
    },
    {
      value: 'satyanarayana-swamy-pooja',
      label: 'Satyanarayana Swamy Pooja'
    },
    {
      value: 'lakshmi-pooja',
      label: 'Lakshmi Pooja'
    },
    {
      value: 'wedding-rituals',
      label: 'Wedding Rituals'
    },
    {
      value: 'namakarana',
      label: 'Namakarana'
    },
    {
      value: 'vratham',
      label: 'Vratham'
    },
    {
      value: 'pitru-karma',
      label: 'Pitru Karma'
    },
    {
      value: 'temple-pooja-services',
      label: 'Temple Pooja Services'
    },
    {
      value: 'birthday-ayushya-pooja',
      label: 'Birthday / Ayushya Pooja'
    },
    {
      value: 'business-opening-pooja',
      label: 'Business Opening Pooja'
    }
  ];

  locationGroups = [
    {
      groupName: 'Hyderabad',
      locations: [
        'Select Location',
        'Kondapur',
        'Gachibowli',
        'Madhapur',
        'Kukatpally',
        'Miyapur',
        'Banjara Hills',
        'Jubilee Hills',
        'Secunderabad'
      ]
    },
    {
      groupName: 'Other Cities',
      locations: [
        'Warangal',
        'Karimnagar',
        'Nizamabad',
        'Khammam'
      ]
    }
  ];

  search(): void {
    console.log({
      service: this.selectedService,
      location: this.location,
      date: this.date,
    });
  }

}
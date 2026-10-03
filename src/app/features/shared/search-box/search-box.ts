import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
export interface showSection {
  displaySearchBox?: boolean;
  showLanguage?: boolean; 
  showCeremony?: boolean; 
  showLocation?: boolean; 
  showDate?: boolean 
}
@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './search-box.html',
  styleUrls: ['./search-box.scss']
})

export class SearchBox  implements OnInit {

  // Fields to display
  @Input() showSection: showSection = {};

  // Button
  @Input() searchLabel = 'Search';
  @Input() showSearchIcon = true;

  // Search event
  @Output() search = new EventEmitter<showSection>();

  ngOnInit(): void {}

  selectedLanguage = '';
  selectedCeremony = '';
  selectedLocation = '';
  selectedDate = '';

  languages = [
    { value: 'english', label: 'English' },
    { value: 'kannada', label: 'Kannada' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'marathi', label: 'Marathi' }
  ];

  ceremonies = [
    { value: 'ganapathi-pooja', label: 'Ganapathi Pooja' },
    { value: 'gruhapravesham', label: 'Gruha Pravesham' },
    { value: 'satyanarayana-pooja', label: 'Satyanarayana Pooja' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'homam', label: 'Homam' }
  ];

  locationGroups = [
    {
      groupName: 'Karnataka',
      locations: ['Bangalore', 'Mysore', 'Hubli']
    },
    {
      groupName: 'Maharashtra',
      locations: ['Nagpur', 'Pune', 'Mumbai']
    },
    {
      groupName: 'Telangana',
      locations: ['Hyderabad', 'Warangal']
    }
  ];

  onSearch(): void {}
}

function onInit() {
  throw new Error('Function not implemented.');
}


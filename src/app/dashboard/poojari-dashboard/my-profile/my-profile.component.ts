import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class MyProfileComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  profile = {
    fullName: 'Ravi Sharma',
    email: 'ravi.sharma@poojari4u.com',
    phone: '+91 98765 43210',
    experience: '8+ Years',
    specialization: 'Vedic Rituals, Griha Pravesh, Satyanarayan Puja',
    languages: 'Hindi, Sanskrit, English, Marathi',
    location: 'Nagpur, Maharashtra',
    bio: 'Certified Vedic priest specializing in traditional housewarmings, havan, and wedding ceremonies with deep knowledge of ancient scriptures.'
  };

  isEditing = false;

  saveProfile() {
    this.isEditing = false;
    // Add API call logic here to save changes
  }
}
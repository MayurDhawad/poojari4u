import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoojariDashboardService } from '../poojariDashboard.service';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class MyProfileComponent implements OnInit {

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

  constructor(private _poojariDashboardService: PoojariDashboardService){}

  ngOnInit(): void {
    this.getPoojariAvailability();
  }

  getPoojariAvailability(){
    this._poojariDashboardService.getProfileData().subscribe(
      (res: any) => {
        console.log(res.profile.personalDetails);
        let data = res.profile.personalDetails
        this.profile = {
          fullName : data.fullName,
          email: data.emailAddress,
          phone: data.mobileNumber,
          experience: data.yearsofExperience,
          specialization: 'Vedic Rituals, Griha Pravesh, Satyanarayan Puja',
          languages: 'Hindi, Sanskrit, English, Marathi',
          location: data.city,
          bio: ''
        }
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }



  saveProfile() {
    this.isEditing = false;
    // Add API call logic here to save changes
  }
}
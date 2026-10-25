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
    city: 'Nagpur, Maharashtra',
    serviceAreas: 'Nagpur',
    bio: 'Certified Vedic priest specializing in traditional housewarmings, havan, and wedding ceremonies with deep knowledge of ancient scriptures.',
    accountHolderName: 'Ravi Sharma',
    bankName: 'State Bank of India',
    accountNumber: '123456789',
    confirmAccountNumber: '123456789',
    ifscCode: 'SBIN0000015',
    upiId: 'ravi@sbi'
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
          city: data.city,
          serviceAreas: data.serviceAreas,
          bio: '',
          accountHolderName: '',
          bankName: '',
          accountNumber: '',
          confirmAccountNumber: '',
          ifscCode: '',
          upiId: ''
        }
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      // Handle file upload logic or preview here
    }
  }

  saveProfile() {
    this.isEditing = false;
    // Add API call logic here to save changes
  }
}
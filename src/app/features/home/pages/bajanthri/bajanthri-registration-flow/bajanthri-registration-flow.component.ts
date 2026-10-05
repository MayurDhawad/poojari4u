import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

export interface PoojaServiceOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-bajanthri-registration-flow',
  standalone: true,
  templateUrl: './bajanthri-registration-flow.component.html',
  styleUrls: ['./bajanthri-registration-flow.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class BajanthriRegistrationFlowComponent {

 currentStep = 1; // Step 5: Review & Submit
  isSubmitted = false;
  registrationId: string = 'P4U-P-410159'; // Generated dynamically or from API response

  // Master Data
  languagesList: string[] = ['Telugu', 'Sanskrit', 'Hindi', 'English', 'Tamil', 'Kannada'];
  selectedLanguages: string[] = ['Telugu', 'Sanskrit', 'Hindi'];

  availableServices: PoojaServiceOption[] = [
    { id: 'griha_pravesh', name: 'Griha Pravesh' },
    { id: 'satyanarayana', name: 'Satyanarayana Vratham' },
    { id: 'ganapathi', name: 'Ganapathi Puja' },
    { id: 'homam', name: 'Homam / Havan' },
    { id: 'wedding', name: 'Wedding Rituals' },
    { id: 'naming', name: 'Naming Ceremony' },
    { id: 'other', name: 'Other Poojas' }
  ];

  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  selectedDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  profilePhotoName: string = 'Profile_Photo.png';
  identityDocName: string = 'Aadhaar_Card.pdf';

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      // Step 1
      fullName: ['Pandit Rajesh Sharma', Validators.required],
      mobileNumber: ['9876543210', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['rajesh.sharma@example.com', [Validators.email]],
      city: ['Hyderabad', Validators.required],
      serviceAreas: ['Gachibowli, Kondapur, Madhapur'],
      yearsOfExperience: [12, [Validators.min(0)]],

      // Step 2
      selectedServices: this.fb.array([]),
      providesSamagri: ['yes', Validators.required],

      // Step 3
      availableFrom: ['06:00', Validators.required],
      availableUntil: ['20:00', Validators.required],
      maxBookingsPerDay: ['2', Validators.required],
      travelOutsideCity: ['Yes', Validators.required],

      // Step 4
      profilePhoto: [null],
      identityDocument: [null],
      trainingDetails: ['Completed 6 years Veda Patashala training in Yajurveda and Smartam.'],

      // Step 5
      termsConfirmed: [false, Validators.requiredTrue]
    });

    this.initDefaultServices();
  }

  get selectedServicesArray(): FormArray {
    return this.registrationForm.get('selectedServices') as FormArray;
  }

  private initDefaultServices(): void {
    const defaults = [
      { id: 'griha_pravesh', name: 'Griha Pravesh', description: 'Full Griha Pravesh Vastu Puja', startingPrice: 3000 },
      { id: 'satyanarayana', name: 'Satyanarayana Vratham', description: 'Complete Katha & Rituals', startingPrice: 2500 },
      { id: 'homam', name: 'Homam / Havan', description: 'Ganapathi & Navagraha Homam', startingPrice: 3500 }
    ];

    defaults.forEach(service => {
      this.selectedServicesArray.push(
        this.fb.group({
          serviceId: [service.id],
          serviceName: [service.name],
          description: [service.description],
          startingPrice: [service.startingPrice, [Validators.required, Validators.min(0)]]
        })
      );
    });
  }

  // File Handlers
  onProfilePhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.profilePhotoName = input.files[0].name;
      this.registrationForm.patchValue({ profilePhoto: input.files[0] });
    }
  }

  onIdentityDocSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.identityDocName = input.files[0].name;
      this.registrationForm.patchValue({ identityDocument: input.files[0] });
    }
  }

  // Helpers
  isServiceSelected(serviceId: string): boolean {
    return this.selectedServicesArray.controls.some(c => c.get('serviceId')?.value === serviceId);
  }

  toggleService(service: PoojaServiceOption): void {
    const index = this.selectedServicesArray.controls.findIndex(c => c.get('serviceId')?.value === service.id);
    if (index > -1) {
      this.selectedServicesArray.removeAt(index);
    } else {
      this.selectedServicesArray.push(
        this.fb.group({
          serviceId: [service.id],
          serviceName: [service.name],
          description: [''],
          startingPrice: [null, [Validators.required, Validators.min(0)]]
        })
      );
    }
  }

  toggleDay(day: string): void {
    const idx = this.selectedDays.indexOf(day);
    if (idx > -1) this.selectedDays.splice(idx, 1);
    else this.selectedDays.push(day);
  }

  isDaySelected(day: string): boolean { return this.selectedDays.includes(day); }

  toggleLanguage(lang: string): void {
    const idx = this.selectedLanguages.indexOf(lang);
    if (idx > -1) this.selectedLanguages.splice(idx, 1);
    else this.selectedLanguages.push(lang);
  }

  isLanguageSelected(lang: string): boolean { return this.selectedLanguages.includes(lang); }

  // Navigation & Submission
  goToStep(step: number): void {
    if (step <= this.currentStep) this.currentStep = step;
  }

  nextStep(): void {
    if (this.currentStep < 5) {
      this.currentStep++;
    } else if (this.currentStep === 5) {
      this.submitRegistration();
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) this.currentStep--;
  }

  submitRegistration(): void {
    if (this.registrationForm.get('termsConfirmed')?.value) {
      // Generate or fetch Registration ID from backend response
      this.registrationId = 'P4U-P-' + Math.floor(100000 + Math.random() * 900000);
      this.isSubmitted = true;
      console.log('Registration Submitted Successfully:', this.registrationForm.value);
    } else {
      this.registrationForm.get('termsConfirmed')?.markAsTouched();
    }
  }

  sendOtp(): void {
    console.log('Sending OTP to:', this.registrationForm.get('mobileNumber')?.value);
  }
}
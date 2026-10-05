import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormArray, FormsModule } from '@angular/forms';

export interface PoojaServiceOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-poojari-registration-flow',
  standalone: true,
  templateUrl: './poojari-registration-flow.component.html',
  styleUrls: ['./poojari-registration-flow.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class PoojariRegistrationFlowComponent{
 currentStep = 1;
  submitted = false;
  otpSent = false;
  termsAccepted = false;
  submitError = false;

  photoFileName = '';
  idFileName = '';
  trainingDetails = '';
  registrationId = '';

  readonly steps = [
    { id: 1, label: 'Personal Details' },
    { id: 2, label: 'Services' },
    { id: 3, label: 'Availability' },
    { id: 4, label: 'Verification' },
    { id: 5, label: 'Submit' }
  ];

  readonly languages = [
    'Telugu',
    'Sanskrit',
    'Hindi',
    'English',
    'Tamil',
    'Kannada'
  ];

  readonly expertise = [
    'Griha Pravesh',
    'Satyanarayana Vratham',
    'Ganapathi Puja',
    'Homam / Havan',
    'Wedding Rituals',
    'Naming Ceremony',
    'Other Poojas'
  ];

  readonly days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  readonly serviceRows = [
    { name: 'Griha Pravesh', price: '3000' },
    { name: 'Satyanarayana Vratham', price: '2500' },
    { name: 'Homam / Havan', price: '3500' }
  ];

  selectedLanguages: string[] = [];
  selectedExpertise: string[] = [];
  selectedDays: string[] = [];

  personalForm: FormGroup;
  servicesForm: FormGroup;
  availabilityForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.personalForm = this.fb.group({
      fullName: ['Mayur Dhawad', Validators.required],
      mobile: ['9923808023', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      email: ['mayur@gmail.com', Validators.email],
      city: ['Nagpur', Validators.required],
      areas: [''],
      experience: [0, [Validators.min(0)]]
    });

    this.servicesForm = this.fb.group({
      samagri: ['yes']
    });

    this.availabilityForm = this.fb.group({
      from: ['06:00'],
      until: ['20:00'],
      maxBookings: ['2'],
      travelOutsideCity: ['yes']
    });
  }

  isInvalid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  sendOtp(): void {
    const mobile = this.personalForm.get('mobile');

    if (!mobile?.value || mobile.invalid) {
      mobile?.markAsTouched();
      return;
    }

    this.otpSent = true;
  }

  nextStep(step: number): void {
    if (step === 2 && this.personalForm.invalid) {
      this.personalForm.markAllAsTouched();
      return;
    }

    this.currentStep = step;
    this.submitError = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.submitError = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleSelection(list: string[], value: string): void {
    const index = list.indexOf(value);

    if (index >= 0) {
      list.splice(index, 1);
    } else {
      list.push(value);
    }
  }

  onFileSelected(event: Event, type: 'photo' | 'id'): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) {
      return;
    }

    if (type === 'photo') {
      this.photoFileName = file.name;
    } else {
      this.idFileName = file.name;
    }
  }

  submitRegistration(): void {
    if (!this.termsAccepted) {
      this.submitError = true;
      return;
    }

    this.registrationId =
      `P4U-P-${Math.floor(100000 + Math.random() * 900000)}`;

    this.submitted = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

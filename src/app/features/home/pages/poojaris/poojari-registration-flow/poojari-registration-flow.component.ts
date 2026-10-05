import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ServiceOption {
  name: string;
  title: string;
  description: string;
  icon: string;
}

interface DayOption {
  name: string;
  selected: boolean;
}

interface PaymentDetails {
  accountName: string;
  bankName: string;
  accountNumber: string;
  confirmAccountNumber: string;
  ifsc: string;
  upi: string;
}

interface UploadedFiles {
  idProof?: File;
  addressProof?: File;
  qualification?: File;
  additionalDocument?: File;
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
  showError = false;
  errorMessage = '';
  submitError = false;
  otpSent = false;
  registrationId = '';

  // Form Group for Step 1
  personalForm!: FormGroup;

  // Step 1 - Options
  languages: string[] = ['Telugu', 'Hindi', 'Tamil', 'Kannada', 'Sanskrit', 'English', 'Marathi'];
  selectedLanguages: string[] = [];

  // Step 2 - Services
  services: ServiceOption[] = [
    { name: 'satyanarayana', title: 'Satyanarayana Pooja', description: 'Complete Katha & Vratam ritual', icon: '🪔' },
    { name: 'grihapravesam', title: 'Griha Pravesham', description: 'House warming ceremonies & Vastu Shanti', icon: '🏡' },
    { name: 'marriage', title: 'Vivah / Wedding', description: 'Full traditional wedding rituals', icon: '💍' },
    { name: 'namakaranam', title: 'Namakaranam', description: 'Baby naming ceremony rituals', icon: '👶' },
    { name: 'homam', title: 'Chandi / Sudarshana Homam', description: 'Havan and fire rituals for positivity', icon: '🔥' },
    { name: 'engagement', title: 'Engagement / Nishchitartham', description: 'Rings & alliance ceremony', icon: '🌸' }
  ];
  selectedServices: string[] = [];
  selectedExpertise: string[] = [];
  otherServices = '';

  // Step 3 - Location & Availability
  states: string[] = ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Maharashtra', 'Tamil Nadu'];
  state = '';
  city = '';
  area = '';
  pincode = '';
  radius = 15;
  days: DayOption[] = [
    { name: 'Mon', selected: true },
    { name: 'Tue', selected: true },
    { name: 'Wed', selected: true },
    { name: 'Thu', selected: true },
    { name: 'Fri', selected: true },
    { name: 'Sat', selected: true },
    { name: 'Sun', selected: true }
  ];
  startTime = '06:00';
  endTime = '20:00';
  advanceBooking = '1-day';
  maxBooking = '30';
  sameDay = true;
  emergency = false;

  // Step 4 - Document & Payment Uploads
  profilePreview: string | null = null;
  files: UploadedFiles = {};
  payment: PaymentDetails = {
    accountName: '',
    bankName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifsc: '',
    upi: ''
  };
  declarationAccepted = false;
  termsAccepted = false;

  // Progress Bar Steps
  steps = [
    { id: 1, label: 'Personal' },
    { id: 2, label: 'Services' },
    { id: 3, label: 'Availability' },
    { id: 4, label: 'Verification' },
    { id: 5, label: 'Review' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initPersonalForm();
  }

  private initPersonalForm(): void {
    this.personalForm = this.fb.group({
      fullName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.email]],
      city: ['', Validators.required],
      areas: [''],
      experience: [0, [Validators.min(0)]]
    });
  }

  // --- Step 1 Helpers ---
  isInvalid(form: FormGroup, controlName: string): boolean {
    const control = form.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  sendOtp(): void {
    if (this.personalForm.get('mobile')?.valid) {
      this.otpSent = true;
    } else {
      this.personalForm.get('mobile')?.markAsTouched();
    }
  }

  toggleSelection(list: string[], item: string): void {
    const index = list.indexOf(item);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(item);
    }
  }

  // --- Step 2 Helpers ---
  isSelected(serviceName: string): boolean {
    return this.selectedServices.includes(serviceName);
  }

  toggleService(serviceName: string): void {
    this.toggleSelection(this.selectedServices, serviceName);
    this.showError = false;
  }

  // --- Step 3 Helpers ---
  toggleDay(day: DayOption): void {
    day.selected = !day.selected;
    this.showError = false;
  }

  // --- Step 4 Helpers ---
  onProfilePhotoSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.profilePreview = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  onFileSelected(event: Event, key: keyof UploadedFiles): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.files[key] = file;
    }
  }

  // --- Navigation & Workflow ---
  nextStep(step: number): void {
    if (this.currentStep === 1) {
      if (this.personalForm.invalid) {
        this.personalForm.markAllAsTouched();
        return;
      }
    }
    this.currentStep = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.goPrevious();
  }

  goPrevious(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousStep(): void {
    this.goPrevious();
  }

  continueRegistration(): void {
    this.showError = false;

    // Step 2 validation
    if (this.currentStep === 2) {
      if (this.selectedServices.length === 0 && !this.otherServices.trim()) {
        this.showError = true;
        return;
      }
      this.nextStep(3);
      return;
    }

    // Step 3 validation
    if (this.currentStep === 3) {
      const hasSelectedDay = this.days.some((d) => d.selected);
      if (!hasSelectedDay) {
        this.showError = true;
        return;
      }
      this.nextStep(4);
      return;
    }
  }

  submitRegistration(): void {
    // Step 4 verification logic
    if (this.currentStep === 4) {
      if (!this.declarationAccepted) {
        this.errorMessage = 'Please accept the declaration before proceeding.';
        return;
      }
      this.errorMessage = '';
      this.prepareReviewData();
      this.nextStep(5);
      return;
    }

    // Final submission step (Step 5)
    if (this.currentStep === 5) {
      if (!this.termsAccepted) {
        this.submitError = true;
        return;
      }

      this.submitError = false;
      this.registrationId = 'P4U-' + Math.floor(100000 + Math.random() * 900000);
      this.submitted = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private prepareReviewData(): void {
    const titles = this.services
      .filter((s) => this.selectedServices.includes(s.name))
      .map((s) => s.title);

    if (this.otherServices.trim()) {
      titles.push(...this.otherServices.split(',').map((s) => s.trim()));
    }
    this.selectedExpertise = titles;
  }
}
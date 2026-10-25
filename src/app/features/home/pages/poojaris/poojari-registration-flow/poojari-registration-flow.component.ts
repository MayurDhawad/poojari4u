import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth.service';

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
interface UploadedDocument {
  url: string;
  publicId: string;
  originalName: string;
  mimeType: string;
  uploadedAt: string;
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
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class PoojariRegistrationFlowComponent {
  currentStep = 1;
  submitted = false;
  showError = false;
  errorMessage = '';
  submitError = false;
  otpSent = false;
  registrationId = '';
  applicationId = '';
  applicationStatus = 'UNDER_VERIFICATION';

  // Form Group for Step 1
  personalForm!: FormGroup;
  availabilityForm!: FormGroup;
  documentsForm!: FormGroup;
  paymentForm!: FormGroup;

  // Step 1 - Options
  languages: string[] = ['Telugu', 'Hindi', 'Tamil', 'Kannada', 'Sanskrit', 'English', 'Marathi'];
  selectedLanguages: string[] = [];

  // Step 2 - Services
  services: ServiceOption[] = [
    {
      name: 'Ganapathi Pooja',
      title: 'Ganapathi Pooja',
      description: 'Ganapathi pooja and related rituals.',
      icon: '🪔',
    },
    {
      name: 'Gruhapravesham',
      title: 'Gruhapravesham',
      description: 'Housewarming pooja and related ceremonies.',
      icon: '🏠',
    },
    {
      name: 'Business Opening Pooja',
      title: 'Business Opening Pooja',
      description:
        'Pooja for opening a shop, office, showroom, restaurant, business or commercial establishment.',
      icon: '🏪',
    },
    {
      name: 'Homam / Havan',
      title: 'Homam / Havan',
      description: 'Different types of homams and havans.',
      icon: '🔥',
    },
    {
      name: 'Satyanarayana Swamy Pooja',
      title: 'Satyanarayana Swamy Pooja',
      description: 'Satyanarayana Swamy vratam and pooja.',
      icon: '🙏',
    },
    {
      name: 'Lakshmi Pooja',
      title: 'Lakshmi Pooja',
      description: 'Lakshmi pooja and related rituals.',
      icon: '🌺',
    },
    {
      name: 'Wedding Rituals',
      title: 'Wedding Rituals',
      description: 'Hindu wedding ceremonies and rituals.',
      icon: '💍',
    },
    {
      name: 'Namakarana',
      title: 'Namakarana',
      description: 'Traditional naming ceremony.',
      icon: '👶',
    },
    {
      name: 'Vratham',
      title: 'Vratham',
      description: 'Various traditional vrathams and rituals.',
      icon: '📿',
    },
    {
      name: 'Pitru Karma',
      title: 'Pitru Karma',
      description: 'Ancestral rituals and related ceremonies.',
      icon: '🕉️',
    },
    {
      name: 'Temple Pooja',
      title: 'Temple Pooja',
      description: 'Temple-related poojas and religious rituals.',
      icon: '🛕',
    },
    {
      name: 'Ayushya Pooja',
      title: 'Ayushya Pooja',
      description: 'Birthday and longevity-related poojas.',
      icon: '🎂',
    },
    {
      name: 'Other Poojas',
      title: 'Other Poojas',
      description: 'Other religious services you provide.',
      icon: '📿',
    },
  ];
  selectedServices: string[] = [];
  selectedDays: string[] = [];
  selectedExpertise: string[] = [];
  otherServices = '';

  // Step 3 - Location & Availability
  states: string[] = ['Telangana', 'Andhra Pradesh', 'Karnataka', 'Maharashtra', 'Tamil Nadu'];
  state = '';
  city = '';
  area = '';
  pincode = '';
  radius = 50;
  days: DayOption[] = [
    { name: 'Monday', selected: false },
    { name: 'Tuesday', selected: false },
    { name: 'Wednesday', selected: false },
    { name: 'Thursday', selected: false },
    { name: 'Friday', selected: false },
    { name: 'Saturday', selected: false },
    { name: 'Sunday', selected: false },
  ];
  startTime = '06:00';
  endTime = '20:00';
  advanceBooking = '1-day';
  maxBooking = '30';
  sameDay = true;
  emergency = false;

  // Step 4 - Document & Payment Uploads
  profilePreview: string | null = null;
  profilePhoto: File | null = null;
  files: UploadedFiles = {};
  payment: PaymentDetails = {
    accountName: '',
    bankName: '',
    accountNumber: '',
    confirmAccountNumber: '',
    ifsc: '',
    upi: '',
  };
  declarationAccepted = false;
  termsAccepted = false;

  // Progress Bar Steps
  steps = [
    { id: 1, label: 'Personal' },
    { id: 2, label: 'Services' },
    { id: 3, label: 'Availability' },
    { id: 4, label: 'Verification' },
    { id: 5, label: 'Review' },
  ];

  uploading = false;
  uploadMessage = '';

  private readonly maxDocumentSize = 10 * 1024 * 1024; // 10 MB
  private readonly maxVideoSize = 100 * 1024 * 1024; // 100 MB

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.initPersonalForm();
    this.initAvailabilityForm();
    this.initDocumentsForm();
    this.initPaymentForm();
  }

  private initPersonalForm(): void {
    this.personalForm = this.fb.group({
      fullName: ['Mayur', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      mobile: ['9923808095', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['m@m.com', [Validators.required, Validators.email]],
      city: ['Nagpur', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      areas: [
        'Subhash Nagar',
        [Validators.required, Validators.minLength(2), Validators.maxLength(50)],
      ],
      experience: [3, [Validators.required]],
      languages: [null, [Validators.required]],
      services: [[]],
      otherServices: [''],
    });
  }

  private initAvailabilityForm(): void {
    this.availabilityForm = this.fb.group({
      state: ['', []],
      city: ['', []],
      area: ['', []],
      pincode: ['', []],
      radius: [50],
      days: [[], []],
      startTime: ['', []],
      endTime: ['', []],
      advanceBooking: ['', []],
      maxBooking: ['', []],
      sameDay: [false],
      emergency: [true],
    });
  }

  private initDocumentsForm(): void {
    this.documentsForm = this.fb.group({
      profilePhoto: [null as File | null, Validators.required],
      governmentIdProof: [null as File | null, Validators.required],
      addressProof: [null as File | null, Validators.required],
      poojaVedicQualification: [null as File | null, Validators.required],
      poojaPerformingVideo: [null as File | null, Validators.required]
    });
  }

  // private initPaymentForm(): void {
  //   this.paymentForm = this.fb.group({
  //     accountHolderName: ['', [Validators.required]],
  //     bankName: ['', [Validators.required]],
  //     accountNumber: ['', [Validators.required]],
  //     confirmAccountNumber: ['', [Validators.required]],
  //     ifscCode: ['', [Validators.required]],
  //     upiId: ['', [Validators.required]],
  //   });
  // }

  private initPaymentForm(): void {
    this.paymentForm = this.fb.group({
      accountHolderName: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(100),Validators.pattern(/^[a-zA-Z\s.'-]+$/)]],
      bankName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(100),Validators.pattern(/^[a-zA-Z0-9\s&.'()-]+$/)]],
      accountNumber: ['',[Validators.required,Validators.pattern(/^[0-9]{9,18}$/)]],
      confirmAccountNumber: ['',[Validators.required]],
      ifscCode: ['',[Validators.required,Validators.pattern(/^[A-Z]{4}0[A-Z0-9]{6}$/)]],
      upiId: ['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9._-]{2,256}@[a-zA-Z0-9.-]{2,64}$/)]]
    },
    {validators: this.accountNumberMatchValidator})
  };

  private accountNumberMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const accountNumber = control.get('accountNumber')?.value;
    const confirmAccountNumber = control.get('confirmAccountNumber')?.value;

    if (!accountNumber || !confirmAccountNumber) {
      return null;
    }

    return accountNumber === confirmAccountNumber
      ? null
      : { accountNumberMismatch: true };
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

  onRadiusChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.radius = Number(input.value);
  }

  toggleSelection(list: string[], item: string): void {
    const index = list.indexOf(item);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(item);
    }
    (this.personalForm.patchValue({
      languages: this.selectedLanguages,
    }),
      this.selectedLanguages.length === 0 ? (this.showError = true) : (this.showError = false));
  }

  // --- Step 2 Helpers ---
  isSelected(serviceName: string): boolean {
    return this.selectedServices.includes(serviceName);
  }

  toggleService(serviceName: string): void {
    this.toggleSelection(this.selectedServices, serviceName);
    this.personalForm.patchValue({
      services: this.selectedServices,
    });
    this.showError = false;
  }

  // --- Step 3 Helpers ---
  toggleDay(day: { name: string; selected: boolean }): void {
    day.selected = !day.selected;

    const selectedDays = this.days.filter((d) => d.selected).map((d) => d.name);

    this.availabilityForm.patchValue({
      days: selectedDays,
    });

    selectedDays.length === 0 ? (this.showError = true) : (this.showError = false);
    this.selectedDays = selectedDays;
  }

  // --- Step 4 Helpers ---
  onProfilePhotoSelected(event: Event): void {
   const input = event.target as HTMLInputElement;
   const file = input.files?.[0];

    if (file) {

      const formData = new FormData();
      formData.append('profilePhoto', file, file.name);
      console.log(formData)

      const reader = new FileReader();
      reader.onload = () => (this.profilePreview = reader.result as string);
      reader.readAsDataURL(file);

      // Allow JPG and PNG only
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        alert('Please select a JPG or PNG image.');
        input.value = '';
        return;
      }

      // Maximum size: 5 MB
      if (file.size > 5 * 1024 * 1024) {
        alert('Profile photo must be smaller than 5 MB.');
        input.value = '';
        return;
      }
      this.profilePhoto = file;
      this.documentsForm.patchValue({
        profilePhoto: file,
      });
      console.log(this.documentsForm.value.profilePhoto)
    }
  }

  onFileSelected(event: Event, fieldName: string): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    const control = this.documentsForm.get(fieldName);

    control?.setValue(file);
    control?.markAsTouched();
    control?.updateValueAndValidity();
  }

  // onFileSelected(event: Event, key: keyof UploadedFiles): void {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     this.files[key] = file;

  //   const controlMap: Record<keyof UploadedFiles, string> = {
  //     idProof: 'governmentIdProof',
  //     addressProof: 'addressProof',
  //     qualification: 'poojaVedicQualification',
  //     additionalDocument: 'poojaPerformingVideo'
  //   };

  //   this.documentsForm.patchValue({
  //     [controlMap[key]]: file
  //   });
  //   }
  // }

  // --- Navigation & Workflow ---
  nextStep(step: number): void {
    if (this.currentStep === 1) {
      if (this.personalForm.invalid) {
        this.personalForm.markAllAsTouched();
        if (this.selectedLanguages.length === 0) {
          this.showError = true;
        }
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

  uploadDocuments(): void {
    if (this.documentsForm.invalid) {
      this.documentsForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    Object.entries(this.documentsForm.getRawValue()).forEach(
      ([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value, value.name);
        }
      }
    );

    this._authService.uploadDocuments(formData)
      .subscribe({
        next: (response) => {
          console.log('Upload successful:', response);
        },
        error: (error) => {
          console.error('Upload failed:', error);
        }
      });
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
      if (this.availabilityForm.invalid) {
        this.availabilityForm.markAllAsTouched();
        if (this.selectedDays.length === 0) {
          this.showError = true;
          return;
        }
      } else {
        this.showError = false;
        this.nextStep(4);
        return;
      }
    }
  }

  submitRegistration(): void {
    // Step 4 verification logic
    if (this.currentStep === 4) {
      if (this.paymentForm.invalid) {
        this.paymentForm.markAllAsTouched();
        return;
      }
      if (!this.declarationAccepted) {
        this.errorMessage = 'Please accept the declaration before proceeding.';
        return;
      }

      this.uploadDocuments();

      let payload: any = {
        name: this.personalForm.value.fullName || '',
        email: this.personalForm.value.email || '',
        phone: this.personalForm.value.mobile || '',
        password: 'SecurePass123',
        role: 'poojari',
        profile: {
          personalDetails: {
            fullName: this.personalForm.value.fullName || '',
            mobileNumber: this.personalForm.value.mobile || '',
            emailAddress: this.personalForm.value.email || '',
            city: this.personalForm.value.city || '',
            serviceAreas: this.personalForm.value.areas || '',
            yearsofExperience: this.personalForm.value.experience || '',
            languages: this.personalForm.value.languages || [],
            services: this.personalForm.value.services || [],
            otherServices: this.personalForm.value.otherServices || '',
          },
          availability: {
            state: this.availabilityForm.value.state || '',
            city: this.availabilityForm.value.city || '',
            area: this.availabilityForm.value.area || '',
            pincode: this.availabilityForm.value.pincode || '',
            radiusKm: this.availabilityForm.value.radius || '',
            availableDays: this.availabilityForm.value.days || [],
            startTime: this.availabilityForm.value.startTime || '',
            endTime: this.availabilityForm.value.endTime || '',
            advanceBooking: this.availabilityForm.value.advanceBooking || '',
            maxBookingDays: this.availabilityForm.value.maxBooking || '',
            sameDay: this.availabilityForm.value.sameDay || false,
            emergency: this.availabilityForm.value.emergency || false,
          },
          documents: {
            profilePhoto: this.documentsForm.value.profilePhoto,
            governmentIdProof: this.documentsForm.value.governmentIdProof || '',
            addressProof: this.documentsForm.value.addressProof || '',
            poojaVedicQualification: this.documentsForm.value.poojaVedicQualification || '',
            poojaPerformingVideo: this.documentsForm.value.poojaPerformingVideo || '',
          },
          payment: {
            accountName: this.paymentForm.value.accountHolderName || '',
            bankName: this.paymentForm.value.bankName || '',
            accountNumberEncrypted: this.paymentForm.value.accountNumber || '',
            accountNumberLast4: this.paymentForm.value.confirmAccountNumber || '',
            ifsc: this.paymentForm.value.ifscCode || '',
            upi: this.paymentForm.value.upiId || '',
          },
        },
      };

      this._authService.register(payload).subscribe(
        (res: any) => {
          console.log(res);
        },
        (err: Error) => {
          console.log(err);
        },
      );

      this.errorMessage = '';
      this.prepareReviewData();
      this.nextStep(5);
      return;
    }

    // Final submission step (Step 5)
    if (this.currentStep === 5) {
      let submitError1 = '';

      if (!this.termsAccepted) {
        submitError1 = 'Please accept the terms and conditions.';
        return;
      }

      this.currentStep = 5;
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

  goToHome(): void {
    this.router.navigate(['/']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationTrackingComponent } from '../../shared/application-tracking/application-tracking.component';

export type UserRole = 'poojari' | 'bajanthri' | 'admin';

interface RoleOption {
  id: UserRole;
  label: string;
  number: number;
  icon: string;
}

type ApplicationStatus =
  | 'Submitted'
  | 'Under Review'
  | 'Verification'
  | 'Approved'
  | 'Rejected';

interface ApplicationStep {
  title: string;
  description: string;
  date?: string;
  completed: boolean;
  current: boolean;
}

interface ApplicationRecord {
  trackingId: string;
  name: string;
  mobile: string;
  email: string;
  applicationType: string;
  submittedDate: string;
  status: ApplicationStatus;
  lastUpdated: string;
  remarks: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class LoginComponent  {

 // Step state: 1 = Role Selection, 2 = Login Form
  currentStep: number = 1;

  selectedRole: UserRole = 'poojari';
  loginForm: FormGroup;
  payload: any;

  roles: RoleOption[] = [
    { id: 'poojari', number: 1, label: 'Poojari', icon: '🪔' },
    { id: 'bajanthri', number: 2, label: 'Bajanthri', icon: '🥁' },
    { id: 'admin', number: 3, label: 'Admin', icon: '🔐' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // Get human-readable role name for title/subtitle
  get selectedRoleLabel(): string {
    const roleObj = this.roles.find(r => r.id === this.selectedRole);
    return roleObj ? roleObj.label : 'Poojari';
  }

  selectRole(roleId: UserRole): void {
    this.selectedRole = roleId;
  }

  goToLogin(): void {
    this.currentStep = 2;

  }

  goBackToHome(): void {
    this.loginForm.reset();
    this.router.navigateByUrl('/home')
    this.dialogRef.close('home');
  }

  goBackToRoleSelection(): void {
    this.currentStep = 1;
    this.loginForm.reset();
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      this.payload = {
        role: this.selectedRole,
        ...this.loginForm.value
      };
      console.log('Logging in with payload:', this.payload);
      // Perform API call or navigation here
      if(this.selectedRole == 'poojari'){
        this.dialogRef.close('poojari-login');
      }else if(this.selectedRole == 'bajanthri'){
        this.dialogRef.close('bajanthri-login');
      }else{
        this.router.navigateByUrl('/')
        this.dialogRef.close('/');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onRegisterClick(): void {
    if(this.selectedRole == 'poojari'){
      this.dialogRef.close('poojari-register');
    }else if(this.selectedRole == 'bajanthri'){
      this.dialogRef.close('bajanthri-register');
    }else{
      this.router.navigateByUrl('/')
      this.dialogRef.close('/');
    }
  }

  onApplicationStatusClick(){
    const dialogRef = this.dialog.open(ApplicationTrackingComponent, {
      maxWidth: '60vw',
      maxHeight: '90vh',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        console.log('result:', res);
        
      }
    });
  }
  
}
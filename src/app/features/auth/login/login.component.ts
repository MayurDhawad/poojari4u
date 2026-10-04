import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export type UserRole = 'poojari' | 'bajanthri' | 'admin';

interface RoleOption {
  id: UserRole;
  label: string;
  number: number;
  icon: string;
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

  roles: RoleOption[] = [
    { id: 'poojari', number: 1, label: 'Poojari', icon: '🪔' },
    { id: 'bajanthri', number: 2, label: 'Bajanthri', icon: '🥁' },
    { id: 'admin', number: 3, label: 'Admin', icon: '🔐' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
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
    this.router.navigateByUrl('')
  }

  goBackToRoleSelection(): void {
    this.currentStep = 1;
    this.loginForm.reset();
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      const payload = {
        role: this.selectedRole,
        ...this.loginForm.value
      };
      console.log('Logging in with payload:', payload);
      // Perform API call or navigation here
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onRegisterClick(): void {
    console.log(`Redirecting to registration for ${this.selectedRole}`);
  }
}
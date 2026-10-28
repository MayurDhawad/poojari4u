import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component';

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
  selector: 'app-application-tracking',
  templateUrl: './application-tracking.component.html',
  styleUrls: ['./application-tracking.component.scss'],
  imports: [CommonModule,FormsModule]
})
export class ApplicationTrackingComponent {

  trackingId = '';
  mobile = '';

  application = signal<ApplicationRecord | null>(null);
  searched = signal(false);
  errorMessage = signal('');

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
  ){}

  readonly applications: ApplicationRecord[] = [
    {
      trackingId: 'P4U-2026-001',
      name: 'Ramesh Sharma',
      mobile: '9876543210',
      email: 'ramesh@example.com',
      applicationType: 'Register as a Poojari',
      submittedDate: '05 Oct 2026',
      status: 'Under Review',
      lastUpdated: '08 Oct 2026',
      remarks: 'Your application is being reviewed by our team.'
    },
    {
      trackingId: 'P4U-2026-002',
      name: 'Suresh Kumar',
      mobile: '9876543211',
      email: 'suresh@example.com',
      applicationType: 'Register as a Bajanthri',
      submittedDate: '02 Oct 2026',
      status: 'Verification',
      lastUpdated: '09 Oct 2026',
      remarks: 'Your submitted documents are being verified.'
    },
    {
      trackingId: 'P4U-2026-003',
      name: 'Venkatesh Rao',
      mobile: '9876543212',
      email: 'venkatesh@example.com',
      applicationType: 'Register as a Poojari',
      submittedDate: '28 Sep 2026',
      status: 'Approved',
      lastUpdated: '10 Oct 2026',
      remarks: 'Congratulations! Your application has been approved.'
    },
    {
      trackingId: 'P4U-2026-004',
      name: 'Mohan Rao',
      mobile: '9876543213',
      email: 'mohan@example.com',
      applicationType: 'Register as a Poojari',
      submittedDate: '25 Sep 2026',
      status: 'Rejected',
      lastUpdated: '07 Oct 2026',
      remarks: 'Please contact our support team for details.'
    }
  ];

  readonly steps = [
    {
      title: 'Application Submitted',
      description: 'Your application has been received successfully.'
    },
    {
      title: 'Under Review',
      description: 'Our team is reviewing your application details.'
    },
    {
      title: 'Document Verification',
      description: 'Your documents and submitted information are being verified.'
    },
    {
      title: 'Application Approved',
      description: 'Your registration has been approved.'
    }
  ];

  closeTrackingPage(): void {
    this.dialogRef.close(true);
  }

  timeline = computed<ApplicationStep[]>(() => {
    const record = this.application();

    if (!record) {
      return [];
    }

    const statusOrder: ApplicationStatus[] = [
      'Submitted',
      'Under Review',
      'Verification',
      'Approved'
    ];

    const currentIndex = statusOrder.indexOf(record.status);

    return this.steps.map((step, index) => ({
      ...step,
      date: index === 0 ? record.submittedDate : undefined,
      completed:
        record.status !== 'Rejected' && index < currentIndex,
      current:
        record.status !== 'Rejected' && index === currentIndex
    }));
  });

  trackApplication(): void {
    this.searched.set(true);
    this.errorMessage.set('');
    this.application.set(null);

    const id = this.trackingId.trim().toUpperCase();
    const mobile = this.mobile.replace(/\D/g, '');

    if (!id || !mobile) {
      this.errorMessage.set(
        'Please enter your tracking ID and registered mobile number.'
      );
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      this.errorMessage.set(
        'Please enter a valid 10-digit mobile number.'
      );
      return;
    }

    const record = this.applications.find(
      item =>
        item.trackingId.toUpperCase() === id &&
        item.mobile === mobile
    );

    if (!record) {
      this.errorMessage.set(
        'No application found with these details. Please check your tracking ID and registered mobile number.'
      );
      return;
    }

    this.application.set(record);
  }

  resetSearch(): void {
    this.trackingId = '';
    this.mobile = '';
    this.application.set(null);
    this.errorMessage.set('');
    this.searched.set(false);
  }

  getStatusClass(status: ApplicationStatus): string {
    switch (status) {
      case 'Submitted':
        return 'status-submitted';
      case 'Under Review':
        return 'status-review';
      case 'Verification':
        return 'status-verification';
      case 'Approved':
        return 'status-approved';
      case 'Rejected':
        return 'status-rejected';
    }
  }
}
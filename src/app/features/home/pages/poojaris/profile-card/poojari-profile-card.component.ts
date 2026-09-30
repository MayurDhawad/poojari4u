import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';

import { Poojari } from '../../../../../models/poojari.model';

@Component({
  selector: 'app-poojari-profile-card',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './poojari-profile-card.component.html',
  styleUrls: ['./poojari-profile-card.component.scss']
})
export class PoojariProfileCardComponent {

  defaultVidhiSteps = [
    'Ganapati Pooja & Punyahavachanam',
    'Vastu Pooja & Navagraha Aradhana',
    'Kshira Abhishekam & Havan',
    'Purnaahuti & Mahamangal Arati'
  ];

  defaultSamagriText =
    'Head Purohit supplies essential Havya Samagri, Peetam cloth, Kumkum, Turmeric, Havan sticks, and Akshata. Fresh flowers and fruits to be arranged by host.';

  defaultAddons = [
    {
      id: 'a1',
      title: 'Bajanthri / Live Nadaswaram & Thavil Team',
      description:
        'Traditional 4-member authentic musical troupe for auspicious ambience',
      price: 7500
    }
  ];

  selectedAddons: string[] = [];
  totalPrice = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public poojari: Poojari,

    private dialogRef: MatDialogRef<PoojariProfileCardComponent>
  ) {
    this.calculateTotal();
  }

  toggleAddon(addonId: string): void {

    const index = this.selectedAddons.indexOf(addonId);

    if (index > -1) {
      this.selectedAddons.splice(index, 1);
    } else {
      this.selectedAddons.push(addonId);
    }

    this.calculateTotal();
  }

  isAddonSelected(addonId: string): boolean {
    return this.selectedAddons.includes(addonId);
  }

  calculateTotal(): void {

    const addons = this.poojari.addons?.length
      ? this.poojari.addons
      : this.defaultAddons;

    const addonSum = addons
      .filter(addon => this.selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);

    this.totalPrice = this.poojari.ceremonyFee + addonSum;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onProceed(): void {

    this.dialogRef.close({
      poojari: this.poojari,
      selectedAddons: this.selectedAddons,
      totalPrice: this.totalPrice
    });

  }
}
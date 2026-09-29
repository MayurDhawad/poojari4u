import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Poojari } from '../../../../../models/poojari.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poojari-profile-card',
  imports: [CommonModule],
  templateUrl: './poojari-profile-card.component.html',
  styleUrls: ['./poojari-profile-card.component.scss']
})
export class PoojariProfileCardComponent implements OnInit {

    defaultVidhiSteps = [
    'Ganapati Pooja & Punyahavachanam',
    'Vastu Pooja & Navagraha Aradhana',
    'Kshira Abhishekam & Havan',
    'Purnaahuti & Mahamangal Arati'
  ];

  defaultSamagriText = 'Head Purohit supplies essential Havya Samagri, Peetam cloth, Kumkum, Turmeric, Havan sticks, and Akshata. Fresh flowers and fruits to be arranged by host.';

  defaultAddons = [
    {
      id: 'a1',
      title: 'Bajanthri / Live Nadaswaram & Thavil Team',
      description: 'Traditional 4-member authentic musical troupe for auspicious ambience',
      price: 7500
    }
  ];

  @Input() poojari: Poojari | null = null;
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() proceedToReserve = new EventEmitter<{ poojari: Poojari; selectedAddons: string[]; totalPrice: number }>();

  selectedAddons: string[] = [];
  totalPrice: number = 0;

  constructor() { }

  ngOnInit() {
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['poojari'] && this.poojari) {
      this.selectedAddons = [];
      this.calculateTotal();
    }
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
    if (!this.poojari) return;
    
    let addonSum = 0;
    if (this.poojari.addons) {
      this.poojari.addons.forEach(addon => {
        if (this.selectedAddons.includes(addon.id)) {
          addonSum += addon.price;
        }
      });
    }
    this.totalPrice = this.poojari.ceremonyFee + addonSum;
  }

  onClose(): void {
    this.close.emit();
  }

  onProceed(): void {
    if (this.poojari) {
      this.proceedToReserve.emit({
        poojari: this.poojari,
        selectedAddons: this.selectedAddons,
        totalPrice: this.totalPrice
      });
    }
  }
}

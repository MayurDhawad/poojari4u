import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poojari } from '../../../../../models/poojari.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poojari-profile-card',
  imports: [CommonModule],
  templateUrl: './poojari-profile-card.component.html',
  styleUrls: ['./poojari-profile-card.component.scss']
})
export class PoojariProfileCardComponent implements OnInit {

  @Input({ required: false }) poojari!: Poojari;
  @Input() selectedCeremony: string = 'Griha Pravesham (Housewarming)';
  @Output() onSelect = new EventEmitter<Poojari>();

  constructor() { }

  ngOnInit() {
  }

  // getPrice(): number {
  //   return this.poojari.ceremonyPrices[this.selectedCeremony] || 5000;
  // }

}

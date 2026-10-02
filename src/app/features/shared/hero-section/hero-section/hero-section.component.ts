import { Component, Input, OnInit } from '@angular/core';
import { SearchBox } from '../../search-box/search-box';
import { CommonModule } from '@angular/common';

export interface HeroData {
  eyebrowIcon?: string;
  eyebrowText?: string;
  titleLine1?: string;
  titleHighlight?: string;
  description?: string;
  features?: HeroFeature[];
  slides?: HeroSlide[];
}
export interface HeroFeature {
  iconClass: string;
  label: string;
}
export interface HeroSlide {
  id: number;
  image: string;
  name: string;
}
@Component({
  selector: 'app-hero-section',
   standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  imports: [CommonModule, SearchBox]
})

export class HeroSectionComponent implements OnInit {
  // Input configuration properties with fallback defaults
  @Input() heroData: HeroData[] = [];
  @Input() features: HeroFeature[] = [];
  @Input() slides: HeroSlide[] = [];

  constructor() { }

  ngOnInit() {
    this.startAutoPlay();
  }

  activeIndex: number = 0;
  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;

  setActive(index: number): void {
    this.activeIndex = index;
  }

  getSlideClass(index: number): string {
    if (!this.slides || this.slides.length === 0) return 'hidden';
    
    const total = this.slides.length;
    if (index === this.activeIndex) return 'active';
    if (index === (this.activeIndex - 1 + total) % total) return 'prev';
    if (index === (this.activeIndex + 1) % total) return 'next';
    
    return 'hidden';
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 2000);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

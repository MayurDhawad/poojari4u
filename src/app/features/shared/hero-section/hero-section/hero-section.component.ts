import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBox, showSection } from '../../search-box/search-box';
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
  imports: [CommonModule,SearchBox],
})

export class HeroSectionComponent implements OnInit, OnDestroy {

  @Input() heroData: HeroData = {};
  @Input() showSection: showSection = {};
  @Input() features: HeroFeature[] = [];
  @Input() slides: HeroSlide[] = [];

  activeIndex = 0;
  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  setActive(index: number): void {
    if (!this.slides.length) {
      return;
    }

    this.activeIndex = index;
    this.stopAutoPlay();
  }

  getSlideClass(index: number): string {
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
    if (this.autoPlayInterval !== null) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

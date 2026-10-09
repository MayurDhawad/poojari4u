import { Component,Input,OnInit,OnDestroy, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['slides']) {
      this.activeIndex = 0;
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  getSlideClass(index: number): string {
    const total = this.slides.length;

    if (total === 0) return 'hidden';
    if (index === this.activeIndex) return 'active';
    if (index === (this.activeIndex - 1 + total) % total) return 'prev';
    if (index === (this.activeIndex + 1) % total) return 'next';

    return 'hidden';
  }

  next(): void {
  if (this.slides.length < 2) return;

  this.activeIndex = (this.activeIndex + 1) % this.slides.length;
}

  setActive(index: number): void {
    if (index < 0 || index >= this.slides.length) return;
    this.activeIndex = index;
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();

    if (this.slides.length < 2) {
      return;
    }

    this.autoPlayInterval = setInterval(() => {
      this.activeIndex =
        (this.activeIndex + 1) % this.slides.length;
    }, 2000);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval !== null) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, DOCUMENT, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class AboutUsComponent {

  private document = inject(DOCUMENT);

  imageUrl = new URL('poojaris/poojari-hero-1.png', this.document.baseURI).href;

   services: ServiceItem[] = [
    {
      icon: '🙏',
      title: 'Experienced Poojaris',
      description:
        'Connect with knowledgeable and experienced priests for your religious ceremonies, rituals, and special occasions.'
    },
    {
      icon: '🎶',
      title: 'Bajanthri Teams',
      description:
        'Bring your celebrations to life with traditional music and experienced Bajanthri teams for auspicious occasions.'
    },
    {
      icon: '🪔',
      title: 'Pooja Samagri',
      description:
        'Find essential pooja materials and thoughtfully prepared kits for your rituals, festivals, and daily worship.'
    },
    {
      icon: '📅',
      title: 'Convenient Booking',
      description:
        'Discover services, explore your options, and arrange your spiritual needs through one convenient platform.'
    }
  ];

  values = [
    {
      number: '01',
      title: 'Tradition',
      description:
        'Respecting the customs, rituals, and cultural heritage that bring generations together.'
    },
    {
      number: '02',
      title: 'Trust',
      description:
        'Helping families make informed choices with a focus on reliability and transparency.'
    },
    {
      number: '03',
      title: 'Convenience',
      description:
        'Making it easier to find spiritual services and pooja essentials when you need them.'
    }
  ];
}

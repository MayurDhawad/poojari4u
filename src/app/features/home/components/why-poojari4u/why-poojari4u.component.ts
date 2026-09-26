import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-poojari4u',
  templateUrl: './why-poojari4u.component.html',
  styleUrls: ['./why-poojari4u.component.scss']
})
export class WhyPoojari4uComponent {

  features = signal<Feature[]>([
    {
      id: 1,
      icon: '✓',
      title: 'Verified Poojaris',
      description: 'Profiles can be reviewed before booking.'
    },
    {
      id: 2,
      icon: '₹',
      title: 'Transparent Pricing',
      description: 'View service and package pricing clearly.'
    },
    {
      id: 3,
      icon: 'ॐ',
      title: 'Multiple Services',
      description: 'Poojari, Bajanthri, Samagri and packages in one place.'
    },
    {
      id: 4,
      icon: '⭐',
      title: 'Customer Reviews',
      description: 'Share your experience after a completed service.'
    }
  ]);
}

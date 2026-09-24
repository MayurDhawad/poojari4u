import { Component } from '@angular/core';

@Component({
  selector: 'app-service-categories',
  imports: [],
  templateUrl: './service-categories.html',
  styleUrl: './service-categories.scss',
})
export class ServiceCategories {

  categories = [
    {
      id: 'poojaris',
      title: 'Poojaris',
      description: 'Expert & verified poojaris for all ceremonies',
      icon: '🙏',
    },
    {
      id: 'bajanthri',
      title: 'Bajanthri',
      description: 'Traditional music teams for your celebrations',
      icon: '🎵',
    },
    {
      id: 'samagri',
      title: 'Puja Samagri',
      description: 'Complete puja kits and individual items',
      icon: '🪔',
    },
    {
      id: 'packages',
      title: 'Packages',
      description: 'Curated packages for weddings, griha pravesh & more',
      icon: '🎁',
    },
  ];
}
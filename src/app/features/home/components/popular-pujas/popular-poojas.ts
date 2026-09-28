import { Component, signal } from '@angular/core';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl: string;
}

@Component({
  selector: 'app-popular-poojas',
  imports: [],
  templateUrl: './popular-poojas.html',
  styleUrl: './popular-poojas.scss',
})
export class PopularPoojas {

  services = signal<ServiceItem[]>([
    {
      id: 1,
      title: 'Poojaris',
      description: 'Griha Pravesh, Satyanarayana, Homam, Wedding & more',
      imageUrl: 'home/poojari.png',
      linkUrl: '#'
    },
    {
      id: 2,
      title: 'Bajanthri',
      description: 'Nadaswaram, Thavil, Dolu, Dappu & Traditional Teams',
      imageUrl: 'home/bajanthri.png',
      linkUrl: '#'
    },
    {
      id: 3,
      title: 'Pooja Samagri',
      description: 'Pooja kits and materials for all Poojas and festivals',
      imageUrl: 'home/pooja-samagri.png',
      linkUrl: '#'
    },
    {
      id: 4,
      title: 'Packages',
      description: 'Griha Pravesh, Wedding, Homam & Festival Packages',
      imageUrl: 'home/packages.png',
      linkUrl: '#'
    }
  ]);
}
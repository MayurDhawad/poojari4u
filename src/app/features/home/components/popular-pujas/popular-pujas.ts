import { Component, signal } from '@angular/core';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  linkUrl: string;
}

@Component({
  selector: 'app-popular-pujas',
  imports: [],
  templateUrl: './popular-pujas.html',
  styleUrl: './popular-pujas.scss',
})
export class PopularPujas {

  services = signal<ServiceItem[]>([
    {
      id: 1,
      title: 'Poojaris',
      description: 'Griha Pravesh, Satyanarayana, Homam, Wedding & more',
      imageUrl: 'poojaris/poojari-4.jpg',
      linkUrl: '#'
    },
    {
      id: 2,
      title: 'Bajanthri',
      description: 'Nadaswaram, Thavil, Dolu, Dappu & Traditional Teams',
      imageUrl: 'pooja-samagri/samagri-ganesh.jpg',
      linkUrl: '#'
    },
    {
      id: 3,
      title: 'Puja Samagri',
      description: 'Kits for all pujas & festivals',
      imageUrl: 'pooja-samagri/samagri-havan.jpg',
      linkUrl: '#'
    },
    {
      id: 4,
      title: 'Packages',
      description: 'Griha Pravesh, Wedding, Homam & Festival Packages',
      imageUrl: 'package/package-wedding.jpg',
      linkUrl: '#'
    }
  ]);
}
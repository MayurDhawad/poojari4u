import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-pujas',
  imports: [],
  templateUrl: './popular-pujas.html',
  styleUrl: './popular-pujas.scss',
})
export class PopularPujas {

  pujas = [
    {
      id: 1,
      name: 'Gruhapravesham',
      description: 'Traditional house warming puja',
      icon: '🏠',
    },
    {
      id: 2,
      name: 'Satyanarayana Swamy Puja',
      description: 'For prosperity and blessings',
      icon: '🪔',
    },
    {
      id: 3,
      name: 'Ganapathi Puja',
      description: 'Remove obstacles and seek blessings',
      icon: '🙏',
    },
    {
      id: 4,
      name: 'Homam',
      description: 'Sacred fire rituals',
      icon: '🔥',
    },
  ];
}
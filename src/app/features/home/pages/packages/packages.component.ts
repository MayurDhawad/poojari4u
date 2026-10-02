import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroData, HeroFeature, HeroSectionComponent, HeroSlide } from '../../../shared/hero-section/hero-section/hero-section.component';
interface PackageItem {
  name: string;
  icon: string;
}
interface PoojaPackage {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  duration: string;
  popular: boolean;
  category: string;
  items: PackageItem[];
}
interface Slide {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-packages',
  standalone: true,
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss',
  imports: [CommonModule, RouterLink, HeroSectionComponent],
})
export class PackagesComponent {

  heroData: HeroData[] = [
    {
      eyebrowIcon: 'bi-flower1',
      eyebrowText: 'PUJA PACKAGES',
      titleLine1: 'Everything You Need for Your',
      titleHighlight: 'Special Puja',
      description: 'Choose from thoughtfully designed puja packages that include experienced Poojaris, essential rituals and Samagri.'
    }
  ];
  
  features: HeroFeature[] = [
    { iconClass: '', label: '' },
    { iconClass: '', label: '' },
    { iconClass: '', label: '' }
  ];
  
  slides: HeroSlide[] = [
    { id: 1, name: 'Pt. Ram Naresh', image: 'package/package-griha-pravesh.jpg' },
    { id: 2, name: 'Saanvi Sharma', image: 'package/package-vastu.jpg' },
    { id: 3, name: 'Acharya Prem', image: 'package/package-wedding.jpg' },
  ];

  selectedCategory = 'All';

  categories = [
    'All',
    'Home Puja',
    'Festivals',
    'Griha Pravesh',
    'Special Occasions'
  ];

  packages: PoojaPackage[] = [

    {
      id: 1,
      name: 'Griha Pravesh Package',
      subtitle: 'Auspicious beginning for your new home',
      description:
        'Complete Griha Pravesh rituals performed according to traditional Vedic practices.',
      image: 'package/package-griha-pravesh.jpg',
      price: 3501,
      oldPrice: 4501,
      duration: '3 - 4 Hours',
      popular: true,
      category: 'Griha Pravesh',

      items: [
        {
          name: 'Griha Pravesh Puja',
          icon: 'bi-house-heart'
        },
        {
          name: 'Ganesh Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Vastu Shanti',
          icon: 'bi-compass'
        },
        {
          name: 'Havan',
          icon: 'bi-fire'
        },
        {
          name: 'Puja Samagri',
          icon: 'bi-basket'
        }
      ]
    },


    {
      id: 2,
      name: 'Satyanarayan Puja Package',
      subtitle: 'Peace, prosperity and blessings',
      description:
        'A complete Satyanarayan Puja package with experienced Poojari and essential Samagri.',
      image: 'package/package-satyanarayan.jpg',
      price: 2501,
      oldPrice: 3201,
      duration: '2 - 3 Hours',
      popular: false,
      category: 'Home Puja',

      items: [
        {
          name: 'Satyanarayan Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Ganesh Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Katha',
          icon: 'bi-book'
        },
        {
          name: 'Puja Samagri',
          icon: 'bi-basket'
        }
      ]
    },


    {
      id: 3,
      name: 'Ganesh Puja Package',
      subtitle: 'Invite wisdom and prosperity',
      description:
        'Traditional Ganesh Puja performed by a verified Poojari with all essential rituals.',
      image: 'package/package-ganesh.jpg',
      price: 1801,
      oldPrice: 2201,
      duration: '1.5 - 2 Hours',
      popular: false,
      category: 'Festivals',

      items: [
        {
          name: 'Ganesh Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Ganesh Atharvashirsha',
          icon: 'bi-book'
        },
        {
          name: 'Aarti',
          icon: 'bi-lamp'
        },
        {
          name: 'Basic Samagri',
          icon: 'bi-basket'
        }
      ]
    },


    {
      id: 4,
      name: 'Vastu Shanti Package',
      subtitle: 'Bring harmony to your home',
      description:
        'Traditional Vastu Shanti rituals designed to create a positive and harmonious environment.',
      image: 'package/package-vastu.jpg',
      price: 4501,
      oldPrice: 5501,
      duration: '3 - 4 Hours',
      popular: false,
      category: 'Home Puja',

      items: [
        {
          name: 'Vastu Puja',
          icon: 'bi-compass'
        },
        {
          name: 'Ganesh Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Navagraha Puja',
          icon: 'bi-stars'
        },
        {
          name: 'Havan',
          icon: 'bi-fire'
        },
        {
          name: 'Complete Samagri',
          icon: 'bi-basket'
        }
      ]
    },


    {
      id: 5,
      name: 'Wedding Puja Package',
      subtitle: 'Sacred rituals for your special day',
      description:
        'Traditional wedding rituals conducted by experienced Vedic Poojaris.',
      image: 'package/package-wedding.jpg',
      price: 7501,
      oldPrice: 9001,
      duration: '5 - 6 Hours',
      popular: false,
      category: 'Special Occasions',

      items: [
        {
          name: 'Ganesh Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Vivah Puja',
          icon: 'bi-heart'
        },
        {
          name: 'Mangalashtak',
          icon: 'bi-music-note-beamed'
        },
        {
          name: 'Havan',
          icon: 'bi-fire'
        },
        {
          name: 'Puja Samagri',
          icon: 'bi-basket'
        }
      ]
    },


    {
      id: 6,
      name: 'Festival Puja Package',
      subtitle: 'Celebrate traditions with devotion',
      description:
        'A convenient package for performing traditional festival rituals at home.',
      image: 'package/package-festival.jpg',
      price: 2101,
      oldPrice: 2801,
      duration: '2 - 3 Hours',
      popular: false,
      category: 'Festivals',

      items: [
        {
          name: 'Festival Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Ganesh Puja',
          icon: 'bi-flower1'
        },
        {
          name: 'Aarti',
          icon: 'bi-lamp'
        },
        {
          name: 'Puja Samagri',
          icon: 'bi-basket'
        }
      ]
    }

  ];


  get filteredPackages(): PoojaPackage[] {

    if (this.selectedCategory === 'All') {
      return this.packages;
    }

    return this.packages.filter(
      pkg => pkg.category === this.selectedCategory
    );
  }


  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
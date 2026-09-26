import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';

interface SamagriItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
  unit: string;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

@Component({
  selector: 'app-pooja-samagri',
  standalone: true,
  imports: [CommonModule, FormsModule, Header],
  templateUrl: './pooja-samagri.component.html',
  styleUrl: './pooja-samagri.component.scss'
})
export class PoojaSamagriComponent {

  searchText = '';
  selectedCategory = 'All';
  sortBy = 'popular';

  categories = [
    'All',
    'Puja Kits',
    'Samagri',
    'Diyas & Lamps',
    'Incense',
    'Flowers & Leaves',
    'Puja Accessories'
  ];

  items: SamagriItem[] = [
    {
      id: 1,
      name: 'Satyanarayan Puja Kit',
      category: 'Puja Kits',
      description: 'Complete samagri kit for Satyanarayan Swamy Puja.',
      price: 499,
      oldPrice: 599,
      unit: '1 Complete Kit',
      image: 'pooja-samagri/samagri-satyanarayan.jpg',
      rating: 4.8,
      reviews: 126,
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'Ganesh Puja Kit',
      category: 'Puja Kits',
      description: 'Essential items required for Ganesh Puja.',
      price: 349,
      oldPrice: 425,
      unit: '1 Complete Kit',
      image: 'pooja-samagri/samagri-ganesh.jpg',
      rating: 4.7,
      reviews: 98,
      badge: 'Bestseller'
    },
    {
      id: 3,
      name: 'Havan Samagri',
      category: 'Samagri',
      description: 'Traditional herbal havan samagri for homam and havan.',
      price: 299,
      unit: '500 gm',
      image: 'pooja-samagri/samagri-havan.jpg',
      rating: 4.8,
      reviews: 84,
      badge: 'Natural'
    },
    {
      id: 4,
      name: 'Puja Flowers',
      category: 'Flowers & Leaves',
      description: 'Fresh flowers selected for daily puja and rituals.',
      price: 149,
      unit: '1 Puja Pack',
      image: 'pooja-samagri/samagri-flowers.jpg',
      rating: 4.6,
      reviews: 72
    },
    {
      id: 5,
      name: 'Brass Diya Set',
      category: 'Diyas & Lamps',
      description: 'Traditional brass diyas suitable for daily puja.',
      price: 399,
      oldPrice: 499,
      unit: 'Set of 2',
      image: 'pooja-samagri/samagri-diya.jpg',
      rating: 4.9,
      reviews: 145,
      badge: 'Popular'
    },
    {
      id: 6,
      name: 'Camphor Tablets',
      category: 'Samagri',
      description: 'Pure camphor tablets for aarti and daily worship.',
      price: 99,
      unit: '100 gm',
      image: 'pooja-samagri/samagri-camphor.jpg',
      rating: 4.7,
      reviews: 64
    },
    {
      id: 7,
      name: 'Premium Incense Sticks',
      category: 'Incense',
      description: 'Fragrant incense sticks for puja and meditation.',
      price: 129,
      oldPrice: 159,
      unit: 'Pack of 5',
      image: 'pooja-samagri/samagri-incense.jpg',
      rating: 4.6,
      reviews: 91,
      badge: 'Value Pack'
    },
    {
      id: 8,
      name: 'Puja Thali Set',
      category: 'Puja Accessories',
      description: 'Elegant traditional thali set for puja ceremonies.',
      price: 699,
      oldPrice: 799,
      unit: '1 Complete Set',
      image: 'pooja-samagri/samagri-thali.jpg',
      rating: 4.9,
      reviews: 118,
      badge: 'Premium'
    },
    {
      id: 9,
      name: 'Turmeric & Kumkum Set',
      category: 'Samagri',
      description: 'Haldi and kumkum essentials for traditional rituals.',
      price: 79,
      unit: '1 Set',
      image: 'pooja-samagri/samagri-kumkum.jpg',
      rating: 4.7,
      reviews: 53
    }
  ];

  get filteredItems(): SamagriItem[] {
    let result = this.items.filter(item => {

      const matchesCategory =
        this.selectedCategory === 'All' ||
        item.category === this.selectedCategory;

      const search = this.searchText.trim().toLowerCase();

      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });

    if (this.sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (this.sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (this.sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  addToCart(item: SamagriItem): void {
    console.log('Added to cart:', item);
  }
}
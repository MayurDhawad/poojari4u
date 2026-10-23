import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface PujaService {
  id: number;
  name: string;
  category: string;
  duration: string;
  price: number;
  description: string;
  isActive: boolean;
  image: string;
}
@Component({
  selector: 'app-my-services',
  standalone: true,
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class MyServicesComponent {

  services = signal<PujaService[]>([
    {
      id: 1,
      name: 'Satyanarayan Puja',
      category: 'Havan & Puja',
      duration: '2 Hours',
      price: 2100,
      description: 'Complete ritual including Katha, Aarti, and Prasad distribution.',
      isActive: true,
      image: 'assets/images/satyanarayan.jpg'
    },
    {
      id: 2,
      name: 'Griha Pravesh Puja',
      category: 'House Warming',
      duration: '3 Hours',
      price: 3100,
      description: 'Vashikaran, Vastu Shanti, and Hawan for a new home.',
      isActive: true,
      image: 'assets/images/grihapravesh.jpg'
    },
    {
      id: 3,
      name: 'Maha Mrunjay Jaap',
      category: 'Jaap & Path',
      duration: '4 Hours',
      price: 5100,
      description: 'Powerful Vedic mantra chanting for health and longevity.',
      isActive: false,
      image: 'assets/images/mritunjaya.jpg'
    }
  ]);

  showAddModal = signal<boolean>(false);
  
  newService = signal<Omit<PujaService, 'id'>>({
    name: '',
    category: '',
    duration: '',
    price: 0,
    description: '',
    isActive: true,
    image: ''
  });

  toggleServiceStatus(id: number) {
    this.services.update(list =>
      list.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s)
    );
  }

  deleteService(id: number) {
    this.services.update(list => list.filter(s => s.id !== id));
  }

  openAddModal() {
    this.showAddModal.set(true);
  }

  closeAddModal() {
    this.showAddModal.set(false);
  }

  saveService() {
    const serviceData = this.newService();
    if (!serviceData.name.trim()) return;

    const newItem: PujaService = {
      ...serviceData,
      id: Date.now()
    };

    this.services.update(list => [newItem, ...list]);
    this.closeAddModal();
    
    // Reset form
    this.newService.set({
      name: '',
      category: '',
      duration: '',
      price: 0,
      description: '',
      isActive: true,
      image: ''
    });
  }
}

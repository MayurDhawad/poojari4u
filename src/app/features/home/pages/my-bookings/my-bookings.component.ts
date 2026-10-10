import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfimBookingComponent } from './confim-booking/confim-booking.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PoojaSamagriService } from '../../../../services/pooja-samagri.service';

interface SamagriKitItem {
  id: number;
  name: string;
}

interface SamagriKit {
  id: string;
  name: string;
  description: string;
  price: number;
  items: SamagriKitItem[];
  badge: string;
}

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss',
  imports: [CommonModule],
})
export class MyBookingsComponent implements OnInit{

  @Output() onChangePoojari = new EventEmitter<void>();
  @Output() onProceed = new EventEmitter<void>();

  type: string | null = '';
  selectedSamagriKit = 'premium';
  grandTotal = 0;

  constructor(
    public dialog : MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private PoojaSamagriService: PoojaSamagriService
  ){}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.type = params.get('type');
      console.log('type:', this.type);
    });


    this.samagriKits = this.samagriKits.map(kit => {
      const serviceItems = this.PoojaSamagriService.getItems(kit.id);

      return {
        ...kit,
        items: [
          ...kit.items,
          ...serviceItems.map(item => ({
            id: Number(item.id),
            name: `${item.name} (₹${item.price} × ${item.quantity})`
          }))
        ]
      };
    });

    this.calculateGrandTotal();
  }

  samagriKits: SamagriKit[] = [
    {
      id: 'self',
      name: 'I will arrange Samagri',
      description: 'Customer independently procures all ingredients & items.',
      price: 0,
      items: [],
      badge: ''
    },
    {
      id: 'essential',
      name: 'Essential Samagri Kit',
      description: '',
      price: 1800,
      items: [
        {id: 4, name:'Puja Flowers'},
        {id: 5, name:'Brass Diya Set'},
        {id: 6, name:'Camphor Tablets'}
      ],
      badge: 'Standard'
    },
    {
      id: 'premium',
      name: 'Premium Organic Kit',
      description: '',
      price: 3200,
      items: [
        {id: 7, name:'Premium Incense Sticks'},
        {id: 8, name:'Pooja Thali Set'},
        {id: 9, name:'Turmeric & Kumkum Set'}
      ],
      badge: 'All-Inclusive'
    }
  ];

  calculateGrandTotal(): void { 
    const selectedKit = this.samagriKits.find( kit => kit.id === this.selectedSamagriKit );
    const kitPrice = selectedKit?.price ?? 0; 
    const addedItems = this.PoojaSamagriService.getItems( this.selectedSamagriKit ); 
    const additionalItemsTotal = addedItems.reduce( (total, item) => total + item.price * item.quantity, 0 ); this.grandTotal = kitPrice + additionalItemsTotal; 
  }

  handleChangePoojari(): void {
    this.onChangePoojari.emit();
  }

  addItems(kitId: string){
    this.PoojaSamagriService.setSelectedKit(kitId)
    this.router.navigateByUrl('/pooja-samagri')
  }

  handleProceed(): void {
    this.router.navigateByUrl('/payment')
  }
}
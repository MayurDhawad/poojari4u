import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SamagriItem { 
  id?: number; 
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
  quantity: number; 
}

@Injectable({
  providedIn: 'root'
})
export class PoojaSamagriService {

  private selectedKitId = 'premium';

  private kitItems: Record<string, SamagriItem[]> = {
    self: [],
    essential: [],
    premium: []
  };

  private itemsSubject = new BehaviorSubject<{
    kitId: string;
    items: SamagriItem[];
  }>({
    kitId: this.selectedKitId,
    items: []
  });

  items$ = this.itemsSubject.asObservable();

  setSelectedKit(kitId: string): void {
    this.selectedKitId = kitId;
  }

  getSelectedKit(): string {
    return this.selectedKitId;
  }

  getItems(kitId: string): SamagriItem[] {
    return [...(this.kitItems[kitId] ?? [])];
  }

  addItem(item: SamagriItem): void {
    const items = this.kitItems[this.selectedKitId] ?? [];
    const existing = items.find(i => i.id === item.id);

    if (existing) {
      existing.quantity += item.quantity;
    } else {
      items.push({ ...item });
    }

    this.kitItems[this.selectedKitId] = [...items];

    this.itemsSubject.next({
      kitId: this.selectedKitId,
      items: [...this.kitItems[this.selectedKitId]]
    });
  }
}

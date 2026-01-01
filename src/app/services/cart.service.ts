import { Injectable } from '@angular/core';
import { Itinerary } from '../models/itinerary.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private key = 'cart';

  getCart(): Itinerary[] {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  addToCart(item: Itinerary) {
    const cart = this.getCart();
    cart.push(item);
    localStorage.setItem(this.key, JSON.stringify(cart));
  }

  removeFromCart(id: number) {
    const cart = this.getCart().filter(i => i.id !== id);
    localStorage.setItem(this.key, JSON.stringify(cart));
  }

  getTotal(): number {
    return this.getCart().reduce((sum, i) => sum + i.totalCost, 0);
  }
}

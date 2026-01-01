import { Component, Input } from '@angular/core';
import { Itinerary } from '../../models/itinerary.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-itinerary-card',
  standalone: true,
  templateUrl: './itinerary-card.component.html'
})
export class ItineraryCardComponent {

  @Input() itinerary!: Itinerary;
  showMessage = false;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.itinerary);
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
}

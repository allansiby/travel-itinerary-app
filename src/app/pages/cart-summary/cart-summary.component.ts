import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html'
})
export class CartSummaryComponent {
  constructor(public cartService: CartService) {}
}

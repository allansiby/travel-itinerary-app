import { Routes } from '@angular/router';
import { ItineraryHomeComponent } from './pages/itinerary-home/itinerary-home.component';
import { CartSummaryComponent } from './pages/cart-summary/cart-summary.component';

export const routes: Routes = [
  { path: '', component: ItineraryHomeComponent },
  { path: 'cart', component: CartSummaryComponent }
];

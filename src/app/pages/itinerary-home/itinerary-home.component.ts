import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItineraryService } from '../../services/itinerary.service';
import { Itinerary } from '../../models/itinerary.model';

// 🔴 IMPORT CHILD COMPONENTS
import { DestinationDropdownComponent } from '../../components/destination-dropdown/destination-dropdown.component';
import { ItineraryCardComponent } from '../../components/itinerary-card/itinerary-card.component';

@Component({
  selector: 'app-itinerary-home',
  standalone: true,
  imports: [
    CommonModule,
    DestinationDropdownComponent,
    ItineraryCardComponent
  ],
  templateUrl: './itinerary-home.component.html'
})
export class ItineraryHomeComponent implements OnInit {

  destinations: string[] = [];
  itineraries: Itinerary[] = [];

  constructor(private itineraryService: ItineraryService) {}

  ngOnInit(): void {
    this.destinations = this.itineraryService.getDestinations();
  }

  onDestinationSelect(country: string): void {
    this.itineraries = this.itineraryService.getItinerariesByCountry(country);
  }
}

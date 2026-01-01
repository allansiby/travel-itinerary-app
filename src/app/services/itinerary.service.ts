import { Injectable } from '@angular/core';
import { Itinerary } from '../models/itinerary.model';

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  private itineraries: Itinerary[] = [
    {
      id: 1,
      country: 'India',
      place: 'Goa',
      food: 'Both',
      activities: ['Beach', 'Water Sports'],
      hotelType: 'Resort',
      nights: 3,
      flightCost: 6000,
      totalCost: 25000
    },
    {
      id: 2,
      country: 'India',
      place: 'Manali',
      food: 'Veg',
      activities: ['Trekking', 'Snow Activities'],
      hotelType: 'Hill Resort',
      nights: 4,
      flightCost: 7000,
      totalCost: 30000
    },
    {
      id: 3,
      country: 'UAE',
      place: 'Dubai',
      food: 'Non-Veg',
      activities: ['Desert Safari', 'Shopping'],
      hotelType: 'Luxury Hotel',
      nights: 4,
      flightCost: 20000,
      totalCost: 85000
    }
  ];

  getDestinations(): string[] {
    return [...new Set(this.itineraries.map(i => i.country))];
  }

  getItinerariesByCountry(country: string): Itinerary[] {
    return this.itineraries.filter(i => i.country === country);
  }
}

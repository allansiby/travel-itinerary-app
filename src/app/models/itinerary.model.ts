export interface Itinerary {
  id: number;
  country: string;
  place: string;
  food: string;
  activities: string[];
  hotelType: string;
  nights: number;
  flightCost: number;
  totalCost: number;
}

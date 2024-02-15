import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacedAuthService {
  isPlaced = false;
  constructor() { }

  setPlacedOrder() {
    this.isPlaced = true;
  }

  isPlacedOrder(): boolean {
    return this.isPlaced;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlacedAuthService } from '../../../orders/services/placed-auth.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private placedService: PlacedAuthService) { }

  isPlaced() {
    return this.placedService.isPlacedOrder();
  }
}

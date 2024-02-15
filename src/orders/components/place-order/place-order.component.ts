import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { Order } from '../../models/order';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PlacedAuthService } from '../../services/placed-auth.service';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {

  constructor(private http: HttpClient, private router: Router, private placeservice: PlacedAuthService) { }
  addOrder() {
    let items = [new Item("3", "Pizza", 100, 1)];
    let order = new Order(2, "Paul", "29th March 2022", 1, 100, items);

    this.http.post('http://localhost:3000/orders', order).subscribe(data => {
      console.log(data);
    });
    this.placeservice.setPlacedOrder();
    this.router.navigate(['/home'])
  }

}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ViewOrderInfoComponent } from '../view-order-info/view-order-info.component';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, RouterOutlet, ViewOrderInfoComponent],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent {

  allOrders: any
  order: any
  constructor(private Http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.Http.get('http://localhost:3000/orders').subscribe((data: any) => { this.allOrders = (data) });
  }

  getOrderInfo(id: string) {
    this.Http.get('http://localhost:3000/orders/' + id).subscribe((data: any) => { this.order = (data) });
    this.router.navigate(['/viewOrderInfo', id])
  }


}

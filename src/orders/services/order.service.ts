import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: any
  items: any
  order: any
  item: any

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any[]> {
    this.http.get<any[]>('http://localhost:3000/items').subscribe(data => this.orders = data);
    return this.orders;
  }

  getOrderById(id: string) {
    this.http.get('http://localhost:3000/orders/' + id).subscribe(data => this.order = data)
    return this.order;
  }

  addOrder(order: Order) {
    this.http.post('http://localhost:3000/orders', order).subscribe(data => this.order = data)
    return this.order;
  }

  //   1. Write OrderService Class under services in folder structure defined above.
  // 2. Create a method to getOrders. This method should return the orders from the JSON 
  // Server
  // 3. This method should return a collection or orders with the Order and Item model 
  // defined.
  // 4. Methods should have proper standards with scope, return type and arguments if 
  // needed with a good signature.
}

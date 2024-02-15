import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { OrderService } from '../../services/order.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ViewOrdersComponent, HttpClientModule],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {
  id: string | null = null
  order: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http.get('http://localhost:3000/orders/' + this.id).subscribe((data: any) => { this.order = (data) });
  }
}

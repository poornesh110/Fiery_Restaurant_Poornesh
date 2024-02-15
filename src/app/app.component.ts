import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewOrderInfoComponent } from '../orders/components/view-order-info/view-order-info.component';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MenuComponent, ViewOrdersComponent,
    PlaceOrderComponent, HomepageComponent, ViewOrderInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fiery_Restaurant';
}

import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewOrdersComponent } from '../orders/components/view-orders/view-orders.component';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./components/homepage/homepage.component').then((home) => home.HomepageComponent)
    },
    {
        path: 'viewOrderInfo/:id', loadComponent: () => import('../orders/components/view-order-info/view-order-info.component').then((vieworder) => vieworder.ViewOrderInfoComponent)
    },
    {
        path: 'home', loadComponent: () => import('./components/homepage/homepage.component').then((home) => home.HomepageComponent)
    },
    {
        path: 'orders', loadComponent: () => import('../orders/components/view-orders/view-orders.component').then((order) => order.ViewOrdersComponent)
    },
    {
        path: 'placeOrder', loadComponent: () => import('../orders/components/place-order/place-order.component').then((placeorder) => placeorder.PlaceOrderComponent)
    }
];

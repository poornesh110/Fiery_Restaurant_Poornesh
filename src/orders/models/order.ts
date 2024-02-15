import { Item } from "./item";

export class Order {
    static id: number = 0;
    orderNumber: number;
    contactName: string;
    OrderDate: string;
    itemsOrdered: number;
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
    items: Item[];


    constructor(orderNumber: number, contactName: string, orderDate: string, itemsOrdered: number, orderTotal: number, items: Item[]) {
        let nextId: number = Order.id + 1;
        Order.id = nextId;
        this.orderNumber = orderNumber;
        this.contactName = contactName;
        this.OrderDate = orderDate;
        this.itemsOrdered = itemsOrdered;
        this.orderTotal = orderTotal;
        this.taxTotal = (orderTotal * 0.12);
        this.grandTotal = Number(orderTotal + this.taxTotal);
        this.items = items;
    }
}

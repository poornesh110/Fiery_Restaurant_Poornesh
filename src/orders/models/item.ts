export class Item {
    id: string;
    itemName: string;
    itemPrice: number;
    itemQuantity: number;
    itemValue: number;

    constructor(id: string, itemName: string, itemPrice: number, itemQuantity: number) {
        this.id = id;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.itemQuantity = itemQuantity;
        this.itemValue = (itemPrice * itemQuantity);
    }
}

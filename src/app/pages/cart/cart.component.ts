import { Component } from "@angular/core";
import { Cart, CartItem } from "../../models/card.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        product: "https://placehold.co/150",
        name: "addidas",
        price: 200,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://placehold.co/150",
        name: "nike",
        price: 120,
        quantity: 3,
        id: 2,
      },
    ],
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  getTotal(items: Array<CartItem>): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}

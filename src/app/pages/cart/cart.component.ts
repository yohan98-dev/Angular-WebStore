import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Snikers",
        price: 150,
        quantity: 3,
        id: 1,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<String> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
}

import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cartItemList: any[];

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItemsList.subscribe((cartItems) => {
      console.log(cartItems);
      this.cartItemList = cartItems;
    });
  }

}

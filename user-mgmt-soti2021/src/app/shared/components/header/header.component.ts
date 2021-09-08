import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header', // element selector
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.scss'] //css
})
export class HeaderComponent implements OnInit {

  cartItemsCount = 0;

  constructor(private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    // subscribe to the cart items
    this.cartDataService.latestCartItemsList.subscribe( (cartItems) => {
      console.log(cartItems);
      this.cartItemsCount = cartItems.length;
    })
  }

}

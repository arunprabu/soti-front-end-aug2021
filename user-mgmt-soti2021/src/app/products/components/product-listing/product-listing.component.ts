import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styles: [
  ]
})
export class ProductListingComponent implements OnInit {

  pdtList: any[] = [{
    id: 1,
    name: 'Apple',
    category: 'Fruits',
    price: '$2.76'
  }, {
    id: 2,
    name: 'Cheese',
    category: 'Dairy',
    price: '$6.38'
  }, {
    id: 3,
    name: 'Orange',
    category: 'Fruits',
    price: '$4.85'
  }, {
    id: 4,
    name: 'Tomato',
    category: 'Vegetables',
    price: '$5.01'
  }, {
    id: 5,
    name: 'Table Cloth',
    category: 'Kitchen Essentials',
    price: '$6.13'
  }];

  constructor( private cartDataService: CartDataService ) { }

  ngOnInit(): void {
  }

  handleAddToCart(pdt: any): void {
    console.log(pdt);
    this.cartDataService.updateCart(pdt);
  }

}

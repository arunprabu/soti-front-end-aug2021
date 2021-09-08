import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1: default cart items in the cart 
  // We will normally load this from REST API 
  // but now I am mocking it with static data
  private defaultCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // in order to make the above data subscribable 
  // We need to create an Observable with the default cart Items 
  // Step 2: Create Behaviour Subject with default item
  private cartItemsList = new BehaviorSubject(this.defaultCartItems);

  // Step 3: Let's make the above as Observable so that any other comp can subscribe to it.
  latestCartItemsList: Observable<any[]> = this.cartItemsList.asObservable();
  // latestCartItemsList is subscribable 

  constructor() { }

  updateCart(pdt: any){
    console.log(pdt);
    
    this.latestCartItemsList.pipe( take(1)).subscribe( (cartItems) => {
      console.log(cartItems); // array 
      console.log(...cartItems); // spread operator
      const newCartItemsArr = [ ...cartItems, pdt]; 
      console.log(newCartItemsArr);
      this.cartItemsList.next(newCartItemsArr);
    });
  }

}

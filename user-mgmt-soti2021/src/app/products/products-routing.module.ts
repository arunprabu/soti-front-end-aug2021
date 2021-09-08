import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

// configuring child routes
const productRoutes: Routes = [
  { path: '', component: ProductListingComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ProductDetailsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)// registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }

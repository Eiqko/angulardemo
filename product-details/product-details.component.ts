import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  pro;
  constructor(private rute: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    this.rute.paramMap.subscribe(x =>{
      this.pro = products[+x.get('productId')];
    })
  }

  addCart(pro){
    this.cart.addKeCart(pro);
    window.alert('Your product has been added to the cart!');
  }

}

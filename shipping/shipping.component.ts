import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
ship;
  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.ship = this.cart.getShipping()
  }


}

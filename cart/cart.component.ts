import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
item;
checkForm;
  constructor(private cart: CartService, private form: FormBuilder) { 
    this.checkForm = this.form.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.item = this.cart.ambilItem();
  }

  submit(data){
    this.item = this.cart.clearCart();
    this.checkForm.reset()

    console.warn('Your oder has been submitted', data)
  }
}

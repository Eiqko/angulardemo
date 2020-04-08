import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
 isi = [];

 addKeCart(product){
   this.isi.push(product);
 }

 ambilItem(){
   return this.isi;
 }

 clearCart(){
   this.isi = [];
   return this.isi;
 }
  constructor(private http: HttpClient) { }

  getShipping(){
    return this.http.get('/assets/shipping.json')
  }
}

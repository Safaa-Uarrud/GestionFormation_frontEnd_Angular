import { Component, OnInit } from '@angular/core';
import {CartService} from '../beneficiaire.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Cart} from '../beneficiaire';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Observable<Cart[]>;
  constructor(private cartService: CartService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.cart = this.cartService.getCartList();
  }
  deleteCart(idCart: number) {
    this.cartService.deleteCart(idCart)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  inscrireCart(idCart: number) {
    this.router.navigate(['inscrireCart', idCart]);
  }
  
}
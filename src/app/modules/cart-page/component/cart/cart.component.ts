import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  quantity: number = 0;
  constructor(private router: Router){}

  increase() {
    this.quantity++;
  }

  decrease() {
    if(this.quantity > 0) {
      this.quantity--;
    }
  }

  checkout() {
    this.router.navigate(['user/checkout']);
  }
}

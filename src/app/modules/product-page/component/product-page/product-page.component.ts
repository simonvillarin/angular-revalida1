import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  activeTab: string = 'description';

  constructor(private router: Router) {}

  changeTab(tab: string) {
    this.activeTab = tab;
  }

  addToCart() {
    this.router.navigate(['user/cart/page'])
  }

  buyNow() {
    this.router.navigate(['user/checkout'])
  }
}

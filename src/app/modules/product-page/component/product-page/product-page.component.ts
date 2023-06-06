import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {

  productName: String = "Lenovo DB60 Slim USB Portable DVD Burner DB60-WW";
  productPrice: number = 650.00;
  quantity: number = 0;
  description: String = "Portable, DVD Burner";
  specifications: String[] = [
    "Portable, DVD Burner", 
    "Hardware Interface USB", 
    "Hardware Platform Laptop", 
    "Item Dimensions LxWxH 10 x 4 x 1 inches"
  ];

  activeTab: string = 'description';

  constructor(private router: Router) {}

  increase() {
    this.quantity++;
  }

  decrease() {
    if(this.quantity > 0){
      this.quantity--;
    }
  }

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

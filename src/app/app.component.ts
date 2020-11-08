import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  totalItems: number = 0;
  subTotal: number = 0;

  constructor(private productService: ProductService) {
    this.products = productService.products;
  }
  ngOnInit() {
    this.updateTotalAndSubTotal();
  }

  removeProduct(productId) {
    this.productService.removeProduct(productId);
    // tinh lai tong
    this.updateTotalAndSubTotal();
  }
  updateProduct(product) {
    this.productService.updateProduct(product);
    this.updateTotalAndSubTotal();
  }
  updateTotalAndSubTotal() {
    this.totalItems = 0;
    this.subTotal = 0;
    for (let item of this.products) {
      this.totalItems += item.quantity;
      this.subTotal += item.quantity * item.price;
    }
  }
  refreshShoppingCart() {
    let proService = new ProductService;
    this.productService.products = proService.products;
    this.products = proService.products;
    this.updateTotalAndSubTotal();
  }
}

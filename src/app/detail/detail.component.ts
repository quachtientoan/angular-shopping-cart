import { Product } from './../product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onInputQuantity = new EventEmitter();

  removeProduct(productId: string) {
    this.onRemoveProduct.emit(productId);
  }
  updateQuantity(productId : string, quantity : string){
    let product = {"id": productId,"quantity": quantity};
    this.onInputQuantity.emit(product);
  }
  validate() {
    for (let item of this.products) {
      if (item.quantity < 0) {
        item.quantity = -item.quantity;
      }
    }
  }
}

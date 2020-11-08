import { Product } from './../product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent {
  @Input() subTotal: number;

  promoCode: string = '';
  promoValue: number = 0;

  promoCodes = [
    { code: 'SALE 90%', value: 90},
   
  ];

  checkPromotion() {
    let discount = 0;
    for (let item of this.promoCodes) {
      if (this.promoCode == item.code) {
        this.promoValue = item.value;
        discount = (this.subTotal * item.value) / 100;
        break;
      } else {
        this.promoValue = 0;
        discount = 0;
      }
    }

    if (this.promoValue == 0) {
      alert('Mã không tồn tại');
    }
    return discount;
  }
  getTax() {
    let tax = 0;
    tax = (this.subTotal * 10) / 100;
    return tax;
  }

  getTotalPrice() {
    let total = 0;
    if (this.promoValue != 0) {
      for (let item of this.promoCodes) {
        if (this.promoCode === item.code) {
          total = this.subTotal + this.getTax() - this.checkPromotion();
        }
      }
    } else {
      total = this.subTotal + this.getTax();
    }
    return total;
  }
}

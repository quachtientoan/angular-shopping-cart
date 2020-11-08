import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: '1',
      name: 'product 1',
      description: 'description 1',
      image: 'https://via.placeholder.com/200x150',
      price: 200000,
      quantity: 50,
    },
    {
      id: '2',
      name: 'product 2',
      description: 'description 2',
      image: 'https://via.placeholder.com/200x150',
      price: 500000,
      quantity: 100,
    },
    {
      id: '3',
      name: 'product 3',
      description: 'description 3',
      image: 'https://via.placeholder.com/200x150',
      price: 100000,
      quantity: 100,
    }
  ];
  constructor() { }
  removeProduct(productId) {
    const index = this.products.findIndex(
      (product) => product.id === productId
    );
    if (
      index !== -1 &&
      confirm('Bạn có chắc chắn muốn xóa item: ' + productId)
    ) {
      this.products.splice(index, 1);
    }
  }
  updateProduct(product) {
    const index = this.products.findIndex((pro) => pro.id === product.id);
    this.products[index].quantity = parseInt(product.quantity, 10);
  }
}

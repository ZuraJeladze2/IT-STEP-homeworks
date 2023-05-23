import { Component } from '@angular/core';
import { ProductsArrayService } from '../services/products-array.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any[] = [];
  constructor(private productsArray: ProductsArrayService){
    console.log(productsArray);
  }
  ngOnInit(){
  this.products = this.productsArray.getProducts();
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ProductsArrayService } from '../services/products-array.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})

export class CardInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, public productsArr: ProductsArrayService){}
  index:any = '0';
  products: any = []
  productId: any = '0';

  async ngOnInit(){
    console.log(this.products);
    this.products = this.productsArr.getProducts();
    this.productId = this.route.snapshot.paramMap.get('id')
    
    this.index = this.productId-1;
  }
}
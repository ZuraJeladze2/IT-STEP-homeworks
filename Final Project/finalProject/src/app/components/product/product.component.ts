import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private myService: HTTPModuleService, private route: ActivatedRoute){}

  productId: any;
  productsArray:any;
  
  ngOnInit(){
    this.getProducts()
  }
  
  getProducts(){
    this.myService.getAllProducts().subscribe(async (res) => {
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];
          this.productsArray = element;
          this.productId = this.route.snapshot.paramMap.get('id');
          console.log("productId is "+this.productId);
          console.warn('array:');
          console.log(this.productsArray);
          
          
          
        }
      }
    })
  }
}

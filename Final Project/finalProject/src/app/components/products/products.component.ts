import { Component } from '@angular/core';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  constructor(private myService: HTTPModuleService) { }

  fullProductsArray: any[] = [];

  ngOnInit() {
    this.myService.getAllProducts().subscribe(res => {
      console.log(res)
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];
          for (const product of element) {
            if (product) this.fullProductsArray.push(product)
          }
        }
      }

    })
  }
}
import { Component } from '@angular/core';
import { HTTPModuleService } from "../../services/httpmodule.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-only4u',
  templateUrl: './only4u.component.html',
  styleUrls: ['./only4u.component.scss']
})


export class Only4uComponent {
  constructor(private myService: HTTPModuleService, private http: HttpClient){}

  shortProductsArray:any;
  fullProductsArray: any;
  updatedProductsArray:any;

  ngOnInit(){
    this.myService.getAllProducts().subscribe(res => {
      for (const key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
          const element = res[key];
          console.log(element);
          this.fullProductsArray = element;
          this.shortProductsArray= element.slice(1, 9)          
        }
      }
      
    }
    )
  }

  productsArrayManipulations(){
    this.updatedProductsArray = this.fullProductsArray.map((element: { category: {name:string} }) => {
      if(element.category.name === 'AZ'){
        element.category.name = 'New';
      }
      console.log(element.category.name)
      return element;
    })
    console.log(this.updatedProductsArray);
    
    // this.http.post(this.myService.productsDBurl, this.updatedProductsArray).subscribe(res => console.log(res))
    
    console.log(this.fullProductsArray)
  }
  async productsArrayManipulationsGPT(){
  this.updatedProductsArray = await Promise.all(this.fullProductsArray.map(async (element: { category: {name:string} }) => {
    if(element.category.name === 'AZ'){
      element.category.name = 'New';
    }
    console.log(element.category.name);
    return element; // Return the updated element
  }));  
  console.log(this.updatedProductsArray);
  
  // this.http.post(this.myService.productsDBurl, this.updatedProductsArray).subscribe(res => console.log(res))
  
  console.log(this.fullProductsArray);
}
productsArrayManipulations2() {
  this.updatedProductsArray = this.fullProductsArray.map((element:any) => {
    if(element.category.name === 'AZ'){
      element.category.name = 'New';
    }
    console.log(element.category.name);
    return element; // Return the updated element
  });
  
  console.log(this.updatedProductsArray);
  
  // this.http.post(this.myService.productsDBurl, this.updatedProductsArray).subscribe(res => console.log(res))
  
  console.log(this.fullProductsArray);
}




  // deleteProduct(){
  //   this.http.delete('hi').subscribe(res => {
  //     console.log(res);
  //   })
  // }

}

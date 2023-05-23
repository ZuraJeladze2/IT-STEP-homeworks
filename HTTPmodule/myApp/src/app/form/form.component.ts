import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Product } from '../interfaces/product'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  productsArray = []
  dbUrl = 'https://httpmodule-69bb5-default-rtdb.europe-west1.firebasedatabase.app/products.json'

  constructor(private _http: HttpClient) { }
  myForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    productDescription: new FormControl('', Validators.required),
    productImage: new FormControl('', Validators.required),
    productPrice: new FormControl('', Validators.required)
  })
  submit() {
    console.log(this.myForm.value);
    this.addProduct()
  }


  addProduct() {
    this._http.post(this.dbUrl, this.myForm.value).subscribe(response => {
      console.log(response);
    })
  }
  getProducts() {
    this._http.get(this.dbUrl).pipe(map((arr) => {
        const productsArr = [];

        for (const key in arr) {

          const product: Product = {
            productDescription: arr[key].productDescription,
            productImage: arr[key].productImage,
            productName: arr[key].productName,
            productPrice: arr[key].productPrice
          }
          productsArr.push(product);
        }

        return productsArr;
      }))
      .subscribe(response => {
        this.productsArray = response;
        console.log(response);
      })
  }
  removeProduct() {
    this._http.delete(this.dbUrl).subscribe(response => {
      console.log(response);
    })
  }
}

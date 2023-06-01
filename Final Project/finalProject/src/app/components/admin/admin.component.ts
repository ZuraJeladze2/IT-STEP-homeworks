import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private http: HttpClient, private myService: HTTPModuleService){}

  myForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    image: new FormControl('')
  })

  // assignToDB(){
  //   this.myService.assignToMyDB()
  // }

  // pushProduct(){
  //   this.http.post(this.myService.productsDBurl, this.myForm.value)
  //             .subscribe(res => {
  //               console.log(res);
                
  //             })
  // }
}
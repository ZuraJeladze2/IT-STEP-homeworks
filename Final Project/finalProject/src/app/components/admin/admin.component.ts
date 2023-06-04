import { Component, HostListener } from '@angular/core';
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
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })


  passwordSequence = ['m', 'r', '.', 'a', 'd', 'm', 'i', 'n'];
  pressedKeys: string[] = [];
  isAdmin = false;

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    const key = event.key.toLowerCase(); // Convert the pressed key to lowercase for case-insensitive comparison

    if (key === this.passwordSequence[this.pressedKeys.length]) {
      this.pressedKeys.push(key);
      console.log('added ' + key);
      

      if (this.pressedKeys.length === this.passwordSequence.length) {
        // Password sequence entered correctly
        console.log('Password entered correctly!');
        this.isAdmin = true;
        // Set your boolean variable to true or perform desired actions
      }
    } else {
      this.pressedKeys = [];
    }
  }
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
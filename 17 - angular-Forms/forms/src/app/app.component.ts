import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms';
  myForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    info: new FormControl('', [Validators.minLength(10), Validators.maxLength(100), Validators.required])
  })
  submit(){
    console.log(this.myForm.value);
  }
}

import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss']
})
export class AuthorisationComponent {
  constructor(private authService: FirebaseAuthService){}

  isSignedIn = false;

  signInModal:boolean = false;
  signUpModal:boolean = false;
  
  authForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  onSubmit(){
    console.log(this.authForm.value);
  }

  async onSignUp(formVal: any){
    await this.authService.signUp(formVal.email, formVal.password);

    if(this.authService.isLoggedIn)
    this.isSignedIn = true;
  }

  
  async onSignIn(formVal: any){
    await this.authService.signIn(formVal.email, formVal.password);
    
    if(this.authService.isLoggedIn)
    this.isSignedIn = true;
  }

  signInForm(){
    this.signInModal = true;
  }
  signUpForm(){
    this.signUpModal = true;
  }
  toBack(){
    this.signInModal = false;
    this.signUpModal = false;
  }
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  isLoggedIn = false;
  constructor(private Auth: AngularFireAuth) { }

  async signUp(email:any, password:any){
    await this.Auth.signInWithEmailAndPassword(email, password)
                  .then(response => {
                    this.isLoggedIn = true;
                    console.log(response)
                  })
                  .catch(error => console.log(error))
  }
  async signIn(email:any, password:any){
    await this.Auth.createUserWithEmailAndPassword(email, password)
                  .then(response => {
                    this.isLoggedIn = true;
                    console.log(response)
                  })
                  .catch(error => console.log(error))
  }
  async logOut(){
    await this.Auth.signOut()
                  .then(response => {
                    this.isLoggedIn = false;
                    console.log(response)
                  })
                  .catch(error => console.error(error))
  }
}

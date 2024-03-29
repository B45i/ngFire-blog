import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {
    // console.log({auth});
  }

  login(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(): void {
    this.auth.signOut();
  }
}

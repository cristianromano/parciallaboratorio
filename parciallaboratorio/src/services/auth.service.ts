import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  Firestore,
  collection,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth: Auth = inject(Auth);
  firestore: Firestore = inject(Firestore);

  constructor() {}
  logueado() {
    return this.auth.currentUser;
  }
  esAdmin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      getDocs(collection(this.firestore, 'users'))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            if (doc.data()['email'] == this.auth.currentUser?.email) {
              if (doc.data()['admin'] == 'true') {
                console.log('en admin');
                resolve(true); // Return true if user is admin
              }
            }
          });
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          reject(false); // Return false on error
        });
    });
  }
}

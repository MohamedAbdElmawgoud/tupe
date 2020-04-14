import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { User } from "src/app/firebase/user.module";
import { StorageService } from "src/app/storageService/storage.service";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  profileData: AngularFirestoreCollection<{}>;
  user$: Observable<User>;
  constructor(public googlePlus: GooglePlus,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private storage: StorageService,
    
    public router: Router) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )

  }


  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    this.storage.saveUserId(user.uid);
    return userRef.set(data, { merge: true })

  }


  logout() {
    this.afAuth.signOut();
  }

 async getCurrentUser() {
    let id;
    this.afAuth.authState.subscribe(data => {
      console.log('A informacao de data ' ,  data.uid);

      
    });
    this.profileData = await this.afs.collection("users").snapshotChanges().toPromise();

   // console.log('A informacao de data ' ,  this.profileData);
    return this.profileData;
  }
}

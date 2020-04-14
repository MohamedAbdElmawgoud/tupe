import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { User } from "src/app/firebase/user.module";
import { StorageService } from "src/app/storageService/storage.service";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  profileData: AngularFirestoreCollection<{}>;
  user$: Observable<User>;
  user;
  constructor(public googlePlus: GooglePlus,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storage: StorageService,
    
    public router: Router) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
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
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(`users/${user.uid}`);

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

  getCurrentUser() {
   return this.afAuth.authState
  }

  addCompaign(record){
    console.log(record);
    this.firestore.collection('campaign').add(record).then(e=>{
      console.log(e);
    }).catch(e=>{
      console.log();
      
    })
  }
}

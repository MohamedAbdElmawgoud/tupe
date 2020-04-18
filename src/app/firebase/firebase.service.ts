import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { switchMap, flatMap } from 'rxjs/operators';
import { User } from "src/app/firebase/user.module";
import { StorageService } from "src/app/storageService/storage.service";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  clientRefrance: any;
  myUser: User;
  point = 0;
  document = [];
  profileData: AngularFirestoreCollection<{}>;
  user$: Observable<User>;
  user;
  docs = [];
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
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);

    return this.updateUserData(credential.user);
  }

  updateUserData(user) {

    // Sets user data to firestore on login
    this.firestore.collection('users').ref.where('uid' , '==' , user.uid).get().then(_user => {
        

        if (!_user.docs[0]) {
          this.firestore.collection('users').add({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            point: 0
          })
        } else {
 
        }

      })

    this.storage.saveUserId(user.uid);

  }

  updateUser(user){
    
    this.firestore.collection('users')
    .ref.where('uid' , '==' , user.uid).get().then(ele=>{
      ele.docs[0].ref.update({
        ...user
      })
    })
  }


  logout() {
    this.afAuth.signOut();
  }

  getCurrentUser() {

    return this.afAuth.authState
  }

 async getDataOfUser(id) {
    return this.firestore.collection('users')
    .ref.where('uid' , '==' , id).get()
  }
  UserId() {
    this.getCurrentUser().subscribe(user => {
      //console.log('id is ', user.uid)
      return user.uid
    })
  }




}


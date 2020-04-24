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
// import { Firebase } from "@ionic-native/firebase/ngx";
import { Platform } from '@ionic/angular';
import Swal from 'sweetalert2'
import { AlertController } from "@ionic/angular";

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
  constructor(
    private platform: Platform,
    // private FireBase: Firebase,
    public googlePlus: GooglePlus,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private storage: StorageService,
    private alertController: AlertController,
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

  async getToken() {
    let token;

    // if (this.platform.is('android')) {
    //   token = await this.FireBase.getToken();
    // }

    // if (this.platform.is('ios')) {
    //   token = await this.FireBase.getToken();
    //   await this.FireBase.grantPermission();
    // }

    this.saveToken(token);
  }
  private saveToken(token) {
    if (!token) return;

    const devicesRef = this.firestore.collection('devices');

    const data = {
      token,
      userId: 'testUserId'
    };

    return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    // return this.FireBase.onNotificationOpen();
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/youtube')
    provider.addScope('https://www.googleapis.com/auth/youtube.readonly')

    const credential = await this.afAuth.signInWithPopup(provider);
    console.log(credential);
    
    return this.updateUserData(credential.user);
  }

  updateUserData(user) {
    console.log(user);
    
    if(!user.userId){
      user.userId = user.uid
    }

    
    // Sets user data to firestore on login
    this.firestore.collection('users').ref.where('uid', '==', user.userId).get().then(_user => {
      
      if (!_user.docs[0]) {
        this.firestore.collection('users').add({
          uid: user.userId,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.imageUrl || '',
          point: 0
        }).then(u=>{
          console.log(u);
          
        })

      } else {

      }

      this.storage.saveUserId(user.userId);
      this.router.navigate(['']);
      // window.location.reload()

    })



  }


  login(email, password) {
    let isGmail = (/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/.test(email));
    if (!isGmail) {
      this.presentAlert('Please enter  google mail')
      
      return;
    }
    // Sets user data to firestore on login
    this.firestore.collection('users').ref.where('email', '==', email).get().then(_user => {

      console.log(_user.docs[0]);

      if (!_user.docs[0]) {
        let id = new Date().getTime();
        this.firestore.collection('users').add({
          uid: id,
          email: email,
          displayName: email.split("@")[0],
          password: password,
          photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BdmOpYjhT8eCXbPFKrfK-4Jx0DHd-ihLDzSuE6tCi1dK1yUwfPOlwoJS&s=10",
          point: 0
        })
        this.storage.saveUserId(id);
        this.router.navigate(['']);

      } else {
        if (_user.docs[0].data().password == password) {
          this.storage.saveUserId(_user.docs[0].data().uid);
          this.router.navigate(['']);

        } else {
          this.presentAlert("password is wrong")
           
        }
      }

    })


  }

  updateUser(user) {

    this.firestore.collection('users')
      .ref.where('uid', '==', user.uid).get().then(ele => {
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

  async getDataOfUser(id?) {
    let _id = await this.storage.getUserId()
    return this.firestore.collection('users')
      .ref.where('uid', '==', id || _id).get()
  }
  UserId() {
    this.getCurrentUser().subscribe(user => {
      //console.log('id is ', user.uid)
      return user.uid
    })

    
  }

  getVersion(){
    return  this.firestore.collection('version').doc('1').snapshotChanges()
  }

  async presentAlert(title) {
    const alert = await this.alertController.create({
      header: 'Alert',
     // subHeader: 'Subtitle',
      message: title,
      buttons: ['OK']
    });

    await alert.present();
  }
}


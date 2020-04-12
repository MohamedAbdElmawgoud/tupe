import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user: Observable<firebase.User>;
  constructor(public googlePlus: GooglePlus,
    private angularFireAuth,
    private platform: Platform,
    public router: Router) {
    this.user = this.angularFireAuth.authState;
  }
  login() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    }
    else {
      this.webGoogleLogin();
    }

  } 

  async nativeGoogleLogin() {
    try {
      const user = await this.googlePlus.login({

        'webClientId': '941729484801-qjc4h0cv1b4d4c9s7ms7q8a48gie573e.apps.googleusercontent.com',
        'offline': true
      })
      return await this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(user.idTocken))
    }
    catch (err) {
      console.log(err)  
    }

  }

  webGoogleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = new this.angularFireAuth.auth.signInWithPopup(provider)
    }
    catch (err) {
      console.log(err)
    }
  }
  createCompinge() {
    this.router.navigate(['create-comp']);

    // this.googlePlus.login({


    // })
    // .then(res => console.log(res))
    // .catch(err => console.error(err));
    // 'webClientId': '941729484801-qjc4h0cv1b4d4c9s7ms7q8a48gie573e.apps.googleusercontent.com',
    // 'offline': true
  }
}

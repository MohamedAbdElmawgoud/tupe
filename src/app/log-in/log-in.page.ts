import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})

export class LogInPage implements OnInit {
  userProfile : any
  constructor(private firebase:FirebaseService,public router : Router,
    private platform: Platform,
    private google:GooglePlus,
    private fireAuth: AngularFireAuth
    ) { }

  ngOnInit() {
  }
 async googleSignin() {
    await this.firebase.googleSignin();
    this.router.navigate(['']);
   }

   async login() {
    let params;
    if (this.platform.is('android')) {
      params = {
        'webClientId': '124018728460-sv8cqhnnmnf0jeqbnd0apqbnu6egkhug.apps.googleusercontent.com',
        'offline': true
      }
    }
    else {
      params = {}
    }
    this.google.login(params)
      .then((response) => {
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error)
        alert('error:' + JSON.stringify(error))
      });
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigate([""]);
      })

  }
  
}

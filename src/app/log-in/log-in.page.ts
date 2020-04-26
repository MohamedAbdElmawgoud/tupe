import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import {
  InAppBrowser,
  InAppBrowserOptions
} from "@ionic-native/in-app-browser/ngx";
// import "android/capacitor-google-auth";
import { Plugins } from '@capacitor/core';
@Component({ 
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})

export class LogInPage implements OnInit {
  userProfile: any
  constructor(private firebase: FirebaseService, public router: Router,
    private platform: Platform,
    private google: GooglePlus,
    private fireAuth: AngularFireAuth,
    private iab: InAppBrowser,

  ) { }

  ngOnInit() {
    // const browser = this.iab.create('https://fogtube.store/login.html', "_blank", {
    //   // zoom: "no",
    //   // location: "no",
    //   // toolbar: "no"
    // });
    // browser.on("loadstart").subscribe(e => {
    //   if (e.url.indexOf("#") > -1) {
    //     let url = e.url;
    //     let [
    //       uid , displayName , email ,photoURL
    //     ] = url.split('#')[1].split('*');
    //     console.log(   uid , displayName , email ,photoURL);
        
    //     browser.close();
    //   }
    // })

  }
 async googleSignin(){
    // console.log();
    // this.firebase.login(email.el.value , password.el.value)
    window['plugins'].googleplus.login(
      {
        // 'webClientId': 'client id of the web app/server side', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      },
       (obj)=> {
        alert(JSON.stringify(obj)); // do something useful instead of alerting

        this.firebase.updateUserData(obj)
      },
      function (msg) {
        // alert('error: ' + msg);
      }
  );
    // let googleUser = await Plugins.GoogleAuth.signIn();
    // // const credential = auth.GoogleAuthProvider.credential(googleUser.authentication.idToken); 
    // alert(JSON.stringify(googleUser))
    
  }
  // async googleSignin() {
  //   await this.firebase.googleSignin();
  //   this.router.navigate(['']);
  // }

  async login() {
    let params;
    if (this.platform.is('android')) {
      params = {
        'webClientId': '111084768406-139tc1h1f78fgtikqjjl84vc2e2gbjog.apps.googleusercontent.com',
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
        alert('error:' + error)
      });
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
        .credential(accessToken);
    this.fireAuth.signInWithCredential(credential)
      .then((response) => {
        this.firebase.updateUserData(response.user)
        this.router.navigate([""]);


      })

  }

}

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


  }
  async googleSignin() {

    window['plugins'].googleplus.login(
      {
      },
      (obj) => {
        // alert(JSON.stringify(obj))
        this.firebase.updateUserData(obj)
      },
      function (msg) {
      }
    );


  }
  async login(){
    await this.firebase.googleSignin();
  }

}

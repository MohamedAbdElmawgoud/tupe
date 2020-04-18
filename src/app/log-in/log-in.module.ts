import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';
import { AngularFireModule } from '@angular/fire'; 
import { GooglePlus } from '@ionic-native/google-plus/ngx';
const config = {
  apiKey: "AIzaSyDlWNjH4XsEHVkWceFtavf8e7Qq9fKgQwU",
  authDomain: "fir-7e3e0.firebaseapp.com",
  databaseURL: "https://fir-7e3e0.firebaseio.com",
  projectId: "fir-7e3e0",
  storageBucket: "fir-7e3e0.appspot.com",
  messagingSenderId: "941729484801",
  appId: "1:941729484801:web:aabacc4af4907bc1203000",
  measurementId: "G-TFXWLDL6QG"
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireModule.initializeApp(config),
    LogInPageRoutingModule,
  ],
  declarations: [LogInPage],
  providers :[
    
    GooglePlus,

  ]
})
export class LogInPageModule {}

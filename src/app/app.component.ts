import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as firebase from 'firebase';
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

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  currentLanguage: string;
  textDir: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate:  TranslateService,    
    public router : Router,
    private menu: MenuController
    
  ) {
    this.initializeApp();
    firebase.initializeApp(config);    
    this.currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.Translate(this.currentLanguage);
    
    
    this.translate.onLangChange.subscribe((event: LangChangeEvent) =>
    {
      if(event.lang == 'ar')
      {
        this.textDir = 'rtl';
      }
      else
      {
        this.textDir = 'ltr';
      }
    });
  
  }
 
  changeLng(type){
    this.translate.use(type);// ar or en
    this.currentLanguage =type;
    localStorage.setItem('lng' ,type)
  }
  Translate(type: string){
    
    
      this.translate.use(type);// ar or en
      
    
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  goToinviteFreind(){
    this.menu.close();
    this.router.navigate(['invite-friends']);
  }
  goTofaq(){
    this.menu.close();
    this.router.navigate(['faq']);
  }
  goTomessage(){
    this.menu.close();
    this.router.navigate(['message']);
    
  }
  goToVip(){
    this.menu.close();
    this.router.navigate(['vip-account']);
  }
}

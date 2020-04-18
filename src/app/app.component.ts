import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as firebase from 'firebase';
import { FirebaseService } from "src/app/firebase/firebase.service";

 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  points: number;
  email: string;
  displayName: string;
  profilePhoto: string;
  currentLanguage: string;
  textDir: string;
  user;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate:  TranslateService,    
    public router : Router,
    private firebaseService:FirebaseService,
    private menu: MenuController
    
  ) {
    this.initializeApp();
    //firebase.initializeApp(config);    
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
   ngOnInit(){
    
   
      this.getUser();
      this.firebaseService.getDataOfUser()
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

   getUser(){
     
 this.firebaseService.getCurrentUser().subscribe(user=>{
  if(user==null){
    console.log('go to logIn')
     this.router.navigate(['log-in']);
     
   }
   else{
     this.profilePhoto = user.photoURL;
     this.displayName = user.displayName;
     this.email = user.email
     console.log('not going to logIn')
   }
  console.log('user before update ', user)
    //return user;
  })
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


  changeLng(type){
    this.translate.use(type);// ar or en
    this.menu.close();
    
    this.currentLanguage =type;
    localStorage.setItem('lng' ,type)
  }
  Translate(type: string){
      this.translate.use(type);// ar or en    
    }
logout(){
  this.firebaseService.logout();
  window.location.reload()
  
  
}
}

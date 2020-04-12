import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  textDir: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate:  TranslateService,    
    public router : Router
    
  ) {
    this.initializeApp();
    const  currentLanguage  =  localStorage.getItem('lng') || 'en'
    this.Translate(currentLanguage);
    
    
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
    this.router.navigate(['invite-friends']);
  }
  goTofaq(){
    this.router.navigate(['faq']);
  }
  goTomessage(){
    this.router.navigate(['message']);
  }
  goToVip(){
    this.router.navigate(['vip-account']);
  }
}

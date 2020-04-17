import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { AdMobFree } from "@ionic-native/admob-free/ngx";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {

  constructor(public router: Router,
    private admobFree: AdMobFree
  ) { }

  ngOnInit() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: true,
      autoShow: true,
      id : "ca-app-pub-6473277362437826/3273139526"
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.interstitial.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }
  share() {
    this.router.navigate(['invite-friends']);
  }
  buy() {
    this.router.navigate(['buy-point']);
  }
  subscribe() {
    this.router.navigate(['subscription']);
  }
  ShowVideo() {
     this.router.navigate(['tabs/tab3']);
    

  }

}

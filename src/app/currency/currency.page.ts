import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { FirebaseService } from '../firebase/firebase.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {

  constructor(public router: Router,
    private admobFree: AdMobFree,
    private firebaseService: FirebaseService
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
    // this.router.navigate(['tabs/tab3']);
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: true,
      autoShow: true,
      id: "ca-app-pub-6473277362437826/2644499851ng "
    };
    this.admobFree.rewardVideo.config(bannerConfig);

    this.admobFree.rewardVideo.prepare()
      .then(() => {

      })
      .catch(e => console.log(e));
    this.admobFree.rewardVideo.show().then(() => {

    })

    // document.addEventListener('admob.rewardvideo.events.REWARD', (result) => {
    //   let user = this.firebaseService.getDataOfUser().subscribe(e => {
    //     console.log('user after update :', e);
    //     let UserEdited = {
    //       displayName: e.displayName,
    //       photoURL: e.photoURL,
    //       email: e.email,
    //       uid: e.uid,
    //       point: e.point + 20
    //     }
    //     this.firebaseService.updateUserData(UserEdited)
    //   });
    // });
  }

}

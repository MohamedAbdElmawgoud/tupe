import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { FirebaseService } from '../firebase/firebase.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {
  user: any;
  showPoint: any;

  constructor(public router: Router,
    private admob: AdMobPro,
    private storage: Storage,
    private firebaseService: FirebaseService
  ) { }
  ionViewWillEnter(){
    this.getPoint()
}
  async ngOnInit() {

    this.user = await this.storage.get('User');
    this.getPoint()
    this.admob.createBanner({
      adId:
        "ca-app-pub-7175438051295681/3187780553"
    })
      .then(() => { this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER); });


  }

  getPoint() {
    this.firebaseService.getDataOfUser(this.user).then(point => {
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
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
    this.admob.prepareRewardVideoAd({adId: 
      "ca-app-pub-7175438051295681/5622372208",
    })
    .then(() => { this.admob.showRewardVideoAd() 
    })
  }

}

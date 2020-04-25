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
  ionViewWillEnter() {
    this.getPoint()
  }
  constructor(public router: Router,
    private admob: AdMobPro,
    private storage: Storage,
    private firebaseService: FirebaseService
  ) { }

  async ngOnInit() {

    this.user = await this.storage.get('User');
    this.getPoint()


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
  async ShowVideo() {
    let lastClick = await this.storage.get('last click');
    let passed
    if (lastClick) {
      passed = (+new Date() - +new Date(lastClick))  / 1000;

    } else {
      passed = 3001;
    }


    if (passed >= 300) {
          await this.storage.set('last click', new Date());

      this.admob.prepareRewardVideoAd({
        adId:
          "ca-app-pub-1732462268437559/3908268613",
      })
        .then(async() => {

          this.admob.showRewardVideoAd()
        })

    } else {
      alert('you must wait ' + (300 - passed).toFixed(0) + ' second to try agian')
    }

  }

}

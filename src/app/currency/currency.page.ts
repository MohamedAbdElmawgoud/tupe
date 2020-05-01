import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { FirebaseService } from '../firebase/firebase.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { InviteServiceService } from '../firebase/invite-service.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {
  user: any;
  showPoint: any;
  invited;
  ionViewWillEnter() {
    this.getPoint()
  }
  constructor(public router: Router,
    private admob: AdMobPro,
    private storage: Storage,
    private firebaseService: FirebaseService,
    public alertController: AlertController,
    private inviteServiceService : InviteServiceService

  ) { }

  async ngOnInit() {

    this.user = await this.storage.get('User');
    this.getPoint()


  }

  getPoint() {
    this.firebaseService.getDataOfUser(this.user).then(point => {
      this.showPoint = point.docs[0].data().point;
      // this.invited = point.docs[0].data().invited;
      // console.log();
      
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
          "ca-app-pub-3736449894948823/7211480575",
      })
        .then(async() => {

          this.admob.showRewardVideoAd()
        })

    } else {
      alert('you must wait ' + (300 - passed).toFixed(0) + ' second to try agian')
    }

  }

  async redeem(){
    const alert = await this.alertController.create({
      header: 'Redeem you prize ',
      inputs: [
        {
          type: 'text',
          placeholder: 'Add your invite links'
        },


      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    alert.onDidDismiss().then( async data=>{
      if(data.data.values["0"]){
        let ref = data.data.values["0"];
        await this.inviteServiceService.inviteWithRef(ref)
      }else {

      }
      
    })

    await alert.present();
  }

}

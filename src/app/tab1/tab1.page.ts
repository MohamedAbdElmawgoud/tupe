import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { AlertController } from '@ionic/angular';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { map } from "rxjs/operators";
import { StorageService } from '../storageService/storage.service';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { subscribesService } from '../firebase/subscripe';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showPoint: any;
  user: any;
  view = [];
  viewer = [];
  done = 0;
  createdDate = [];
  uid: string;
  compaignValue = [];
  points: number;
  type: any;
  userProfile: any = null;
  campings
  compaign = false;
  constructor(
    private platform: Platform,
    private firebase: FirebaseService,
    private translate: TranslateService,
    private campingsService: CampingsService,
    public alertController: AlertController,
    private storage: StorageService,
    private admob: AdMobPro,
    private subscribes: subscribesService,
    public router: Router) {

  }
  async ngOnInit() {


    this.admob.createBanner({
      adId:
        "ca-app-pub-3736449894948823/3846950634"
    })
      .then(() => { this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER); });
    this.user = await this.storage.getUserId();
    this.getPoint()

    this.getUserId()

  }

  getPoint() {
    this.firebase.getDataOfUser(this.user).then(point => {
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  googleSignin() {
    this.firebase.googleSignin();
  }
  ionViewWillEnter() {
    this.getCompinge()
    this.getPoint()
  }
  getCompinge() {
    this.compaignValue = []
    let done = 0;
    this.storage.getUserId().then(user => {
      if (!user) {
        console.log('go to logIn')
        this.router.navigate(['log-in']);
      }
      else {
        this.compaignValue = [];
        this.campingsService.getcampingsList((res =>
          res.orderByChild('ownerId')
            .equalTo(user))).snapshotChanges().pipe(
              map((changes: Array<any>) =>
                changes.map(c =>
                  ({ key: c.payload.key, ...c.payload.val() })
                )
              )
            ).subscribe(comp => {

              comp.forEach(ele => {
                let views = `${ele.view}/${ele.done ? ele.done.length : 0}`
                ele['viewStat'] = views;
                this.compaignValue.push(ele)

              })
              console.log('compaignValue is', this.compaignValue)
            });

        this.subscribes.getsubscribesList((res =>
          res.orderByChild('ownerId')
            .equalTo(user))).snapshotChanges().pipe(
              map((changes: Array<any>) =>
                changes.map(c =>
                  ({ key: c.payload.key, ...c.payload.val() })
                )
              )
            ).subscribe(subscribes => {

              subscribes.forEach(ele => {

                let views = `${ele.view}/${ele.done ? ele.done.length : 0}`
                ele['viewStat'] = views;
                ele['type'] = 'subscribe'
                ele['image'] = ele.channel.channel.thumbnails.default.url;

                this.compaignValue.push(ele)

              })
              console.log(this.compaignValue);

            });



      }
      //return user;
    })





  }
  getDetailsOfComp(createdate) {
    this.router.navigate(['details-campaign'], { queryParams: { data: createdate.key , type : createdate.type  } });
  }
  getUserId() {

  }
  async createCompinge() {
    if (this.compaignValue.length >= 5) {
      const alert = await this.alertController.create({
        header: this.translate.instant('you have reached your limit'),
      });

      await alert.present();
      return;
    }
    const alert = await this.alertController.create({
      header: this.translate.instant('select the camping type'),
      inputs: [

        {
          name: 'view for you video',
          type: 'radio',
          label: this.translate.instant('view for your video'),
          value: 'video'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: this.translate.instant('likes or subscribes'),
          value: 'channel'
        }
      ],
      buttons: [
        {
          text: this.translate.instant("select")
        }
      ]
    });

    await alert.present();

    alert.onDidDismiss().then(e => {
      if (e.data) {

        if (e.data.values == 'channel') {
          this.router.navigate(['create-subscripe'], {
            queryParams: {
              type: e.data.values
            }
          });
        } else {
          this.router.navigate(['create-comp'], {
            queryParams: {
              type: e.data.values
            }
          });
        }


      }

    })

    // this.presentModal();


  }

}

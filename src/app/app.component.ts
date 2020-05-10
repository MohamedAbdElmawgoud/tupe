import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from "@angular/router";
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import * as firebase from 'firebase';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { ToastController } from '@ionic/angular';
import { StorageService } from './storageService/storage.service';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { AlertController } from '@ionic/angular';

import { map } from 'rxjs/operators';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core'; 
import { AdMobPro } from '@ionic-native/admob-pro/ngx';

const { PushNotifications, Modals } = Plugins;
// import { FCM } from '@ionic-native/fcm/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { YoutubeService } from './firebase/youtube';
import { subscribesService } from './firebase/subscripe';
import { ValdaiteService } from './firebase/valdaite.service';
import { SettingService } from "src/app/firebase/setting.service";
import { Analytics } from 'capacitor-analytics';
const analytics = new Analytics();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
  versionId;
  points: number;
  email: string;
  displayName: string;
  profilePhoto: string;
  currentLanguage: string;
  textDir: string;
  user;
  clicks = 0;
  constructor(

    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService,
    public router: Router,
    private firebaseService: FirebaseService,
    public toastController: ToastController,
    private menu: MenuController,
    private storage: StorageService,
    public alertController: AlertController,
    private admob: AdMobPro,
    private appVersion: AppVersion,
    private YoutubeService: YoutubeService,
    private subscribes: subscribesService,
    private firebase: FirebaseService,
    private setting :SettingService,
    private ValdaiteService : ValdaiteService

    // private fcm: FCM

  ) {
    this.initializeApp();
    //firebase.initializeApp(config);    
    this.currentLanguage = localStorage.getItem('lng') || 'en'
    this.Translate(this.currentLanguage);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        this.textDir = 'rtl';
      }
      else {
        this.textDir = 'ltr';
      }
    }); 

  }
  async ionViewWillEnter() {
    await this.isSubscribe()
  }
  validate(){
    this.ValdaiteService.validate()
  }
  async isSubscribe() {
    let lastChannel;
    this.subscribes.getsubscribesList((res => res.orderByChild('expired').equalTo(null))).snapshotChanges().pipe(
      map((changes: Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(async camping => {
      lastChannel = await this.storage.storage.get('channel')

      let camp = camping.filter(ele => {
        return ele.key == lastChannel;
      })

      if (camp[0]) {
        let channels = (<any>await this.YoutubeService.getUserChannels()).items;
        let isSubscribes = channels.filter(element => {

          return element.snippet.resourceId.channelId == camp[0].channel.channelId
        })[0];
        if (isSubscribes && lastChannel) {
          await this.storage.storage.remove('channel')
          await this.updateCamping(camp[0])
        }
      }




    });


  }

  async updateCamping(video) {

    video.done = video.done ? video.done : [];
    video.done.push(this.user)
    if (video.done.length == video.view)
      video.expired = true;

    await this.subscribes.updateSubscripe(video.key, video)

    await this.UpdateUSerPoints((+video.point / +video.view) - ((+video.point / +video.view) * 0.2 ) , video.channel.channelId);

  }



  async ngOnInit() {
   

    //
    // user attributes
    // google don't allow use of sensitive data
    // like names, emails, card numbers, etc.
    // analytics.setUserProp({
    //   key: 'city',
    //   value: 'San Francisco'
    // });
    // // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On succcess, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        // alert('Push registration success, token: ' + token.value);
     //    console.log('Push registration success, token: ' + token.value);
        //  this.presentAlert('Push registration success, token: ' + token.value)
        this.UpdateUSerPoints(0 , null , token.value )

        this.firebaseService.getDataOfUser(this.user).then(e => {
          let user = e.docs[0].data();

    
   
          let UserEdited = {
            ...user,
            token,
          }
          // document.getElementById('point').textContent = e.docs[0].data().point + point;
    
          // e.docs[0].data().point + points;
          this.firebaseService.updateUser(UserEdited)
     
    
    
        });
        

      }
    );

    // Some issue with our setup and push will not work
    let title = this.translate.instant('Error on registration')
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert(title + JSON.stringify(error));
      } 
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        var audio1 = new Audio('assets/audio.mp3');
       // console.log('Audio');
        audio1.play();
       // console.log('Push received: ', notification);
        this.UpdateUSerPoints(0 , null , null , notification)
        let alertRet = Modals.alert({
          title: notification.title,
          message: notification.body
        });

      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        // alert('Push action performed: ' + JSON.stringify(notification));
      //  console.log('Push action performed: ' + notification);
      
      }
    );

    await this.validate()
    await this.isSubscribe()
    
    this.firebaseService.getDataOfUser().then(user => {
      this.user =user;
      this.profilePhoto = user.docs[0].data().photoURL || "https://fogtube.store/profile.svg";
      this.displayName = user.docs[0].data().displayName;
      this.email = user.docs[0].data().email
      this.points = user.docs[0].data().points
   //  console.log('profilePhoto',this.profilePhoto)
    })
    this.getUser();

    
    this.setting.getsettingsList((res => 
      res)).snapshotChanges().pipe(
        map((changes: Array<any>) =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe( async res =>{
      
  
    
      let versionOnServer = res[res.length-1].version;
    //  console.log('setting is ', res )
      // alert(())
      let appVersion = await this.appVersion.getVersionNumber().then(async (version) => {
       
      
      if (version != versionOnServer) {
        // this.presentAlert('')
        // this.translate.instant('there is a new version you must update it')
        let title = res[res.length-1].message
        let link = res[res.length-1].AppURl
    //   console.log('link is' , link)
        let text = this.translate.instant('Update now')
        const alert = await this.alertController.create({
          header: 'Alert',
          message: title,
          backdropDismiss: false,
          buttons: [{
            text: text,
            handler: () => {
              window.open(link)
            }
          }]

        });

        await alert.present();
      }
    });
    }); 


    document.addEventListener('onAdDismiss', (data: any) => {
      if (data.adType == "rewardvideo") {
        this.setting.getsettingsList((res => 
          res)).snapshotChanges().pipe(
            map((changes: Array<any>) =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe( async res =>{
          let point = res[res.length-1].point
            this.UpdateUSerPoints(point)
          });
 
      }
    });
    let status= false;
    this.firebase.getDataOfUser(this.user).then(user =>{
       status = user.docs[0].data().vip.status
     //  console.log('vip is ' ,status)
      if(status == false || status == null){
       
        setInterval(() => {
          this.admob.prepareInterstitial({
            adId:
              "ca-app-pub-3736449894948823/8716133932"
          })
            .then(() => { this.admob.showInterstitial(); });
        }, 7 * 60 * 1000)
    
        setInterval(() => {
          this.admob.prepareRewardVideoAd({
            adId:
              "ca-app-pub-3736449894948823/7211480575"
          })
            .then(() => {
              this.admob.showRewardVideoAd()
    
            });
        }, 11 * 60 * 1000)
    
       
      }
    })
   
    analytics.setUserID({ value: '' + new Date().getTime() });


    let id
  
    //this.getUser();
    // this.firebaseService.getDataOfUser()
  }
  // ionViewWillUnload  () {
  //   this.storage.getUserId().then(user => {
  //     this.user = user;
  //     console.log('user is',user)
  //   })
  // }
  UpdateUSerPoints(point , video? , token ? , message ? ) {
    this.firebaseService.getDataOfUser(this.user).then(e => {
      let user = e.docs[0].data();
      if(video){
        user.videos = user.videos ? user.videos : [];
        user.videos.push(video)  
        user.points = user.points ? user.points : {};
        user.points[video] = point;

      }

      if(message){
        user.messages = user.messages ? user.messages : [];
        user.messages.push(message)  
      }
      let UserEdited = {
        ...user,
        token,
        point: e.docs[0].data().point + point
      }
      // document.getElementById('point').textContent = e.docs[0].data().point + point;

      // e.docs[0].data().point + points;
      this.firebaseService.updateUser(UserEdited)
      let title = this.translate.instant('you have got')
      let points = this.translate.instant('points')
      if(point){
        this.presentAlert(title + ' ' + point + ' ' + points)

      }

    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  async presentAlert(title) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: title,
    });

    await alert.present();

  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }
 async getUser() {

    this.storage.getUserId().then(async user => {
      this.user = user;
     await this.firebaseService.getDataOfUser(user).then(_user => {
        // if(user)
        let user = _user.docs[0].data()
        if (!user) {
       //   console.log('go to logIn')
          this.router.navigate(['log-in']);

        }
        else {
          this.profilePhoto = user.photoURL || "https://fogtube.store/profile.svg";
          this.displayName = user.displayName;
          this.email = user.email
          this.points = user.points
        }
      })

      //return user;
    })
  }



  goToinviteFreind() {
    this.menu.close();
    this.router.navigate(['invite-friends']);
  }
  goTofaq() {
    this.menu.close();
    this.router.navigate(['faq']);
  }
  goTomessage() {
    this.menu.close();
    this.router.navigate(['message']);

  }
  goToVip() {
    this.menu.close();
    this.router.navigate(['vip-account']);
  }


  changeLng(type) {
    this.translate.use(type);// ar or en
    this.menu.close();

    this.currentLanguage = type;
    localStorage.setItem('lng', type)
  }
  Translate(type: string) {
    this.translate.use(type);// ar or en    
  }
  async logout() {
    this.menu.close();
    await this.storage.clear();
    

    window['plugins'].googleplus.disconnect(() => {

    })

    // this.router.navigate(['/log-in'])
    setTimeout(() => {
      window.location.reload()
   }, 500);
    
  }
}

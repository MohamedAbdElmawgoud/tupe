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
  ads() {

  }
  async ngOnInit() {
    this.getUser();
    document.addEventListener('RewardComplate', (data) => {
      this.UpdateUSerPoints()
    });
    setInterval(() => {
      this.admob.prepareInterstitial({
        adId:
          "ca-app-pub-1732462268437559/9160595297"
      })
        .then(() => { this.admob.showInterstitial(); });
    }, 6 * 60 * 1000)

    setInterval(() => {
      this.admob.prepareRewardVideoAd({
        adId:
          "ca-app-pub-1732462268437559/3908268613"
      })
        .then(() => {
          this.admob.showRewardVideoAd()

        });
    }, 10 * 60 * 1000)


    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On succcess, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        // alert('Push registration success, token: ' + token.value);
        console.log('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        // alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        var audio1 = new Audio('assets/audio.mp3');
        console.log('Audio');
        audio1.play();
        // alert('Push received: ' + JSON.stringify(notification));
        console.log('Push received: ', notification);

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
        console.log('Push action performed: ' + notification);
      }
    );

    let id


    await this.firebaseService.getVersion().subscribe(async version => {
      this.versionId = (<any>version.payload.data()).numberOfVersion
      this.versionId.forEach(element => {
        id = element
      });
      let currentVersion = await this.storage.getVersionId()
      console.log('version', id, currentVersion)
      if (currentVersion == null) {


        this.storage.saveVersionId(id)
      }
      else {
        if (id != currentVersion) {
          this.presentAlert("there is a new update please install first ")
          this.storage.saveVersionId(id)

        }

      }

    })
    // this.firebaseService.getDataOfUser()
  }
  UpdateUSerPoints() {
    this.firebaseService.getDataOfUser(this.user).then(e => {

      let UserEdited = {
        ...e.docs[0].data(),
        point: e.docs[0].data().point + 20
      }
      // e.docs[0].data().point + points;
      this.firebaseService.updateUser(UserEdited)
      this.presentAlert("you have got " + 20 + " points")

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
  getUser() {

    this.storage.getUserId().then(user => {
      this.user = user;
      this.firebaseService.getDataOfUser(user).then(_user => {
        // if(user)
        let user = _user.docs[0].data()
        if (!user) {
          console.log('go to logIn')
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
    await this.storage.clear();
    this.router.navigate(['/log-in'])

    window['plugins'].googleplus.disconnect(() => {

    })


  }
}

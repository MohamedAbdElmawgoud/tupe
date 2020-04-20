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
    public alertController: AlertController ,
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
  async ngOnInit() {
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
    

    await this.firebaseService.getVersion().subscribe(version => {
      this.versionId = (<any>version.payload.data()).numberOfVersion
      this.versionId.forEach(element => {
        id = element
      });
      console.log('version', id)
      if (this.storage.getVersionId() == null) {


       this.storage.saveVersionId(id)
      }
      else {
        this.versionId = this.storage.getVersionId()
        if (id == this.versionId) {
          
          console.log('version dont Need to update')
        }
        else {
       //   this.presentAlert('version Need to update to '+ id);
          console.log('version Need to update' ,id)
        }
      
      }

    })
    this.getUser();
    // this.firebaseService.getDataOfUser()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.notificationSetup();

    });
  }
  async presentAlert(title) {
    const alert = await this.alertController.create({
      header: 'Alert',
     // subHeader: 'Subtitle',
      message: title,
    //  buttons: ['OK']
    backdropDismiss: false 
    });

    await alert.present();
   
  }
  private notificationSetup() {
    // this.firebaseService.getToken();
    // this.firebaseService.onNotifications().subscribe(
    //   (msg) => {
    //     if (this.platform.is('ios')) {
    //       this.presentToast(msg.aps.alert);
    //     } else {
    //       this.presentToast(msg.body);
    //     }
    //   });
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
      console.log(!user, user, 'user');

      if (!user) {
        console.log('go to logIn')
        this.router.navigate(['log-in']);

      }
      else {
        this.profilePhoto = user.photoURL;
        this.displayName = user.displayName;
        this.email = user.email
        this.points = user.points
        console.log('point', this.points)
      }
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
  logout() {
    this.firebaseService.logout();
    window.location.reload()


  }
}

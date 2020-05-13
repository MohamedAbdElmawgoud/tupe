import { Injectable } from '@angular/core';
// import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';

@Injectable()
export class FcmService {

  constructor(
              private platform: Platform) {}

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      // token = await this.firebase.getToken();
      // console.log(token);
      
    }

    if (this.platform.is('ios')) {
      // token = await this.firebase.getToken();
      // await this.firebase.grantPermission();
    }

    this.saveToken(token);
  }

  private saveToken(token) {
    // if (!token) return;

    // const devicesRef = this.afs.collection('devices');

    // const data = {
    //   token,
    //   userId: 'testUserId'
    // };

    // return devicesRef.doc(token).set(data);
  }

  onNotifications() {
    // return this.firebase.onMessageReceived();
  }
}

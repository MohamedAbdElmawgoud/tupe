import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class InviteServiceService {

  constructor(private firebaseService: FirebaseService,
    public alertController: AlertController,
    private storage : Storage

  ) { }

 async inviteWithRef(ref) {
    ref = ref.split('ref=')[1];
let userId = await this.storage.get('User');
if(ref == userId){
  this.presentAlert('you can\'t invite your self ')

}else {
  this.firebaseService.getDataOfUser(userId).then(e => {
    let user = e.docs[0].data();
 
    let UserEdited = {
      ...user,
      point: e.docs[0].data().point + 1000,
      invited : true
    }

    this.firebaseService.updateUser(UserEdited)

  });

  this.firebaseService.getDataOfUser(ref).then(e => {
    let user = e.docs[0].data();
    user.invitedUser = user.invitedUser ? user.invitedUser : [];
    user.invitedUser.push(userId)
    let UserEdited = {
      ...user,
      point: e.docs[0].data().point + 1000
    }

    this.firebaseService.updateUser(UserEdited)

  });

  this.presentAlert('you have got 1000 point')

}
  }


  

  async presentAlert(title) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: title,
    });

    await alert.present();

  }
}

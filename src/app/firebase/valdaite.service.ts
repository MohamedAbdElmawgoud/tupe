import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { YoutubeService } from './youtube';
import { subscribesService } from './subscripe';
import { StorageService } from '../storageService/storage.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ValdaiteService {
  user;
  constructor(
    private firebaseService: FirebaseService,
    private YoutubeService: YoutubeService,
    private subscribes: subscribesService,
    private storage: StorageService,
    public alertController: AlertController,
  ) { 

    
  }

  validate() {

    this.storage.getUserId().then(user => {
      if(!user){
        return;
      }
      this.firebaseService.getDataOfUser(user).then( async _user => {
        let alert = await this.alertController.create({
          header : " we will validate your subscribes if you remove any one will report you and remove your points  ",
          
        })
        alert.present()
        let user = _user.docs[0].data();
        this.user = user.uid;
        let channels = (<any>await this.YoutubeService.getUserChannels()).items.map(ele=>{
          return ele.snippet.resourceId.channelId;
        });

        if(user.videos){
         let errors =   user.videos.filter(element => {
            return channels.indexOf(element) == -1
          });
          
          await alert.dismiss()
          // console.log();
          if(errors[0]){
            let ductedPoints = 0;
            errors.forEach(ele=>{
            this.UpdateUSerPoints(-user.points[ele], ele)

              ductedPoints += user.points[ele];
            })
            let alert = await this.alertController.create({
              header : " you lose " + ductedPoints + " point and we report you to the admin "
            })
            alert.present()
          }else{
            let alert = await this.alertController.create({
              header : "you are a valid user now :D"
            })
          }
       
          
          
        }
      })

    })
  }

  UpdateUSerPoints(point , video?) {
    this.firebaseService.getDataOfUser(this.user).then(e => {
      let user = e.docs[0].data();
      if(video){
       
        user.videos.splice(user.videos.indexOf(video) , 1)  
     
      }
      let UserEdited = {
        ...user,
        point: e.docs[0].data().point + point
      }
      // document.getElementById('point').textContent = e.docs[0].data().point + point;

      // e.docs[0].data().point + points;
      this.firebaseService.updateUser(UserEdited)
      // this.presentAlert("you have got " + point + " points")

    });
  }

  
}

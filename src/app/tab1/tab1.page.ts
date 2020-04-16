import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  type: any;
  userProfile: any = null;
  
  
    constructor(
    private platform: Platform,
    private firebase:FirebaseService,
    public alertController: AlertController ,
    public router: Router) {
  
  }

   googleSignin() {
    this.firebase.googleSignin();
   }
  
  
  async createCompinge() {
    const alert = await this.alertController.create({
      header: 'select the camping type',
      inputs: [

        {
          name: 'view for you video',
          type: 'radio',
          label: 'view for your video',
          value: 'video'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: ' likes or subscribes  ',
          value: 'channel'
        }
      ],
      buttons : [
        {
          text : "select"
        }
      ]
    });

    await alert.present();

    alert.onDidDismiss().then(e=>{
      if(e.data){
        this.router.navigate(['create-comp'] , {
          queryParams : {
            type : e.data.values
          }
        });

      }
      
    })

  // this.presentModal();
   
    
  }
  
}

import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  showPoint: any;
  user: any;

  constructor(public router : Router,
    private firebaseService: FirebaseService,  
    private admob: AdMobPro,
    private storage: Storage    
  ) {}

  async ngOnInit() {
    this.admob.createBanner({adId: 
      "ca-app-pub-7175438051295681/3187780553"
    })
    .then(() => { this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER); });
   
    this.user = await this.storage.get('User');
    this.getPoint()
  
  }
  getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  ShowVideo(){
    this.router.navigate(['tabs/tab3']);
    
   }
   Reload(){
    window.location.reload()
    
   }
  
}

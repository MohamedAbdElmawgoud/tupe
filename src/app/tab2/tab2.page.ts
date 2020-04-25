import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { subscribesService } from '../firebase/subscripe';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  showPoint: any;
  user: any;
  campings;
  noVideos;
  lengthOfArrayOfVideo = 0;
  channel;
  step;
  passedTIme = 0
  constructor(public router : Router,
    private firebaseService: FirebaseService,  
    private storage: Storage    ,
    private subscribes: subscribesService

  ) {}

  async ngOnInit() {

    this.user = await this.storage.get('User');

    this.subscribes.getsubscribesList((res => res.orderByChild('expired').equalTo(null))).snapshotChanges().pipe(
      map((changes: Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(async camping => {
      // this.camping = camping;

      this.campings = camping.filter(ele => {

        if (!ele.done)
          return ele
        if (ele.done.indexOf(this.user) == -1)
          return ele
        return null
      }).splice(0, 5)
      // console.log(this.campings);
      if(this.campings.length == 0){
        this.noVideos = true
      }
      
      await this.showMore()
      

    });
    this.getPoint()
  
  }

  async showMore() {
    this.lengthOfArrayOfVideo++
    let channel = this.campings[this.lengthOfArrayOfVideo];
    this.step = 1;
    
    if (channel != undefined) {
      this.channel =channel;
    } else {
      // window.location.reload();
      this.noVideos = true;
    }
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

   subscribe(){
     this.step = 2;
   }
   Reload(){
    window.location.reload()
    
   }
  
}

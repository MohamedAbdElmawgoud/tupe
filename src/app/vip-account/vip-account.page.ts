import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-vip-account',
  templateUrl: './vip-account.page.html',
  styleUrls: ['./vip-account.page.scss'],
})
export class VipAccountPage implements OnInit {
  Addvatage =['Remove ads','Remove 10% cost','Remove Countdown timer']
  user: any;
  showPoint: any;

  constructor( private firebaseService: FirebaseService,
    private storage: Storage    ) { }

 async ngOnInit() {
    this.user = await this.storage.get('User');
    this.getPoint()
  }
  getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }

}

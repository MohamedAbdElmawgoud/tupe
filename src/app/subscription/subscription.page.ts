import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
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

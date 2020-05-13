import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import { ValdaiteService } from '../firebase/valdaite.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  user: any;
  showPoint: any;

  constructor( private firebaseService: FirebaseService,
    private ValdaiteService : ValdaiteService,
    private storage: Storage ,
    private router : Router
    ) { 

      
    }

 async ngOnInit() {
   await this.ValdaiteService.validate()
   this.router.navigate(['tabs/currency'])
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

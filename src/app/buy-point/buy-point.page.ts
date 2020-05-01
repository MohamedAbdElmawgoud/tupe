import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import { OffersService , offers } from "../firebase/offers.service";
import { map } from "rxjs/internal/operators/map";

@Component({
  selector: 'app-buy-point',
  templateUrl: './buy-point.page.html',
  styleUrls: ['./buy-point.page.scss'],
})
export class BuyPointPage implements OnInit {
  AllOffers: any;
  user: any;
  showPoint: any;

  constructor( private firebaseService: FirebaseService,
    private offersService : OffersService,    
    private storage: Storage    ) { }

 async ngOnInit() {
  this.getOffers()
    this.user = await this.storage.get('User');
    this.getPoint()
    
  }
  getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  getOffers(){
    this.offersService.getoffersList((res => 
      res.orderByChild('point'))).snapshotChanges().pipe(
        map((changes: Array<any>) =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(offer =>{
        this.AllOffers =offer
  console.log(this.AllOffers)
      }); 
  }
}

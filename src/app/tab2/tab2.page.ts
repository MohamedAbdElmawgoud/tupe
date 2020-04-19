import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
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
    private storage: Storage    
  ) {}

  async ngOnInit() {
   
    this.user = await this.storage.get('User');
    this.getPoint()
  
  }
  ShowVideo(){
    this.router.navigate(['tabs/tab3']);
    
   }
   Reload(){
    window.location.reload()
    
   }
   getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.page.html',
  styleUrls: ['./invite-friends.page.scss'],
})
export class InviteFriendsPage implements OnInit {
  [x: string]: any;
  showPoint: any;
  viewers = [];
  constructor(private firebaseService: FirebaseService,
    private storage: Storage ,
    private clipboard: Clipboard
    ) { }

  async ngOnInit() {
    this.user = await this.storage.get('User');
   await this.getPoint()
  }
  async getPoint(){
    this.firebaseService.getDataOfUser(this.user).then( async point =>{
      this.showPoint = point.docs[0].data().point
      console.log(point);

      for (const ele of point.docs[0].data().invitedUser) {
        
        let user = await this.getUser(ele);
        // console.log(user);
        
        if(user.docs[0]){
          console.log(user.docs[0].data());
          
          this.viewers.push(user.docs[0].data())
        }            
      }
      
    })
    return this.showPoint
  }
  copy(){
    this.clipboard.copy('https://fogtube.app.link/NwuabRc8Z5?ref=' + this.user)
  }
  getUser(id) {
    return this.firebaseService.getDataOfUser(id);
  }
}

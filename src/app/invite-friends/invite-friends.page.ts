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

  constructor(private firebaseService: FirebaseService,
    private storage: Storage ,
    private clipboard: Clipboard
    ) { }

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
  copy(){
    this.clipboard.copy('https://fogtube.app.link/NwuabRc8Z5?ref=' + this.user)
  }
}

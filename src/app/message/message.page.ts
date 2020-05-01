import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import { MessageService , message } from "../firebase/message.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  Allmessage: any;
  user: any;
  showPoint: any;

  constructor( private firebaseService: FirebaseService,
    private storage: Storage ,
    private messageService : MessageService,
  ) { }

 async ngOnInit() {
    this.user = await this.storage.get('User');
    this.getPoint()
    this.getmessage()
  }
  getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  getmessage(){
    this.messageService.getmessageList((res => 
      res)).snapshotChanges().pipe(
        map((changes: Array<any>) =>
          changes.map(c =>
            ({ key: c.payload.key, ...c.payload.val() })
          )
        )
      ).subscribe(message =>{
        this.Allmessage =message
  console.log(this.Allmessage)
      }); 
  }
}

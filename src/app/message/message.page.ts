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
  Allmessage=[];
  user: any;
  showPoint: any;

  constructor( private firebaseService: FirebaseService,
    private storage: Storage ,
    private messageService : MessageService,
  ) { }

 async ngOnInit() {
    this.user = await this.storage.get('User');
    this.getPoint()
    // this.getmessage()
    // this.getAllmessage()
  }
  getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(user =>{
      this.showPoint = user.docs[0].data().point
      this.Allmessage = user.docs[0].data().message;
      console.log(user.docs[0].data())
    })
    return this.showPoint
  }



  deletMessage(){
    this.firebaseService.getDataOfUser(this.user).then(user=>{
      let userEdited={
      ... user,
      message : null
      }
      this.firebaseService.updateUser(userEdited)
    })
  }



//   getmessage(){
//     this.messageService.getmessageList((res => 
//       res)).snapshotChanges().pipe(
//         map((changes: Array<any>) =>
//           changes.map(c =>
//             ({ key: c.payload.key, ...c.payload.val() })
//           )
//         )
//       ).subscribe(message =>{
//         this.storage.get('AllMessage').then(ele=>{
//           let i = 0
//           message.forEach(element => {
           
//            ele.forEach(element => {
//             if (ele[i].key == element.key){
            
//               console.log('stat',element)
//               console.log(i)
//               console.log('ele',ele[i])
//             }
//            else{
//             this.storage.set('messages',element)
//            }
           
           
//            });
//            i++
//           });
//         //  this.storage.set('AllMessage',message)
          
//         })
        
       
  
//       }); 
//   }
//  async getAllmessage(){
//   await  this.storage.get('messages').then(ele=>{
//       this.Allmessage.push(ele)
//       console.log('all',this.Allmessage)
//     })
//   }
}

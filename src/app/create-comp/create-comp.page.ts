import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.page.html',
  styleUrls: ['./create-comp.page.scss'],
})
export class CreateCompPage implements OnInit {
  id: string;
  numberOfSubscribers = [10, 20, 30, 40, 50, 60, 70, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
  constructor(private firebaseService:FirebaseService,) { }

  ngOnInit() {
    
  }
async CreateCompaign(){
  console.log('hi');
  
  await this.firebaseService.getCurrentUser().subscribe(user=>{
    
    this.id =   user.uid;
   
    let record ={numberOfSubscribers: 10, numberOfLikes:10 , uid: this.id} 
  //  console.log('record is ',record);
    this.firebaseService.addCompaign(record);
   })
   
}

 getCompaign(){
   this.firebaseService.getCurrentUser().subscribe(user=>{
  let test =this.firebaseService.getAllDocumentElement()
});
}
}

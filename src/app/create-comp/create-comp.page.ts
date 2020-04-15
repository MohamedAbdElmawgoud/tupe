import { Component, OnInit } from '@angular/core';
import { FirebaseService, } from "src/app/firebase/firebase.service";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.page.html',
  styleUrls: ['./create-comp.page.scss'],
})
export class CreateCompPage implements OnInit {
  id: string;
  numberOfSubscribers = [10, 20, 30, 40, 50, 60, 70, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

  camping: camping;
  constructor(private firebaseService: FirebaseService, private comp: CampingsService) { }

  ngOnInit() {
    this.camping = {
      likes: 5,
      Subscribe: 2,
      view: 2
    }
 this.comp.getcampingsList((res=> res.orderByChild('likes').equalTo(2))).snapshotChanges().pipe(
      map((changes : Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(camping => {
      // this.camping = camping;
      console.log(camping)
    });
  
  }
  createComp() {
    this.comp.createcamping(this.camping)
  }

  // async CreateCompaign(){
  //   console.log('hi');

  //   await this.firebaseService.getCurrentUser().subscribe(user=>{

  //     this.id =   user.uid;

  //     let record ={numberOfSubscribers: 10, numberOfLikes:10 , uid: this.id} 
  //   //  console.log('record is ',record);
  //     this.firebaseService.getAllDocumentElement();
  //    })

  // }

  //  getCompaign(){
  //    this.firebaseService.getCurrentUser().subscribe(user=>{
  //   let test =this.firebaseService.getAllDocumentElement()
  // });
  // }
}

import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService, } from "src/app/firebase/firebase.service";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.page.html',
  styleUrls: ['./create-comp.page.scss'],
})

export class CreateCompPage implements OnInit {
  
  id: string;
 // numberOfSubscribers = [10, 20, 30, 40, 50, 60, 70, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
 likes =10;
 Subscribe=10;
 view=10;
 type: string;
 needed: number;
 ListOfUserDoneIt: string[];
  camping: camping;
  sec=10;
  point = this.view * this.sec;
  video;
  videoId ;
  constructor(private firebaseService: FirebaseService,
    private datePipe: DatePipe,
     private comp: CampingsService,
     private router : ActivatedRoute
    ) { }

  ngOnInit() {
    this.router.queryParamMap.subscribe(res=>{
    this.type = res.get('type');      
    })   
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
  getVideo(video){
  this.video =video.el.value;   

let   scrubbed = this.video.slice(this.video.indexOf('=')+1 )
  if(this.video.search('=')== -1){
    scrubbed= this.video.slice(this.video.indexOf('be/')+3 )
  }
  // abc 123 Howdy
  this.videoId= scrubbed;
  console.log('video is ',scrubbed)
  }





  Onlikes(event){
    this.likes = event.target.value;
  //  console.log('selecte is ', event.target.value)
  }
  OnSubscribe(event){
    this.Subscribe = event.target.value;
  //  console.log('selecte is ', event.target.value)
  }
  Onview(event){
    this.view = event.target.value;
    this.point = this.view * this.sec
  //  console.log('selecte is ', event.target.value)
  }
  Onsec(event){
    this.sec = event.target.value;
    this.point = this.view * this.sec
  //  console.log('selecte is ', event.target.value)
  }
  createComp() {
this.camping = {
      likes: this.likes,
      Subscribe: this.Subscribe,
      view: this.view,
      type:'view',
      needed:this.Subscribe,
      ListOfUserDoneIt: [],
      second:this.sec ,
      point:this.point,
      videoUrl: this.videoId,
      createdData: Date.now()
    }
   // console.log('comp',this.camping);
 this.comp.getcampingsList((res=> res.orderByChild('type').equalTo('view'))).snapshotChanges().pipe(
      map((changes : Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(camping => {
      // this.camping = camping;
    //  console.log('comping is ',camping)
    });
  

    this.comp.createcamping(this.camping);
    Swal.fire({
      icon: 'success',
      showConfirmButton: true,
      //timer: 1500,
    })
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

import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService, } from "src/app/firebase/firebase.service";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.page.html',
  styleUrls: ['./create-comp.page.scss'],
})

export class CreateCompPage implements OnInit {
  showPoint: any;

  id: string;
  Views = [10, 50,  100,150, 200,250, 300,350, 400,450
    , 500,550, 600,650, 700,750, 800,850, 900,950, 1000]
    seconds= [45,
      60,90,120,150,180,210,240,270,300,330,360,390,420,450,
      480,510,540,570,600,900,1200,1500,1800,
      2100,2400,2700,3000,3300,3600
    ]
  likes = 10;
  Subscribe = 10;
  view = 10;
  type: string;
  needed: number;
  ListOfUserDoneIt: string[];
  camping: camping;
  sec = 45;
  point = this.view * this.sec;
  video;
  videoId;
  userTotalPoint;
  user;
  status= false;
  constructor(private firebaseService: FirebaseService,
    private alertController: AlertController,    
    private datePipe: DatePipe,
    private comp: CampingsService,
    private router: ActivatedRoute,
    private storage : Storage,
    private route : Router,
    private firebase: FirebaseService,
  ) { }

 async ngOnInit() {
  this.getPoint()
    this.router.queryParamMap.subscribe(res => {
      this.type = res.get('type');
    })
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    let user = await this.storage.get('User');

    this.user =( await this.firebaseService.getDataOfUser(user)).docs[0].data()
    console.log(this.user);
    
  }

  getPoint(){
    this.firebaseService.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }

  getVideo(video) {
    this.video = video.el.value;

    let scrubbed = this.video.slice(this.video.indexOf('=') + 1)
    if (this.video.search('=') == -1) {
      scrubbed = this.video.slice(this.video.indexOf('be/') + 3)
    }
    // abc 123 Howdy
    this.videoId = scrubbed;
    console.log('video is ', scrubbed)
  }





  Onlikes(event) {
    this.likes = event.target.value;
    //  console.log('selecte is ', event.target.value)
  }
  OnSubscribe(event) {
    this.Subscribe = event.target.value;
    //  console.log('selecte is ', event.target.value)
  }
  Onview(event) {
    this.view = event.target.value;
    this.point = this.view * this.sec
    //  console.log('selecte is ', event.target.value)
  }
  Onsec(event) {
    this.sec = event.target.value;
    this.point = this.view * this.sec
    //  console.log('selecte is ', event.target.value)
  }
  async  createComp() {
    if (this.status== true){
    if(this.user.point < this.point){
      Swal.fire({
        icon: 'error',
        showConfirmButton: true,
        //timer: 1500,
        text : "You don't have enough points"
      })
      return
    }
      let user = await this.storage.get('User');

      this.camping = {
        // likes: this.likes,
        // Subscribe: this.Subscribe,
        view: this.view,
        type: 'view',
        // needed: this.Subscribe,
        ListOfUserDoneIt: [],
        second: this.sec,
        point: this.point,
        videoUrl: this.videoId,
        createdData: Date.now(),
        ownerId : user
      }
      this.UpdateUSerPoints(-this.point)
      this.comp.createcamping(this.camping);

      this.presentAlert('Added success')
      
      this.route.navigate([''])
    }
    else{
this.presentAlert('please play your video')
    }

  }
  changeStatus($event){
    setInterval(()=>{
    if(this.status==false){
     if($event.target.playerInfo.currentTime>0){
        console.log('event is',$event.target.playerInfo.currentTime)
        this.status = true;
      }
    }
   
    },1000)
  }
  UpdateUSerPoints(points) {
    let user = this.firebaseService.getDataOfUser(this.user.uid).then(e => {

      let UserEdited = {
        ...e.docs[0].data(),
        point: e.docs[0].data().point - points
      }
      this.firebaseService.updateUser(UserEdited)
    });

  }
  async presentAlert(title) {
    const alert = await this.alertController.create({
      header: 'Alert',
     // subHeader: 'Subtitle',
      message: title,
      buttons: ['OK']
    });

    await alert.present();
  }

}

import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { FirebaseService } from "src/app/firebase/firebase.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  needed=15;
  event: any;
  lengthOfArrayOfVideo = 0;
  videoUrls = [];
  player: any;
  points=0;
  hidevalue = false;
  hidePoint= false;
  // timer: NodeJS.Timer;
  maxTime =30;
  time=30;
  videoId;
  passedTIme = 0;
  interval;
  lastTime;
  play(player){
    
    this.player= player;
    //this.StartTimer()
    console.log('player is ',player)
    }
    
    change(event){
    console.log('player state is ',event.data)
    }
  StartTimer(){
   setTimeout(x => 
      {
          if(this.maxTime <= 0) { }
          this.maxTime -= 1;

          if(this.maxTime>0){
            this.hidevalue = false;
            this.StartTimer();
          }
          
          else{
            
              this.hidevalue = true;
          }

      }, 1000);
 

  }
  constructor( private comp: CampingsService, private firebaseService:FirebaseService) {}
 
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.getVideoID();
  }
  startTime(){
    this.StartTimer();
    
  }
  savePlayer($event){
    this.event = $event;
    console.log(this.event)
    // $event.target.removeCueRange()
   
    // setInterval(()=>{
      ;
      this.interval = setInterval(()=>{

        if($event==0){
          // this.maxTime =$event
        }
        else{
            if(this.lastTime != $event.target.playerInfo.currentTime.toFixed(0)){
              this.passedTIme ++;
              this.lastTime = $event.target.playerInfo.currentTime.toFixed(0)
            }
        }
        if((this.passedTIme - this.maxTime) <= 0){
            if (this.passedTIme >= this.needed){
              this.showMore()
             
              this.points = this.maxTime *10;
            clearInterval(this.interval);
            }
        }
      console.log($event.target.playerInfo.currentTime);
      
    } , 1000)
    
    if(this.points!= 0){
    this.UpdateUSerPoints(this.points);
    }
    this.hidePoint =true;
  }


  getVideoID(){
    this.comp.getcampingsList((res=> res.orderByChild('videoUrl'))).snapshotChanges().pipe(
      map((changes : Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(camping => {
      // this.camping = camping;
      this.videoUrls = camping
      this.showMore()
    });
  

   
  }
  
  showMore(){
    let len;
  len = this.videoUrls.length;
  let video;
    if(this.lengthOfArrayOfVideo==0){
      
      video = this.videoUrls[0];
      
      
    }
    else if(this.lengthOfArrayOfVideo<this.videoUrls.length&& this.lengthOfArrayOfVideo !=0){
     video = this.videoUrls[this.lengthOfArrayOfVideo];

    }
    this.savePlayer(this.event);
    console.log(video);
    
    this.videoId = video.videoUrl;
    this.points  = +video.point / +video.view ;
    this.maxTime = +video.needed;
    this.lengthOfArrayOfVideo++;
  }

  UpdateUSerPoints(points){
    let user =this.firebaseService.getDataOfUser().subscribe(e => {
      console.log('user after update :',e);
      let UserEdited ={
        displayName: e.displayName,
        photoURL: e.photoURL,
        email:e.email,
        uid: e.uid,
        point: e.point+points
      }
      this.firebaseService.updateUserData(UserEdited)
      });
    
    //this.firebaseService.updateUserData()
  }
}

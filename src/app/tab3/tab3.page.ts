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
  timer: NodeJS.Timer;
  maxTime =30;
  time=30;
  videoId = 'rRua0fc2gAo';
  
  play(player){
    
    this.player= player;
    //this.StartTimer()
    console.log('player is ',player)
    }
    
    change(event){
    console.log('player state is ',event.data)
    }
  StartTimer(){
    this.timer = setTimeout(x => 
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
    console.log('doneeeeeeeeeee')
    this.StartTimer();
    
  }
  savePlayer($event){
    this.event = $event;
    var startTime = new Date().getTime();
    // setInterval(()=>{
      ;
      var interval = setInterval(()=>{
        if($event==0){
          this.maxTime =$event
        }
        else{
        this.maxTime =$event.target.playerInfo.currentTime.toFixed(0);
        }
        if(new Date().getTime() - startTime > this.maxTime*1000 + 10000){
            if (this.maxTime >= this.needed){
              this.showMore()
             
              this.points = this.maxTime *10;
            clearInterval(interval);
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
      camping.forEach(element => {
        this.videoUrls.push(element.videoUrl)
      
      });
     
    });
  

   
  }
  
  showMore(){
    console.log('event is',this.event)
    let len;
  //  console.log('video is ',this.videoUrls)
  len = this.videoUrls.length;
    if(this.lengthOfArrayOfVideo==0){
      
      this.videoId = this.videoUrls[0];
      console.log('video is ',this.videoId)
      
     // window.location.reload()
    }
    else if(this.lengthOfArrayOfVideo<this.videoUrls.length&& this.lengthOfArrayOfVideo !=0){
      this.videoId = this.videoUrls[this.lengthOfArrayOfVideo];
      console.log('video is  sds',this.videoId)
     
     // window.location.reload()
    }
    this.savePlayer(this.event);
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

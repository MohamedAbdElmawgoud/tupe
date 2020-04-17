import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import { CampingsService, camping } from "src/app/firebase/campings.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  lengthOfArrayOfVideo=0;
  videoUrls = [];
  player: any;
  points: number;
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
  constructor( private comp: CampingsService,) {}
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
    var startTime = new Date().getTime();
    // setInterval(()=>{
      ;
      var interval = setInterval(()=>{
        this.maxTime =$event.target.playerInfo.currentTime.toFixed(0);
        this.points = this.maxTime *10;
        if(new Date().getTime() - startTime > 60000){
            clearInterval(interval);
            
        }
      console.log($event.target.playerInfo.currentTime);
      
    } , 1000)
   
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
    this.lengthOfArrayOfVideo++;
  }

}

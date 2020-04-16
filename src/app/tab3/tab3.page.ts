import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  player: any;
  points: number;
  hidevalue = false;
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
            this.points = this.time *10;
              this.hidevalue = true;
          }

      }, 1000);
 

  }
  constructor() {}
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    
  }
  startTime(){
    console.log('doneeeeeeeeeee')
    this.StartTimer();
    
  }
}

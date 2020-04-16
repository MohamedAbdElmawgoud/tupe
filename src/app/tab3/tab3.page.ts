import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  hidevalue= false;
  timer: NodeJS.Timer;
  maxTime =30;
  videoId = "Qlq6fKG2L48";
  
  
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
  savePlayer($event){
    setInterval(()=>{
      console.log($event.target.playerInfo.currentTime);
      
    } , 1000)
  }

}

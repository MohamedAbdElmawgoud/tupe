import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  needed = 15;
  event: any;
  lengthOfArrayOfVideo = 0;
  videoUrls = [];
  player: any;
  points = 0;
  hidevalue = false;
  hidePoint = false;
  // timer: NodeJS.Timer;
  maxTime = 30;
  time = 30;
  videoId;
  passedTIme = 0;
  interval;
  lastTime = 0;
  video;
  user;
  play(player) {

    this.player = player;
    //this.StartTimer()
    console.log('player is ', player)
  }

  change(event) {
    console.log('player state is ', event.data)
  }
  StartTimer() {
    setTimeout(x => {
      if (this.maxTime <= 0) { }
      this.maxTime -= 1;

      if (this.maxTime > 0) {
        this.hidevalue = false;
        this.StartTimer();
      }

      else {

        this.hidevalue = true;
      }

    }, 1000);


  }
  constructor(private comp: CampingsService, private firebaseService: FirebaseService,
    private storage: Storage
  ) { }

 async ngOnInit() {
    const tag = document.createElement('script');
    this.user =await this.storage.get('User');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.getVideoID();
  }
  startTime() {
    this.StartTimer();

  }
  savePlayer($event) {
    this.event = $event;
    if (!$event) {
      return
    }

    this.interval = setInterval( async  () => {
      if (this.lastTime != $event.target.playerInfo.currentTime.toFixed(0)) {
        this.passedTIme++;
        this.lastTime = $event.target.playerInfo.currentTime.toFixed(0)
      }

      if ((this.maxTime - this.passedTIme) <= 0) {
        this.UpdateUSerPoints(this.maxTime - (this.maxTime * 0.2));
        this.updateCamping({ ...this.video })
        // this.showMore()

        clearInterval(this.interval);
      }

    }, 1000)


  }


  getVideoID() {
    this.comp.getcampingsList((res => res.orderByChild('expired').equalTo(null))).snapshotChanges().pipe(
      map((changes: Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(camping => {
      // this.camping = camping;
      this.videoUrls = camping.filter(ele=>{
        if(!ele.done)
          return ele
        if(ele.done.indexOf(this.user) == -1)
          return ele
        return false
      })
      this.showMore()
    });



  }

  showMore() {
    let len;
    len = this.videoUrls.length;
    let video;
    if (this.lengthOfArrayOfVideo == 0) {

      video = this.videoUrls[0];


    }
    else if (this.lengthOfArrayOfVideo < this.videoUrls.length && this.lengthOfArrayOfVideo != 0) {
      video = this.videoUrls[this.lengthOfArrayOfVideo];

    }
    this.savePlayer(this.event);
    this.video = video;

    this.videoId = video.videoUrl;
    this.points = +video.second;

    this.maxTime = +video.second;
    this.lengthOfArrayOfVideo++;
  }

  UpdateUSerPoints(points) {
    let user = this.firebaseService.getDataOfUser().subscribe(e => {
      console.log('user after update :', e);
      let UserEdited = {
        displayName: e.displayName,
        photoURL: e.photoURL,
        email: e.email,
        uid: e.uid,
        point: e.point + points
      }
      this.firebaseService.updateUserData(UserEdited)
    });

    //this.firebaseService.updateUserData()
  }

  async updateCamping(video) {

    video.done = video.done ? video.done : [];
    video.done.push(this.user)
    if(video.done.length == video.view)
      video.expired = true;

    this.comp.updatecamping(video.key, video)

  }
}

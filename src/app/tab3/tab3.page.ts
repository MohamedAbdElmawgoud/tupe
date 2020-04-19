import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  needed = 15;
  event: any;
  lengthOfArrayOfVideo = -1;
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
  noVideos = false;
  user;
  showPoint;
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
  constructor(private comp: CampingsService, 
    private alertController: AlertController,
    private firebaseService: FirebaseService,
    private storage: Storage
  ) { }

  async ngOnInit() {
    const tag = document.createElement('script');
    this.user = await this.storage.get('User');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.getVideoID();

  }
  startTime() {
    this.StartTimer();

  }
  async savePlayer($event) {
    this.event = $event;
    if (!$event) {
      return
    }

    this.interval = setInterval(async () => {
      if (this.lastTime != $event.target.playerInfo.currentTime.toFixed(0)) {
        this.passedTIme++;
        this.lastTime = $event.target.playerInfo.currentTime.toFixed(0)
      }

      if ((this.maxTime - this.passedTIme) <= 0) {
        this.UpdateUSerPoints(this.maxTime - (this.maxTime * 0.2));
        this.updateCamping({ ...this.video })
        // window.location.reload()

        clearInterval(this.interval);

        await this.ngOnInit()

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
      
      this.videoUrls = camping.filter(ele => {
        
        if (!ele.done)
          return ele
        if (ele.done.indexOf(this.user) == -1)
          return ele
        return false
      })
      this.showMore()
    });



  }

  showMore() {
    this.lengthOfArrayOfVideo++
    let video = this.videoUrls[this.lengthOfArrayOfVideo];

    if (video != undefined) {
      this.video = video;

      this.videoId = video.videoUrl;
      this.points = +video.second;

      this.maxTime = +video.second;
      ;
    } else {
      window.location.reload();
      // this.noVideos = true;
    }
  }

  UpdateUSerPoints(points) {
    let user = this.firebaseService.getDataOfUser(this.user).then(e => {

      let UserEdited = {
        ...e.docs[0].data(),
        point: e.docs[0].data().point + points
      }
      this.showPoint =e.docs[0].data().point + points;
      this.firebaseService.updateUser(UserEdited)
      Swal.fire({
        icon: 'success',
        showConfirmButton: true,
        //timer: 1500,
        text: "you have got " + points + " points"
      })
    });



  }

  async updateCamping(video) {

    video.done = video.done ? video.done : [];
    video.done.push(this.user)
    if (video.done.length == video.view)
      video.expired = true;

    this.comp.updatecamping(video.key, video)

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

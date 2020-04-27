import { Component } from '@angular/core';
import { map } from "rxjs/operators";
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import Swal from 'sweetalert2'
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  point: any;
  needed = 15;
  event: any;
  lengthOfArrayOfVideo = -1;
  videoUrls = [];
  player: any;
  points = 0;
  hidevalue = false;
  hidePoint = false;
  // timer: NodeJS.Timer;
  status = false
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
  clickViewTime = 0;
  lock;
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
    private storage: Storage,
    public translate: TranslateService,    
    private route: Router

  ) { }

  async ngOnInit() {

    this.route.events.subscribe(event => {
      if (this.event && event instanceof NavigationStart) {
        this.event.target.pauseVideo()
      }

    })
    const tag = document.createElement('script');
    this.user = await this.storage.get('User');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.getVideoID();
    this.getPoint()
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

      if ((this.maxTime - this.passedTIme) == 0 && !this.lock) {
        this.updateCamping({ ...this.video })
        this.getPoint();
        this.lock = true;
        clearInterval(this.interval);
 

      }

    },2000)


  }


  getVideoID() {
    this.comp.getcampingsList((res => res.orderByChild('expired').equalTo(null))).snapshotChanges().pipe(
      map((changes: Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(async camping => {
      // this.camping = camping;

      this.videoUrls = camping.filter(ele => {

        if (!ele.done)
          return ele
        if (ele.done.indexOf(this.user) == -1)
          return ele
        return null
      }).splice(0 , 15)
      console.log(this.videoUrls , this.user);
      
      await this.showMore()

    });



  }

  async showMore() {
    this.lengthOfArrayOfVideo++
    let video = this.videoUrls[this.lengthOfArrayOfVideo];

    if (video != undefined) {
      this.video = video;
      this.lock = false
      this.videoId = video.videoUrl;
      this.points = +video.second;

      this.maxTime = +video.second;
      this.passedTIme = 0;
      this.lastTime = 0;
      this.savePlayer(this.event);
    } else {
      this.noVideos = true;
    }
  }

  UpdateUSerPoints(points) {
    let user = this.firebaseService.getDataOfUser(this.user).then(e => {

      let UserEdited = {
        ...e.docs[0].data(),
        point: e.docs[0].data().point + points
      }
      // e.docs[0].data().point + points;
      this.firebaseService.updateUser(UserEdited)
      // if (this.status){
      this.showPoint = this.showPoint + points
      let title = this.translate.instant('you have got')
      let point = this.translate.instant('points')
      this.presentAlert(title + points + point)
      this.point = this.showPoint
      document.getElementById('point').textContent = this.showPoint;
      this.showMore()

      // }
    });



  }

  getPoint() {
    this.firebaseService.getDataOfUser(this.user).then(point => {
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  async updateCamping(video) {

    video.done = video.done ? video.done : [];
    video.done.push(this.user)
    if (video.done.length == video.view)
      video.expired = true;

    await this.comp.updatecamping(video.key, video)
    await this.UpdateUSerPoints((+video.point / +video.view) - ((+video.point / +video.view) * 0.2));

  }


  async presentAlert(title) {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: title,
      buttons: ['OK'],
    });
    setTimeout(() => {
      this.alertController.dismiss()
    }, 3000)
    await alert.present();
  }
  Reload() {
    window.location.reload()
  }
}

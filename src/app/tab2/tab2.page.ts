import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Storage } from '@ionic/storage';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { subscribesService } from '../firebase/subscripe';
import { map } from 'rxjs/operators';
import { ValdaiteService } from '../firebase/valdaite.service';
import { YoutubeService } from '../firebase/youtube';
import { StorageService } from '../storageService/storage.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  showPoint: any;
  user: any;
  campings;
  noVideos = false;
  interval;
  lengthOfArrayOfVideo = -1;
  channel;
  step;
  passedTIme = 0;
  lastTime = 0;
  constructor(public router: Router,
    private firebaseService: FirebaseService,
    private subscribes: subscribesService,
    private ValdaiteService: ValdaiteService,
    private YoutubeService: YoutubeService,
    private storage: StorageService,
    public alertController: AlertController



  ) { }
  async ionViewWillEnter() {
    await this.isSubscribe()
  }
  async ngOnInit() {

    this.user = await this.storage.storage.get('User');

    this.subscribes.getsubscribesList((res => res.orderByChild('expired').equalTo(null))).snapshotChanges().pipe(
      map((changes: Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(async camping => {
      // this.camping = camping;

      this.campings = camping.filter(ele => {

        if (!ele.done)
          return ele
        if (ele.done.indexOf(this.user) == -1)
          return ele
        return null
      })
      if (this.campings.length == 0) {
        this.noVideos = true
      }
      console.log(this.campings, this.noVideos);

      await this.showMore()


    });
    this.getPoint()

  }
  async savePlayer($event) {



    this.interval = setInterval(async () => {
      if (this.lastTime != $event.target.playerInfo.currentTime.toFixed(0)) {
        this.passedTIme++;
        this.lastTime = $event.target.playerInfo.currentTime.toFixed(0)
      }

      if ((+this.channel.second - this.passedTIme) == 0) {
        this.passedTIme = 0;
        clearInterval(this.interval);

        this.interval =  setInterval( async ()=>{
          await this.isSubscribe()
        } , 1000)
        // alert('fff')
        await this.storage.storage.set('channel', this.channel.key)

        window.open('https://www.youtube.com/watch?v=' + this.channel.channel.video)
        this.showMore()

      }

    }, 2000)


  }
  async showMore() {
    this.lengthOfArrayOfVideo++
    let channel = this.campings[this.lengthOfArrayOfVideo];
    this.step = 1;

    if (channel != undefined) {
      this.channel = channel;
    } else {
      // window.location.reload();
      this.noVideos = true;
    }
  }
  getPoint() {
    this.firebaseService.getDataOfUser(this.user).then(point => {
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  ShowVideo() {
    this.router.navigate(['tabs/tab3']);

  }

  subscribe() {
    this.step = 2;
  }
  Reload() {
    window.location.reload()

  }
  async isSubscribe() {
    let lastChannel;
    this.subscribes.getsubscribesList((res => res.orderByChild('expired').equalTo(null))).snapshotChanges().pipe(
      map((changes: Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(async camping => {
      lastChannel = await this.storage.storage.get('channel')

      let camp = camping.filter(ele => {
        return ele.key == lastChannel;
      })

      if (camp[0]) {
        let channels = (<any>await this.YoutubeService.getUserChannels()).items;
        let isSubscribes = channels.filter(element => {

          return element.snippet.resourceId.channelId == camp[0].channel.channelId
        })[0];
        if (isSubscribes && lastChannel) {
          clearInterval(this.interval);
          await this.storage.storage.remove('channel')
          await this.updateCamping(camp[0])
        }
      }




    });


  }

  async updateCamping(video) {

    video.done = video.done ? video.done : [];
    video.done.push(this.user)
    if (video.done.length == video.view)
      video.expired = true;

    await this.subscribes.updateSubscripe(video.key, video)

    await this.UpdateUSerPoints((+video.point / +video.view) - ((+video.point / +video.view) * 0.2), video.channel.channelId);

  }


  UpdateUSerPoints(point, video?) {
    this.firebaseService.getDataOfUser(this.user).then(e => {
      let user = e.docs[0].data();
      if (video) {
        user.videos = user.videos ? user.videos : [];
        user.videos.push(video)
        user.points = user.points ? user.points : {};
        user.points[video] = point;

      }
      let UserEdited = {
        ...user,
        point: e.docs[0].data().point + point
      }
      // document.getElementById('point').textContent = e.docs[0].data().point + point;

      // e.docs[0].data().point + points;
      this.firebaseService.updateUser(UserEdited)
      this.presentAlert("you have got " + point + " points")

    });
  }

  async presentAlert(title) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: title,
    });

    await alert.present();

  }


}

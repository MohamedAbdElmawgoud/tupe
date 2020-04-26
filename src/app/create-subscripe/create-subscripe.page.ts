import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { YoutubeService } from '../firebase/youtube';
import { subscribesService } from '../firebase/subscripe';
import { countryList, videos } from './country'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-create-subscripe',
  templateUrl: './create-subscripe.page.html',
  styleUrls: ['./create-subscripe.page.scss'],
})
export class CreateSubscripePage implements OnInit {
  user;
  step = 0;
  countries = countryList;
  videos = videos;
  userChannel: any = {};
  Views = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
  seconds = [45,
    60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450,
    480, 510, 540, 570, 600, 900, 1200, 1500, 1800,
    2100, 2400, 2700, 3000, 3300, 3600
  ];
  
  points = 3000;
  durations;
  constructor(private userService: FirebaseService, private youtube: YoutubeService,
    private alertController: AlertController,
    private subscribes: subscribesService,
    private route: Router,
    private translate: TranslateService,


  ) {

  }

  async ngOnInit() {
    this.user = (await this.userService.getDataOfUser()).docs[0].data()
    this.user.channel = null;
    if (!this.user.channel) {
      this.step = 1;
    } else {
      this.userChannel = this.user.channel

    }
  }
  async  videoChange(e) {
    let scrubbed = e.target.value.slice(e.target.value.indexOf('=') + 1)
    if (e.target.value.search('=') == -1) {
      scrubbed = e.target.value.slice(e.target.value.indexOf('be/') + 3)
    }
    let videoData: any = await this.youtube.getVideoData(scrubbed)
    console.log("videoData" , videoData);
    
    this.userChannel.video = scrubbed;
    if (videoData.items[0]) {
      let channelData: any = await this.youtube.getChannelData(videoData.items[0].snippet.channelId)
    this.userChannel.channelId= videoData.items[0].snippet.channelId;
      this.durations = this.convert_time(videoData.items[0].contentDetails.duration)
      this.userChannel.channel = channelData.items[0].snippet;

    } else {
      this.presentAlert('Please add a valid video')
    }


  }
  convert_time(duration) {
    var a = duration.match(/\d+/g);

    if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
        a = [0, a[0], 0];
    }

    if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
        a = [a[0], 0, a[1]];
    }
    if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
        a = [a[0], 0, 0];
    }

    duration = 0;

    if (a.length == 3) {
        duration = duration + parseInt(a[0]) * 3600;
        duration = duration + parseInt(a[1]) * 60;
        duration = duration + parseInt(a[2]);
    }

    if (a.length == 2) {
        duration = duration + parseInt(a[0]) * 60;
        duration = duration + parseInt(a[1]);
    }

    if (a.length == 1) {
        duration = duration + parseInt(a[0]);
    }
    return duration
}
  async saveStepOne(c, v) {

    if (this.userChannel.channel) {
      let user = this.userService.getDataOfUser(this.user.uid).then(e => {

        let UserEdited = {
          ...e.docs[0].data(),
          channel: this.userChannel
        }
        this.userService.updateUser(UserEdited);
        this.step = 2
      });
    } else {

    }

  }


  async createComp(sec, view) {

    if (this.user.point < this.points) {
      this.presentAlert("You don't have enough points")
      return
    }

    if (this.durations < +sec.el.value) {
      this.presentAlert(this.translate.instant("You must choose valid duration"))
      return
    }
    let user = await this.user;

    let camping = {
      view: view.el.value,
      ListOfUserDoneIt: [],
      second: sec.el.value,
      point: this.points,
      channel: this.userChannel,
      createdData: Date.now(),
      ownerId: user.uid
    }
    this.UpdateUSerPoints(-this.points)


    //  
    this.subscribes.createSubscribe(camping);
    this.presentAlert('Added success');
    this.route.navigate([''])


  }
  onChange(sec, view) {
    console.log(sec.el.value, view.el.value);
    this.points = +(sec.el.value * view.el.value * 0.1 * 5) + (view.el.value * 270)

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

  UpdateUSerPoints(points) {
    console.log('updatePoint', points)
    let user = this.userService.getDataOfUser(this.user.uid).then(e => {

      let UserEdited = {
        ...e.docs[0].data(),
        point: e.docs[0].data().point + points
      }
      this.userService.updateUser(UserEdited)
    });

  }
}



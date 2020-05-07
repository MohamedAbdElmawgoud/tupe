import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService, } from "src/app/firebase/firebase.service";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { SettingService } from "src/app/firebase/setting.service";

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.page.html',
  styleUrls: ['./create-comp.page.scss'],
})

export class CreateCompPage implements OnInit {
  showPoint: any;

  id: string;
  Views = [10, 50, 100, 150, 200, 250, 300, 350, 400, 450
    , 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]
  seconds = [45,
    60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450,
    480, 510, 540, 570, 600, 900, 1200, 1500, 1800,
    2100, 2400, 2700, 3000, 3300, 3600
  ]
  likes = 10;
  Subscribe = 10;
  view = 10;
  type: string;
  needed: number;
  ListOfUserDoneIt: string[];
  camping: camping;
  sec = 45;
  point = this.view * this.sec;
  video;
  videoId;
  userTotalPoint;
  user;
  status = false;
  duration;
  constructor(private firebaseService: FirebaseService,
    private alertController: AlertController,
    private datePipe: DatePipe,
    private comp: CampingsService,
    private router: ActivatedRoute,
    private storage: Storage,
    private route: Router,
    private translate: TranslateService,
    private firebase: FirebaseService,
    private setting :SettingService,
    
  ) { }

  async ngOnInit() {
    this.getPoint()
    this.router.queryParamMap.subscribe(res => {
      this.type = res.get('type');
    })
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    let user = await this.storage.get('User');

    this.user = (await this.firebaseService.getDataOfUser(user)).docs[0].data()
    console.log(this.user);

  }

  getPoint() {
    this.firebaseService.getDataOfUser(this.user).then(point => {
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }

  getVideo(video) {
    if (/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/.test(video.el.value)) {
      this.video = video.el.value;

      let scrubbed = this.video.slice(this.video.indexOf('=') + 1)
      if (this.video.search('=') == -1) {
        scrubbed = this.video.slice(this.video.indexOf('be/') + 3)
      }
      // abc 123 Howdy
      this.videoId = scrubbed;
      console.log('video is ', scrubbed)
    } else {
      let title = this.translate.instant('please add a youtube url')
      this.presentAlert(title)

    }

  }





  Onlikes(event) {
    this.likes = event.target.value;
    //  console.log('selecte is ', event.target.value)
  }
  OnSubscribe(event) {
    this.Subscribe = event.target.value;
    //  console.log('selecte is ', event.target.value)
  }
  Onview(event) {
    this.view = event.target.value;
    this.point = this.view * this.sec
    //  console.log('selecte is ', event.target.value)
  }
  Onsec(event) {
    this.sec = event.target.value;
    this.point = this.view * this.sec
    //  console.log('selecte is ', event.target.value)
  }
  async  createComp() {
    
    

    if (this.duration < this.sec) {
      let title = this.translate.instant("You must choose valid duration")
      this.presentAlert(title) 
      return

    }
    
    if (this.status == true) {
      if (this.user.point < this.point) {
        let title = this.translate.instant("You don't have enough points")
        this.presentAlert(title)
        return
      }
      let user = await this.storage.get('User');

      this.camping = {
      
        view: this.view,
        type: 'view',
        
        ListOfUserDoneIt: [],
        second: this.sec,
        point: this.point,
        videoUrl: this.videoId,
        createdData: Date.now(),
        ownerId: user
      }
      let status;
      this.firebase.getDataOfUser(user).then(status =>{
        status = status.docs[0].data().vip.status
        
        if(status){
          this.setting.getsettingsList((res => 
            res)).snapshotChanges().pipe(
              map((changes: Array<any>) =>
                changes.map(c =>
                  ({ key: c.payload.key, ...c.payload.val() })
                )
              )
            ).subscribe( async res =>{
              let discountVip= 1-( res[res.length-1].discountVip/100 +res[res.length-1].discountAll/100)
              console.log('discount vip',discountVip)
          this.UpdateUSerPoints(-(this.point*discountVip));
        
        });
        }
       if(!status){
        this.setting.getsettingsList((res => 
          res)).snapshotChanges().pipe(
            map((changes: Array<any>) =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe( async res =>{
            let discount= 1- res[res.length-1].discountAll/100
            console.log('discount',discount)
         if (discount <1){
          this.UpdateUSerPoints(-(this.point*discount));
         
         }
         else{
          this.UpdateUSerPoints(-this.point);
        
         }
          
        });
        }
       
      })
     
    
      //  
      
      
      this.route.navigate([''])

    }
    else {
      let title = this.translate.instant('please play your video')
      this.presentAlert(title)
    }

  }
  changeStatus($event) {
    this.duration = $event.target.playerInfo.duration;
    setInterval(() => {
      if (this.status == false) {
        if ($event.target.playerInfo.currentTime > 0) {
          console.log('event is', $event.target.playerInfo.currentTime)
          this.status = true;
        }
      }

    }, 1000)
  }
  UpdateUSerPoints(points) {
    let lenOfComp;
    console.log('updatePoint', points)
    let user = this.firebaseService.getDataOfUser(this.user.uid).then(e => {
console.log('user before edit',e.docs[0].data())
      let UserEdited = {
        ...e.docs[0].data(),
        point: e.docs[0].data().point + points
      }
      console.log('user Edit', UserEdited)
      this.firebaseService.updateUser(UserEdited);
      this.comp.createcamping(this.camping);
      let title = this.translate.instant('Added success')
      this.presentAlert(title);
    });
    this.comp.getcampingsList((res =>
      res.orderByChild('ownerId')
        .equalTo(this.user.uid))).snapshotChanges().pipe(
          map((changes: Array<any>) =>
            changes.map(c =>
              ({ key: c.payload.key, ...c.payload.val() })
            )
          )
        ).subscribe(e => {
          lenOfComp = e.length;
          if (lenOfComp == 5) {
            let title = this.translate.instant('You have maximum Of compaign')
            this.presentAlert(title)
          }


        })

  
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

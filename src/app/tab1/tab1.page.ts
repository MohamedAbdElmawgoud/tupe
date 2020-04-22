import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { AlertController } from '@ionic/angular';
import {  TranslateLoader, TranslateService } from  '@ngx-translate/core';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { map } from "rxjs/operators";
import { StorageService } from '../storageService/storage.service';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showPoint: any;
  user: any;
  view = [];
  viewer = [];
  done=0;
  createdDate = [];
  uid: string;
  compaignValue = [];
  points: number;
  type: any;
  userProfile: any = null;
  
  compaign = false;
    constructor(
    private platform: Platform,
    private firebase:FirebaseService,
    private translate:TranslateService,
    private campingsService: CampingsService,
    public alertController: AlertController ,
    private storage: StorageService,
    private admob: AdMobPro,
    public router: Router) {
  
  }
 async ngOnInit(){
  // await this.admob.createBanner.show({
  //   id:  "ca-app-pub-7175438051295681/3187780553",
    
  // })

  // this.admob.createBanner({adId: 
  //   "ca-app-pub-7175438051295681/3187780553"
  // })
  // .then(() => { this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER); });
    this.user = await this.storage.getUserId();
    this.getPoint()
    // this.firebase.getDataOfUser().subscribe(e=>{
    //   this.points = e.point;
    //   console.log('ee',this.points);
    // });
      this.getUserId()
     
      this.getCompinge()
  }

  getPoint(){
    this.firebase.getDataOfUser(this.user).then(point =>{
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
   googleSignin() {
    this.firebase.googleSignin();
   }
  
  getCompinge(){
    this.compaignValue = []
    let done =0;
    this.storage.getUserId().then(user=>{
      if(!user){
        console.log('go to logIn')
         this.router.navigate(['log-in']);
       }
       else{   
         let compaign= this.campingsService.getcampingsList((res => 
          res.orderByChild('ownerId')
          .equalTo(user))).snapshotChanges().pipe(
            map((changes: Array<any>) =>
              changes.map(c =>
                ({ key: c.payload.key, ...c.payload.val() })
              )
            )
          ).subscribe(comp => {
        this.compaignValue = comp
          comp.forEach(element => {
            //this.compaignValue.push(element)
            //this.view.push(element.view)
            
              this.viewer.push(element.done)
            this.done=element.done? element.done.length : 0
            this.view.push(this.done);
          this.createdDate.push(element.createdData) 
          this.compaign =true;   
          });
           // console.log(comp);
         
           console.log('compaignValue is', this.compaignValue )
          });
       }
        //return user;
      })
      
     
 
  }
  getDetailsOfComp(createdate ){
    this.router.navigate(['details-campaign'] , {queryParams : { data: createdate.key } });
  }
  getUserId(){

  }
  async createCompinge() {
    const alert = await this.alertController.create({
      header: this.translate.instant('select the camping type'),
      inputs: [
       
        {
          name: 'view for you video',
          type: 'radio',
          label:  this.translate.instant('view for your video'),
          value: 'video'
        },
        {
          name: 'radio6',
          type: 'radio',
          label:  this.translate.instant('likes or subscribes'),
          value: 'channel'
        }
      ],
      buttons : [
        {
          text :  this.translate.instant("select")
        }
      ]
    });

    await alert.present();

    alert.onDidDismiss().then(e=>{
      if(e.data){
        this.router.navigate(['create-comp'] , {
          queryParams : {
            type : e.data.values
          }
        });

      }
      
    })

  // this.presentModal();
   
    
  }
  
}

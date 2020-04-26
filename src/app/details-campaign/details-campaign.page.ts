import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { map } from "rxjs/operators";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details-campaign',
  templateUrl: './details-campaign.page.html',
  styleUrls: ['./details-campaign.page.scss'],
})
export class DetailsCampaignPage implements OnInit {
  user: any;
  showPoint: any;
  key: any;
  done: any;
  view: any;
  compdata: any;
  compInfo: any;
  data: any;
  createdata = 1587206533125;
  photoUrl = 'https://lh3.googleusercontent.com/a-/AOh14Git2em9CyfYQAcZGc3EvPs189RFj551ZRkJvDXrjw';
  displayName = 'Nader Medhat';
  viewers = [];
  campId;
  constructor(
    private firebase: FirebaseService,
    private router: Router,
    public translate: TranslateService,
    private alertController: AlertController,
    private campingsService: CampingsService,
    private route: ActivatedRoute,
    private storage: Storage) { }

  async ngOnInit() {
    this.user = await this.storage.get('User');
    this.getPoint()
    this.data = this.route
      .queryParamMap
      .subscribe(v => {
        this.campId = v.get('data');
        this.getCompain(v.get('data'))

      });
  }

  getPoint() {
    this.firebase.getDataOfUser(this.user).then(point => {
      this.showPoint = point.docs[0].data().point
    })
    return this.showPoint
  }
  getCompain(createdata) {
    this.campingsService.getcampingsList((res =>
      res.orderByChild('key')
        .equalTo(createdata))).snapshotChanges().pipe(
          map((changes: Array<any>) =>
            changes.map(c =>
              ({ key: c.payload.key, ...c.payload.val() })
            )
          )
        ).subscribe(async comp => {
          this.compInfo = comp[0];
          this.getUser(comp[0].ownerId)
          this.done = comp[0].done.length
          this.compdata = comp[0].createdData;
          this.key = comp[0].key
          this.view = comp[0].view
          // comp[0].done.forEach( async (ele) => {

          for (const ele of comp[0].done) {
            console.log(ele);
            
            let user = await this.getUser(ele)
            if(user.docs[0]){
              this.viewers.push(user.docs[0].data())
            }            
          }


          // })
        });
  }
  getUser(id) {
    return this.firebase.getDataOfUser(id);
  }
  deleteComp() {
    this.campingsService.deletecamping(this.campId)
    let text = this.translate.instant('compaign deleted')
    this.presentAlert(text)
    this.router.navigate([''])
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

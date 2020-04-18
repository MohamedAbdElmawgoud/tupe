import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampingsService, camping } from "src/app/firebase/campings.service";
import { map } from "rxjs/operators";
import { FirebaseService } from "src/app/firebase/firebase.service";

@Component({
  selector: 'app-details-campaign',
  templateUrl: './details-campaign.page.html',
  styleUrls: ['./details-campaign.page.scss'],
})
export class DetailsCampaignPage implements OnInit {
  done: any;
  view: any;
  compdata: any;
  compInfo: any;
  data: any;
  createdata= 1587206533125;
photoUrl= 'https://lh3.googleusercontent.com/a-/AOh14Git2em9CyfYQAcZGc3EvPs189RFj551ZRkJvDXrjw';
displayName ='Nader Medhat';

  constructor(
    private firebase:FirebaseService,    
    private router: Router, 
    private campingsService: CampingsService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getCompain(this.createdata)
    // this.data = this.route
    // .data
    // .subscribe(v => {
    //   this.createdata = v;
    //   console.log(this.createdata)
    // });
  }
getCompain(createdata){
  let compaign= this.campingsService.getcampingsList((res => 
    res.orderByChild('createdData')
    .equalTo(createdata))).snapshotChanges().pipe(
      map((changes: Array<any>) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(comp => {
  this.getUser(comp[0].ownerId)
  this.done=comp[0].done.length
   this.compdata = comp[0].createdData;
   this.view = comp[0].view
      console.log('comp is ',comp[0]);
    
    });
}
async getUser(id){
  let user =await this.firebase.getDataOfUser(id);
  console.log('sadazz',user)
}
}

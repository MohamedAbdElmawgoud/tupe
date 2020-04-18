import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-campaign',
  templateUrl: './details-campaign.page.html',
  styleUrls: ['./details-campaign.page.scss'],
})
export class DetailsCampaignPage implements OnInit {
  data: any;
  createdata: any;


  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.data = this.route
    .data
    .subscribe(v => {
      this.createdata = v;
      console.log(this.createdata)
    });
  }

}

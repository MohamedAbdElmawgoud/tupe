import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsCampaignPageRoutingModule } from './details-campaign-routing.module';

import { DetailsCampaignPage } from './details-campaign.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DetailsCampaignPageRoutingModule
  ],
  declarations: [DetailsCampaignPage]
})
export class DetailsCampaignPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VipAccountPageRoutingModule } from './vip-account-routing.module';

import { VipAccountPage } from './vip-account.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    VipAccountPageRoutingModule
  ],
  declarations: [VipAccountPage]
})
export class VipAccountPageModule {}

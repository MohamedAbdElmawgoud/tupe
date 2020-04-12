import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPointPageRoutingModule } from './buy-point-routing.module';

import { BuyPointPage } from './buy-point.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,    
    IonicModule,
    BuyPointPageRoutingModule
  ],
  declarations: [BuyPointPage]
})
export class BuyPointPageModule {}

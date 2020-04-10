import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPointPageRoutingModule } from './buy-point-routing.module';

import { BuyPointPage } from './buy-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPointPageRoutingModule
  ],
  declarations: [BuyPointPage]
})
export class BuyPointPageModule {}

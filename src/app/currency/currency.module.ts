import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencyPageRoutingModule } from './currency-routing.module';

import { CurrencyPage } from './currency.page';
import { TranslateModule } from  '@ngx-translate/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,    
    IonicModule,
    CurrencyPageRoutingModule
  ],
  declarations: [CurrencyPage],
  providers : [
    AdMobFree
  ]
})
export class CurrencyPageModule {}

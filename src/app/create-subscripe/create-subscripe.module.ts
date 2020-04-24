import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSubscripePageRoutingModule } from './create-subscripe-routing.module';

import { CreateSubscripePage } from './create-subscripe.page';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    CreateSubscripePageRoutingModule,
    HttpClientModule
  ],
  declarations: [CreateSubscripePage]
})
export class CreateSubscripePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';
import { AngularFireModule } from '@angular/fire'; 
import { config } from 'src/environments/environment';
import {
  InAppBrowser,
} from "@ionic-native/in-app-browser/ngx";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireModule.initializeApp(config),
    LogInPageRoutingModule,
  ],
  declarations: [LogInPage],
  providers :[
    InAppBrowser,
  ]
})
export class LogInPageModule {}

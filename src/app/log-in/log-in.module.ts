import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

import { LogInPage } from './log-in.page';
import { AngularFireModule } from '@angular/fire'; 
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { config } from 'src/environments/environment';
 
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
    
    GooglePlus,
    FirebaseAuthentication
  ]
})
export class LogInPageModule {}

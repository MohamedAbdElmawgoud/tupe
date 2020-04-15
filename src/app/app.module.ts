import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy ,NavParams} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireModule } from '@angular/fire'; 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { HttpClientModule, HttpClient } from  '@angular/common/http';

import { TranslateModule, TranslateLoader, TranslateService } from  '@ngx-translate/core';
import { TranslateHttpLoader } from  '@ngx-translate/http-loader';
import { IonicStorageModule } from "@ionic/storage";

export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/translate/', '.json');
}
const config = {
  apiKey: "AIzaSyDlWNjH4XsEHVkWceFtavf8e7Qq9fKgQwU",
  authDomain: "fir-7e3e0.firebaseapp.com",
  databaseURL: "https://fir-7e3e0.firebaseio.com",
  projectId: "fir-7e3e0",
  storageBucket: "fir-7e3e0.appspot.com",
  messagingSenderId: "941729484801",
  appId: "1:941729484801:web:aabacc4af4907bc1203000",
  measurementId: "G-TFXWLDL6QG"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule, 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    GooglePlus,
    NavParams,
    SplashScreen,
    TranslateService,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [TranslateModule],    
  bootstrap: [AppComponent]
})
export class AppModule {}

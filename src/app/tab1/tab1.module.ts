import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TranslateModule } from  '@ngx-translate/core';
import { AngularFireModule } from '@angular/fire'; 
import { CreateCompPageModule } from "src/app/create-comp/create-comp.module";
import { config } from 'src/environments/environment';

 

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
   // CreateCompPageModule,
    TranslateModule,  
    AngularFireModule.initializeApp(config),  
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TranslateModule } from  '@ngx-translate/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { Storage } from '@ionic/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,  
    YouTubePlayerModule,      
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  providers : [
    // Storage
  ]
})
export class Tab3PageModule {}

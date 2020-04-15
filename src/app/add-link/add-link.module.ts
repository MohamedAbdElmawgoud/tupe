import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLinkPageRoutingModule } from './add-link-routing.module';

import { AddLinkPage } from './add-link.page';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    YouTubePlayerModule,
    IonicModule,
    AddLinkPageRoutingModule
  ],
  declarations: [AddLinkPage]
})

export class AddLinkPageModule {}

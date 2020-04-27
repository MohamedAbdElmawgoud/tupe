import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { IonicModule } from '@ionic/angular';

import { InviteFriendsPageRoutingModule } from './invite-friends-routing.module';

import { InviteFriendsPage } from './invite-friends.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,        
    InviteFriendsPageRoutingModule
  ],
  declarations: [InviteFriendsPage],
  providers : [
    Clipboard
  ]
})
export class InviteFriendsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReedemInvitePageRoutingModule } from './reedem-invite-routing.module';

import { ReedemInvitePage } from './reedem-invite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReedemInvitePageRoutingModule
  ],
  declarations: [ReedemInvitePage]
})
export class ReedemInvitePageModule {}

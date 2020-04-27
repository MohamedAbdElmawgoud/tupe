import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReedemInvitePage } from './reedem-invite.page';

const routes: Routes = [
  {
    path: '',
    component: ReedemInvitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReedemInvitePageRoutingModule {}

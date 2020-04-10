import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VipAccountPage } from './vip-account.page';

const routes: Routes = [
  {
    path: '',
    component: VipAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VipAccountPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyPointPage } from './buy-point.page';

const routes: Routes = [
  {
    path: '',
    component: BuyPointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPointPageRoutingModule {}

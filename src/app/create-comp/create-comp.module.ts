import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCompPageRoutingModule } from './create-comp-routing.module';

import { CreateCompPage } from './create-comp.page';
import { TranslateModule } from  '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule, 
    IonicModule,
    CreateCompPageRoutingModule
  ],
  declarations: [CreateCompPage]
})
export class CreateCompPageModule {}

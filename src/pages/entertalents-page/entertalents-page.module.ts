import { EnterTalentsPage } from './entertalents-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    EnterTalentsPage,
  ],
  imports: [
    IonicPageModule.forChild(EnterTalentsPage),
  ],
  exports: [
    EnterTalentsPage
  ],
  entryComponents:[EnterTalentsPage]
})

export class EnterTalentsPageModule { }

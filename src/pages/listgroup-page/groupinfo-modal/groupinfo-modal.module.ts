import { GroupInfoModalPage } from './groupinfo-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    GroupInfoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupInfoModalPage),
  ],
  exports: [
    GroupInfoModalPage
  ]
})

export class GroupInfoModalPageModule { }

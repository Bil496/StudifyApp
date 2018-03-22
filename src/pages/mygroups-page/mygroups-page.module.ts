import { MyGroupsPage } from './mygroups-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MyGroupsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGroupsPage),
  ],
  exports: [
    MyGroupsPage
  ]
})

export class MyGroupsPageModule { }

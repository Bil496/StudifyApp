import { ListGroupPage } from './listgroup-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    ListGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(ListGroupPage),
  ],
  exports: [
    ListGroupPage
  ]
})

export class ListGroupPageModule { }

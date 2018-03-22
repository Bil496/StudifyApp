import { RequestsPage } from './requests-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    RequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestsPage),
  ],
  exports: [
    RequestsPage
  ]
})

export class RequestsPagePageModule { }

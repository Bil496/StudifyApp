import { SharedModule } from '../../app/shared.module';
import { NgModule } from '@angular/core';
import { MainPage } from './main-page';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    SharedModule
  ],
  exports: [
    MainPage
  ]
})

export class MainPageModule { }

import { ParallaxHeaderDirectiveModule } from './../../components/parallax-header/parallax-header.module';
import { LogoutPage } from './logout-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    LogoutPage,
  ],
  imports: [
    IonicPageModule.forChild(LogoutPage),
    ParallaxHeaderDirectiveModule
  ],
  exports: [
    LogoutPage
  ]
})

export class ProfileFivePageModule { }

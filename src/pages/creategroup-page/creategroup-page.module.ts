import { CreateGroupPage } from './creategroup-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CreateGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateGroupPage),
  ],
  exports: [
    CreateGroupPage
  ],
  entryComponents: [ CreateGroupPage ]
})

export class CreateGroupPageModule { }

import { CreateTopicPage } from './createtopic-page';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    CreateTopicPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateTopicPage),
  ],
  exports: [
    CreateTopicPage
  ],
  entryComponents: [ CreateTopicPage ]
})

export class CreateTopicPageModule { }

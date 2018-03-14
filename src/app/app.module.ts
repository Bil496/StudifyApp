import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';
import { CreateTopicPage } from '../pages/createtopic-page/createtopic-page';
import { EnterTalentsPage } from '../pages/entertalents-page/entertalents-page';
import { ListGroupPage } from '../pages/listgroup-page/listgroup-page';
import { CreateGroupPage } from '../pages/creategroup-page/creategroup-page';
import { ProfileFivePageModule } from '../pages/profile-page/profile-page.module';

@NgModule({
  declarations: [
    CreateTopicPage,
    EnterTalentsPage,
    ListGroupPage,
    CreateGroupPage,
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    ProfileFivePageModule,
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreateTopicPage,
    EnterTalentsPage,
    ListGroupPage,
    CreateGroupPage,
  ],
  providers: [PROVIDERS, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})  
export class AppModule { }

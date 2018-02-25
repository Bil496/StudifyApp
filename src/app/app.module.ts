import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';
import { CreateTopicPage } from '../pages/createtopic-page/createtopic-page';

@NgModule({
  declarations: [
    CreateTopicPage,
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreateTopicPage,
  ],
  providers: [PROVIDERS, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

// Global state (used for theming)
import { AppState } from './app.global';

// Providers
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';

// Ionic native providers
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Modules
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

export const MODULES = [
  SwingModule,
  BrowserModule,
  HttpClientModule,
  HttpModule,
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  AppState,
  // Ionic native specific providers
  StatusBar,
  SplashScreen
];

export const DIRECTIVES = [
  SlidingDrawer,
  Autosize,
];

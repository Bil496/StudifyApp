import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { MainPage } from '../main-page/main-page';
import { LoginPage } from '../login-page/login-page';

@IonicPage()
@Component({
  selector: 'page-logout-page',
  templateUrl: 'logout-page.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController) { 
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

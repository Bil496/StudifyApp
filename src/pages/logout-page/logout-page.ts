import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { MainPage } from '../main-page/main-page';

@IonicPage()
@Component({
  selector: 'page-logout-page',
  templateUrl: 'logout-page.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController) { 

    this.navCtrl.setRoot(MainPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

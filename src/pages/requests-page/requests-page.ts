import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, ResponseType } from '@angular/http';
import { map } from 'rxjs/operators';
import { ProfilePage } from '../profile-page/profile-page';


@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests-page.html'
})
export class RequestsPage {
  items = [
    {
      userId: 1,
      title: 'Onur Yıldız',
    },
    {
      userId: 2,
      title: 'Görkem Mülayim',
    },
    {
      userId: 3,
      title: 'Ahmet Selim Kaya',
    },
  ];

  items2;
  constructor(public navCtrl: NavController, http: HttpClient, public alertCtrl: AlertController,
              public modalCtrl: ModalController) {

    var head = new HttpHeaders();
    head.append('Access-Control-Allow-Origin' , '*');
    head.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    head.append('Accept','application/json');
    head.append('content-type','application/json');
    this.items2 = this.items;
//    http.get('http://localhost:8100/#/home', {headers: head, responseType: 'text'} ).pipe().subscribe(res => console.log(res.toString()));
  }

  viewReddet(item) {
    let al = this.alertCtrl.create({
      title: 'Studify',
      subTitle: 'Kullanıcı reddedildi.',
      buttons: ['Tamam']
    });

    al.present();
  }

  viewKabul(item) {
    let al = this.alertCtrl.create({
      title: 'Studify',
      subTitle: 'Kullanıcı kabul edildi.',
      buttons: ['Tamam']
    });

    al.present();
  }

  userClicked(item){
    console.log(item);
    localStorage.setItem("stud-showProfile", item.userId);
    console.log(item.userId);
    this.navCtrl.push(ProfilePage);
  }

}

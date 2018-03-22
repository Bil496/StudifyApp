import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, ResponseType } from '@angular/http';
import { map } from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-mygroups',
  templateUrl: 'mygroups-page.html'
})
export class MyGroupsPage {
  items = [
    {
      id: 1,
      imageUrl: 'assets/img/lists/stadium.jpg',
      title: '111deyiz',
      place: 'bahce',
      date: '11:24'
    },
    {
      id: 2,
      imageUrl: 'assets/img/lists/stadium-3.png',
      title: 'Grup Fuaye',
      place: 'kutuphane',
      date: '15:36'
    },
    {
      id: 3,
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Sabahlamali',
      place: '112',
      date: '18:09'
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


  viewTerket(item) {
    let al = this.alertCtrl.create({
      title: 'Studify',
      subTitle: 'Grubu başarıyla terkettiniz.',
      buttons: ['Tamam']
    });

    al.present();
  }

  viewBilgi(item) {
    console.log(item);
    localStorage.setItem("stud-showgroup", item.id);
    this.modalCtrl.create('GroupInfoModalPage', null, { cssClass: 'inset-modal' })
    .present();
  }

}

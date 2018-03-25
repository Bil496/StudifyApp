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
  items;
  items2;
  constructor(public navCtrl: NavController, http: HttpClient, public alertCtrl: AlertController,
              public modalCtrl: ModalController) {
    
      this.items = JSON.parse(localStorage.getItem("stud-requestList"));
  }

  viewReddet(item) {
    let al = this.alertCtrl.create({
      title: 'Studify',
      subTitle: 'Kullanıcı reddedildi.',
      buttons: ['Tamam']
    });

    al.present();

    this.sil(item);
  }

  viewKabul(item) {
    let al = this.alertCtrl.create({
      title: 'Studify',
      subTitle: 'Kullanıcı kabul edildi.',
      buttons: ['Tamam']
    });

    al.present();
    this.sil(item);
  }

  userClicked(item){
    console.log(item);
    localStorage.setItem("stud-showProfile", item.userId);
    console.log(item.userId);
    this.navCtrl.push(ProfilePage);
  }

  sil(item){

    for(var i = 0; i < this.items.length; i++ )
    if(this.items[i].reqId == item.reqId){
          this.items.splice(i,1); break;
        }
  
    localStorage.setItem("stud-requestList",JSON.stringify(this.items));
  }

}

/*

    var head = new HttpHeaders();
    head.append('Access-Control-Allow-Origin' , '*');
    head.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    head.append('Accept','application/json');
    head.append('content-type','application/json');
    this.items2 = this.items;
//    http.get('http://localhost:8100/#/home', {headers: head, responseType: 'text'} ).pipe().subscribe(res => console.log(res.toString()));
  */

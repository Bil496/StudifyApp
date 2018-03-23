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
  items;
  items2;
  groups;
  constructor(public navCtrl: NavController, http: HttpClient, public alertCtrl: AlertController,public modalCtrl: ModalController) {

      var userId = localStorage.getItem("stud-userId");
      this.groups = JSON.parse(localStorage.getItem("stud-grouplist"));

      var st2:any = [];

      for(var i = 0; i < this.groups.length; i++)
                for(var j = 0; j < this.groups[i].users.length; j++)
                  if(userId == this.groups[i].users[j]){
                    st2.push(this.groups[i]);
                    break;
                  }
              
      this.items = st2;
  }

  ionViewDidEnter(){
    
      var userId = localStorage.getItem("stud-userId");
      this.groups = JSON.parse(localStorage.getItem("stud-grouplist"));
      var st2: any = [];
      for(var i = 0; i < this.groups.length; i++)
                for(var j = 0; j < this.groups[i].users.length; j++)
                  if(userId == this.groups[i].users[j]){
                    st2.push(this.groups[i]);
                    break;
                  }
              
      this.items = st2;
  }

  viewTerket(item) {
    let al = this.alertCtrl.create({
      title: 'Studify',
      subTitle: 'Grubu başarıyla terkettiniz.',
      buttons: ['Tamam']
    });

    al.present();

    var userId = localStorage.getItem("stud-userId");

    for(var i = 0; i < this.groups.length; i++ )
      if(this.groups[i].id == item.id)
        for(var j = 0; j < this.groups[i].users.length; j++)
          if(this.groups[i].users[j] == userId){
            this.groups[i].users.splice(j,1); i = this.groups.length; break;
          }
    
    localStorage.setItem("stud-grouplist",JSON.stringify(this.groups));
    this.ionViewDidEnter();
  }

  viewBilgi(item) {
    console.log(item);
    localStorage.setItem("stud-showgroup", JSON.stringify(item));
    this.modalCtrl.create('GroupInfoModalPage', null, { cssClass: 'inset-modal' })
    .present();
  }

}


/*

    var head = new HttpHeaders();
    head.append('Access-Control-Allow-Origin' , '*');
    head.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    head.append('Accept','application/json');
    head.append('content-type','application/json');
    this.items2 = this.items;
    http.get('http://localhost:8100/#/home', {headers: head, responseType: 'text'} ).pipe().subscribe(res => console.log(res.toString()));
  */
import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, ResponseType } from '@angular/http';
import { map } from 'rxjs/operators';
import { CreateGroupPage } from '../creategroup-page/creategroup-page';

@IonicPage()
@Component({
  selector: 'page-listgroup',
  templateUrl: 'listgroup-page.html'
})
export class ListGroupPage {
  items;
  items2;
  constructor(public navCtrl: NavController, http: HttpClient, public alertCtrl: AlertController,
              public modalCtrl: ModalController) {

                var tId = localStorage.getItem("stud-subtopicClicked");
                this.items2 = localStorage.getItem("stud-grouplist");
                let st2: any = [];
                for(var i = 0; i < this.items2.length; i++)
                {
                  if(this.items2[i].topicId == tId)
                    st2.push(this.items2[i]);
                }
                this.items = st2;
}

  ionViewDidEnter(){
    
    var tId = localStorage.getItem("stud-subtopicClicked");
    this.items2 = JSON.parse(localStorage.getItem("stud-grouplist"));
    let st2: any = [];
    for(var i = 0; i < this.items2.length; i++)
    {
      if(this.items2[i].topicId == tId)
        st2.push(this.items2[i]);
    }
    this.items = st2;
  }

  delete(item) {
    alert('Deleted ' + item.title);
    
    for(var i = 0; i < this.items.length; i++ )
      if(this.items[i].id == item.id)
        this.items.splice(item[i],1);
    
    localStorage.setItem("stud-grouplist",JSON.stringify(this.items));
  }

  viewKatil(item) {
    let al = this.alertCtrl.create({
      title: 'Studify',
      subTitle: 'Gruba katılma isteğiniz gönderildi. Onaylandığında bildirim alacaksınız.',
      buttons: ['Tamam']
    });

    al.present();
  }

  viewBilgi(item) {
    localStorage.setItem("stud-showgroup", JSON.stringify(item));
    this.modalCtrl.create('GroupInfoModalPage', null, { cssClass: 'inset-modal' })
    .present();
  }

  createGroupClicked(){
    this.navCtrl.push(CreateGroupPage);
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
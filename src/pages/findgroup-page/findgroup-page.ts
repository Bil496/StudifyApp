import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, ResponseType } from '@angular/http';
import { map } from 'rxjs/operators';
import { CreateTopicPage } from '../createtopic-page/createtopic-page';
import { EnterTalentsPage } from '../entertalents-page/entertalents-page';

@IonicPage()
@Component({
  selector: 'page-findgroup',
  templateUrl: 'findgroup-page.html'
})
export class FindGroupPage {
  items = [
    {
      id: 0,
      imageUrl: 'assets/img/lists/stadium.jpg',
      title: 'Group 1',
      place: '3 Subtopics',
      date: '05/06/2016',
      subTopics: [
        {
          name: "Subtopic 1",
          value: 0,
        },
        {
          name: "Subtopic 2",
          value: 0,
        },
        {
          name: "Subtopic 3",
          value: 0,
        }
      ]
    },
    {
      id: 1,
      imageUrl: 'assets/img/lists/stadium-3.png',
      title: '2018 Guz Mat 101',
      place: '4 Subtopics',
      date: '15/03/2016',
      subTopics: [
        {
          name: "Grafik Çizimi",
          value: 0,
        },
        {
          name: "Integral",
          value: 0,
        },
        {
          name: "Türev Alımı",
          value: 0,
        },
        {
          name: "Alan Hesaplama",
          value: 0,
        },
      ]
    },
    {
      id: 2,
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Gitara Giris',
      place: '2 Subtopics',
      date: '05/12/2015',
      subTopics: [
        {
          name: "Nota Bilgisi",
          value: 0,
        },
        {
          name: "Çalma Teknikleri",
          value: 0,
        },
      ]
    },
  ];

  items2;
  constructor(public navCtrl: NavController, http: HttpClient) {

    this.items2 = localStorage.getItem("stud-topiclist");
    if (!(this.items2)) {  
      localStorage.setItem("stud-topiclist",JSON.stringify(this.items));
      this.items = JSON.parse(localStorage.getItem("stud-topiclist"));
    }
    else{
      this.items = JSON.parse(this.items2);
    }
  }

  ionViewDidEnter(){
    this.items2 = localStorage.getItem("stud-topiclist");
    if (!(this.items2)) {  
      localStorage.setItem("stud-topiclist",JSON.stringify(this.items));
      this.items = JSON.parse(localStorage.getItem("stud-topiclist"));
      console.log("localde yok");
    }
    else{
      this.items = JSON.parse(this.items2);
      console.log("localde var");
    }
  }

  delete(item) {
    alert('Deleted ' + item.title);
  }

  viewComments(item) {
    alert('Viewing comments of ' + item.title);
  }

  viewPlayers(item) {
    alert('Viewing players of ' + item.title);
  }


  getItems(ev:any){
    
    let val = ev.target.value;

    this.items = this.items2.filter((item) => {
      return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });

  }

  itemTapped(event, item) {
    
    localStorage.setItem("stud-topicClicked",item.title.toString());
    localStorage.setItem("stud-subtopicClicked",item.id.toString());
    this.navCtrl.push(EnterTalentsPage);
  }

  createTopicClicked(){
    this.navCtrl.push(CreateTopicPage);
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

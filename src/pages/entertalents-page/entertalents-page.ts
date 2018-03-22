import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ListGroupPage } from '../listgroup-page/listgroup-page';
@IonicPage()
@Component({
  selector: 'page-entertalents-page',
  templateUrl: 'entertalents-page.html'
})
export class EnterTalentsPage {
  rootPage: any;
  topicId: any;
  allItems: any;
  title: string;
  items:any;
  constructor(public navCtrl: NavController) {
    this.topicId = localStorage.getItem("stud-subtopicClicked");
    this.title = localStorage.getItem("stud-topicClicked");
    this.allItems = [
      {
        id: "1",
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
        ],
      },
      {
        id: "2",
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
        ],
      },
      {
        id: "3",
        subTopics: [
          {
            name: "Nota Bilgisi",
            value: 0,
          },
          {
            name: "Çalma Teknikleri",
            value: 0,
          },
        ],
      },
    ];

    if(this.topicId == "1") this.items = this.allItems[0].subTopics;
    if(this.topicId == "2") this.items = this.allItems[1].subTopics;
    if(this.topicId == "3") this.items = this.allItems[2].subTopics;
    
  }

  findClicked(){
    console.log("find clicked");
    localStorage.setItem("stud-scores",JSON.stringify(this.items));
    this.navCtrl.push(ListGroupPage);
  }
}

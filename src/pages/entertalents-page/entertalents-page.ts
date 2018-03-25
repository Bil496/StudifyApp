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

    this.allItems = JSON.parse(localStorage.getItem("stud-topiclist"));
    for(var i = 0; i< this.allItems.length; i++)
      if(this.allItems[i].id == this.topicId)
      {
        this.items = this.allItems[i].subTopics;
        break;
      }
  }

  findClicked(){
    console.log("find clicked");
    localStorage.setItem("stud-scores",JSON.stringify(this.items));
    this.navCtrl.push(ListGroupPage);
  }
}

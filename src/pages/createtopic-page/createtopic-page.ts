import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-createtopic-page',
  templateUrl: 'createtopic-page.html'
})
export class CreateTopicPage {
  rootPage: any;
  topicName: string;
  description: string;
  subtopicNumber: any;
  subtopicString: string;

  constructor(public navCtrl: NavController) {
    this.subtopicNumber = 2;
  }


  createClicked(){
    var items = JSON.parse(localStorage.getItem("stud-topiclist"));
    var st = this.subtopicString.split(',');
    let st2: any = [];
    for(var i = 0; i < st.length; i++)
      st2.push({ name: st[i], value: '0' });

    var newItem = {
      id: items.length,
      title: this.topicName,
      place: this.subtopicNumber + " Subtopics",
      date: "20.01.2017",
      subTopics: st2
    };
    items.push(newItem);
    localStorage.setItem("stud-topiclist",JSON.stringify(items));
    //HTTP CALL HERE
    this.navCtrl.pop();
  }
}

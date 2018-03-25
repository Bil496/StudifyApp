import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MainPage } from '../main-page/main-page';

@IonicPage()
@Component({
  selector: 'page-creategroup-page',
  templateUrl: 'creategroup-page.html'
})
export class CreateGroupPage {
  rootPage: any;
  groupName: string;
  place: string;

  constructor(public navCtrl: NavController) {
  }


  createClicked(){
    console.log("topicname " + this.groupName);
    console.log("desc " + this.place);

    var items = JSON.parse(localStorage.getItem("stud-grouplist"));
    var newItem = {
      id: items.length,
      topicId: localStorage.getItem("stud-subtopicClicked"),
      title: this.groupName,
      place: this.place,
      date: "20.10",
      users: [ localStorage.getItem("stud-userId") ]
    };
    items.push(newItem);
    localStorage.setItem("stud-grouplist",JSON.stringify(items));

    //HTTP CALL HERE
    this.navCtrl.setRoot(MainPage);
  }
}

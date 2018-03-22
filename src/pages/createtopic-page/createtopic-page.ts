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
    console.log("topicname " + this.topicName);
    console.log("desc " + this.description);
    console.log("subtopicNumber " + this.subtopicNumber);
    console.log("subtopicString " + this.subtopicString);

    //HTTP CALL HERE
    this.navCtrl.pop();
  }
}

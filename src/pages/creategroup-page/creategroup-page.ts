import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

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

    //HTTP CALL HERE
    this.navCtrl.pop();
  }
}

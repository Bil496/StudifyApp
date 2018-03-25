import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage, NavController } from 'ionic-angular';
import { ProfilePage } from '../../profile-page/profile-page';

@IonicPage()
@Component({
  selector: 'page-groupinfo-modal',
  templateUrl: 'groupinfo-modal.html'
})
export class GroupInfoModalPage {
  myParam: string;
  items: any;
  rootPage: any;

  constructor(
    public viewCtrl: ViewController, params: NavParams, public navCtrl: NavController
  ) {
    this.myParam = params.get('myParam');
    var group: any;
    var users: any;
    group = JSON.parse(localStorage.getItem("stud-showgroup"));
    users = JSON.parse(localStorage.getItem("stud-userList"));
    let items2:any = [];
    group = group.users;
    for(var i = 0; i < group.length; i++)
      for(var j = 0; j < users.length; j++)
      {
        if(users[j].userId == group[i]){
          items2.push(users[j]);
          break;
        }
      }
    
    this.items = items2;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  userClicked(item){
    localStorage.setItem("stud-showProfile", item.userId);
    this.navCtrl.push(ProfilePage);
  }

}

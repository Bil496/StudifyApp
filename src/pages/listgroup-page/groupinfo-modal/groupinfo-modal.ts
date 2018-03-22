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
  allItems = [
    {
      id: "1",
      users: [
        {
          name: "Onur Yildiz",
          userId: 1,
        },
        {
          name: "Görkem Mülayim",
          userId: 2,
        },
        {
          name: "Ahmet Selim Kaya",
          userId: 3,
        },
        {
          name: "Fatih Erdem Kızılkaya",
          userId: 4,
        },
        {
          name: "Burak Uyar",
          userId: 5,
        }
      ],
    },
    {
      id: "2",
      users: [
        {
          name: "Emir Kiper",
          userId: 6,
        },
        {
          name: "Berhan",
          userId: 7,
        },
        {
          name: "Tolyboy",
          userId: 8,
        },
        {
          name: "B E R K E",
          userId: 9,
        },
      ],
    },
    {
      id: "3",
      users: [
        {
          name: "Çağdaş",
          userId: 10,
        },
        {
          name: "Evren",
          userId: 11,
        },
        {
          name: "Gerede",
          userId: 12,
        },
      ],
    },
  ];


  constructor(
    public viewCtrl: ViewController, params: NavParams, public navCtrl: NavController
  ) {
    this.myParam = params.get('myParam');
    var groupId: any;
    groupId = localStorage.getItem("stud-showgroup");

    if(groupId == "1")
    this.items = this.allItems[0].users;

    if(groupId == "2")
    this.items = this.allItems[1].users;

    if(groupId == "3")
    this.items = this.allItems[2].users;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  userClicked(item){
    console.log(item);
    localStorage.setItem("stud-showProfile", item.userId);
    console.log(item.userId);
    this.navCtrl.push(ProfilePage);
  }

}

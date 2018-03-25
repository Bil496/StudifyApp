import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {

  user =
  {
    name: 'Cosima Niehaus',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
    address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
    phone: '555 555 555',
    email: 'cosima@niehaus.com',
    whatsapp: '555 555 555',
  };


  constructor(public navCtrl: NavController) { 

    var userId: any;
    userId = localStorage.getItem("stud-showProfile");
    localStorage.setItem("stud-showProfile",localStorage.getItem("stud-userId"));
    var users = JSON.parse(localStorage.getItem("stud-userList"));
    for(var i = 0; i < users.length; i++)
      if(userId == users[i].userId){
        this.user.name = users[i].name;
        break;
      }
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

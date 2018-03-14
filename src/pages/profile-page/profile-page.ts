import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {

  user ={
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

    users= [
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
      },
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
      }
    ];

  constructor(public navCtrl: NavController) { 

    var userId: any;
    if (localStorage.getItem("stud-showProfile") === null) {
      localStorage.setItem("stud-showProfile","0");
    }
    userId = +localStorage.getItem("stud-showProfile");
    userId = userId - 1;
    if(userId < 0 ) userId = 0;
    this.user.name = this.users[userId].name;
    
    localStorage.setItem("stud-showProfile","-1");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

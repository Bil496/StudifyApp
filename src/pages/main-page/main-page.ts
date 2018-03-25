import { Component } from '@angular/core';
import { NavController, IonicPage, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-main-page',
  templateUrl: 'main-page.html',
})
export class MainPage {
  items = [
    {
      name: 'Studify Nedir',
      description: 'Lorem ipsum dolor sit amet. You can check our repository at https://github.com/Bil496/StudifyApp',
      imageUrl: 'https://avatars3.githubusercontent.com/u/17679464?s=460&v=4',
    },
    {
      name: 'Nasıl Kullanılır',
      description: 'StudifyApp\'i kullanmak için:',
      step1: '1- Find Groups Sayfasına gidin.',
      step2: '2- Aradığınız topic\'i seçin ya da oluşturun. ',
      step3: '3- Topic seçip bilgi seviyenize göre kendinize skor verin.',
      step4: '4- Karşınıza çıkan grup listesi size en uygun olan en üstte olacak şekilde sıralanmış olacaktır. Katılmak istediğiniz grubu sola kaydırıp katıl butonuna \
      tıklayın ya da bilgi butonuna basarak gruptakiler hakkında bilgi edinin.',
      step5: '5- Katıl butonuna tıkladığınızda o gruptaki her bir üyeye bildirim gidecek ve herhangi biri sizi onayladığında gruba katılmış olacaksınız.',
      step6: '6- Katıldığınız grupları My Groups sayfasından görüntüleyebilirsiniz.',
      imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479487289/belgrade-serbia-fortress-WTG2017.jpg?itok=rw8c4Esh',
    },
    {
      name: 'İletişim',
      description: 'Bizlere github repositorymizden ulaşabilirsiniz',
      imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479487289/belgrade-serbia-fortress-WTG2017.jpg?itok=rw8c4Esh',
    },
    {
      name: 'Hakkımızda',
      description: 'TOBB ETÜ Bilgisayar Mühendisliği 4. Sınıf 5 arkadaşız. Bitirme projesi dersi için bir araya geldik ve ortaya böyle bir ürün çıkardık. ',
      imageUrl: '',
    }
  ];

  users = [
    {
      userId: 0,
      name: "Onur Yildiz",
      username: "oyildiz"
    },
    {
      userId: 1,
      name: "Burak Uyar",
      username: "buyar"
    },
    {
      userId: 2,
      name: "Fatih Erdem Kizilkaya",
      username: "fekizilkaya"
    },
    {
      userId: 3,
      name: "Ahmet Selim Kaya",
      username: "askaya"
    },
    {
      userId: 4,
      name: "Gorkem Mulayim",
      username: "gmulayim"
    },
    {
      userId: 5,
      name: "Cagdas Evren Gerede",
      username: "cegerede"
    }
  ];

  groups = [
    {
      id: 0,
      topicId: 0,
      imageUrl: 'assets/img/lists/stadium.jpg',
      title: '111deyiz',
      place: 'bahce',
      date: '11:24',
      users: [ 0,1,2 ]
    },
    {
      id: 1,
      topicId: 0,
      imageUrl: 'assets/img/lists/stadium-3.png',
      title: 'Grup Fuaye',
      place: 'kutuphane',
      date: '15:36',
      users: [1,2]
    },
    {
      id: 2,
      topicId: 0,
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Sabahlamali',
      place: '112',
      date: '18:09',
      users: [0,3,4]
    },
    {
      id: 3,
      topicId: 1,
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Sabahlamali',
      place: '112',
      date: '08:14',
      users: [0,1,2,3]
    },
    {
      id: 4,
      topicId: 1,
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Yurt Grubu',
      place: 'yurt',
      date: '18:09',
      users: [2,3,4]
    },
    {
      id: 5,
      topicId: 2,
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Kutuphane',
      place: '112',
      date: '15:02',
      users: [0,1,2,3,4]
    },
  ];

  requests = [
    {
      reqId: 0,
      userId: 0,
      username: 'Onur Yıldız',
      groupname: "Group1"
    },
    {
      reqId: 1,
      userId: 4,
      username: 'Görkem Mülayim',
      groupname: "Mat101 Boys"
    },
    {
      reqId: 2,
      userId: 3,
      username: 'Ahmet Selim Kaya',
      groupname: "Team Kutuphane"
    },
  ];

  constructor(public navCtrl: NavController, public events: Events) { 
    
    var usern: string = localStorage.getItem("stud-username");

    console.log(usern);
    for(var i = 0; i < this.users.length; i++)
      if(this.users[i].username == usern){
        localStorage.setItem("stud-userId",this.users[i].userId.toString());
        localStorage.setItem("stud-name",this.users[i].name);
        this.events.publish('loggedin');
        break;
      }
      
    console.log(localStorage.getItem("stud-userId"));
    localStorage.setItem("stud-userList",JSON.stringify(this.users));
    localStorage.setItem("stud-showProfile",localStorage.getItem("stud-userId"));
    localStorage.setItem("stud-grouplist",JSON.stringify(this.groups));
    localStorage.setItem("stud-requestList",JSON.stringify(this.requests));
  }

}

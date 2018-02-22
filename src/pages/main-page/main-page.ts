import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

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
      name: 'İletişim',
      description: 'Bizlere github repositorymizden ulaşabilirsiniz',
      imageUrl: 'https://cdn-image.travelandleisure.com/sites/default/files/styles/964x524/public/1479487289/belgrade-serbia-fortress-WTG2017.jpg?itok=rw8c4Esh',
    },
    {
      name: 'Hakkımızda',
      description: 'TOBB ETÜ Bilgisayar Mühendisliği 4. Sınıf 5 arkadaşız. Bitirme projesi dersi için bir araya geldik ve ortaya böyle bir ürün çıkardık. ',
      imageUrl: '',
    }
  ]
  constructor(public navCtrl: NavController) { }

}

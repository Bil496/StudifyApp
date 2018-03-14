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
  ]
  constructor(public navCtrl: NavController) { }

}

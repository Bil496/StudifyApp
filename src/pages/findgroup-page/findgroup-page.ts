import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-findgroup',
  templateUrl: 'findgroup-page.html'
})
export class FindGroupPage {
  items = [
    {
      imageUrl: 'assets/img/lists/stadium.jpg',
      title: 'Group 1',
      place: '3 Subtopics',
      date: '05/06/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-3.png',
      title: '2018 Guz Mat 101',
      place: 'onuryildiz',
      date: '15/03/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: 'Gitara Giris',
      place: '2 Kisilik Gruplar',
      date: '05/12/2015'
    },
  ];

  items2;
  constructor(public navCtrl: NavController) {

    this.items2 = this.items;

  }

  delete(item) {
    alert('Deleted ' + item.title);
  }

  viewComments(item) {
    alert('Viewing comments of ' + item.title);
  }

  viewPlayers(item) {
    alert('Viewing players of ' + item.title);
  }


  getItems(ev:any){
    
    let val = ev.target.value;

    this.items = this.items2.filter((item) => {
      return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });

  }
}

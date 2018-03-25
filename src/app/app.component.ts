import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  usersname: any;
  rootPage: any = 'LoginPage';
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashscreen: SplashScreen,
    public global: AppState,
    public events: Events,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    events.subscribe('loggedin', () => {
      this.usersname = localStorage.getItem("stud-name");
    });
    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'analytics', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ];

    this.pages = [
      { title: 'Main', component: 'MainPage', active: true, icon: 'home' },
      { title: 'My Groups', component: 'MyGroupsPage', active: false, icon: 'people' },
      { title: 'Find Group', component: 'FindGroupPage', active: false, icon: 'search' },
      { title: 'Requests', component: 'RequestsPage', active: false, icon: 'eye' },
      { title: 'My Profile', component: 'ProfilePage', active: false, icon: 'contact' },
      { title: 'Logout', component: 'LogoutPage', active: false, icon: 'power' }
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();
      this.menuCtrl.enable(false, 'right');
      Object.keys(this.menuCtrl).map(k => this.menuCtrl.enable(false, this.menuCtrl[k]));

      // Enables then open the selected menu
      this.menuCtrl.enable(false, 'menu-components');
      this.menuCtrl.enable(true, 'menu-material');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title  == "My Profile" || page.title  == "Find Group" || page.title == "My Groups")
      this.nav.push(page.component);
    else
      this.nav.push(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}

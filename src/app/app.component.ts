import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';
import { EntryPage } from '../pages/entry/entry';
import { StatusBar } from 'ionic-native';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { SignupPage } from '../pages/signup/signup';
import { TabPage } from '../pages/tab/tab';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;

  // make UsersPage the root (or first) page
 //rootpage: any = SignupPage;
 rootPage: any ;

// rootPage: any = UsersPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,  public menu: MenuController) {
    this.initializeApp();
     this.entrycheck();
    // set our app's pages
    this.pages = [

      { title: 'Users', component: UsersPage },
      { title: 'Repos', component: ReposPage }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

entrycheck(){
  if (localStorage.getItem('currentUser'))
  {
 this.rootPage = TabPage;
  }
  else{
    this.rootPage = EntryPage;
  }
}
}

//destinys.mod.bz/chat_signup

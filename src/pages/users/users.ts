import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { ReposPage } from '../repos/repos';
import { TabPage } from '../tab/tab';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Users Page');
  }
  nextpage(){
    this.navCtrl.push(TabPage);
  }
}

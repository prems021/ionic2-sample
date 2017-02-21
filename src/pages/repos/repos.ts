import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController  } from 'ionic-angular';
import { TabPage } from '../tab/tab';
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController,
      public appCtrl: App) {
  this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  messages:string[]= [];
  msg : string;

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }
  send(message:string){
  this.msg = 'hi';
  this.messages.push(message);
  console.log(message);
  this.msg="";
  }
  takeMeBack() {
    //this.appCtrl.getRootNav().push(ChatsPage);
    this.navCtrl.push(TabPage);
    //this.tabBarElement.style.display = 'flex';
  }

}

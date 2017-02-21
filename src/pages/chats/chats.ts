import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams, App, ViewController, PopoverController  } from 'ionic-angular';
import { GithubUsers } from './service'
import { ReposPage } from '../repos/repos';
import { PopoverChatPage } from '../popover-chat/popover-chat';
import { User } from './models';


@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
tabBarElement: any;
users : User [] ;
search_clicks : boolean = false;
  constructor(public navCtrl: NavController,  private githubUsers: GithubUsers,public navParams: NavParams
    ,public viewCtrl: ViewController,
        public appCtrl: App,public popoverCtrl: PopoverController) {
  this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  githubUsers.load().subscribe(user => { this.users = user; }  )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }
  mainchat(){
    //this.navCtrl.push(ReposPage);
    this.appCtrl.getRootNav().push(ReposPage);
   // this.tabBarElement.style.display = 'none';
  }

  search_click()
  {
    if (this.search_clicks == true)
    {
      this.search_clicks = false;
    }
    else
    {
       this.search_clicks = true;
    }

  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverChatPage);
    popover.present({
      ev: myEvent
    });
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,PopoverController } from 'ionic-angular';

/*
  Generated class for the PopoverChat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popover-chat',
  templateUrl: 'popover-chat.html'
})
export class PopoverChatPage {

  constructor(public viewCtrl: ViewController,public popoverCtrl: PopoverController) {}

  close() {
    this.viewCtrl.dismiss();
  }

}

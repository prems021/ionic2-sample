import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../chats/service';
import { ChatsPage } from '../chats/chats';
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private git : GithubUsers) {}

   Phonenumber : Number ;


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  
}

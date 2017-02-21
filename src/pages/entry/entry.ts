import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../chats/service';
import { ChatsPage } from '../chats/chats';
import { Entri } from './ent';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../chats/header';
import { TabPage } from '../tab/tab';
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html'
})
export class EntryPage {

  constructor(public navCtrl: NavController,public http: Http, private git : GithubUsers ,public navParams: NavParams) {}
    Phonenumber : string ;
    ph : string ='';

    nick = new Entri('','');
  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }
  nextpage()
   {

      this.nick.phonenumber = this.ph;
      let body =  JSON.stringify(this.nick);
       console.log('bo=',body);
        this.http.post('https://chatdemos.mod.bz/chat_signup', body, { headers: contentHeaders})
         .subscribe((response: Response) =>{
                                  let user = response.json();
                                  console.log('res',user)
                             if (user && user.token) {

          localStorage.setItem('currentUser', JSON.stringify(user));
          this.navCtrl.push(TabPage);
                             }
             }, error => {
                     this.navCtrl.push(EntryPage);

                });

   }

}

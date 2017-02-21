import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName, SQLite  } from 'ionic-native';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html'
})
export class ContactsPage {
  con_search_clicks : boolean = false;
  contactsfound : Contacts [];
  constructor(public navCtrl: NavController, public navParams: NavParams) { this.contactsfound = [];    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }
search_contact()
{

let contact: Contact ;


}
 con_search_click()
  {
    if (this.con_search_clicks == true)
    {
      this.con_search_clicks = false;
    }
    else
    {
       this.con_search_clicks = true;
    }



}

find_con() {
      Contacts.find(['displayName']).then((contacts) => {
          this.contactsfound = contacts;
        
          alert(JSON.stringify(contacts[33]));
      })
      
      if(this.contactsfound.length == 0)
      this.contactsfound.push({displayName: 'No Contacts found'});  
        
  }
  create_con()
  {
  
let db = new SQLite();
db.openDatabase({
  name: 'data.db',
  location: '../../Db' 
}).then(() => {
  db.executeSql('create table Contacts(Name VARCHAR(32))', {}).then(() => {
    alert("sucess");
  }, (err) => {
    console.error('Unable to execute sql: ', err);
  });
}, (err) => {
  console.error('Unable to open database: ', err);
});

  }
}




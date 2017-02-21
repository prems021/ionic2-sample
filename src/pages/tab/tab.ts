import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GroupsPage } from '../groups/groups';
import { ChatsPage } from '../chats/chats';
import { ContactsPage } from '../contacts/contacts';

@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html'
})
export class TabPage {
  tab1Root: any = GroupsPage;
  tab2Root: any = ChatsPage;
  tab3Root: any = ContactsPage;
constructor(public navCtrl: NavController) {}
}

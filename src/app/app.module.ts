import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { EntryPage } from '../pages/entry/entry';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';

import { TabPage } from '../pages/tab/tab';
import { GroupsPage } from '../pages/groups/groups';
import { ChatsPage } from '../pages/chats/chats';
import { ContactsPage } from '../pages/contacts/contacts';
import { GithubUsers } from '../pages/chats/service';
import { SignupPage } from '../pages/signup/signup';
import { PopoverChatPage } from '../pages/popover-chat/popover-chat';
@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    EntryPage,
    SignupPage,
    TabPage,
    GroupsPage,
    ChatsPage,
    ContactsPage,
    PopoverChatPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    SignupPage,
    TabPage,
    EntryPage,
    GroupsPage,
    ChatsPage,
    ContactsPage,
    PopoverChatPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}

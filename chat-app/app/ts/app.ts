 import { bootstrap } from '@angular/platform-browser-dynamic';
 import { Component } from '@angular/core';

 import {ChatNavBar} from './components/ChatNavBar';
 import {ChatThreads} from './components/ChatThreads';
 import {ChatWindow} from './components/ChatWindow';
 
@Component({
  selector: 'chat-app',
  directives : [ChatNavBar, ChatThreads, ChatWindow],
  template: `
	<div>
	This is chat app.
	<chat-nav-bar></chat-nav-bar>
	<chat-threads></chat-threads>
	<chat-window></chat-window>
	</div>
  `
})
class ChatApp {
}

bootstrap(ChatApp);

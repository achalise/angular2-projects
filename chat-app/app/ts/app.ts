 import { bootstrap } from '@angular/platform-browser-dynamic';
 import { Component } from '@angular/core';

 import {ChatNavBar} from './components/ChatNavBar';
 import {ChatThreads} from './components/ChatThreads';
 
@Component({
  selector: 'chat-app',
  directives : [ChatNavBar, ChatThreads],
  template: `
	<div>
	This is chat app.
	<chat-nav-bar></chat-nav-bar>
	<chat-threads></chat-threads>
	</div>
  `
})
class ChatApp {
}

bootstrap(ChatApp);

 import { bootstrap } from '@angular/platform-browser-dynamic';
 import { Component } from '@angular/core';

 import {ChatNavBar} from './components/ChatNavBar';
 import {ChatThreads} from './components/ChatThreads';
 import {ChatWindow} from './components/ChatWindow';
 
 /*
 * Webpack
 */
require('../css/styles.scss');

@Component({
  selector: 'chat-app',
  directives : [ChatNavBar, ChatThreads, ChatWindow],
  template: `
	<div>
		<chat-nav-bar></chat-nav-bar>
		<div class='container'>
			<chat-threads></chat-threads>
			<chat-window></chat-window>	
		</div>
	</div>
  `
})
class ChatApp {
}

bootstrap(ChatApp);

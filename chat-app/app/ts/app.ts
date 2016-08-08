 import { bootstrap } from '@angular/platform-browser-dynamic';
 import { Component } from '@angular/core';

 import {ChatNavBar} from './components/ChatNavBar';
 import {ChatThreads} from './components/ChatThreads';
 import {ChatWindow} from './components/ChatWindow';
 
/*
 * Injectables
 */
//import { servicesInjectables } from './services/services';
 
import {messageServiceInjectables} from './services/MessageService';
import {threadsServiceInjectables} from './services/ThreadsService';
import {userServiceInjectables} from './services/UserService';

import {MessageService} from './services/MessageService';
import {ThreadsService} from './services/ThreadsService';
import {UserService} from './services/UserService';

import {ExampleData} from './ExampleData';
import {User} from './models/User';
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
	constructor(public messageService: MessageService, public threadsService: ThreadsService, public userService: UserService){
		ExampleData.init(threadsService, messageService, userService);
	}
}

bootstrap(ChatApp, [threadsServiceInjectables, messageServiceInjectables, userServiceInjectables]);

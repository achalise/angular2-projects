 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component } from "@angular/core";


/*
 * Components
 */
import {ChatNavBar} from './components/ChatNavBar';
// import {ChatThreads} from './components/ChatThreads';
// import {ChatWindow} from './components/ChatWindow';

@Component({
  selector: 'chat-app',
  template: `
<div>
This is chat app.
</div>
  `
})
class ChatApp {
}

bootstrap(ChatApp);

 import { bootstrap } from "@angular/platform-browser-dynamic";
 import { Component } from "@angular/core";


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

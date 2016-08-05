import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'chat-nav-bar',
  template: `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="https://ng-book.com/2">
          <img src=""/>
           Chat Demo
        </a>
      </div>
      <p class="navbar-text navbar-right">
        <button class="btn btn-primary" type="button">
          Messages <span class="badge">{{unreadMessagesCount}}</span>
        </button>
      </p>
    </div>
  </nav>
  `
})
export class ChatNavBar implements OnInit{
	unreadMessagesCount : number;

	ngOnInit() : void{
		this.unreadMessagesCount = 50;
		console.log('messageCOunt : ', this.unreadMessagesCount);
	}
}

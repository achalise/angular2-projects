import {Component} from '@angular/core';
import {Observable} from 'rxjs';

import {ThreadsService} from '../services/ThreadsService';
import {Thread} from '../models/Thread';

@Component({
  selector: 'chat-threads',
  template: `
	<div>
		Chat threads to go here.
	</div>
  `
})

export class ChatThreads {
	threads: Observable<any>;

	constructor(public threadsService: ThreadsService){
		
	}
}

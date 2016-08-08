import {Injectable, bind} from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import * as _ from 'underscore';

import {Thread} from '../models/Thread';
import {Message} from '../models/Message';
import {MessageService} from './MessageService';

@Injectable()
export class ThreadsService {
	threads: Observable<{[key: string] : Thread}>;
	orderedThreads : Observable<Thread[]>;
	currentThread : Subject<Thread> =
          new BehaviorSubject<Thread>(new Thread());

  	// `currentThreadMessages` contains the set of messages for the currently
  	// selected thread
  	currentThreadMessages: Observable<Message[]>;

	constructor(public messageService: MessageService) {
		this.threads = messageService.messages.map( (messages: Message[]) => {
	        let threads: {[key: string]: Thread} = {};
	        // Store the message's thread in our accumulator `threads`
	        messages.map((message: Message) => {
	          threads[message.thread.id] = threads[message.thread.id] ||
	            message.thread;

	          // Cache the most recent message for each thread
	          let messagesThread: Thread = threads[message.thread.id];
	          if (!messagesThread.lastMessage ||
	              messagesThread.lastMessage.sentAt < message.sentAt) {
	            messagesThread.lastMessage = message;
	          }
            });
        return threads;
        });

        this.orderedThreads = this.threads
        .map((threadGroups: { [key: string]: Thread }) => {
	        let threads: Thread[] = _.values(threadGroups);
	        return _.sortBy(threads, (t: Thread) => t.lastMessage.sentAt).reverse();
      	});
	    this.currentThreadMessages = this.currentThread
	      .combineLatest(messageService.messages,
	                     (currentThread: Thread, messages: Message[]) => {
	        if (currentThread && messages.length > 0) {
	          return _.chain(messages)
	            .filter((message: Message) =>
	                    (message.thread.id === currentThread.id))
	            .map((message: Message) => {
	              message.isRead = true;
	              return message; })
	            .value();
	        } else {
	          return [];
	        }
	      });
        this.currentThread.subscribe(this.messageService.markThreadAsRead);	      
	}

    setCurrentThread(thread: Thread): void {
		this.currentThread.next(thread);
	}
}

export var threadsServiceInjectables: Array<any> = [
  bind(ThreadsService).toClass(ThreadsService)
];
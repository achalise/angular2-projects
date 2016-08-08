import {Injectable, bind} from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import * as _ from 'underscore';


import {Message} from '../models/Message';
import {Thread} from '../models/Thread';
import {ThreadsService} from './ThreadsService';

let initialMessages: Message[] = [];

interface IMessagesOperation extends Function {
  (messages: Message[]): Message[];
}

@Injectable()
export class MessageService{
    newMessages: Subject<Message> = new Subject<Message>();	
	messages: Observable<Message[]>;
    updates: Subject<any> = new Subject<any>();	

	create: Subject<Message> = new Subject<Message>();
	markThreadAsRead: Subject<any> = new Subject<any>();    
	
	constructor(){
	    this.messages = this.updates
	      // watch the updates and accumulate operations on the messages
	      .scan((messages: Message[],
	             operation: IMessagesOperation) => {
	               return operation(messages);
	             },
	            initialMessages)
	      // make sure we can share the most recent list of messages across anyone
	      // who's interested in subscribing and cache the last known list of
	      // messages
	      .publishReplay(1)
	      .refCount();

	    this.create
	      .map( function(message: Message): IMessagesOperation {
	        return (messages: Message[]) => {
              console.log('no of messages :', messages.length);                
	          return messages.concat(message);
	        };
	      })
	      .subscribe(this.updates);	      

		this.newMessages.subscribe(this.create);

        this.markThreadAsRead
          .map( (thread: Thread) => {
            return (messages: Message[]) => {
              return messages.map( (message: Message) => {
                // note that we're manipulating `message` directly here. Mutability
                // can be confusing and there are lots of reasons why you might want
                // to, say, copy the Message object or some other 'immutable' here
                if (message.thread.id === thread.id) {
                  message.isRead = true;
                }
                return message;
              });
            };
          })
          .subscribe(this.updates);        	      
	}

	addMessage(message: Message) {
        ///console.log('Adding message', message);
	    this.newMessages.next(message);		
	}
}

export var messageServiceInjectables: Array<any> = [
  bind(MessageService).toClass(MessageService)
];
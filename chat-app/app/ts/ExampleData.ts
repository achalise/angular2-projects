import {Thread} from './models/Thread';
import {User} from './models/User';
import {Message} from './models/Message';

import {ThreadsService} from './services/ThreadSservice';
import {MessageService} from './services/MessageService';
import {UserService} from './services/UserService';

import * as moment from 'moment';

// the person using the app us Juliet
let me: User      = new User('Juliet', require('images/avatars/female-avatar-1.png'));
let ladycap: User = new User('Lady Capulet', require('images/avatars/female-avatar-2.png'));
let echo: User    = new User('Echo Bot', require('images/avatars/male-avatar-1.png'));
let rev: User     = new User('Reverse Bot', require('images/avatars/female-avatar-4.png'));
let wait: User    = new User('Waiting Bot', require('images/avatars/male-avatar-2.png'));

let tLadycap: Thread = new Thread('tLadycap', ladycap.name, ladycap.avatarSrc);
let tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
let tRev: Thread     = new Thread('tRev', rev.name, rev.avatarSrc);
let tWait: Thread    = new Thread('tWait', wait.name, wait.avatarSrc);


let initialMessages: Array<Message> = [
  new Message({
    author: me,
    sentAt: moment().subtract(45, 'minutes').toDate(),
    text: 'Yet let me weep for such a feeling loss.',
    thread: tLadycap
  }),
  new Message({
    author: ladycap,
    sentAt: moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    thread: tLadycap
  }),
  new Message({
    author: echo,
    sentAt: moment().subtract(1, 'minutes').toDate(),
    text: `I\'ll echo whatever you send me`,
    thread: tEcho
  }),
  new Message({
    author: rev,
    sentAt: moment().subtract(3, 'minutes').toDate(),
    text: `I\'ll reverse whatever you send me`,
    thread: tRev
  }),
  new Message({
    author: wait,
    sentAt: moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
    thread: tWait
  }),
];

export class ExampleData {
	static init(threadsService: ThreadsService, messageService: MessageService, userService: UserService) : void {
       messageService.messages.subscribe(() => ({}));		
       initialMessages.map( (message: Message) => messageService.addMessage(message) );
       userService.setCurrentUser(me);
       this.setupBots(messageService);
	}
  static setupBots(messagesService: MessageService): void {

    // echo bot
    messagesService.messagesForThreadUser(tEcho, echo)
      .forEach( (message: Message): void => {
        messagesService.addMessage(
          new Message({
            author: echo,
            text: message.text,
            thread: tEcho
          })
        );
      },
                null);


    // reverse bot
    messagesService.messagesForThreadUser(tRev, rev)
      .forEach( (message: Message): void => {
        messagesService.addMessage(
          new Message({
            author: rev,
            text: message.text.split('').reverse().join(''),
            thread: tRev
          })
        );
      },
                null);

    // waiting bot
    messagesService.messagesForThreadUser(tWait, wait)
      .forEach( (message: Message): void => {

        let waitTime: number = parseInt(message.text, 10);
        let reply: string;

        if (isNaN(waitTime)) {
          waitTime = 0;
          reply = `I didn\'t understand ${message}. Try sending me a number`;
        } else {
          reply = `I waited ${waitTime} seconds to send you this.`;
        }

        setTimeout(
          () => {
            messagesService.addMessage(
              new Message({
                author: wait,
                text: reply,
                thread: tWait
              })
            );
          },
          waitTime * 1000);
      },
                null);


  }  
}
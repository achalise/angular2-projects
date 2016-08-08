import {Message} from './Message';

export class Thread {
  id: string;
  lastMessage: Message;
  name: string;
  avatarSrc: string;

  constructor(id?: string,
              name?: string,
              avatarSrc?: string) {
    this.id = id || '10' + Math.random();
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}
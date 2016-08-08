import {messageServiceInjectables} from './MessageService';
import {threadsServiceInjectables} from './ThreadsService';
import {userServiceInjectables} from './UserService';

export * from './MessageService';
export * from './ThreadsService';
export * from './UserService';

export var servicesInjectables: Array<any> = [
  messageServiceInjectables,
  threadsServiceInjectables,
  userServiceInjectables
];

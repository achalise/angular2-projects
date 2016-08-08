import {Injectable, bind} from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';
import {User} from '../models/user';


/**
 * UserService manages our current user
 */
@Injectable()
export class UserService {
  // `currentUser` contains the current user
  currentUser: Subject<User> = new BehaviorSubject<User>(null);

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}

export var userServiceInjectables: Array<any> = [
  bind(UserService).toClass(UserService)
];

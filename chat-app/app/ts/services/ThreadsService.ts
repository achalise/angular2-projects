import {Injectable, bind} from '@angular/core';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import * as _ from 'underscore';

@Injectable()
export class ThreadsService {

}

export var threadsServiceInjectables: Array<any> = [
  bind(ThreadsService).toClass(ThreadsService)
];
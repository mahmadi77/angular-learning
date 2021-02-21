import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor() { }

  getTopics()
  {
    let t1 = new Topic('Template Forms', 'https://angular.io/guide/forms'         );
    let t2 = new Topic('Reactive Forms', 'https://angular.io/guide/reactive-forms');

    return [ t1, t2 ];
  }
}

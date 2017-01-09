import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ITick } from './itick';
import { Remaining } from './remaining';

@Injectable()
export class TimerService implements ITick {

  constructor() { }

  tick(end: Date): Observable<Remaining> {
    return Observable.timer(new Date(), 1000).map(() => {
      return Remaining.create(new Date(), end);
    });
  }
}

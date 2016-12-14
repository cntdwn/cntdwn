/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TimerService } from './timer.service';
import { Observable } from 'rxjs/Rx';

describe('TimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerService]
    });
  });

  it('should exist', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));

  describe('tick', () => {
    it('should return an observable', inject([TimerService], (service: TimerService) => {
      let obs = service.tick(null);
      expect(obs instanceof Observable).toBeTruthy();
    }));
  });
});
